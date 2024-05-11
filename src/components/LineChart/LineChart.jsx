import ReactECharts from "echarts-for-react";
import * as echarts from "echarts/core";

const LineChart = () => {
  const option = {
    color: ["#80FFA5", "#00DDFF", "#37A2FF", "#FF0087", "#FFBF00"],
    title: {
      text: "Gradient Stacked Area Chart",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985",
        },
      },
    },
    legend: {
      data: ["Line 1", "Line 2", "Line 3", "Line 4", "Line 5"],
      bottom: "0%",
      height: "100%",
      padding: [0, 22, 0, 0],
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    grid: {
      // show: true,
      left: "3%",
      // right: "4%",
      bottom: "3%",
      // height: "100%",
      // containLabel: true,
      // borderColor: "#1F283E",
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        axisLine: {
          lineStyle: {
            color: "#1F283E",
          },
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        splitLine: {
          lineStyle: {
            color: "#1F283E",
          },
        },
      },
    ],
    series: [
      {
        name: "Line 1",
        type: "line",
        stack: "Line",
        smooth: true,
        lineStyle: {
          width: 5,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1),
        },
        emphasis: {
          focus: "series",
        },
        data: [600, 732, 2010, 564, 80, 640, 150],
      },
      {
        name: "Line 2",
        type: "line",
        stack: "line",
        smooth: true,
        lineStyle: {
          width: 5,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1),
        },
        emphasis: {
          focus: "series",
        },
        data: [1220, 82, 111, 234, 220, 340, 310],
      },
      {
        name: "Line 3",
        type: "line",
        stack: "line",
        smooth: true,
        lineStyle: {
          width: 5,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1),
        },
        emphasis: {
          focus: "series",
        },
        data: [320, 132, 201, 334, 190, 130, 220],
      },
      {
        name: "Line 4",
        type: "line",
        stack: "line",
        smooth: true,
        lineStyle: {
          width: 5,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1),
        },
        emphasis: {
          focus: "series",
        },
        data: [220, 402, 231, 134, 1190, 230, 1120],
      },
      {
        name: "Line 5",
        type: "line",
        stack: "line",
        smooth: true,
        lineStyle: {
          width: 5,
        },
        showSymbol: false,
        label: {
          show: true,
          position: "top",
        },
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1),
        },
        emphasis: {
          focus: "series",
        },
        data: [1220, 302, 181, 234, 1210, 290, 150],
      },
    ],
  };

  return (
    <div className="chart-container">
      <ReactECharts option={option} style={{ height: "500px" }} />
    </div>
  );
};

export default LineChart;
