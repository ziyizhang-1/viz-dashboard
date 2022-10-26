import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { Data } from '../models/data.model';

@Injectable()
export class DataService {

    private ChosenState: BehaviorSubject<any>;

    constructor(private http: HttpClient) {
        this.ChosenState = new BehaviorSubject<any>("1");
    }

    setChosenState(state: any): void {
        this.ChosenState.next(state);
      }
    
    getChosenState(): Observable<any> {
    return this.ChosenState.asObservable();
    }

    getDataSheet1(): any {
        return this.http.get<any>('assets/Processed_DLRM-PyTorch_1.json')
        .toPromise()
        .then(res => <Data[]>res["Best Performance Tables"])
        .then(data => { return [data, Object.keys(data[0])] as const; });
    }

    getDataSheet2(): any {
        return this.http.get<any>('assets/Processed_DLRM-PyTorch_1.json')
        .toPromise()
        .then(res => <Data[]>res["Performance Sweeping Tables"])
        .then(data => { return [data, Object.keys(data[0])] as const; });
    }

    getDataSheet3(): any {
        return this.http.get<any>('assets/Processed_DLRM-PyTorch_1.json')
        .toPromise()
        .then(res => <Data[]>res["BS Tables"])
        .then(data => { return [data, Object.keys(data[0])] as const; });
    }
  
    getHeatmapData(): any {
        return this.http.get<any>('assets/Processed_heatmap_4.json')
        .toPromise()
        .then(res => [<number[]>res["BS"], <number[]>res["CPI"], <any[]>res["DATA"], <number[]>res["MAX_MIN"]] as const)
        .then(data => { return data; });
    }

    getBarData(): any {
        return this.http.get<any>('assets/Processed_compare_0.json')
        .toPromise()
        .then(res => [<number[]>res["BS"], <number[]>res["THROUGHPUT"]] as const)
        .then(data => { return data; });
    }
}
