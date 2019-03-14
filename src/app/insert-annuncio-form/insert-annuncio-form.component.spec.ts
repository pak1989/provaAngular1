import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertAnnuncioFormComponent } from './insert-annuncio-form.component';

describe('InsertAnnuncioFormComponent', () => {
  let component: InsertAnnuncioFormComponent;
  let fixture: ComponentFixture<InsertAnnuncioFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertAnnuncioFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertAnnuncioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
