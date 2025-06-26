import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureListeMaterialComponent } from './facture-liste-material.component';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {ReactiveFormsModule} from '@angular/forms';

describe('FactureListeMaterialComponent', () => {
  let component: FactureListeMaterialComponent;
  let fixture: ComponentFixture<FactureListeMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FactureListeMaterialComponent,CommonModule,MatTableModule,MatFormFieldModule,MatInputModule,MatButtonModule,MatCardModule,ReactiveFormsModule]
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
