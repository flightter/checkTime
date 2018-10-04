import { Component } from '@angular/core';
import { NavController, DateTime } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AdduserPage } from '../adduser/adduser';
import { Check } from '../../service/check';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
  user_pass : any;


  
  INOUT: string = "in";
  isAndroid: boolean = false;
  
  loop:any;
  
    constructor(public navCtrl: NavController ,platform: Platform, private check:Check) {
    this.isAndroid = platform.is('android');

    
  }

  
    
  ngOnInit(){
    this.loop =setInterval(this.clock, 1000);
  }
  ionViewDidLeave(){
    clearInterval(this.loop)
   
  }




  clock() {
   var time =new Date,
    
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

CheckIn(IN){

  this.check.CheckService(this.user_pass,IN).subscribe(data =>{
    console.log(data);
    
  })
  

}



CheckOut(OUT){
  this.check.CheckService(this.user_pass,OUT).subscribe(data =>{
    console.log(data);
  })
  }



Add(){
  this.navCtrl.push(AdduserPage);
}

}