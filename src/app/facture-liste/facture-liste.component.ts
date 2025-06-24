import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';




@Component({
  selector: 'app-facture-liste',
  imports: [ReactiveFormsModule],
  templateUrl: './facture-liste.component.html',
  styleUrl: './facture-liste.component.css'
})
export class FactureListeComponent {

  displayedColumns: string[] = [
    'designation',
    'quantite',
    'prix'
  ];

listeDeFactures =[
  {designation:'facture1', quantite:1,prix:5},
  {designation:'facture2', quantite:1,prix:108},
  {designation:'facture3', quantite:1,prix:155},
];


countTotale() {
  let total = 0;
  for (const item of this.listeDeFactures) {
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
      this.listeDeFactures.push({...this.formGroup.value});
      this.formGroup.reset();
      this.total=this.countTotale()
    }

  }


}



//tableau Designation | Quantité | Prix unitaire
//Afficher le total général sous le tableau
//total en bas