import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ISelectionEventArgs } from 'igniteui-angular';

const getHeroClassData = () => {
    const generatedData = [{
        name: "latest"
    }, {
        name: "v22.33"
    }, {
        name: "v22.27"
    }, {
        name: "v22.18"
    }, {
        name: "v22.13"
    }];
    return generatedData;
};

interface IHeroClass {
    name: string;
}

@Component({
    selector: 'app-release-list',
    styleUrls: ['./release-list.component.scss'],
    templateUrl: './release-list.component.html'
})
export class ReleaseListComponent implements OnInit {
    @ViewChild('button', { static: true }) public button: ElementRef;
    public heroClasses: IHeroClass[] = [];
    public hero = 'Choose your hero';

    constructor(public elem: ElementRef) {}

    public handleDropDownSelection(event: ISelectionEventArgs) {
        this.hero = event.newSelection.value;
    }

    ngOnInit(): void {
        this.heroClasses = getHeroClassData();
    }
}