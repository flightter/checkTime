import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// import { LoginPage } from '../login/login';
// import { Observable } from '../../../node_modules/rxjs/Observable';
import { AdminPage } from '../admin/admin';
import { User } from '../../service/user';
import { Storage } from '@ionic/storage';



@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  public items:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private datause:User, private storage:Storage) {
    this.storage.get('data').then(val =>{
      console.log(val.status.id);
      
      this.datause.Data(val.status.id).subscribe(data =>{
        
        this.items = data
    })
    
      
    })
  }


  goAdmin(data){
    let id =  {
      id:data.user_id
    }
    
    this.navCtrl.push(AdminPage,id);
  }


}
