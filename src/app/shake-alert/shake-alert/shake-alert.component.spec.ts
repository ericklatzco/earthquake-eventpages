import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MockComponent } from 'ng2-mock-component';
import { of } from 'rxjs/observable/of';

import { EventService } from '@core/event.service';
import { Event } from '../../event';
import { ShakeAlertComponent } from './shake-alert.component';
import { ShakeAlertMissedComponent } from './shake-alert-missed/shake-alert-missed.component';
import { ShakeAlertService } from '../shake-alert.service';

describe('ShakeAlertComponent', () => {
  let component: ShakeAlertComponent;
  let fixture: ComponentFixture<ShakeAlertComponent>;

  beforeEach(async(() => {
    const eventServiceStub = {
      event$: of(new Event({})),
      product$: of(null)
    };

    const shakeAlertServiceStub = {
      getSummary: jasmine.createSpy('shakeAlertService::getSummary'),
      summary$: of(null)
    };

    TestBed.configureTestingModule({
      declarations: [
        ShakeAlertComponent,
        ShakeAlertMissedComponent,
        MockComponent({ inputs: ['productType'], selector: 'product-page' })
      ],
      providers: [
        { provide: EventService, useValue: eventServiceStub },
        { provide: ShakeAlertService, useValue: shakeAlertServiceStub }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShakeAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
