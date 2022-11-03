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

  nombre = new FormControl('', [Validators.required, Validators.email]);
  constructor(
    public dialogRef: MatDialogRef<RolesModalComponent>,
    public RolServes: RolService,
    @Inject(MAT_DIALOG_DATA) public data: modelRol, //aqui le dices que data es una instancia de la clase Rol 
  ) { 
  }

  ngOnInit(): void {
  }

  cancelar(){
    this.dialogRef.close();
  }

  guardar(){
    console.log(this.data);
    this.RolServes.saveRol(this.data).subscribe(result=>{
      console.log(result);
    },error=>{
      console.log(error);
    })
  }

}
