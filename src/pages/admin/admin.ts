import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { Storage } from '@ionic/storage';
import { Admin } from '../../service/admin';


/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google;

@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {

  public items:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage:Storage,private adminz:Admin) {
 
     console.log( this.navParams.get('id'));
     
      this.adminz.Data(this.navParams.get('id')).subscribe(data =>{
        this.items = data
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPage');
  }

}
