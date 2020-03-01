import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatadoresListComponent } from './catadores-list.component';

describe('CatadoresListComponent', () => {
  let component: CatadoresListComponent;
  let fixture: ComponentFixture<CatadoresListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatadoresListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatadoresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
