import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { Factures } from '../models/facture.model';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-facture-liste-material',
  imports: [MatTableModule,CommonModule,MatFormFieldModule,MatInputModule,MatButtonModule ,ReactiveFormsModule,MatCardModule],
  templateUrl: './facture-liste-material.component.html',
  styleUrl: './facture-liste-material.component.css'
})
export class FactureListeMaterialComponent {

   elementData: Factures[] =[
    {designation:'facture1', quantite:1,prix:5 },
    {designation:'facture2', quantite:1,prix:108 },
    {designation:'facture3', quantite:1,prix:155 },
  ];

  displayedColumns: string[] = ['designation', 'quantite', 'prix'];
 
  dataSource = this.elementData;

  countTotale() {

    let total = 0;
    for (const item of this.elementData) {
      total += item.quantite * item.prix;
    }
    return total;
  }

  total=this.countTotale()

  formGroup!:FormGroup;

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      designation: ['', [Validators.required]],
      quantite: ['', [Validators.required]],
      prix: ['', [Validators.required]]
    });
  }

  onSubmit(){
    if(this.formGroup.valid){
      this.elementData.push({...this.formGroup.value});
      this.dataSource = [...this.elementData];
      this.formGroup.reset();
      this.total=this.countTotale()
    }

  }

}
