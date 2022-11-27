import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DbService } from '../services/db.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.page.html',
  styleUrls: ['./conductor.page.scss'],
})
export class ConductorPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController, public navCtrl: NavController) {

    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required)
    })



   }

  ngOnInit() {
  }
  async ingresar(){//se agrego para probar el inicio a la vista conductor
    var f = this.formularioLogin.value;

    var usuario = JSON.parse(localStorage.getItem('usuario'));

    if(usuario.nombre == f.nombre && usuario.password == f.password){
      console.log('Ingresado');
      localStorage.setItem('ingresado', 'true')
      this.navCtrl.navigateForward('vista-conductor');

  }else{
      const alert = await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'Los datos ingresados son incorrectos.',
        buttons: ['Aceptar']
      });
  
      await alert.present();

    }
  }

}
