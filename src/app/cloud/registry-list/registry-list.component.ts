import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ISelectionEventArgs } from 'igniteui-angular';

const getHeroClassData = () => {
    const generatedData = [{
        name: "None"
    }, {
        name: "10.166.44.42:5000"
    }, {
        name: "10.237.213.52:5000"
    }, {
        name: "10.102.227.193:5000"
    }, {
        name: "10.190.212.225:5000"
    }];
    return generatedData;
};

interface IHeroClass {
    name: string;
}

@Component({
    selector: 'app-registry-list',
    styleUrls: ['./registry-list.component.scss'],
    templateUrl: './registry-list.component.html'
})
export class RegistryListComponent implements OnInit {
    @ViewChild('button', { static: true }) public button: ElementRef;
    public heroClasses: IHeroClass[] = [];
    public hero = 'CHOOSE';

    constructor(public elem: ElementRef) {}

    public handleDropDownSelection(event: ISelectionEventArgs) {
        this.hero = event.newSelection.value;
    }

    ngOnInit(): void {
        this.heroClasses = getHeroClassData();
    }
}