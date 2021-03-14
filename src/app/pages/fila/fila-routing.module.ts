import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {FilaPage} from './fila.page';

const routes: Routes = [
    {
        path: '',
        component: FilaPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FilaPageRoutingModule {
}
