import { Component } from '@angular/core';

import { PeopleService } from '../../services/people.service';
import { Person } from '../../person';

@Component({
  selector: 'page-master-list',
  templateUrl: 'master-list.html'
})
export class MasterListPage {
  people: Person[] = [];
  pageNum: number = 1;

  constructor(private peopleService: PeopleService) {}

  ionViewWillEnter(): void {
    this.getPeople();
  }

  getPeople(): Promise<void> {
    return this.peopleService.getPeople(this.pageNum)
      .then(people => {
        this.people = this.people.concat(people);
      });
  }

  doInfinite(infiniteScroll): void {
    this.pageNum++;
    this.getPeople()
      .then(() => infiniteScroll.complete())
      .catch(() => infiniteScroll.complete());
  }
}
