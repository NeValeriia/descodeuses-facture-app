import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureListeMaterialComponent } from './facture-liste-material.component';

describe('FactureListeMaterialComponent', () => {
  let component: FactureListeMaterialComponent;
  let fixture: ComponentFixture<FactureListeMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FactureListeMaterialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FactureListeMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
