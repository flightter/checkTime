import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { AdminPage } from '../admin/admin';
import { User } from '../../service/user';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  public items:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private datause:User) {
    
    this.datause.Data().subscribe(data =>{
      this.items = data
      console.log(data);
      
    })
  }


  goAdmin(){
    this.navCtrl.push(AdminPage);
  }


}
