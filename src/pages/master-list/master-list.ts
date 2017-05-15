import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { PersonDetailsPage } from '../person-details/person-details';
import { PeopleService } from '../../services/people.service';
import { Person } from '../../person';

@Component({
  selector: 'page-master-list',
  templateUrl: 'master-list.html'
})
export class MasterListPage {
  people: Person[] = [];
  pageNum: number = 1;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private peopleService: PeopleService
  ) {}

  ionViewWillEnter(): void {
    this.getPeople();
  }

  getPeople(): Promise<void> {
    return this.peopleService.getPeople(this.pageNum)
      .then(people => {
        this.people = this.people.concat(people);
      });
  }

  personTapped(event, person): void {
    this.navCtrl.push(PersonDetailsPage, {
      person: person
    });
  }

  doInfinite(infiniteScroll): void {
    this.pageNum++;
    this.getPeople()
      .then(() => infiniteScroll.complete());
  }
}
