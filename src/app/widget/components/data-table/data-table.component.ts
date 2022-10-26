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
  dataKeys: string[];
  cols_1: any[] = [];
  cols_2: any[] = [];
  cols_3: any[] = [];
  items: any[] = [];

  selectedIndex: number = 0;
  @ViewChild(TabView) tabView: TabView;

  theme: string;

  private themeSubscription: Subscription;
  private widgetResizeSubscription: Subscription;
  private windowResizeSubscription: Subscription;

  constructor(private store: Store<AppState>, private action$: Actions, private dataService: DataService) {}

  ngOnInit(): void {

    this.themeSubscription = this.store
      .pipe(select(getThemeType))
      .subscribe((theme: string) => {
        this.theme = theme === "Dark" ? "dark" : "material";
      });

    for (let i = 1; i <= 3; i++) {
      this.items.push({ header: i });
    }
    
    this.dataService.getDataSheet1().then(data => {
      [this.Sheet1, this.dataKeys] = data;
      for (let k of this.dataKeys) {
        this.cols_1.push({ field: k, header: k } as const);
      }
    });
    this.dataService.getDataSheet2().then(data => {
      [this.Sheet2, this.dataKeys] = data;
      for (let k of this.dataKeys) {
        this.cols_2.push({ field: k, header: k } as const);
      }
    });
    this.dataService.getDataSheet3().then(data => {
      [this.Sheet3, this.dataKeys] = data;
      for (let k of this.dataKeys) {
        this.cols_3.push({ field: k, header: k } as const);
      }
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
  }

  onChange($event): void {
    this.selectedIndex = $event.index;
    this.submit(this.tabView.tabs[this.selectedIndex].header);
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
