import { Component } from '@angular/core';
import { NavController,ViewController,ModalController,LoadingController } from 'ionic-angular';
import { LoginmodalPage } from '../loginmodal/loginmodal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public viewCtrl: ViewController, public modalCtrl:ModalController,public loadingCtrl:LoadingController ) {

  }
  dismiss=function(){
    const modal = this.modalCtrl.create(LoginmodalPage);
    modal.present();
  }
  

  }


