import { Component, OnInit ,Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { modelRol }  from '../../Modelos/modelRol';
import {FormControl, Validators} from '@angular/forms';
import { RolService } from '../../Servicios/rol.service'

@Component({
  selector: 'app-roles-modal',
  templateUrl: './roles-modal.component.html',
  styleUrls: ['./roles-modal.component.scss']
})
export class RolesModalComponent implements OnInit {

  action:boolean = false;
  valName:boolean = false;

  constructor(
    public dialogRef: MatDialogRef<RolesModalComponent>,
    public RolServes: RolService,
    @Inject(MAT_DIALOG_DATA) public data: modelRol, //aqui le dices que data es una instancia de la clase Rol 
  ) { 
  }

  ngOnInit(): void {
    if(this.data.idRol > 0){
      this.action = true;
    }
  }

  cancelar(){
    this.dialogRef.close();
  }

  validarCampo(){
    if(this.data.nombre.trim() == "" || this.data.nombre.length <= 0){
      this.valName = true;
    }
  }

  async guardar(){
    await this.validarCampo();
    if(!this.valName){
      this.RolServes.saveRol(this.data).subscribe(result=>{
        console.log(result);
      },error=>{
        console.log(error);
      })
    }
  }


  async editar(){
    await this.validarCampo();
    if(!this.valName){
      this.RolServes.updateRol(this.data).subscribe(result=>{
        console.log(result);
      },error=>{
        console.log(error);
      })
    }
  }

}
