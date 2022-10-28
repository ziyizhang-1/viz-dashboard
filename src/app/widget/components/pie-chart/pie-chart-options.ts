import { EChartsOption } from "echarts";

export const PieChartInitConfig: EChartsOption = {
  title: {
    show: false
  },
  tooltip: {
    trigger: "item",
    formatter: "{b} : {c} ({d}%)"
  },
  legend: {
    orient: "horizontal",
    type: "scroll",
    bottom: 0,
    data: ["AWS", "Azure", "AliCloud", "Tencent", "Bare Metal"]
  },
  series: [
    {
      type: 'pie',
      data: [
        {
          value: 335,
          name: 'AWS'
        },
        {
          value: 234,
          name: 'Azure'
        },
        {
          value: 456,
          name: 'AliCloud'
        },
        {
          value: 189,
          name: 'Tencent'
        },
        {
          value: 1548,
          name: 'Bare Metal'
        }
      ]
    }
  ]
};
