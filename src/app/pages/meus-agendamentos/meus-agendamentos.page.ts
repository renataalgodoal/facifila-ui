import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ModalQrCodeComponent} from '../../components/modal-qr-code/modal-qr-code.component';
import {UsersService} from '../../core/services/users.service';
import {OverlayService} from '../../core/services/overlay.service';
import {Router} from '@angular/router';
import {AppointmentsService} from '../../core/services/appointments.service';

@Component({
    selector: 'app-meus-agendamentos',
    templateUrl: './meus-agendamentos.page.html',
    styleUrls: ['./meus-agendamentos.page.scss'],
})
export class MeusAgendamentosPage implements OnInit {
    public pagina: number = 1;
    public appointments;
    public parsedAppointments = [];
    public profile;

    constructor(
        public modalController: ModalController,
        private usersService: UsersService,
        private appointmentService: AppointmentsService,
        private overlayService: OverlayService,
        private router: Router,
    ) {
    }

    ngOnInit() {
        this.loadInfo()
    }

    async loadInfo() {
        this.parsedAppointments = [];
        const loading = await this.overlayService.loading();
        this.loadAppointments().then((res) => {
            loading.dismiss();
        });
    }

    async loadAppointments() {
        this.profile = await this.usersService.getUserProfile();
        this.appointments = await this.usersService.getUserAppointments(this.profile.entityUuid);
        this.parseAppointments();
    }

    parseAppointments() {
        for(let appointment of this.appointments) {
            let date = (appointment.date.split('T')[0]).split('-');
            let time = (appointment.date.split('.')[0]).split('T')[1];
            this.parsedAppointments.push({
                uuid: appointment.uuid,
                entityUuid: appointment.entityUuid,
                fastTime: appointment.fastTime,
                needsFast: appointment.needsFast,
                priority: appointment.priority,
                status: appointment.status,
                date: `${date[2]}/${date[1]}/${date[0]}`,
                time: time
            })
        }
    }

    async presentModal(uuid) {
        console.log('sending uuid = ', uuid);
        const modal = await this.modalController.create({
            component: ModalQrCodeComponent,
            cssClass: 'modalQrCode',
            componentProps: {
                uuid
            }
        });
        return await modal.present();
    }

    async delete(uuid) {
        let res = confirm('Excluir agendamento?');
        if(res === true) {
            await this.appointmentService.deleteAppointment(uuid);
            await this.loadInfo();
        }
    }

}
