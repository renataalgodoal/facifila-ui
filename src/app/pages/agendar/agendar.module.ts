import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {AgendarRoutingModule} from './agendar-routing.module';

import {AgendarPage} from './agendar.page';
import {QRCodeModule} from 'angularx-qrcode';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AgendarRoutingModule,
        ReactiveFormsModule,
        QRCodeModule
    ],
    declarations: [AgendarPage]
})
export class AgendarPageModule {
}
