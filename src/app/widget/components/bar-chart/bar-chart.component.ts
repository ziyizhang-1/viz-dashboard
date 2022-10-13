import { Component, OnDestroy, OnInit } from "@angular/core";
import { Actions, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { EChartsOption, ECharts } from "echarts";
import { Subscription } from "rxjs";
import { AppState } from "src/app/core/store/reducers";
import { getThemeType } from "src/app/core/store/reducers/theme.reducer";
import {
  LayoutActionTypes,
  WindowResized
} from "src/app/layout/store/actions/layout.actions";
import { BarChartInitConfig } from "./bar-chart-options";
import { DataService } from "../../services/data-service";

@Component({
  selector: "app-bar-chart",
  templateUrl: "./bar-chart.component.html",
  styleUrls: ["./bar-chart.component.scss"]
})
export class BarChartComponent implements OnInit, OnDestroy {
  temp_data:any[] = new Array()
    
  options: EChartsOption = BarChartInitConfig;
  theme: string;
  echartsInstance: ECharts;

  private themeSubscription: Subscription;
  private resizeSubscription: Subscription;

  constructor(private store: Store<AppState>, private action$: Actions, private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getBarData1().then(data1 => {
      this.options.xAxis = {
        type: "category",
        data: data1
      };
      });

    this.dataService.getBarData2().then(data2 => {
      for (let each of data2) {
        this.temp_data.push(
            {
              type: "bar",
              data: each[Object.keys(each)[0]],
              name: Object.keys(each)[0]
            }
          );
      };
      this.options.series = this.temp_data;
    });

    this.themeSubscription = this.store
      .pipe(select(getThemeType))
      .subscribe((theme: string) => {
        this.theme = theme === "Dark" ? "dark" : "default";
      });

    this.resizeSubscription = this.action$
      .pipe(ofType<WindowResized>(LayoutActionTypes.WindowResized))
      .subscribe(() => {
        this.resizeChart();
      });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
    this.resizeSubscription.unsubscribe();
  }

  onChartInit(echartsInstance: ECharts): void {
    this.echartsInstance = echartsInstance;
  }

  resizeChart(): void {
    if (this.echartsInstance) {
      setTimeout(() => {
        this.echartsInstance.resize();
      }, 400);
    }
  }
}
