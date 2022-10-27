export enum WidgetType {
  Text = 1,
  PieChart = 2,
  BarChart = 3,
  DataTable = 4,
  CpuLineChart = 5,
  MemoryLineChart = 6,
  ThroughputHeatmap = 7,
  MinLatencyHeatmap = 8,
  MaxLatencyHeatmap = 9
}

export enum WidgetName {
  Text = "Console",
  PieChart = "Pie Chart",
  BarChart = "Comparison",
  DataTable = "Data Table",
  CpuLineChart = "CPU Utilization",
  MemoryLineChart = "Memory Utilization",
  ThroughputHeatmap = "Throughput (samples/sec)",
  MinLatencyHeatmap = "Min Latency (ms)",
  MaxLatencyHeatmap = "Max Latency (ms)"
}
