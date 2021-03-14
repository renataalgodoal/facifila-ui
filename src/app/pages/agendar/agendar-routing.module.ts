import {AgendarPage} from './agendar.page';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const routes: Routes = [
    {
        path: '',
        component: AgendarPage,
        // children: [
        //   {
        //     path: 'data',
        //     children: [
        //       {
        //         path: '',
        //         loadChildren: () => import('./data/data.module').then(m => m.DataPageModule)
        //       }
        //     ]
        //   },
        //   {
        //     path: 'hora',
        //     children: [
        //       {
        //         path: '',
        //         loadChildren: () => import('./hora/hora.module').then(m => m.HoraPageModule)
        //       }
        //     ]
        //   },
        //   {
        //     path: 'exame',
        //     children: [
        //       {
        //         path: '',
        //         loadChildren: () => import('./exame/exame.module').then(m => m.ExamePageModule)
        //       }
        //     ]
        //   }
        // ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AgendarRoutingModule {
}
