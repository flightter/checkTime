import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
  
  INOUT: string = "in";
  isAndroid: boolean = false;

  loop:any;

  constructor(public navCtrl: NavController ,platform: Platform) {
    this.isAndroid = platform.is('android');
  }

  
    
  ngOnInit(){
    this.loop =setInterval(this.clock, 1000);
  }
  ionViewDidLeave(){
    clearInterval(this.loop)
   
  }




  clock() {
    var time = new Date(),
    
    hours = time.getHours(),
    minutes = time.getMinutes(),   
    seconds = time.getSeconds(),
    date = time.getDate(),
    month = time.getMonth()+1,
    year = time.getFullYear();


    document.querySelectorAll('.clock')[0].innerHTML = harold(hours) + ":" + harold(minutes) + ":" + harold(seconds);
    document.querySelectorAll('.clock2')[0].innerHTML = harold(date) + "/" + harold(month) + "/" + harold(year);

  
    function harold(standIn) {
    if (standIn < 10) {
      standIn = '0' + standIn
    }
    return standIn;
  }
}

CheckIn(){
  alert("บันทึกสำเร็จค่ะ");
}
CheckOut(){
  alert("บันทึกสำเสร็จค่ะ");
}


}