import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DadosAdminPage} from './dados-admin.page';

const routes: Routes = [
    {
        path: '',
        component: DadosAdminPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DadosAdminPageRoutingModule {
}
