import { Injectable, OnInit } from '@angular/core';
import { Http,Response,RequestOptions } from '@angular/http';
import { Config } from "../service/config";
import 'rxjs/add/operator/map';


@Injectable()
export class User{
    private baseUrl:any;
    constructor(private http : Http, private config:Config, private requestoptions:RequestOptions)
    {
        this.baseUrl = this.config.baseUrl
            
    }


    
   Data(id){


      return this.http.post(`${this.baseUrl}Use.php`,{
          id:id
      }).map(this.extractResponse)
    }


          private extractResponse(res : Response){
            return res.json();
        }

}