import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgxEchartsModule } from "ngx-echarts";
import { BarChartComponent } from "./components/bar-chart/bar-chart.component";
import { DataTableComponent } from "./components/data-table/data-table.component";
import { DynamicWidgetComponent } from "./components/dynamic-widget/dynamic-widget.component";
import { PieChartComponent } from "./components/pie-chart/pie-chart.component";
import { TextComponent } from "./components/text/text.component";
import { CpuLineChartComponent } from "./components/line-chart-cpu/line-chart.component";
import { ThroughputHeatmapComponent } from "./components/heatmap-throughput/heatmap.component";
import { MemoryLineChartComponent } from "./components/line-chart-memory/line-chart.component";
import { MaxLatencyHeatmapComponent } from "./components/heatmap-max-latency/heatmap.component";
import { MinLatencyHeatmapComponent } from "./components/heatmap-min-latency/heatmap.component";
import { DynamicWidgetDirective } from "./directives/dynamic-widget.directive";
import { WidgetService } from "./services/dynamic-widget.service";
import { DataService } from "./services/data-service";
import { TableModule } from "primeng/table";
import { TabViewModule } from 'primeng/tabview';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from "primeng/button";
import { DropdownModule } from 'primeng/dropdown';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms"

@NgModule({
  imports: [
    CommonModule,
    NgxEchartsModule.forRoot({ echarts: () => import('echarts') }),
    BrowserModule,
    TableModule,
    ButtonModule,
    TabViewModule,
    ToolbarModule,
    DropdownModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    DynamicWidgetComponent,
    DynamicWidgetDirective,
    TextComponent,
    PieChartComponent,
    BarChartComponent,
    DataTableComponent,
    CpuLineChartComponent,
    ThroughputHeatmapComponent,
    MemoryLineChartComponent,
    MinLatencyHeatmapComponent,
    MaxLatencyHeatmapComponent
  ],
  exports: [DynamicWidgetComponent],
  providers: [WidgetService, DataService],
  entryComponents: [DataTableComponent]
})
export class WidgetModule {}
