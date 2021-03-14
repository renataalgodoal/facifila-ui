import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
// import {QRCodeModule} from 'angularx-qrcode';
import {UsersService} from '../../core/services/users.service';
import {OverlayService} from '../../core/services/overlay.service';
import {Router} from '@angular/router';
import {AppointmentsService} from '../../core/services/appointments.service';


@Component({
    selector: 'app-agendar',
    templateUrl: './agendar.page.html',
    styleUrls: ['./agendar.page.scss'],
})
export class AgendarPage implements OnInit {
    public pagina: number = 1;
    public form: FormGroup;
    createdCode = null;
    public entityUuid;
    public horarios = ['08:00', '08:05', '08:10', '08:15', '08:20'];

    constructor(
        private formBuilder: FormBuilder,
        // private qrCodeModule: QRCodeModule,
        private usersService: UsersService,
        private router: Router,
        private appointmentsService: AppointmentsService,
        private overlayService: OverlayService
    ) {

    }

    ngOnInit() {
        this.buildForm();
        this.usersService.getUserProfile().then((res) => {
            this.entityUuid = res.entityUuid;
        })
    }

    buildForm() {
        this.form = this.formBuilder.group({
                needsFast: [''],
                fastTime: [''],
                date: [''],
                time: [''],
            }
        );
        console.log(this.pagina);
    }

    async save() {
        const loading = await this.overlayService.loading();

        const appointment = {
            entityUuid: this.entityUuid,
            needsFast: this.form.value.needsFast === '1',
            fastTime: this.form.value.fastTime !== '' ? this.form.value.fastTime : 0,
            date: this.getTimestamp(this.form.value.date, this.form.value.time)
        }

        this.appointmentsService.createAppointment(appointment).then((res) => {
            this.createdCode = res.uuid;
            loading.dismiss();
            this.forward();
        });



    }

    needsFast() {
        return this.form.controls.needsFast.value === '1';
    }

    forward() {
        this.pagina++;
    }

    back() {
        this.pagina--;
    }

    getTimestamp(date, time) {
        console.log('date = ', `${date.split('T')[0]}T${time}`);
        let dateTime = new Date(`${date.split('T')[0]}T${time}`);
        dateTime.setHours(dateTime.getHours() - 3);
        return dateTime.getTime() / 1000;
    }

    goToHome() {
        this.router.navigate(['home']).then();
    }


}
