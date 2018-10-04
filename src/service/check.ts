import { Injectable, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Config } from "../service/config";
import 'rxjs/add/operator/map';


@Injectable()
export class Check{
    private baseUrl:any;
    constructor(private http : Http, private config:Config)
    {
        this.baseUrl = this.config.baseUrl
            
    }

    CheckService(user_pass,status){
        
        return this.http.post(`${this.baseUrl}check.php`,{
            user_pass : user_pass,
            status : status,
        }).map(this.extractResponse)
      
             
          }
          
          private extractResponse(res : Response){
              return res.json();
          }
      
      }