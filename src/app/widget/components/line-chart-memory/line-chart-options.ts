import { EChartsOption } from "echarts";

export const LineChartInitConfig: EChartsOption = {
  xAxis: {
	type: 'category',
	data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  yAxis: {
	type: 'value'
  },
  series: [
	{
	  data: [120, 200, 150, 351, 164, 364, 753, 264, 989, 635],
	  type: 'line'
	}
  ],
  toolbox: {
    feature: {
      dataView: { show: true, readOnly: true },
      saveAsImage: { show: true },
    },
    showTitle: false
  },
  legend: { show: true },
  tooltip: { show: true, trigger: "axis" }
};