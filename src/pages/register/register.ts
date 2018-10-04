import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams ,private re: Register) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  

  save(){
    if(this.username == null || this.username == undefined || this.password == null || this.password == undefined || 
      this.name == null || this.name == undefined || this.lastname == null || this.lastname == undefined) { 
      alert("กรอกให้ถูกต้อง");
  } else {
    this.re.RegisterService(this.username,this.password,this.name,this.lastname).subscribe(data =>{
      console.log(data);
      this.navCtrl.setRoot(LoginPage);

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
    
      