import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';
import { ListPage } from '../list/list';
import { Login } from '../../service/login';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public type = 'password';
  public showPass = false;
  username:any
  password:any
  users:any

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataUser: Login) {
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  register(){
    this.navCtrl.push(RegisterPage)
  }
  login(){
    
  if(this.username == null || this.username == undefined || this.password == null || this.password == undefined) { 
    alert("กรอกให้ถูกต้อง");
} else {
  this.dataUser.loginService(this.username,this.password).subscribe(data =>{
    console.log(data);
    
  })
    }
  }
     

  showPassword() {
    this.showPass = !this.showPass;
 
    if(this.showPass){
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }
}
