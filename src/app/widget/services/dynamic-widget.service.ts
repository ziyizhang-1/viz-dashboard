import { Injectable } from "@angular/core";
import { BarChartComponent } from "../components/bar-chart/bar-chart.component";
import { DataTableComponent } from "../components/data-table/data-table.component";
import { PieChartComponent } from "../components/pie-chart/pie-chart.component";
import { TextComponent } from "../components/text/text.component";
import { LineChartComponent } from "../components/line-chart/line-chart.component";

@Injectable()
export class WidgetService {
  private static widgets = {
    1: TextComponent,
    2: PieChartComponent,
    3: BarChartComponent,
    4: DataTableComponent,
    5: LineChartComponent
  };

  getComponent(id: number) {
    return WidgetService.widgets[id];
  }
}
