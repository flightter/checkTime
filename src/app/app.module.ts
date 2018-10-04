import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AdduserPage } from '../pages/adduser/adduser';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { AdminPage } from '../pages/admin/admin';
import { HttpModule } from '../../node_modules/@angular/http';
import { IonicStorageModule } from '@ionic/storage';

// service

import { Config } from '../service/config';
import { User } from '../service/user';
import { Admin } from '../service/admin';
import { Login } from '../service/login';
import { Register } from '../service/register';
import { Add } from '../service/add';
import { Check } from '../service/check';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    RegisterPage,
    LoginPage,
    AdminPage,
    AdduserPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    RegisterPage,
    LoginPage,
    AdminPage,
    AdduserPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    //service
    Config,
    User,
    Admin,
    Login,
    Register,
    Add,
    Check
    
    

  ]
})
export class AppModule {}
