import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DbService } from '../services/db.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.page.html',
  styleUrls: ['./pasajero.page.scss'],
})
export class PasajeroPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController, public navCtrl: NavController) {

    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required)
    })



   }

  ngOnInit() {
  }
  async ingresar(){
    var f = this.formularioLogin.value;
    //si existe usuario
    if (JSON.parse(localStorage.getItem('usuario'))) {
      var usuario = JSON.parse(localStorage.getItem('usuario'));
      //valida que los campos coincidan con el usuario que existe
      if(usuario.nombre == f.nombre && usuario.password == f.password){
        console.log('Ingresado');
        localStorage.setItem('ingresado', 'true');
        this.navCtrl.navigateForward('home');
      
      }else{//si no coinciden da alertas de (los campos no estan rellenados) o (los datos no coinciden)

        //valida si los campos no estan rellenos
        if (f.nombre == "" || f.password == "") {
          const alert = await this.alertController.create({
            header: 'Datos incorrectos',
            message: 'Rellene los campos correctamente.', 
            buttons: ['Aceptar']
          });
          await alert.present();
        
      } else {//valida si nos campos no coinciden
        const alert = await this.alertController.create({
          header: 'Datos incorrectos',
          message: 'El usuario y/o contraseña son incorrectos.',
          buttons: ['Aceptar']
        });
        await alert.present();
        
      }

    }
      
    } else {//si no existe el usuario manda las alertas segun el estado en que esta rellenado el formulario
            //como puede ser que los campos no estan rellenados de forma correcta o no coicide con el usuario
      if (f.nombre == "" || f.password == "") { //alerta de los campos no estan rellenados
        const alert = await this.alertController.create({
          header: 'Datos incorrectos',
          message: 'Rellene los campos correctamente.', 
          buttons: ['Aceptar']
        });
        await alert.present();
        
      } else {//alerta de que no coinciden los datos ingresados con el del usuario
        const alert = await this.alertController.create({
          header: 'Datos incorrectos',
          message: 'El usuario y/o contraseña son incorrectos.',
          buttons: ['Aceptar']
        });
        await alert.present();
        
      }

      
    }
    
  }

}
