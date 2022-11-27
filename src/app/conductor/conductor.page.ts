import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.page.html',
  styleUrls: ['./conductor.page.scss'],
})
export class ConductorPage implements OnInit {

  constructor(public alertController: AlertController, public navCtrl: NavController) { }

  ngOnInit() {
  }
  //se agrego para probar el inicio a la vista conductor
  async ingresar(){
    this.navCtrl.navigateForward('vista-conductor');
  }
    

}
