import { Injectable, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Config } from "../service/config";
import 'rxjs/add/operator/map';


@Injectable()
export class Admin{
    private baseUrl:any;
    constructor(private http : Http, private config:Config)
    {
        this.baseUrl = this.config.baseUrl
            
    }
    Data(user_pass){


        return this.http.post(`${this.baseUrl}Admin.php`,{
            user_pass:user_pass
        }).map(this.extractResponse)
      }
  
  
            private extractResponse(res : Response){
              return res.json();
          }
  
  }