import { WidgetName, WidgetType } from "src/app/widget/models/widget.model";
import { WidgetItem } from "../../models/widget.model";

export const mainContentWidgets: WidgetItem[] = [
  {
    cols: 2,
    rows: 1,
    y: 4,
    x: 0,
    widgetId: WidgetType.Text,
    widgetName: WidgetName.Text
  },
  {
    cols: 2,
    rows: 1,
    y: 4,
    x: 2,
    widgetId: WidgetType.PieChart,
    widgetName: WidgetName.PieChart
  },
  {
    cols: 2,
    rows: 1,
    y: 3,
    x: 4,
    widgetId: WidgetType.BarChart,
    widgetName: WidgetName.BarChart
  },
  {
    cols: 2,
    rows: 1,
    y: 2,
    x: 2,
    widgetId: WidgetType.ThroughputHeatmap,
    widgetName: WidgetName.ThroughputHeatmap
  },
  {
    cols: 6,
    rows: 2,
    y: 0,
    x: 0,
    widgetId: WidgetType.DataTable,
    widgetName: WidgetName.DataTable
  },
  {
    cols: 2,
    rows: 1,
    y: 2,
    x: 0,
    widgetId: WidgetType.CpuLineChart,
    widgetName: WidgetName.CpuLineChart
  },
  {
    cols: 2,
    rows: 1,
    y: 3,
    x: 0,
    widgetId: WidgetType.MemoryLineChart,
    widgetName: WidgetName.MemoryLineChart
  },
  {
    cols: 2,
    rows: 1,
    y: 2,
    x: 4,
    widgetId: WidgetType.MinLatencyHeatmap,
    widgetName: WidgetName.MinLatencyHeatmap
  },
  {
    cols: 2,
    rows: 1,
    y: 3,
    x: 2,
    widgetId: WidgetType.MaxLatencyHeatmap,
    widgetName: WidgetName.MaxLatencyHeatmap
  }
];
