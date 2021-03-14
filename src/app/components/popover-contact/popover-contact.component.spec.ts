import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {PopoverContactComponent} from './popover-contact.component';

describe('PopoverContactComponent', () => {
    let component: PopoverContactComponent;
    let fixture: ComponentFixture<PopoverContactComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PopoverContactComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(PopoverContactComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
