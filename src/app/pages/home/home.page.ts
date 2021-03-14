import {Component, ElementRef, OnInit} from '@angular/core';
import {UsersService} from '../../core/services/users.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    public profile;

    constructor(
        private usersService: UsersService,
        private router: Router,
    ) {
    }

    ngOnInit() {
        this.loadUserInfo();
    }

    loadUserInfo() {
        console.log('loading info');
        this.usersService.getUserProfile().then((res) => {
            this.profile = res;
        });
    }

    goToAgendar() {
        this.router.navigate(['agendar']).then();
    }

    goToMeusDados() {
        this.router.navigate(['meus-dados']).then();
    }

    goToMeusAgendamentos() {
        this.router.navigate(['meus-agendamentos']).then();
    }

    logout() {
        this.usersService.logout();
        this.router.navigate(['login']).then();
    }


}
