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
  selector: "app-heatmap",
  templateUrl: "./heatmap.component.html",
  styleUrls: ["./heatmap.component.scss"]
})
export class HeatmapComponent implements OnInit, OnDestroy {
  options: EChartsOption = HeatmapInitConfig;
  theme: string;
  echartsInstance: ECharts;

  private themeSubscription: Subscription;
  private resizeSubscription: Subscription;

  constructor(private store: Store<AppState>, private action$: Actions, private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getHeatmapData1().then(data1 => {
      this.options.xAxis = {
        type: 'category',
        name: 'Batch Size',
        data: data1,
        splitArea: {
          show: true
        }
      };
      });
    
    this.dataService.getHeatmapData2().then(data2 => {
      this.options.yAxis = {
        type: 'category',
        name: 'CPI',
        data: data2,
        splitArea: {
          show: true
        }
      };
      });
    
    this.dataService.getHeatmapData3().then(data3 => {
      this.options.series = [{
        name: 'Throughput',
        type: 'heatmap',
        data: data3,
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
      });
    
    this.dataService.getHeatmapData4().then(data4 => {
      this.options.visualMap = {
        min: data4[1],
        max: data4[0],
        type: 'continuous',
        orient: 'horizontal',
        left: 'center',
        bottom: '10%'
      };
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
