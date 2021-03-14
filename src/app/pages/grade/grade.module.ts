import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {GradePageRoutingModule} from './grade-routing.module';

import {GradePage} from './grade.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        GradePageRoutingModule,
        ReactiveFormsModule
    ],
    declarations: [GradePage]
})
export class GradePageModule {
}
