import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NamedLinesComponent } from './named-lines.component';

describe('NamedLinesComponent', () => {
  let component: NamedLinesComponent;
  let fixture: ComponentFixture<NamedLinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NamedLinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamedLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
