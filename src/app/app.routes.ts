import { Routes } from '@angular/router';
import { FactureListeComponent } from './facture-liste/facture-liste.component';
import { FactureListeMaterialComponent } from './facture-liste-material/facture-liste-material.component';

export const routes: Routes = [
    { path: 'facture-liste', component: FactureListeComponent, title: 'Facture-liste' },
    { path: '', component: FactureListeMaterialComponent, title: 'Facture-liste-material' }
];