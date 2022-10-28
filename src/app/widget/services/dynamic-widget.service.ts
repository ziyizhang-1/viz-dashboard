import { Injectable } from "@angular/core";
import { BarChartComponent } from "../components/bar-chart/bar-chart.component";
import { DataTableComponent } from "../components/data-table/data-table.component";
import { PieChartComponent } from "../components/pie-chart/pie-chart.component";
import { TextComponent } from "../components/text/text.component";
import { CpuLineChartComponent } from "../components/line-chart-cpu/line-chart.component";
import { ThroughputHeatmapComponent } from "../components/heatmap-throughput/heatmap.component";
import { MemoryLineChartComponent } from "../components/line-chart-memory/line-chart.component";
import { MinLatencyHeatmapComponent } from "../components/heatmap-min-latency/heatmap.component";
import { MaxLatencyHeatmapComponent } from "../components/heatmap-max-latency/heatmap.component";

@Injectable()
export class WidgetService {
  private static widgets = {
    1: TextComponent,
    2: PieChartComponent,
    3: BarChartComponent,
    4: DataTableComponent,
    5: CpuLineChartComponent,
    6: MemoryLineChartComponent,
    7: ThroughputHeatmapComponent,
    8: MinLatencyHeatmapComponent,
    9: MaxLatencyHeatmapComponent
  };

  getComponent(id: number) {
    return WidgetService.widgets[id];
  }
}
