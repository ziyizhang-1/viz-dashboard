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
import { HeatmapInitConfig } from "./heatmap-options";
import { DataService } from "../../services/data-service";

@Component({
  selector: "app-heatmap-throughput",
  templateUrl: "./heatmap.component.html",
  styleUrls: ["./heatmap.component.scss"]
})
export class ThroughputHeatmapComponent implements OnInit, OnDestroy {
  options: EChartsOption = HeatmapInitConfig;
  theme: string;
  echartsInstance: ECharts;
  state: number;

  private themeSubscription: Subscription;
  private resizeSubscription: Subscription;
  private stateSubscription: Subscription;

  constructor(private store: Store<AppState>, private action$: Actions, private dataService: DataService) {}

  ngOnInit(): void {
    this.stateSubscription = this.dataService
      .getChosenState()
      .subscribe((state) => {
        this.state = state;
        this.dataService.getHeatmapData(this.state).then(data => {
          this.options.xAxis = {
            type: 'category',
            name: 'Batch Size',
            data: data[0][0],
            splitArea: {
              show: true
            }
          };
          this.options.yAxis = {
            type: 'category',
            name: 'CPI',
            data: data[0][1],
            splitArea: {
              show: true
            }
          };
          this.options.series = [{
            name: 'Throughput',
            type: 'heatmap',
            data: data[0][2],
            label: {
              show: true
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }];
          this.options.visualMap = {
            min: data[0][3][1],
            max: data[0][3][0],
            type: 'continuous',
            orient: 'horizontal',
            left: 'center',
            bottom: '10%'
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
