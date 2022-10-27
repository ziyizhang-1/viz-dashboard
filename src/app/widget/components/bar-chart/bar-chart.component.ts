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
    
  options: EChartsOption = BarChartInitConfig;
  theme: string;
  stories: any[] = [];
  data: any[];
  echartsInstance: ECharts;

  private themeSubscription: Subscription;
  private resizeSubscription: Subscription;

  constructor(private store: Store<AppState>, private action$: Actions, private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getDataInfo().then(data => {
      for (let i = 0; i < data[1].length; i++) {
        this.stories.push({ name: data[1][i], id: i });
      };
    });

    this.dataService.getBarData().then(data => {
      this.data = data;
      this.options.xAxis = {
        type: "category",
        name: "Batch Size",
        data: this.data[0][this.data[1][0]]["BS"]
      };
      this.options.yAxis = {
        name: "Normalized"
      }
      let temp_data: any[] = [];
      for (let each of this.data[0][this.data[1][0]]["THROUGHPUT"]) {
        temp_data.push(
          {
            type: "bar",
            data: each[Object.keys(each)[0]],
            name: Object.keys(each)[0]
          }
        );
      };
      this.options.series = temp_data;
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

  onChange(id: number): void {
    this.options.xAxis = {
        type: "category",
        name: "Batch Size",
        data: this.data[0][this.data[1][id]]["BS"]
      };
    let temp_data: any[] = []
    for (let each of this.data[0][this.data[1][id]]["THROUGHPUT"]) {
      temp_data.push(
        {
          type: "bar",
          data: each[Object.keys(each)[0]],
          name: Object.keys(each)[0]
        }
      );
    };
    this.options.series = temp_data;
    this.echartsInstance.setOption(this.options, true);
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
