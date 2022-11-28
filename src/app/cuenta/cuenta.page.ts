import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, ToastController } from '@ionic/angular';
import { CrudService } from '../crud.servicie';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {
  //variables  a sobreEscribir
  rut:string;
  nombreCompleto: string;
  carrera: string;
  sede: string;
  //email del usuario general
  email: string;

  //crud
  matricula = "";
  marca = "";
  modelo = "";

  constructor(public navCtrl: NavController, private modalCtrl: ModalController, private toast: ToastController, private crud: CrudService) { }

  ngOnInit() {
    var conductor = JSON.parse(localStorage.getItem('conductorDatos'));
    this.rut = conductor.rut;
    this.nombreCompleto = conductor.nombreCompleto;
    this.carrera = conductor.carrera;
    this.sede = conductor.sede;
    var usuario = JSON.parse(localStorage.getItem('usuario'));
    this.email = usuario.email;
    const valor = this.crud.rescatar("1");
  }

  back(){
    this.navCtrl.back();
  }
  backModal(){
    this.modalCtrl.dismiss();
  }

  async buscar()
  {
    //retorna si encuentra la matricula (si no hay no hace nada)
    const valor = await this.crud.rescatar("1");

    if (valor != null) //muestra los datos segun la matricula ingresada
    {
      //muestra el valor encontrado
      this.matricula = valor[0].matricula;
      this.marca = valor[0].marca;
      this.modelo = valor[0].modelo;
      
    }
    else //SI NO ESPECIFICA LA MATRICULA
    {
      this.matricula = "";
      this.marca = "";
      this.modelo = "";
      const toast = await this.toast.create({
        message: 'La matricula no fue especificada',
        duration: 2000,
        color: "dark",
        position: "middle"
      });
      toast.present();
    }
  }

  async eliminar(txtMatricula:HTMLInputElement)
  {
    if (txtMatricula.value.trim().length == 0) //anuncio de error, cuando quieres eliminar un vehiculo pero no ingresas ninguna matricula
    {
      const toast = await this.toast.create({
        message: 'La matricula no fue especificada1',
        duration: 2000,
        color: "dark",
        position: "middle"
      });
      toast.present();
    }
    else
    {
      const valor = await this.crud.rescatar(txtMatricula.value);

      if (valor == null) //anuncio de error, cuando quieres eliminar una matricula en la situacion [ingresas una matricula aparecen los datos y el boton eliminar pero antes de eso cambias la matricula a una que no existe y apretas eliminar]
      {
        const toast = await this.toast.create({
          message: 'La matricula no fue encontrada2',
          duration: 2000,
          color: "dark",
          position: "middle"
        });
        toast.present();
      }
      else //Elimina el vehiculo segun la matricula que ingresaste
      {
        this.crud.eliminar(txtMatricula.value)
        const toast = await this.toast.create({
          message: 'El vehiculo fue eliminado',
          duration: 2000,
          color: "dark",
          position: "middle"
        });
        toast.present();
      }
    }

    this.matricula = "";
    this.marca = "";
    this.modelo = "";

  }

}
