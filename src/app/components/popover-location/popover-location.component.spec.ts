import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {PopoverLocationComponent} from './popover-location.component';

describe('PopoverLocationComponent', () => {
    let component: PopoverLocationComponent;
    let fixture: ComponentFixture<PopoverLocationComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PopoverLocationComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(PopoverLocationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
