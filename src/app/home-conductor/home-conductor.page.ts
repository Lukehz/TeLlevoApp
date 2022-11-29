import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validator, Validators } from "@angular/forms";
import { AlertController } from "@ionic/angular";

@Component({
  selector: 'app-home-conductor',
  templateUrl: './home-conductor.page.html',
  styleUrls: ['./home-conductor.page.scss'],
})
export class HomeConductorPage implements OnInit {

  formularioAnuncio: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController) { 
    this.formularioAnuncio = this.fb.group({
      'destino': new FormControl("", Validators.required),
      'horaSalida': new FormControl("", Validators.required),
      'precio': new FormControl("", Validators.required)
    })
    
  }

  ngOnInit() {
  }

  async guardarDatos(){
    console.log("anuncio Generado",this.formularioAnuncio.value);
    

    if(this.formularioAnuncio.invalid){
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Rellenar todos los campos',
        buttons: ['Aceptar']
      });

      await alert.present();
      return;
    }
    var anuncio = {
      destino: this.formularioAnuncio.value.destino,
      horaSalida: this.formularioAnuncio.value.horaSalida,
      precio: this.formularioAnuncio.value.precio
    }

    localStorage.setItem('AnuncioDatos',JSON.stringify(anuncio));

  }
}
