import { EChartsOption } from "echarts";

// prettier-ignore
const BS = [
  1, 2, 4, 8, 16, 32, 64
];

// prettier-ignore
const CPI = [
  1, 2, 4, 8, 16
];

// prettier-ignore
const data = [[0,0,58374],[0,1,93619],[0,2,119188],[0,3,154140],[0,4,197638],[0,5,230101],[0,6,247318],[1,0,34539],[1,1,53848],[1,2,73276],[1,3,103115],[1,4,118787],[1,5,129042],[1,6,135363],[2,0,17523],[2,1,25006],[2,2,43812],[2,3,66999],[2,4,93871],[2,5,112395],[2,6,119493],[3,0,6927],[3,1,10845],[3,2,19651],[3,3,33744],[3,4,53964],[3,5,75510],[3,6,90856],[4,0,4478],[4,1,5435],[4,2,9826],[4,3,17198],[4,4,28777],[4,5,43996],[4,6,55487]]
    .map(function (item) {
        return [item[1], item[0], item[2] || '-'];
    });

export const HeatmapInitConfig: EChartsOption = {
  tooltip: {
    position: 'top'
  },
  grid: {
    height: '50%',
    top: '10%'
  },
  xAxis: {
    type: 'category',
    name: 'Batch Size',
    data: BS,
    splitArea: {
      show: true
    }
  },
  yAxis: {
    type: 'category',
    name: 'CPI',
    data: CPI,
    splitArea: {
      show: true
    }
  },
  visualMap: {
    min: 0,
    max: 250000,
    type: 'continuous',
    orient: 'horizontal',
    left: 'center',
    bottom: '10%'
  },
  series: [
    {
      name: 'Throughput',
      type: 'heatmap',
      data: data,
      label: {
        show: true
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};
