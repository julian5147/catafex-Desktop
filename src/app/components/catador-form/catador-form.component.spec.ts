import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatadorFormComponent } from './catador-form.component';

describe('CatadorFormComponent', () => {
  let component: CatadorFormComponent;
  let fixture: ComponentFixture<CatadorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatadorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatadorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
