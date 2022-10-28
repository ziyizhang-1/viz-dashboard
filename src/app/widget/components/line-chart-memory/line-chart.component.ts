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
import { DataService } from "../../services/data-service";
import { LineChartInitConfig } from "./line-chart-options";

@Component({
  selector: "app-line-chart-memory",
  templateUrl: "./line-chart.component.html",
  styleUrls: ["./line-chart.component.scss"]
})
export class MemoryLineChartComponent implements OnInit, OnDestroy {
  options: EChartsOption = LineChartInitConfig;
  theme: string;
  state: number;
  echartsInstance: ECharts;

  private themeSubscription: Subscription;
  private resizeSubscription: Subscription;
  private stateSubscription: Subscription;

  constructor(private store: Store<AppState>, private action$: Actions, private dataService: DataService) {}

  ngOnInit(): void {
    this.stateSubscription = this.dataService
      .getChosenState()
      .subscribe((state) => {
        this.state = state;
        this.dataService.getLineData(this.state).then(data => {
          this.options.xAxis = {
            type: 'category',
            name: 'Time',
            data: data[0]
          };
          this.options.yAxis = {
            min: 0,
            max: 100,
            type: 'value',
            name: 'Memory Usage'
          };
          this.options.series = {
            data: data[2],
            type: 'line',
            smooth: true,
            symbol: 'none',
            areaStyle: {opacity: 0.5}
          };
          this.echartsInstance.setOption(this.options, true);
        });
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
    this.stateSubscription.unsubscribe();
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
