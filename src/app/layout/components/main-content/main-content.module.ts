import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { GridsterModule } from "angular-gridster2";
import { BarChartComponent } from "src/app/widget/components/bar-chart/bar-chart.component";
import { PieChartComponent } from "src/app/widget/components/pie-chart/pie-chart.component";
import { TextComponent } from "src/app/widget/components/text/text.component";
import { WidgetModule } from "src/app/widget/widget.module";
import { MainContentComponent } from "./main-content.component";
import { CpuLineChartComponent } from "src/app/widget/components/line-chart-cpu/line-chart.component";
import { MemoryLineChartComponent } from "src/app/widget/components/line-chart-memory/line-chart.component";
import { ThroughputHeatmapComponent } from "src/app/widget/components/heatmap-throughput/heatmap.component";
import { MinLatencyHeatmapComponent } from "src/app/widget/components/heatmap-min-latency/heatmap.component";
import { MaxLatencyHeatmapComponent } from "src/app/widget/components/heatmap-max-latency/heatmap.component";
import { DataTableComponent } from "src/app/widget/components/data-table/data-table.component";

@NgModule({
  declarations: [MainContentComponent],
  imports: [CommonModule, GridsterModule, WidgetModule],
  exports: [MainContentComponent],
  entryComponents: [
    TextComponent,
    DataTableComponent,
    PieChartComponent,
    BarChartComponent,
    CpuLineChartComponent,
    MemoryLineChartComponent,
    ThroughputHeatmapComponent,
    MinLatencyHeatmapComponent,
    MaxLatencyHeatmapComponent
  ]
})
export class MainContentModule {}
