import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {DadosAdminPageRoutingModule} from './dados-admin-routing.module';

import {DadosAdminPage} from './dados-admin.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DadosAdminPageRoutingModule,
        ReactiveFormsModule
    ],
    declarations: [DadosAdminPage]
})
export class DadosAdminPageModule {
}
