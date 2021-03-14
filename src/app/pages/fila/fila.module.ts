import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {FilaPageRoutingModule} from './fila-routing.module';

import {FilaPage} from './fila.page';
import {QRCodeModule} from 'angularx-qrcode';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FilaPageRoutingModule,
        QRCodeModule
    ],
    declarations: [FilaPage]
})
export class FilaPageModule {
}
