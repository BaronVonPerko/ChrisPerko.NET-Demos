import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedSingletonComponent } from './shared-singleton.component';

describe('SharedSingletonComponent', () => {
  let component: SharedSingletonComponent;
  let fixture: ComponentFixture<SharedSingletonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedSingletonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedSingletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
