import { Component, ViewEncapsulation } from "@angular/core";
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
@Component({
  selector: "app-data-table",
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DataTableComponent {
  data: Data[];
  cols: any[] = [
    { field: "id", header: "ID" },
    { field: "status", header: "Status" },
    { field: "frequency", header: "Frequency" }
  ];
  exportColumns: any[] = this.cols.map(col => ({
    title: col.header,
    dataKey: col.field
  }));;
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

    this.widgetResizeSubscription = this.action$
      .pipe(ofType<TableWidgetResized>(LayoutActionTypes.TableWidgetResized))
      .subscribe(() => {
        this.dataService.getDataSmall().then(data => (this.data = data));
      });

    this.windowResizeSubscription = this.action$
      .pipe(ofType<WindowResized>(LayoutActionTypes.WindowResized))
      .subscribe(() => {
        setTimeout(() => {
          this.dataService.getDataSmall().then(data => (this.data = data));
        }, 400);
      });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
    this.widgetResizeSubscription.unsubscribe();
    this.windowResizeSubscription.unsubscribe();
  }

  exportExcel() {
    import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.data);
      const worksheet_1 = xlsx.utils.json_to_sheet(this.data);
      const worksheet_2 = xlsx.utils.json_to_sheet(this.data);
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
