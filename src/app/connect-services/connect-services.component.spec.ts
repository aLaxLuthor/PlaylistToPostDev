import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectServicesComponent } from './connect-services.component';

describe('ConnectServicesComponent', () => {
  let component: ConnectServicesComponent;
  let fixture: ComponentFixture<ConnectServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
