import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnuncioDettaglioComponent } from './annuncio-dettaglio.component';

describe('AnnuncioDettaglioComponent', () => {
  let component: AnnuncioDettaglioComponent;
  let fixture: ComponentFixture<AnnuncioDettaglioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnuncioDettaglioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnuncioDettaglioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
