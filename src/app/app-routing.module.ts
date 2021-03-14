import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login-admin',
        loadChildren: () => import('./pages/login-admin/login-admin.module').then(m => m.LoginAdminPageModule)
    },
    {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
    },
    {
        path: 'sign-up',
        loadChildren: () => import('./pages/sign-up/sign-up.module').then(m => m.SignUpPageModule)
    },
    {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
    },
    {
        path: 'home-admin',
        loadChildren: () => import('./pages/home-admin/home-admin.module').then(m => m.HomeAdminPageModule)
    },
    {
        path: 'meus-agendamentos',
        loadChildren: () => import('./pages/meus-agendamentos/meus-agendamentos.module').then(m => m.MeusAgendamentosPageModule)
    },
    {
        path: 'meus-dados',
        loadChildren: () => import('./pages/meus-dados/meus-dados.module').then(m => m.MeusDadosPageModule)
    },
    {
        path: 'agendar',
        loadChildren: () => import('./pages/agendar/agendar.module').then(m => m.AgendarPageModule)
    },
    {
        path: 'fila',
        loadChildren: () => import('./pages/fila/fila.module').then(m => m.FilaPageModule)
    },
    {
        path: 'recuperacao',
        loadChildren: () => import('./pages/recuperacao/recuperacao.module').then(m => m.RecuperacaoPageModule)
    },
    {
        path: 'sign-up',
        loadChildren: () => import('./pages/sign-up/sign-up.module').then(m => m.SignUpPageModule)
    },
    {
        path: 'grade',
        loadChildren: () => import('./pages/grade/grade.module').then(m => m.GradePageModule)
    },
    {
        path: 'dados-admin',
        loadChildren: () => import('./pages/dados-admin/dados-admin.module').then(m => m.DadosAdminPageModule)
    },


];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
