import { Injectable } from '@angular/core';
import { Factures } from '../models/facture.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  createDb(){
    const elementData:Factures[]=[
      {designation:'facture1', quantite:1,prix:5 },
    {designation:'facture2', quantite:1,prix:108 },
    {designation:'facture3', quantite:1,prix:155 },
    ];
    return {
      factures: elementData,
    };
  }
  
}
