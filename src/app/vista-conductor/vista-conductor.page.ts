import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
//formulario
import { FormControl, FormGroup } from '@angular/forms';
// importar servicio de crud
import { CrudService } from '../crud.servicie';

@Component({
  selector: 'app-vista-conductor',
  templateUrl: './vista-conductor.page.html',
  styleUrls: ['./vista-conductor.page.scss'],
})
export class VistaConductorPage implements OnInit {

  usuario = new FormGroup({
    rut: new FormControl(''),
    nombreCompleto: new FormControl<string>(''),
    correo: new FormControl('')
  });



  matricula = "";
  marca = "";
  modelo = "";
  constructor(private modalCtrl: ModalController, private crud: CrudService,
                                                    private toast: ToastController) {}

  ngOnInit() {
    
  }

  volverInicio() {
    this.modalCtrl.dismiss();
  }

  async agregar(txtMarca:HTMLInputElement, txtModelo:HTMLInputElement, txtMatricula:HTMLInputElement)
  {
    //VALIDA QUE INGRESEN TODOS LOS DATOS EN LOS CAMPO SOLICITADO
    if(txtMatricula.value.trim().length == 0)
    {
      const toast = await this.toast.create({
        message:  'La matricula no a sido ingresada',
        duration: 2000,
        color: "dark",
        position: "middle"
      });
      toast.present();
      return;
    }
    else if(txtMarca.value.trim().length == 0)
    {
      const toast = await this.toast.create({
        message:  'No se a ingresado la Marca',
        duration: 2000,
        color: "dark",
        position: "middle"
      });
      toast.present();
      return;
    }
    else if(txtModelo.value.trim().length == 0)
    {
      const toast = await this.toast.create({
        message:  'No se a ingresado el Modelo',
        duration: 2000,
        color: "dark",
        position: "middle"
      });
      toast.present();
      return;
    }



    const datos = [{"matricula" : txtMatricula.value,
                    "marca"  : txtMarca.value,
                    "modelo" : txtModelo.value
                  }];
    await this.crud.agregar(datos); // agreagr el dato al storage
    const toast = await this.toast.create({ //aviso de que los datos fueron guardados
      message:  'Los datos fueron guardados',
      duration: 2000,
      color: "succes",
      position: "middle"
    });
    toast.present();
    //esto limpia las cajas de texto
    txtMatricula.value = "";
    txtMarca.value = "";
    txtModelo.value = "";
  }
  async buscar(txtMatricula:HTMLInputElement)
  {
    //retorna si encuentra la matricula (si no hay no hace nada)
    const valor = await this.crud.rescatar(txtMatricula.value);

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
