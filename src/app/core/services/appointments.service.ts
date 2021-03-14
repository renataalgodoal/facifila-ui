import {Injectable} from '@angular/core';

import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AppointmentsService {

    constructor(
        public http: HttpClient,
    ) {
    }

    createAppointment(appointment) {
        return this.http.post<AppointmentResponse>(`${environment.baseApiUrl}appointments`, appointment).toPromise();
    }

    deleteAppointment(uuid) {
        return this.http.delete(`${environment.baseApiUrl}appointments/${uuid}`).toPromise();
    }

    getLiveLine() {
        return this.http.get<[]>(`${environment.baseApiUrl}appointments/live`).toPromise();
    }

}

export interface AppointmentResponse {
    uuid: string;
    entityUuid: string;
    needsFast: boolean;
    fastTime: number;
    date: string;
    priority: number;
}
