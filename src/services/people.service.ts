import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Person } from '../person';

// TODO: handle page not found error

@Injectable()
export class PeopleService {

    private getPeopleUrl(pageNum): string {
        return 'http://swapi.co/api/people/?page=' + pageNum; 
    }

    constructor(private http: Http) {}
    
    getPeople(pageNum): Promise<Person[]> {
        const url = this.getPeopleUrl(pageNum);

        return this.http.get(url)
            .toPromise()
            .then(response => response.json().results as Person[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}