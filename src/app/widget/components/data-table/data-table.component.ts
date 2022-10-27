import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { Actions, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { AppState } from "src/app/core/store/reducers";
import { getThemeType } from "src/app/core/store/reducers/theme.reducer";
import {
  LayoutActionTypes,
  TableWidgetResized,
  WindowResized
} from "src/app/layout/store/actions/layout.actions";
import { DataService } from "../../services/data-service";
import { Data } from "../../models/data.model";
import * as FileSaver from "file-saver";
import { TabView } from "primeng/tabview";
@Component({
  selector: "app-data-table",
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DataTableComponent {
  Sheet1: Data[];
  Sheet2: Data[];
  Sheet3: Data[];
  cols_1: any[] = [];
  cols_2: any[] = [];
  cols_3: any[] = [];
  headers: any[] = [];
  state: number;
  selectedIndex: number = 0;
  @ViewChild(TabView) tabView: TabView;

  theme: string;

  private themeSubscription: Subscription;
  private widgetResizeSubscription: Subscription;
  private windowResizeSubscription: Subscription;
  private stateSubscription: Subscription;

  constructor(private store: Store<AppState>, private action$: Actions, private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getDataInfo().then(data => {
      for (let each of data[0]) {
        this.headers.push({ header: each });
      };
    });
    
    this.stateSubscription = this.dataService
      .getChosenState()
      .subscribe((state) => {
        this.state = state;
        let cols_1: any[] = [];
        let cols_2: any[] = [];
        let cols_3: any[] = [];
        let dataKeys: string[];
        this.dataService.getDataSheets(this.state).then(data => {
          [this.Sheet1, dataKeys] = data[0];
          for (let k of dataKeys) {
            cols_1.push({ field: k, header: k } as const);
          }
          [this.Sheet2, dataKeys] = data[1];
          for (let k of dataKeys) {
            cols_2.push({ field: k, header: k } as const);
          }
          [this.Sheet3, dataKeys] = data[2];
          for (let k of dataKeys) {
            cols_3.push({ field: k, header: k } as const);
          }
        });
        this.cols_1 = cols_1;
        this.cols_2 = cols_2;
        this.cols_3 = cols_3;
      });

    this.submit(this.selectedIndex);

    this.themeSubscription = this.store
      .pipe(select(getThemeType))
      .subscribe((theme: string) => {
        this.theme = theme === "Dark" ? "dark" : "material";
      });

    this.widgetResizeSubscription = this.action$
      .pipe(ofType<TableWidgetResized>(LayoutActionTypes.TableWidgetResized))
      .subscribe(() => {
        this.Sheet1 = this.Sheet1; 
        this.Sheet2 = this.Sheet2; 
        this.Sheet3 = this.Sheet3;
      });

    this.windowResizeSubscription = this.action$
      .pipe(ofType<WindowResized>(LayoutActionTypes.WindowResized))
      .subscribe(() => {
        setTimeout(() => {
          this.Sheet1 = this.Sheet1;
          this.Sheet2 = this.Sheet2;
          this.Sheet3 = this.Sheet3;
        }, 400);
      });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
    this.widgetResizeSubscription.unsubscribe();
    this.windowResizeSubscription.unsubscribe();
    this.stateSubscription.unsubscribe();
  }

  onChange($event): void {
    this.selectedIndex = $event.index;
    // this.submit(this.tabView.tabs[this.selectedIndex].header);
    this.submit(this.selectedIndex);
  }

  submit(state: any): void {
    this.dataService.setChosenState(state);
  }

  exportExcel() {
    import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.Sheet1);
      const worksheet_1 = xlsx.utils.json_to_sheet(this.Sheet2);
      const worksheet_2 = xlsx.utils.json_to_sheet(this.Sheet3);
      const workbook = { Sheets: { "best performance": worksheet, "sweeping": worksheet_1, "BS": worksheet_2 }, SheetNames: ["best performance", "sweeping", "BS"] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: "xlsx",
        type: "array"
      });
      this.saveAsExcelFile(excelBuffer, "data");
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    let EXCEL_EXTENSION = ".xlsx";
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(
      data,
      fileName + EXCEL_EXTENSION
    );
  }
}
