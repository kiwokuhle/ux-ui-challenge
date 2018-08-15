import { Component } from '@angular/core';
import { NavController,ViewController,LoadingController } from 'ionic-angular';
import { LoginmodalPage } from '../loginmodal/loginmodal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public viewCtrl: ViewController) {

  }
  dismiss=function(){
   this.navCtrl.push(LoginmodalPage);
  

  }

}

