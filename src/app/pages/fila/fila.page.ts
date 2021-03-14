import {Component, OnInit} from '@angular/core';
import {AppointmentsService} from '../../core/services/appointments.service';


@Component({
    selector: 'app-fila',
    templateUrl: './fila.page.html',
    styleUrls: ['./fila.page.scss'],
})
export class FilaPage implements OnInit {
     line = [];


    constructor(private appointmentService: AppointmentsService) {

    }

    ngOnInit() {
        this.appointmentService.getLiveLine().then((res) => {
            this.line = res;
            this.parseLine();
            this.loadPage();
            console.log('this.line = ', this.line);
        })
    }

    parseLine() {
        for(let appointment of this.line) {
            // 08:00:00
            appointment.date = (appointment.date.split("T")[1]).split(".")[0];
            appointment.date = `${appointment.date.split(":")[0]}:${appointment.date.split(":")[1]}`;
        }
    }

    loadPage() {
        setTimeout(async () => {
            this.line = await this.appointmentService.getLiveLine();
            this.parseLine();
        }, 30000);
    }

}
