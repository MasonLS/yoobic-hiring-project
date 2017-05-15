import { Component } from '@angular/core';

import { NavParams, ModalController } from 'ionic-angular';

import { MessageModal } from '../../components/message-modal/message-modal.component';
import { Person } from '../../person';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'page-person-details',
  templateUrl: 'person-details.html'
})
export class PersonDetailsPage {
  person: Person;
  homeworld: object;
  age: number;

  constructor(
    public modalCtrl: ModalController, 
    public navParams: NavParams,
    private peopleService: PeopleService
  ) {
    this.person = navParams.get('person');
    this.homeworld = navParams.get('homeworld');
    this.age = this.peopleService.getAge(this.person);
  }

  chatButtonTapped(event): void {
    let modal = this.modalCtrl.create(MessageModal, {
      person: this.person
    });
    modal.present();
  }
}
