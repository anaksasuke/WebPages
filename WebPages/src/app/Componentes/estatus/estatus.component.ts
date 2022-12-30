import { Component, OnInit, ViewChild, Inject  } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog} from '@angular/material/dialog';
import { EstatusService } from '../../Servicios/estatus.service';
import { modelEstatus } from '../../Modelos/modelEstatus';
import { EstatusModalComponent } from '../../Modals/estatus-modal/estatus-modal.component';

@Component({
  selector: 'app-estatus',
  templateUrl: './estatus.component.html',
  styleUrls: ['./estatus.component.scss']
})
export class EstatusComponent implements OnInit {

  Columns = ['Nombre' , 'Acciones'];
  dataSource:any;
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  constructor(public httpEstatus:EstatusService, public modal:MatDialog) { }

  ngOnInit(): void {
    this.renderTable();
  }

  renderTable(){
    this.httpEstatus.getEstatus().subscribe(result=>{
      this.dataSource = new MatTableDataSource();
      this.dataSource.data = result;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    },error=>{
      console.log(error);
    })
  }

  nuevo(){
    console.log("nuevo");
  }

  cargarDatos(row:modelEstatus){
    console.log(row);
  }

}
