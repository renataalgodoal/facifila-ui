import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {ModalQrCodeComponent} from './modal-qr-code.component';

describe('ModalQrCodeComponent', () => {
    let component: ModalQrCodeComponent;
    let fixture: ComponentFixture<ModalQrCodeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ModalQrCodeComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(ModalQrCodeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
