import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RolesComponent } from '../app/Componentes/roles/roles.component';

const routes: Routes = [
  {path : "Roles" , component: RolesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
