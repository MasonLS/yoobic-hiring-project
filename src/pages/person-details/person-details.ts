import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ChatPage } from '../chat';
import { Person } from '../../person';

@Component({
  selector: 'page-person-details',
  templateUrl: 'person-details.html'
})
export class PersonDetailsPage {
  person: Person;
  homeworld: object;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.person = navParams.get('person');
    this.homeworld = navParams.get('homeworld');
  }

  chatButtonTapped(event): void {
    this.navCtrl.push(ChatPage, {
      person: this.person
    });
  }
}
