import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { dataTool } from 'echarts';
import { BehaviorSubject, Observable } from "rxjs";
import { Data } from '../models/data.model';

@Injectable()
export class DataService {

    private ChosenState: BehaviorSubject<number>;

    constructor(private http: HttpClient) {
        this.ChosenState = new BehaviorSubject<number>(0);
    }

    setChosenState(state: number): void {
        this.ChosenState.next(state);
      }
    
    getChosenState(): Observable<number> {
    return this.ChosenState.asObservable();
    }

    getDataInfo(): any {
        return this.http.get<any>('assets/Processed_info.json')
        .toPromise()
        .then(res => [<Data[]>res["DATA_TABLE_INFO"], <Data[]>res["BAR_CHART_INFO"]] as const)
        .then(data => { return data; });
    }

    getDataSheets(id: number): any {
        return this.http.get<any>(`assets/Processed_case_${id}.json`)
        .toPromise()
        .then(res => [
            [<Data[]>res["Best Performance Tables"], Object.keys(<Data[]>res["Best Performance Tables"][0])],
            [<Data[]>res["Performance Sweeping Tables"], Object.keys(<Data[]>res["Performance Sweeping Tables"][0])],
            [<Data[]>res["BS Tables"], Object.keys(<Data[]>res["BS Tables"][0])]
        ] as const)
        .then(data => { return data; });
    }
  
    getHeatmapData(id: number): any {
        return this.http.get<any>(`assets/Processed_heatmap_${id}.json`)
        .toPromise()
        .then(res => [
            [<number[]>res["throughput"]["BS"], <number[]>res["throughput"]["CPI"], <any[]>res["throughput"]["DATA"], <number[]>res["throughput"]["MAX_MIN"]],
            [<number[]>res["min_latency"]["BS"], <number[]>res["min_latency"]["CPI"], <any[]>res["min_latency"]["DATA"], <number[]>res["min_latency"]["MAX_MIN"]],
            [<number[]>res["max_latency"]["BS"], <number[]>res["max_latency"]["CPI"], <any[]>res["max_latency"]["DATA"], <number[]>res["max_latency"]["MAX_MIN"]]
        ] as const)
        .then(data => { return data; });
    }

    getBarData(): any {
        return this.http.get<any>(`assets/Processed_compare.json`)
        .toPromise()
        .then(res => res)
        .then(data => { return [data, Object.keys(data)] as const; });
    }

    getLineData(id: number): any {
        return this.http.get<any>(`assets/Processed_line_${id}.json`)
        .toPromise()
        .then(res => [<number[]>res["TIME"], <number[]>res["CPU"], <number[]>res["MEMORY"]] as const)
        .then(data => { return data; });
    }
}
