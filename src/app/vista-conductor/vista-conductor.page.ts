import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController, NavController } from '@ionic/angular';
//formulario
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
// importar servicio de crud
import { CrudService } from '../crud.servicie';

@Component({
  selector: 'app-vista-conductor',
  templateUrl: './vista-conductor.page.html',
  styleUrls: ['./vista-conductor.page.scss'],
})
export class VistaConductorPage implements OnInit {
  //para obtener el dato de inicio de sesion del ususuario
  email: string;

  //datos extras para el usuario que va hacer conductor


  //
  formularioConductor: FormGroup; 


  //CRUD
  matricula = "";
  marca = "";
  modelo = "";
  constructor(public fb: FormBuilder,private modalCtrl: ModalController, private crud: CrudService, public navCtrl: NavController, 
                                                    private toast: ToastController, public alertController: AlertController) {

                                                      this.formularioConductor = this.fb.group({
                                                        'rut': new FormControl("", [ Validators.required, Validators.minLength(9)]),
                                                        'nombreCompleto': new FormControl("", Validators.required),
                                                        'carrera': new FormControl("", Validators.required),
                                                        'sede': new FormControl("", Validators.required)

                                                      })
                                                    }

  ngOnInit() {
    var usuario = JSON.parse(localStorage.getItem('usuario'));
    this.email = usuario.email;
    
  }

  async guardarDatos(){
    console.log(this.formularioConductor.value);
    

    if(this.formularioConductor.invalid){
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Rellenar todos los campos',
        buttons: ['Aceptar']
      });

      await alert.present();
      return;
    }
    var conductor = {
      rut: this.formularioConductor.value.rut,
      nombreCompleto: this.formularioConductor.value.nombreCompleto,
      carrera: this.formularioConductor.value.carrera,
      sede: this.formularioConductor.value.sede
    }

    localStorage.setItem('conductorDatos',JSON.stringify(conductor));
    this.navCtrl.navigateForward('vehiculo');
  }

  volverInicio() {
    this.modalCtrl.dismiss();
  }
}