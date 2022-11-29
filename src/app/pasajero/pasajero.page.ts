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

    var usuario = JSON.parse(localStorage.getItem('usuario'));

    if(usuario.nombre == f.nombre && usuario.password == f.password){
      console.log('Ingresado');
      localStorage.setItem('ingresado', 'true');
      this.navCtrl.navigateForward('home');
      
    }else{

      if (f.nombre == "" || f.password == "") {
        const alert = await this.alertController.create({
          header: 'Datos incorrectos',
          message: 'Rellene los campos correctamente.', 
          buttons: ['Aceptar']
        });
        await alert.present();
        
      } else {
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
