import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ISelectionEventArgs } from 'igniteui-angular';

const getHeroClassData = () => {
    let generatedData = [{
        name: "Docker"
    }, {
        name: "Kubernetes"
    }, {
        name: "Cumulus"
    }];
    return generatedData;
};
const getSutClassData = () => {
    let generatedData = [{
        name: "Static"
    }, {
        name: "AWS"
    }, {
        name: "Azure"
    }, {
        name: "Tencent"
    }, {
        name: "Alicloud"
    }, {
        name: "GCP"
    }, {
        name: "Simics"
    }];
    return generatedData;
};
const getWorkerTypeClassData = () => {
    let generatedData = [{
        name: "m6i"
    }, {
        name: "c6i"
    }, {
        name: "r6i"
    }, {
        name: "i6i"
    }];
    return generatedData;
};
const getWorkerScaleClassData = () => {
    let generatedData = [{
        name: "xlarge"
    }, {
        name: "4xlarge"
    }, {
        name: "16xlarge"
    }];
    return generatedData;
};

interface IHeroClass {
    name: string;
}

@Component({
    selector: 'app-backend-list',
    styleUrls: ['./backend-list.component.scss'],
    templateUrl: './backend-list.component.html'
})
export class BackendListComponent implements OnInit {
    @ViewChild('button', { static: true }) public button: ElementRef;
    public heroClasses: IHeroClass[] = [];
    public hero = 'CHOOSE';
    public sutClasses: IHeroClass[] = [];
    public sut = 'SUT Provider';
    public workerTypeClasses: IHeroClass[] = [];
    public workerType = 'Worker Type';
    public workerScaleClasses: IHeroClass[] = [];
    public workerScale = 'Worker Scale';
    public svrinfo = false;
    public sar = false;
    public emon = false;
    public sar_flags = [
        { done: true, description: 'CPU Usage' },
        { done: true, description: 'CPU Frequency' },
        { done: true, description: 'Memory Usage' }
    ];

    constructor(public elem: ElementRef) {}

    public handleDropDownSelection(event: ISelectionEventArgs) {
        this.hero = event.newSelection.value;
    }
    public handleDropDownSelection1(event: ISelectionEventArgs) {
        this.sut = event.newSelection.value;
    }
    public handleDropDownSelection2(event: ISelectionEventArgs) {
        this.workerType = event.newSelection.value;
    }
    public handleDropDownSelection3(event: ISelectionEventArgs) {
        this.workerScale = event.newSelection.value;
    }

    ngOnInit(): void {
        this.heroClasses = getHeroClassData();
        this.sutClasses = getSutClassData();
        this.workerTypeClasses = getWorkerTypeClassData();
        this.workerScaleClasses = getWorkerScaleClassData();
    }
}