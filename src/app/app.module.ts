import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from 'angularfire2';
import { FirebaseConfig } from './firebae-Config';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { TostServiceProvider } from '../providers/tost-service/tost-service';
import { PersonalServiceProvider } from '../providers/personal-service/personal-service';
import { VerifyPhonenumberServiceProvider } from '../providers/verify-phonenumber-service/verify-phonenumber-service';
import { ApprovePersonalServiceProvider } from '../providers/approve-personal-service/approve-personal-service';
import { TansectionServiceProvider } from '../providers/tansection-service/tansection-service';
import { BlockchainServiceProvider } from '../providers/blockchain-service/blockchain-service';
import { HttpClientModule } from '@angular/common/http';
import { ApproverServiceProvider } from '../providers/approver-service/approver-service';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    AngularFireModule.initializeApp(FirebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TostServiceProvider,
    PersonalServiceProvider,
    VerifyPhonenumberServiceProvider,
    ApprovePersonalServiceProvider,
    TansectionServiceProvider,
    BlockchainServiceProvider,
    ApproverServiceProvider
  ]
})
export class AppModule {}
