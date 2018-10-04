import { Injectable, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Config } from "../service/config";
import 'rxjs/add/operator/map';


@Injectable()
export class Register{
    private baseUrl:any;
    constructor(private http : Http, private config:Config)
    {
        this.baseUrl = this.config.baseUrl
            
    }

    RegisterService(username,password,name,lastname){
        
        return this.http.post(`${this.baseUrl}register.php`,{
            username : username,
            password : password,
            name : name,
            lastname : lastname
        }).map(this.extractResponse)
      
             
          }
          
          private extractResponse(res : Response){
              return res.json();
          }
      
      }