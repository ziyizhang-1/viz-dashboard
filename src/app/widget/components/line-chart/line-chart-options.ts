import { EChartOption } from "echarts";

export const LineChartInitConfig: EChartOption = {
  xAxis: {
	type: 'category',
	data: ['A', 'B', 'C']
  },
  yAxis: {
	type: 'value'
  },
  series: [
	{
	  data: [120, 200, 150],
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
  tooltip: { show: true }
};