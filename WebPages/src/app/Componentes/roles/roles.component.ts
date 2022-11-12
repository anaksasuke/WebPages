import { Component, OnInit, ViewChild, Inject  } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog} from '@angular/material/dialog';
import { RolService } from '../../Servicios/rol.service';
import { RolesModalComponent } from '../../Modals/roles-modal/roles-modal.component';
import { modelRol }  from '../../Modelos/modelRol';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

  Columns = ['Nombre' , 'Acciones'];
  dataSource:any;
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  constructor(public httpRoles:RolService, public modal:MatDialog) {

  }

  ngOnInit(): void {
    this.renderTable();
  }

  renderTable(){
    this.httpRoles.getRoles().subscribe(result=>{
      this.dataSource = new MatTableDataSource();
      this.dataSource.data = result;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    },error=>{
      console.log(error);
    })
  }


  nuevo(){
    const newRol: modelRol= { idRol: 0 , nombre: "" };
    this.showModal(newRol);
  }

  showModal(rol:modelRol){
    const modal = this.modal.open(RolesModalComponent, {
      width:"400",
      height:"400",
      data: rol
    });

    modal.afterClosed().subscribe(result=>{
      this.renderTable();
    })

  }

  cargarDatos(row:modelRol){
    this.showModal(row);
  }

  Buscador(value:string){
    value = value.trim().toLowerCase();
    this.dataSource.filter = value;
    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
    }
  }


}
