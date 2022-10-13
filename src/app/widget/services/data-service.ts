import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Data } from '../models/data.model';

@Injectable()
export class DataService {

    constructor(private http: HttpClient) {}

    getDataSheet1() {
        return this.http.get<any>('assets/Processed_DLRM-PyTorch_1.json')
        .toPromise()
        .then(res => <Data[]>res["Best Performance Tables"])
        .then(data => { return [data, Object.keys(data[0])] as const; });
    }

    getDataSheet2() {
        return this.http.get<any>('assets/Processed_DLRM-PyTorch_1.json')
        .toPromise()
        .then(res => <Data[]>res["Performance Sweeping Tables"])
        .then(data => { return [data, Object.keys(data[0])] as const; });
    }

    getDataSheet3() {
        return this.http.get<any>('assets/Processed_DLRM-PyTorch_1.json')
        .toPromise()
        .then(res => <Data[]>res["BS Tables"])
        .then(data => { return [data, Object.keys(data[0])] as const; });
    }

    getDataSheet4() {
        return this.http.get<any>('assets/Processed_DLRM-PyTorch_1.json')
        .toPromise()
        .then(res => <Data[]>res["sheet1"])
        .then(data => { return [data, Object.keys(data[0])] as const; });
    }
  
    getHeatmapData1() {
        return this.http.get<any>('assets/Processed_heatmap_4.json')
        .toPromise()
        .then(res => <number[]>res["BS"])
        .then(data => { return data; });
    }

    getHeatmapData2() {
        return this.http.get<any>('assets/Processed_heatmap_4.json')
        .toPromise()
        .then(res => <number[]>res["CPI"])
        .then(data => { return data; });
    }

    getHeatmapData3() {
        return this.http.get<any>('assets/Processed_heatmap_4.json')
        .toPromise()
        .then(res => <any[]>res["DATA"])
        .then(data => { return data; });
    }

    getHeatmapData4() {
        return this.http.get<any>('assets/Processed_heatmap_4.json')
        .toPromise()
        .then(res => <number[]>res["MAX_MIN"])
        .then(data => { return data; });
    }

    getBarData1() {
        return this.http.get<any>('assets/Processed_compare_0.json')
        .toPromise()
        .then(res => <number[]>res["BS"])
        .then(data => { return data; });
    }

    getBarData2() {
        return this.http.get<any>('assets/Processed_compare_0.json')
        .toPromise()
        .then(res => <any[]>res["THROUGHPUT"])
        .then(data => { return data; });
    }

}
