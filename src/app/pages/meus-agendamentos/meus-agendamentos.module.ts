import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {MeusAgendamentosPageRoutingModule} from './meus-agendamentos-routing.module';

import {MeusAgendamentosPage} from './meus-agendamentos.page';
import {QRCodeModule} from 'angularx-qrcode';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MeusAgendamentosPageRoutingModule,
        QRCodeModule
    ],
    declarations: [MeusAgendamentosPage]
})
export class MeusAgendamentosPageModule {
}
