import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
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


  constructor(public navCtrl: NavController, public navParams: NavParams ,private add: Add,private storage:Storage,private alertCtrl: AlertController ) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  // save(){
  //   this.storage.get('data').then(id =>{  
      
      

  //     this.add.AddService(id[0].id,this.user_name,this.user_lastname,this.user_pass).subscribe(data =>{

  //       console.log(data);
  //       this.navCtrl.setRoot(HomePage);
  //     })
  


  //   })
    
  //   }

    save(){
      if(this.user_name == null || this.user_name == undefined || this.user_lastname == null || this.user_lastname == undefined || 
        this.user_pass == null || this.user_pass == undefined) { 
          let alert = this
          .alertCtrl
          .create({title: 'แจ้งเตือน', subTitle: 'กรุณากรอกข้อมูลให้ครบ', buttons: ['ตกลง']});
        alert.present();
    } else {
      this.storage.get('data').then(id =>{  
      this.add.AddService(id.status.id,this.user_name,this.user_lastname,this.user_pass).subscribe(data =>{
        if(data.status){
        this.navCtrl.setRoot(HomePage);

        }else{
                let alert = this
        .alertCtrl
        .create({title: 'แจ้งเตือน', subTitle: data.msg, buttons: ['ตกลง']});
        alert.present();
        }      
        console.log(data);
      })
    })


      }
    }
  
  
  }   
      