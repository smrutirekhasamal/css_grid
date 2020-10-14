import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NamedGridComponent } from './named-grid.component';

describe('NamedGridComponent', () => {
  let component: NamedGridComponent;
  let fixture: ComponentFixture<NamedGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NamedGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamedGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
