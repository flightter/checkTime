import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Register } from '../../service/register';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  username:any;
  password:any;
  repassword:any;
  name:any;
  lastname:any;

  public type = 'password';
  public showPass = false;
  public types = 'password';
  public showPasss = false;

  constructor(public navCtrl: NavController, public navParams: NavParams ,private re: Register,private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  

  save(){
    if(this.username == null || this.username == undefined || this.password == null || this.password == undefined || 
      this.name == null || this.name == undefined || this.lastname == null || this.lastname == undefined) { 
        let alert = this
        .alertCtrl
        .create({title: 'แจ้งเตือน', subTitle: 'กรุณากรอกข้อมูลให้ครบ', buttons: ['ตกลง']});
      alert.present();
  } else {
    this.re.RegisterService(this.username,this.password,this.name,this.lastname).subscribe(data =>{
      if(data.status){
      this.navCtrl.setRoot(LoginPage);
      }else{
              let alert = this
      .alertCtrl
      .create({title: 'แจ้งเตือน', subTitle: data.msg, buttons: ['ตกลง']});
      alert.present();
      }      
      console.log(data);
    })
    
    }
  }





    showPassword() {
      this.showPass = !this.showPass;
    
      if(this.showPass){
        this.type = 'text';
        // this.showPass = false
      } else {
        this.type = 'password';
        // this.showPass = true
    
      }
    }
    showPasswords() {
      this.showPasss = !this.showPasss;
    
      if(this.showPasss){
        this.types = 'text';
      } else {
        this.types = 'password';
      }
    }
    
    }
    
      