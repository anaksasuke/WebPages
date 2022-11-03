import { RolService } from '../Servicios/rol.service';

export class Rol {

    constructor(
        public http:RolService,
        public idRol :number,
        public nombre:string,
    ){
        this.nombre = "";
        this.idRol = 0;
    }


    GuardarRol(rol:Rol){
        this.http.saveRol(rol).subscribe(result=>{
            console.log("Respuesta en caso de que todo salga bien");
        },error=>{
            console.log("Error inoportuni");
        })
    }


}