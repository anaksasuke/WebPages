import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { modelEstatus } from '../Modelos/modelEstatus';

@Injectable({
  providedIn: 'root'
})
export class EstatusService {
  url = "https://192.168.0.123/API/Estatus/"; //Usar ruta donde guardes tus php para el back 

  constructor(public http : HttpClient) { }

  getEstatus(){
    return this.http.get(`${this.url}getEstatus.php`);
  }

  saveEstatus(Estatus:modelEstatus){
    return this.http.post(`${this.url}saveEstatus.php` , Estatus);
  }

  updateEstatus(Estatus:modelEstatus){
    return this.http.post(`${this.url}updateEstatus.php`, Estatus);
  }

  selectEstatus(idEstatus:number){
    return this.http.post(`${this.url}selectEstatus.php`, idEstatus);
  }

  

}
