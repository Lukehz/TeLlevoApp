import { Injectable } from "@angular/core";
//importar en el servicio al storange de angular
import { Storage } from '@ionic/storage';


@Injectable({
    providedIn: 'root'
})
export class CrudService {

    constructor(private storage: Storage) { 
        //crear al storange para usarlo
        this.init();
    }

    // crear el storage
    async init()
    {
        await this.storage.create()
    }

    //ingresar datos al storage con key
    async agregarConKey(key: string, valor: string)
    {
        await this.storage.set(key, valor);
    }

    // ingresar dato al storange key autoincrementable (se puede cambiar es Opcional)
    async agregar(valor:any)
    {
        let id= await this.storage.length() +1 ;
        await this.storage.set(id.toString(), valor);
    }

    async rescatar(key:string)
    {
        return await this.storage.get(key);
    }
    listar()
    {
        let listado = []
        this.storage.forEach((v,k) => {listado.push(v); })
        return listado;

    }
    eliminar(key:string)
    {//eliminacion via key
        this.storage.remove(key);
    }
    
}