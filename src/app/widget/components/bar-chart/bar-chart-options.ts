import { EChartsOption } from "echarts";

export const BarChartInitConfig: EChartsOption = {
  grid: {
    left: "4%",
    right: "4%",
    top: "60",
    bottom: "4%",
    containLabel: true
  },
  legend: { show: true },
  tooltip: { show: true },
  toolbox: {
    feature: {
      dataView: { show: true, readOnly: true },
      saveAsImage: { show: true },
    },
    showTitle: false
  },
  series: [
    {
      type: "bar",
      data: [43.3, 83.1, 86.4, 72.4],
      name: "4xlarge"
    },
    {
      type: "bar",
      data: [85.8, 73.4, 65.2, 53.9],
      name: "8xlarge"
    },
    {
      type: "bar",
      data: [93.7, 55.1, 82.5, 39.1],
      name: "16xlarge"
    }
  ],
  xAxis: {
    type: "category",
    data: ["CPX", "ICX", "SPR", "GNR"]
  },
  yAxis: {}
};
