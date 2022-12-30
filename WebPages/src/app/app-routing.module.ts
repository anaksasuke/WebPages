import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RolesComponent } from '../app/Componentes/roles/roles.component';
import { EstatusComponent } from '../app/Componentes/estatus/estatus.component';

const routes: Routes = [
  {path : "Roles" , component: RolesComponent },
  {path : "Estatus" , component: EstatusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
