import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ISelectionEventArgs } from 'igniteui-angular';

const getHeroClassData = () => {
    const generatedData = [{
        name: "Intel",
        entries: [{
            name: "SPR",
            refNo: `4`
        }, {
            name: "ICX",
            refNo: `5`
        }, {
            name: "CPX",
            refNo: `6`
        }]
    }, {
        name: "AMD",
        entries: [{
            name: "MILAN",
            refNo: `7`
        }, {
            name: "ROME",
            refNo: `8`
        }, {
            name: "Naples",
            refNo: `9`
        }]
    }, {
        name: "ARM",
        entries: [{
            name: "Graviton III",
            refNo: `1`
        }, {
            name: "Graviton II",
            refNo: `2`
        }, {
            name: "Graviton I",
            refNo: `3`
        }]
    }];
    return generatedData;
};

interface IHeroClass {
    name: string;
    entries: ISubClass[];
}
interface ISubClass {
    name: string;
    refNo: string;
}

@Component({
    selector: 'app-dropdown-list',
    styleUrls: ['./dropdown-list.component.scss'],
    templateUrl: './dropdown-list.component.html'
})
export class DropDownListComponent implements OnInit {
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