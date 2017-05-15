import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { SignInPage } from '../pages/sign-in/sign-in';
import { MasterListPage } from '../pages/master-list/master-list';
import { PersonDetailsPage } from '../pages/person-details/person-details';

import { SideMenuComponent } from '../components/side-menu/side-menu.component';
import { PersonCardComponent } from '../components/person-card/person-card.component';
import { MessageModal } from '../components/message-modal/message-modal.component';
import { SignInService } from '../services/sign-in.service';
import { PeopleService } from '../services/people.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    SignInPage,
    PersonDetailsPage,
    MasterListPage,
    SideMenuComponent,
    PersonCardComponent,
    MessageModal
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SignInPage,
    PersonDetailsPage,
    MasterListPage,
    MessageModal
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SignInService,
    PeopleService
  ]
})
export class AppModule {}
