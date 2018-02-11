import { Component } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = 'LoginPage';
  uid:string;
  pages=[
    {name:'Home',page:'HomePage',permission:'approve'},
    {name:'ApproverManagement',page:'ApproverManagementPage',permission:'admin'},
  ];

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    Auth:AngularFireAuth
  ){
    let subscribe =  Auth.authState.subscribe(user=>{
      if(!user){
        this.rootPage = 'LoginPage';
      }else{
        this.uid = user.uid;
        this.rootPage = 'HomePage';
        //localStorage.setItem('UID',user.uid);
      }
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }


  gotoPage(page:string){
      this.rootPage = page;
  }
}

