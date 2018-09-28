import { Injectable, OnInit } from '@angular/core';
import { Http,Response} from '@angular/http';


@Injectable()
export class Config{
	loading: boolean;
	timestamp: number;
	lastaccess: number; //Last access datetime with website
	fetchedResources: any;
	user: any;
	isLoggedIn: boolean = false;

	homePage: any;

	baseUrl: string;
	oAuthUrl: string;

	environment: any;
	settings: any;

	defaultMenu: any;
	per_view: number = 10;
	translations: any;
	directoryFilters: any;

	/*
		IMPORTANT DO NOT TOUCH
	*/
	defaultTrack: any;
	track: any;
	trackSync: any;
	contactinfo: any;
	terms_conditions: any;
	termAll: any;

	unread_notifications_count: number = 0;
	wallet: any = [];
	/*== END == */

    constructor(private http : Http)
    {
        this.lastaccess = 0;


		this.per_view = 5;
		this.settings = {
			'version': 1,
			
			'url': 'http://localhost/MB/',
			// 'url':'http://localhost:13000/',
			'client_id': '',
			'client_secret': '', //Fetched from API call
			'state': '', // FETCHED from Site
			'access_token': '', // FETCHED on Login 
			'registration': 'app',//'app' or 'site' or false
			'login': 'app',//Select from 'app' or 'site' or false
			'facebook': {
				'enable': true,
				'app_id': 491338181212175
			},
			'google': {
				'enable': true,
			},
			'per_view': 5,
			'force_mark_all_questions': false,
			'wallet': true,					// <<----------REQUIRES WPLMS version 3.4
			'inappbrowser_purchases': true, // <<----------REQUIRES WPLMS version 3.4
			'rtl': false,
		};

		this.baseUrl = this.settings.url;
		this.oAuthUrl = this.settings.url + 'wplmsoauth/';
        
    }
   
          
          private extractResponse(res : Response){
            return res.json();
        }

}