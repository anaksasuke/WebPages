import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(public router:Router) { }

  navegar(path:string){
    this.router.navigate([`/${path}`]);
  }

}
