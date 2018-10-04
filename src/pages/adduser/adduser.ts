import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Add } from '../../service/add';
import { HomePage } from '../home/home';
import { Storage } from "@ionic/storage";

/**
 * Generated class for the AdduserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-adduser',
  templateUrl: 'adduser.html',
})
export class AdduserPage {
  user_pass:any;
  user_name:any;
  user_lastname:any;
  id:any;


  constructor(public navCtrl: NavController, public navParams: NavParams ,private add: Add,private storage:Storage ) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  save(){
    this.storage.get('data').then(id =>{      
      this.add.AddService(id[0].id,this.user_name,this.user_lastname,this.user_pass).subscribe(data =>{

        console.log(data);
        this.navCtrl.setRoot(HomePage);
      })
  
    })
    
    }
  }   
      