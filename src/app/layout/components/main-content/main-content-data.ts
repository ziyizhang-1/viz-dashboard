import { WidgetName, WidgetType } from "src/app/widget/models/widget.model";
import { WidgetItem } from "../../models/widget.model";

export const mainContentWidgets: WidgetItem[] = [
  {
    cols: 2,
    rows: 1,
    y: 2,
    x: 4,
    widgetId: WidgetType.Text,
    widgetName: WidgetName.Text
  },
  {
    cols: 2,
    rows: 2,
    y: 0,
    x: 0,
    widgetId: WidgetType.PieChart,
    widgetName: WidgetName.PieChart
  },
  {
    cols: 2,
    rows: 2,
    y: 0,
    x: 2,
    widgetId: WidgetType.BarChart,
    widgetName: WidgetName.BarChart
  },
  {
    cols: 2,
    rows: 2,
    y: 0,
    x: 4,
    widgetId: WidgetType.DataTable,
    widgetName: WidgetName.DataTable
  },
  {
    cols: 4,
    rows: 1,
    y: 2,
    x: 0,
    widgetId: WidgetType.LineChart,
    widgetName: WidgetName.LineChart
  }
];
