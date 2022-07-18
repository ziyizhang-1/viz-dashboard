import { EChartsOption } from "echarts";

export const PieChartInitConfig: EChartsOption = {
  title: {
    show: false
  },
  tooltip: {
    trigger: "item",
    formatter: "{b} : {c} ({d}%)"
  },
  // legend: {
  //   orient: "horizontal",
  //   x: "center",
  //   y: "bottom",
  //   type: "scroll",
  //   data: ["Others", "Vue", "AngularJs", "Angular", "React"]
  // },
  series: [
    {
      type: 'pie',
      data: [
        {
          value: 335,
          name: 'Direct Visit'
        },
        {
          value: 234,
          name: 'Union Ad'
        },
        {
          value: 1548,
          name: 'Search Engine'
        }
      ]
    }
  ]
};
