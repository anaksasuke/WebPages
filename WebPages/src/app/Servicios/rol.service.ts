import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { modelRol } from '../Modelos/modelRol';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  url = "https://192.168.0.123/API/Roles/"; //Usar ruta donde guardes tus php para el back 

  constructor(public http : HttpClient) { }

  
  getRoles(){
    return this.http.get(`${this.url}getRoles.php`);
  }

  saveRol(Rol:any){
    return this.http.post(`${this.url}saveRol.php` , Rol);
  }

  updateRol(Rol:any){
    return this.http.post(`${this.url}updateRol.php`, Rol);
  }

}
