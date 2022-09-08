import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ISelectionEventArgs } from 'igniteui-angular';

const getHeroClassData = () => {
    const generatedData = [
        { done: true, name: 'test_aws_dlrm_pytorch_epyc_facebook_fp32_throughput_dummy' },
        { done: true, name: 'test_aws_dlrm_pytorch_epyc_facebook_fp32_throughput_dummy_gated' },
        { done: true, name: 'test_aws_dlrm_pytorch_epyc_facebook_fp32_throughput_dummy_pkm' }
    ];
    return generatedData;
};

interface IHeroClass {
    done: boolean;
    name: string;
}

@Component({
    selector: 'app-testcase-list',
    styleUrls: ['./testcase-list.component.scss'],
    templateUrl: './testcase-list.component.html'
})
export class TestcaseListComponent implements OnInit {
    public tasks: IHeroClass[] = [];

    public get masterCheckbox() {
        return this.tasks.reduce(
            (acc, curr, idx, arr) => {
                acc.checked = acc.checked && curr.done;
                acc.done = curr.done ? acc.done + 1 : acc.done;
                acc.indeterminate = acc.done === arr.length ? false : !!acc.done;

                return acc;
            },
            {
                checked: true,
                done: 0,
                indeterminate: false
            }
        );
    }

    public toggleAll() {
        if (this.masterCheckbox.checked) {
            for (const task of this.tasks) {
                task.done = false;
            }
        } else {
            for (const task of this.tasks) {
                task.done = true;
            }
        }
    }

    ngOnInit(): void {
        this.tasks = getHeroClassData();
    }
}