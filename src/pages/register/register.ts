import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  username:any;
  password:any;
  repassword:any;
  public type = 'password';
  public showPass = false;
  public types = 'password';
  public showPasss = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  submit(){
    //  let loader =  this.loadingCtrl.create({
    //     content: 'Please wait...',
    //     duration: 3000,
    //     dismissOnPageChange: true
    //   })
    //   loader.present()
    
    
    //   let user ={
      
    //     pass:this.password,
    //     repeat:this.repassword
        
    //   }
    //   this.storage.set('name', [user])
      
    //  console.log(this.username+this.password+this.repassword);
      
    
    //  if (this.username == null || this.password == null || this.repassword == null ||this.username == undefined 
    //    || this.password == undefined || this.repassword == undefined ) {      
    
    //   alert("กรุณากรอกข้อมูล");
        
    //   }else{
    //     if (this.password!=this.repassword){
    //       alert("กรุณากรอกรหัสให้ตรงกัน");
      
    //     }else{
    //       loader.dismiss()
    //     }
    //   }
     
     
    }
    
    
      save(){

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
    
      