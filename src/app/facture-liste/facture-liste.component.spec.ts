import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureListeComponent } from './facture-liste.component';
import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
} from '@angular/forms';


describe('FactureListeComponent', () => {
  let component: FactureListeComponent;
  let fixture: ComponentFixture<FactureListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FactureListeComponent,
        ReactiveFormsModule]
      
    })
    .compileComponents();

    fixture = TestBed.createComponent(FactureListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
