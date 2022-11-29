import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, NavController, ToastController } from '@ionic/angular';
// importar servicio de crud
import { CrudService } from '../crud.servicie';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  matricula = "";
  marca = "";
  modelo = "";
  //datos anuncio del conductor
  destino: string;
  precio: number;
  horaSalida: string;
  //datos conductor
  nombreConduc: string;
  carreraConduc: string;

  constructor( private modalCtrl: ModalController, private crud: CrudService,
                                                    private toast: ToastController,
                                                     public alertController: AlertController,
                                                      public navCtrl: NavController) {}

  ngOnInit() {
    this.buscar();
    var dataAnuncio = JSON.parse(localStorage.getItem('AnuncioDatos'));
    this.destino = dataAnuncio.destino;
    this.precio = dataAnuncio.precio;
    this.horaSalida = dataAnuncio.horaSalida;
    console.log("datos del anuncio conductor",dataAnuncio);
    const valor = this.crud.rescatar("1");
    console.log("valores", valor);
    var dataConductor = JSON.parse(localStorage.getItem('conductorDatos'));
    this.nombreConduc = dataConductor.nombreCompleto;
    this.carreraConduc = dataConductor.carrera;
  }

  volverInicio() {
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
      //toast.present();
    }
  }
 
}
