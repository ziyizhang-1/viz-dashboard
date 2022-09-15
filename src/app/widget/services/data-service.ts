import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Data } from '../models/data.model';

@Injectable()
export class DataService {

    constructor(private http: HttpClient) {}

    getDataSmall() {
        return this.http.get<any>('assets/data-small.json')
        .toPromise()
        .then(res => <Data[]>res.data)
        .then(data => { return data; });
    }

}