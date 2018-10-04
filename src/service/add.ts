import { Injectable, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Config } from "../service/config";
import 'rxjs/add/operator/map';


@Injectable()
export class Add{
    private baseUrl:any;
    constructor(private http : Http, private config:Config)
    {
        this.baseUrl = this.config.baseUrl
            
    }

    AddService(id,user_name,user_lastname,user_pass){
        
        return this.http.post(`${this.baseUrl}add.php`,{
            id : id,
            user_name : user_name,
            user_lastname : user_lastname,
            user_pass : user_pass
        }).map(this.extractResponse)
      
             
          }
          
          private extractResponse(res : Response){
              return res.json();
          }
      
      }