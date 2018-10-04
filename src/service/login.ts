import { Injectable, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Config } from "../service/config";
import 'rxjs/add/operator/map';


@Injectable()
export class Login{
    private baseUrl:any;
    constructor(private http : Http, private config:Config)
    {
        this.baseUrl = this.config.baseUrl
            
    }

    loginService(username,password){
        
        return this.http.post(`${this.baseUrl}login.php`,{
            "username" : username,
            "password" : password
        }).map(this.extractResponse)
      
             
          }
          
          private extractResponse(res : Response){
              return res.json();
          }
      
      }