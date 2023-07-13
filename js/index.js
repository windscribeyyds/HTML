// 柱状图 炉顶温度压力
(function () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  // 指定配置和数据
  var option = {
    color: ["#87CEEB"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    grid: {
      left: "0%",
      top: "20%",
      right: "0%",
      bottom: "12%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: ["东南", "西北", "东北", "西南"],
        axisTick: {
          alignWithLabel: true,
        },
        axisLabel: {
          color: "rgba(255,255,255,.6)",
          fontSize: 14,
        },
        axisLine: {
          show: false,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          color: "rgba(255,255,255,.6)",
          fontSize: 12,
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.2)",
          },
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.2)",
          },
        },
      },
    ],
    series: [
      {
        name: "",
        type: "bar",
        barWidth: "35%",
        data: [327, 277, 332, 281],
        itemStyle: {
          borderRadius: 5,
        },
        label: {
          show: true,
          position: "top",
          color: "inherit",
          fontWeight: 600,
        },
      },
    ],
  };
  // 把配置给实例对象
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
  // 数据变化
  var dataAll = [
    { year: "temp", data: [327, 277, 332, 281] },
    { year: "stress", data: [223, 223, 222, 223] },
  ];
  var xdata = [
    ["东南", "西北", "东北", "西南"],
    ["第一点", "第二点", "第三点", "设定值"],
  ];
  $(".bar h2").on("click", "a", function () {
    option.series[0].data = dataAll[$(this).index()].data;
    option.xAxis[0].data = xdata[$(this).index()];
    if ($(this).index() == 1) {
      document.getElementById("temp").className = "off";
      document.getElementById("stress").className = "on";
    } else {
      document.getElementById("temp").className = "on";
      document.getElementById("stress").className = "off";
    }
    myChart.setOption(option);
  });
})();

// 折线图 风压
(function () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".line .chart"));
  // (1)准备数据
  var data = {
    year: [
      [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
      [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
    ],
  };
  // 2. 指定配置和数据
  var option = {
    color: ["#00f2f1", "#ed3f35"],
    tooltip: {
      // 通过坐标轴来触发
      trigger: "axis",
      confine: true,
    },
    legend: {
      // 距离容器
      right: "12%",
      top: "0%",
      textStyle: {
        // 修饰图例文字的颜色
        color: "rgba(255,255,255,.8)",
        // 图例文本对齐
        rich: {
          verticalAlign: "middle",
          padding: [0, 0, -3.2, 0], //[上、右、下、左]
        },
      }
      // 如果series 里面设置了name，此时图例组件的data可以省略
      // data: ["邮件营销", "联盟广告"]
    },
    grid: {
      left: "10",
      top: "30",
      right: "10",
      bottom: "26",
      show: true,
      borderColor: "rgba(255,255,255,.2)",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
      ],
      // 去除刻度
      axisTick: {
        show: false,
      },
      // 修饰刻度标签的颜色
      axisLabel: {
        color: "rgba(255,255,255,.7)",
      },
      // 去除x坐标轴的颜色
      axisLine: {
        show: false,
      },
      // 修改x轴分割线的颜色
      // splitLine: {
      //   show: true,
      //   lineStyle: {
      //     color: "rgba(255,255,255,.2)",
      //   },
      // },
    },
    yAxis: {
      type: "value",
      // 去除刻度
      axisTick: {
        show: false,
      },
      // 去除y坐标轴的颜色
      axisLine: {
        show: false,
      },
      // 修饰刻度标签的颜色
      axisLabel: {
        color: "rgba(255,255,255,.7)",
      },
      // 修改y轴分割线的颜色
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,.2)",
        },
      },
    },
    series: [
      {
        name: "冷风压力",
        type: "line",
        stack: "总量",
        // 是否让线条圆滑显示
        smooth: true,
        data: data.year[0],
      },
      {
        name: "热风压力",
        type: "line",
        stack: "总量",
        smooth: true,
        data: data.year[1],
      },
    ],
  };
  // 3. 把配置和数据给实例对象
  myChart.setOption(option);

  // 重新把配置好的新数据给实例对象
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

// 饼形图 炉顶煤气分析
(function () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".pie .chart"));
  option = {
    tooltip: {
      trigger: "item",
      confine: true,
    },
    legend: {
      top: "78%",
      itemWidth: 12,
      itemHeight: 12,
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: 14,
        // 图例文本对齐
        rich: {
          verticalAlign: "middle",
        },
        padding: [0, 0, -5, 0], //[上、右、下、左]
      },
    },
    series: [
      {
        name: "炉顶煤气分析",
        type: "pie",
        center: ["50%", "39%"],
        radius: ["36%", "60%"],
        color: ["#4169E1", "#00FFFF", "#00BFFF"],
        label: { show: false },
        labelLine: { show: false },
        data: [
          { value: 22.13, name: "CO(%)" },
          { value: 22.08, name: "CO₂(%)" },
          { value: 1.22, name: "H₂(%)" },
        ],
      },
    ],
  };
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

// 喷煤参数多边形模块
(function () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".bar1 .chart"));
  option = {
    tooltip: {
      trigger: "item",
      position: { left: 13, top: -18 },
      hideDelay: 3000,
      fontSize: 16,
    },
    radar: {
      center: ["50%", "46%"],
      radius: 63,
      indicator: [
        { name: "喷煤设定(t/h)", max: 50 },
        { name: "上小时\r\n喷煤量(t)", max: 50 },
        { name: "本小时\r\n喷煤量(t)", max: 50 },
        { name: "富氧阀开度(%)", max: 40 },
        { name: "大气湿度\r\n(g/m³)", max: 100 },
        { name: "风口个数", max: 30 },
      ],
      splitNumber: 4,
      axisNameGap: 10,
      axisLine: {
        //指向外圈文本的分隔线样式
        lineStyle: {
          color: "rgba(255,255,255,.5)",
        },
      },
      splitLine: {
        lineStyle: {
          color: ["rgba(255,255,255,.3)"],
          width: 1,
        },
      },
      splitArea: {
        areaStyle: {
          color: ["transparent"],
        },
      },
      axixName: {
        color: "rgba(255,255,255,.8)",
        fontSize: 14,
      },
    },
    series: [
      {
        name: "======喷煤参数======",
        type: "radar",
        symbol: "none",
        data: [
          {
            value: [40, 39.93, 18.02, 24.92, 12.2, 30],
          },
        ],
        itemStyle: {
          color: "#00ffff",
        },
        areaStyle: {
          opacity: 0.3,
        },
      },
    ],
  };
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

// 折线图 风量
(function () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".line1 .chart"));
  option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        lineStyle: {
          color: "#dddc6b",
        },
      },
    },
    legend: {
      top: "0%",
      textStyle: {
        color: "rgba(255,255,255,.8)",
        fontSize: 12,
        // 图例文本对齐
        rich: {
          verticalAlign: "middle",
          padding: [0, 0, -3, 0], //[上、右、下、左]
        },
      }
    },
    grid: {
      left: "10",
      top: "30",
      right: "10",
      bottom: "26",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        axisLabel: {
          color: "rgba(255,255,255,.7)",
          fontSize: 14,
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.3)",
          },
        },
        data: [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "27",
          "28",
          "29",
          "30",
        ],
      },
      {
        axisPointer: { show: false },
        axisLine: { show: false },
        position: "bottom",
        offset: 20,
      },
    ],
    yAxis: [
      {
        type: "value",
        axisTick: { show: false },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.2)",
          },
        },
        axisLabel: {
          color: "rgba(255,255,255,.7)",
          fontSize: 12,
        },

        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.2)",
          },
        },
      },
    ],
    series: [
      {
        name: "冷风流量",
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          color: "#0184d5",
          width: 2,
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "rgba(1, 132, 213, 0.4)",
              },
              {
                offset: 0.8,
                color: "rgba(1, 132, 213, 0.1)",
              },
            ],
            false
          ),
          shadowColor: "rgba(0, 0, 0, 0.1)",
        },
        itemStyle: {
          color: "#0184d5",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12,
        },
        data: [
          30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 20, 40, 30, 40, 30, 40, 30,
          40, 30, 60, 20, 40, 20, 40, 30, 60, 20, 40, 20, 40,
        ],
      },
      {
        name: "热风流量",
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          color: "#00d887",
          width: 2,
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "rgba(0, 216, 135, 0.4)",
              },
              {
                offset: 0.8,
                color: "rgba(0, 216, 135, 0.1)",
              },
            ],
            false
          ),
          shadowColor: "rgba(0, 0, 0, 0.1)",
        },
        itemStyle: {
          color: "#00d887",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12,
        },
        data: [
          50, 30, 50, 60, 10, 50, 30, 50, 60, 40, 60, 40, 80, 30, 50, 60, 10,
          50, 30, 70, 20, 50, 10, 40, 50, 30, 70, 20, 50, 10, 40,
        ],
      },
    ],
  };
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

// 压力指数模块
(function () {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".pie1  .chart"));
  // 2. 指定配置项和数据
  var option = {
    tooltip: {
      trigger: "item",
    },
    // 注意颜色写的位置
    color: ["#32c5e9", "#1d9dff", "#006cff", "#ff9f7f"],
    series: [
      {
        name: "压力指数",
        type: "pie",
        // 如果radius是百分比则必须加引号
        radius: ["20%", "70%"],
        center: ["50%", "43%"],
        roseType: "radius",
        data: [
          { value: 1.58, name: "风口高压" },
          { value: 0.504, name: "风口中压" },
          { value: 0.528, name: "压缩空气" },
          { value: 1.88, name: "氮气总管" },
        ],
        // 修饰饼形图文字相关的样式label对象
        label: {
          color: "inherit",
          fontSize: 14,
          width: 30,
          overflow: "breakAll",
          fontWeight: 600,
        },
        // 修饰引导线样式
        labelLine: {
          // 连接到图形的线长度
          length: 10,
          // 连接到文字的线长度
          length2: 10,
        },
      },
    ],
  };
  // 3. 配置项和数据给我们的实例化对象
  myChart.setOption(option);
  // 4. 当我们浏览器缩放的时候，图表也等比例缩放
  window.addEventListener("resize", function () {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
  });
})();

// 统一设置出铁口柱状图，odata：数据
function taphole_opt(odata) {
  var max = [1700, 15, 1, 1]; //最大值
  var min = [1200, 5, 0, 0]; //最小值
  //数据归一化
  var data = [
    {
      value: (((odata[0] - min[0]) / (max[0] - min[0])) * 100).toFixed(0),
      name: odata[0],
      label: {
        formatter: "{b}℃",
      },
    },
    {
      value: (((odata[1] - min[1]) / (max[1] - min[1])) * 100).toFixed(1),
      name: odata[1],
      label: {
        formatter: "{b}M/s",
      },
    },
    // (odata[2] * 100).toFixed(0),
    // (odata[3] * 100).toFixed(0),
    {
      value: 80,
      label: {
        formatter: "NaN",
      },
    },
    {
      value: 80,
      label: {
        formatter: "NaN",
      },
    },
  ];
  var titlename = ["温度", "流速", "硅含量", "渣铁比"];
  var valdata = [100, 100, 100, 100];
  var myColor = ["#1089E7", "#8B78F6", "#56D0E3", "#9fe6b8"];
  var option = {
    //图标位置
    grid: {
      top: "6%",
      left: "23%",
      bottom: "30%",
      right: "6%",
    },
    // title: {
    //   text: "出铁时长： 00:12:34",
    //   bottom: 28,
    //   left: 36,
    //   textAlign: "left",
    //   textStyle: {
    //     color: "#fff",
    //     fontWeight: 20,
    //   },
    // },
    xAxis: {
      show: false,
      min: 0,
      max: 100,
    },
    yAxis: [
      {
        show: true,
        data: titlename,
        inverse: true,
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: "#fff",
          fontSize: 14,
          rich: {
            lg: {
              backgroundColor: "#339911",
              color: "#fff",
              borderRadius: 15,
              // padding: 5,
              align: "center",
              width: 15,
              height: 15,
            },
          },
        },
      },
      {
        show: false,
        inverse: true,
        data: valdata,
        axisLabel: {
          fontSize: 12,
          color: "#fff",
        },
      },
    ],
    series: [
      {
        name: "条",
        type: "bar",
        yAxisIndex: 0,
        data: data,
        barCategoryGap: 50,
        barWidth: 12,
        animation: false, //关闭动画
        itemStyle: {
          borderRadius: 20,
          color: function (params) {
            var num = myColor.length;
            return myColor[params.dataIndex % num];
          },
        },
        label: {
          show: true,
          fontSize: 14,
          color: "#fff",
          textShadowColor: "#000",
          textShadowBlur: 6,
          position: "inside",
          offset: [6, 1.6],
          formatter: "{c}%",
        },
      },
      {
        name: "框",
        type: "bar",
        yAxisIndex: 1,
        barCategoryGap: 50,
        data: valdata,
        barWidth: 16,
        itemStyle: {
          color: "none",
          borderColor: "#00c1de",
          borderWidth: 3,
          borderRadius: 15,
        },
      },
    ],
  };
  return option;
}

// 1#出铁口柱状图模块
(function () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".taphole1 .chart"));
  // odata:温度，流速，硅含量，渣铁比
  var odata = [1600, 13.0, 0.67, 0.56];
  // taphole_opt设置出铁口柱状图
  var option = taphole_opt(odata);
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option, true);
  //定时更新
  setInterval(function () {
    // axios.get("http://localhost:5109/api/Login?datatable=mitap&project=miTem").then(function (res) {
    //   console.log(res);
    //   odata[0] = res.data; //获取数据 温度
    // })
    // axios.get("http://localhost:5109/api/Login?datatable=mitap&project=miVel").then(function (res) {
    //   console.log(res);
    //   odata[1] = res.data; //获取数据 流速
    // })
    odata[0] = (Math.random() * 100 + 1500).toFixed(0);
    odata[1] = (Math.random() * 2 + 10).toFixed(1);
    option = taphole_opt(odata);
    //重新绘制 
    myChart.setOption(option);
  }, 1000);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

// 2#出铁口柱状图模块
(function () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".taphole2 .chart"));
  // odata:温度，流速，硅含量，渣铁比
  var odata = [1542, 10.6, 0.77, 0.46];
  // taphole_opt设置出铁口柱状图
  var option = taphole_opt(odata);
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

// 3#出铁口柱状图模块
(function () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".taphole3 .chart"));
  // odata:温度，流速，硅含量，渣铁比
  var odata = [1572, 8.6, 0.37, 0.36];
  // taphole_opt设置出铁口柱状图
  var option = taphole_opt(odata);
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

// 4#出铁口柱状图模块
(function () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".taphole4 .chart"));
  // odata:温度，流速，硅含量，渣铁比
  var odata = [1612, 12.0, 0.26, 0.61];
  // taphole_opt设置出铁口柱状图
  var option = taphole_opt(odata);
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

// 统一设置实时铁水信息折线图（温度，流速，时间）
function tline_opt(Temperature, CurrentSpeed, timeData) {
  var option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "line",
      },
      formatter: function (params) {
        /// alert(JSON.stringify(params)); 显示数据格式
        var res = "<div><p>&ensp;时间: " + params[0].name + "</p></div>";
        for (var i = 0; i < params.length; i++) {
          if (params[i].data != undefined) {
            res +=
              "<p>" +
              params[i].marker +
              params[i].seriesName +
              ": " +
              params[i].data +
              "</p>";
          }
        }
        return res;
      },
    },
    legend: {
      show: false,
    },
    toolbox: {
      show: true,
      z: -10,
      top: -6,
      feature: {
        dataZoom: {
          yAxisIndex: "none",
        },
        restore: {},
        saveAsImage: {},
      },
    },
    axisPointer: {
      link: { xAxisIndex: "all" },
    },
    yAxis: [
      {
        gridIndex: 0,
        name: "温度(℃)",
        nameLocation: "center",
        nameTextStyle: {
          padding: [0, 0, 26, 0],
          color: "rgba(255,255,255,.8)",
          fontSize: 15,
        },
        type: "value",
        scale: true,
        // min:1200,
        // max:1700,
        axisLine: {
          show: true,
          lineStyle: {
            width: 2,
            color: "rgba(255,255,255,.4)",
          },
        },
        axisTick: {
          show: true,
          lineStyle: {
            width: 2,
            color: "rgba(255,255,255,.4)",
          },
        },
        axisLabel: {
          fontSize: 10,
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)",
          },
        },
      },
      {
        gridIndex: 1,
        name: "流速(M/s)",
        nameLocation: "center",
        nameTextStyle: {
          padding: [0, 0, 26, 0],
          color: "rgba(255,255,255,.8)",
          fontSize: 15,
        },
        type: "value",
        scale: true,
        // min:5,
        // max:20,
        axisLine: {
          show: true,
          lineStyle: {
            width: 2,
            color: "rgba(255,255,255,.4)",
          },
        },
        axisTick: {
          show: true,
          lineStyle: {
            width: 2,
            color: "rgba(255,255,255,.4)",
          },
        },
        axisLabel: {
          fontSize: 10,
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)",
          },
        },
      },
    ],
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        axisLine: { onZero: true },
        data: timeData,
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: "rgba(255,255,255,.1)",
          },
        },
      },
      {
        gridIndex: 1,
        type: "category",
        boundaryGap: false,
        axisLine: { onZero: true },
        data: timeData,
        axisLine: {
          show: true,
          lineStyle: {
            color: "rgba(255,255,255,.4)",
            width: 1.6,
          },
        },
        axisTick: {
          show: true,
          lineStyle: {
            width: 1,
            color: "rgba(255,255,255,.4)",
          },
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: "rgba(255,255,255,.1)",
          },
        },
      },
    ],
    grid: [
      {
        left: 70,
        right: 20,
        top: "4%",
        height: "35%",
      },
      {
        left: 70,
        right: 20,
        top: "45%",
        height: "35%",
      },
    ],
    series: [
      {
        name: "温度(℃)",
        type: "line",
        xAxisIndex: 0,
        yAxisIndex: 0,
        showSymbol: false,
        // hoverAnimation: false,
        data: Temperature,
        itemStyle: {
          color: "#0184d5",
        },
        smooth: 0.3, // 平滑
        areaStyle: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "rgba(1, 132, 213, 0.4)",
              },
              {
                offset: 0.8,
                color: "rgba(1, 132, 213, 0.1)",
              },
            ],
            false
          ),
          shadowColor: "rgba(0, 0, 0, 0.1)",
        },
      },
      {
        name: "流速(M/s)",
        type: "line",
        xAxisIndex: 1,
        yAxisIndex: 1,
        showSymbol: false,
        hoverAnimation: false,
        data: CurrentSpeed,
        itemStyle: {
          color: "#00d887",
        },
        smooth: 0.3, // 平滑
        areaStyle: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "rgba(0, 216, 135, 0.4)",
              },
              {
                offset: 0.8,
                color: "rgba(0, 216, 135, 0.1)",
              },
            ],
            false
          ),
          shadowColor: "rgba(0, 0, 0, 0.1)",
        },
      },
    ],
  };
  return option;
}

//1#出铁口-实时铁水信息折线图
(function () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".tline1 .chart"));
  /*创建随机数数组*/
  var data1 = [];
  for (var i = 0; i < 120; i++) {
    data1.push((Math.random() * 100 + 1500).toFixed(0));
  }
  /*创建随机数数组*/
  var data2 = [];
  for (var i = 0; i < 120; i++) {
    data2.push((Math.random() * 5 + 6).toFixed(1));
  }
  /*创建时间数组*/
  var times = [];
  var hours = [8, 9, 10, 11, 12, 1, 2, 3, 4, 5];
  for (var h in hours) {
    for (var min = 0; min < 60; min += 5) {
      times.push(("0" + hours[h]).slice(-2) + ":" + ("0" + min).slice(-2));
    }
  }
  //数据1：温度
  // var Temperature = [1530, 1570, 1531, 1510, 1534, 1520, 1530, 1520];
  var Temperature = data1;
  //数据2：流速
  // var CurrentSpeed = [7.2, 7.3, 7.1, 7.2, 7.3, 7.1, 7.2, 7.8];
  var CurrentSpeed = data2;
  //x轴
  // var timeData = ["8:00", "8:01", "8:02", "8:03", "8:04", "8:05", "8:06", "8:07"];
  var timeData = times;
  // tline_opt设置实时铁水信息折线图
  option = tline_opt(Temperature, CurrentSpeed, timeData);
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  //获取时间
  function getTime() {
    // var h = dt.getHours().toString(); //获取时
    var m = dt.getMinutes().toString(); //获取分
    var s = dt.getSeconds(); //获取秒
    return ("0" + m).slice(-2) + ":" + ("0" + s).slice(-2);
  }
  //定时更新
  setInterval(function () {
    //当长度大于120时，去除数组首元素
    if (timeData.length > 120) {
      timeData.shift();
      Temperature.shift();
      CurrentSpeed.shift();
    }
    //将新值添加到数组中
    // console.log(getTime());
    timeData.push(getTime());
    Temperature.push((Math.random() * 100 + 1500).toFixed(0));
    CurrentSpeed.push((Math.random() * 5 + 6).toFixed(1));
    // axios
    //   .get("http://localhost:5109/api/Login?datatable=mitap&project=miTem")
    //   .then(function (res) {
    //     console.log(res);
    //     Temperature.push(res.data);
    //   });
    // axios
    //   .get("http://localhost:5109/api/Login?datatable=mitap&project=miVel")
    //   .then(function (res) {
    //     console.log(res);
    //     CurrentSpeed.push(res.data);
    //   });
    //重新绘制
    myChart.setOption(tline_opt(Temperature, CurrentSpeed, timeData));
  }, 1000);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

//2#出铁口-实时铁水信息折线图
(function () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".tline2 .chart"));
  /*创建随机数数组*/
  var data1 = [];
  for (var i = 0; i < 120; i++) {
    data1.push((Math.random() * 100 + 1500).toFixed(0));
  }
  /*创建随机数数组*/
  var data2 = [];
  for (var i = 0; i < 120; i++) {
    data2.push((Math.random() * 5 + 6).toFixed(1));
  }
  /*创建时间数组*/
  var times = [];
  var hours = [8, 9, 10, 11, 12, 1, 2, 3, 4, 5];
  for (var h in hours) {
    for (var min = 0; min < 60; min += 5) {
      times.push(("0" + hours[h]).slice(-2) + ":" + ("0" + min).slice(-2));
    }
  }
  //数据1：温度
  // var Temperature = [1530, 1570, 1531, 1510, 1534, 1520, 1530, 1520];
  var Temperature = data1;
  //数据2：流速
  // var CurrentSpeed = [7.2, 7.3, 7.1, 7.2, 7.3, 7.1, 7.2, 7.8];
  var CurrentSpeed = data2;
  //x轴
  // var timeData = ["8:00", "8:01", "8:02", "8:03", "8:04", "8:05", "8:06", "8:07"];
  var timeData = times;
  // tline_opt设置实时铁水信息折线图
  option = tline_opt(Temperature, CurrentSpeed, timeData);
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  //获取时间
  function getTime() {
    // var h = dt.getHours().toString(); //获取时
    var m = dt.getMinutes().toString(); //获取分
    var s = dt.getSeconds(); //获取秒
    return ("0" + m).slice(-2) + ":" + ("0" + s).slice(-2);
  }
  //定时更新
  setInterval(function () {
    //当长度大于120时，去除数组首元素
    if (timeData.length > 120) {
      timeData.shift();
      Temperature.shift();
      CurrentSpeed.shift();
    }
    //将新值添加到数组中
    timeData.push(getTime());
    Temperature.push((Math.random() * 100 + 1500).toFixed(0));
    CurrentSpeed.push((Math.random() * 5 + 6).toFixed(1));
    //重新绘制
    myChart.setOption(tline_opt(Temperature, CurrentSpeed, timeData));
  }, 1000);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

//3#出铁口-实时铁水信息折线图
(function () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".tline3 .chart"));
  /*创建随机数数组*/
  var data1 = [];
  for (var i = 0; i < 120; i++) {
    data1.push((Math.random() * 100 + 1500).toFixed(0));
  }
  /*创建随机数数组*/
  var data2 = [];
  for (var i = 0; i < 120; i++) {
    data2.push((Math.random() * 5 + 6).toFixed(1));
  }
  /*创建时间数组*/
  var times = [];
  var hours = [8, 9, 10, 11, 12, 1, 2, 3, 4, 5];
  for (var h in hours) {
    for (var min = 0; min < 60; min += 5) {
      times.push(("0" + hours[h]).slice(-2) + ":" + ("0" + min).slice(-2));
    }
  }
  //数据1：温度
  // var Temperature = [1530, 1570, 1531, 1510, 1534, 1520, 1530, 1520];
  var Temperature = data1;
  //数据2：流速
  // var CurrentSpeed = [7.2, 7.3, 7.1, 7.2, 7.3, 7.1, 7.2, 7.8];
  var CurrentSpeed = data2;
  //x轴
  // var timeData = ["8:00", "8:01", "8:02", "8:03", "8:04", "8:05", "8:06", "8:07"];
  var timeData = times;
  // tline_opt设置实时铁水信息折线图
  option = tline_opt(Temperature, CurrentSpeed, timeData);
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  //获取时间
  function getTime() {
    // var h = dt.getHours().toString(); //获取时
    var m = dt.getMinutes().toString(); //获取分
    var s = dt.getSeconds(); //获取秒
    return ("0" + m).slice(-2) + ":" + ("0" + s).slice(-2);
  }
  //定时更新
  setInterval(function () {
    //当长度大于120时，去除数组首元素
    if (timeData.length > 120) {
      timeData.shift();
      Temperature.shift();
      CurrentSpeed.shift();
    }
    //将新值添加到数组中
    timeData.push(getTime());
    Temperature.push((Math.random() * 100 + 1500).toFixed(0));
    CurrentSpeed.push((Math.random() * 5 + 6).toFixed(1));
    //重新绘制
    myChart.setOption(tline_opt(Temperature, CurrentSpeed, timeData));
  }, 1000);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

//4#出铁口-实时铁水信息折线图
(function () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".tline4 .chart"));
  /*创建随机数数组*/
  var data1 = [];
  for (var i = 0; i < 120; i++) {
    data1.push((Math.random() * 100 + 1500).toFixed(0));
  }
  /*创建随机数数组*/
  var data2 = [];
  for (var i = 0; i < 120; i++) {
    data2.push((Math.random() * 5 + 6).toFixed(1));
  }
  /*创建时间数组*/
  var times = [];
  var hours = [8, 9, 10, 11, 12, 1, 2, 3, 4, 5];
  for (var h in hours) {
    for (var min = 0; min < 60; min += 5) {
      times.push(("0" + hours[h]).slice(-2) + ":" + ("0" + min).slice(-2));
    }
  }
  //数据1：温度
  // var Temperature = [1530, 1570, 1531, 1510, 1534, 1520, 1530, 1520];
  var Temperature = data1;
  //数据2：流速
  // var CurrentSpeed = [7.2, 7.3, 7.1, 7.2, 7.3, 7.1, 7.2, 7.8];
  var CurrentSpeed = data2;
  //x轴
  // var timeData = ["8:00", "8:01", "8:02", "8:03", "8:04", "8:05", "8:06", "8:07"];
  var timeData = times;
  // tline_opt设置实时铁水信息折线图
  option = tline_opt(Temperature, CurrentSpeed, timeData);
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  //获取时间
  function getTime() {
    // var h = dt.getHours().toString(); //获取时
    var m = dt.getMinutes().toString(); //获取分
    var s = dt.getSeconds(); //获取秒
    return ("0" + m).slice(-2) + ":" + ("0" + s).slice(-2);
  }
  //定时更新
  setInterval(function () {
    //当长度大于120时，去除数组首元素
    if (timeData.length > 120) {
      timeData.shift();
      Temperature.shift();
      CurrentSpeed.shift();
    }
    //将新值添加到数组中
    timeData.push(getTime());
    Temperature.push((Math.random() * 100 + 1500).toFixed(0));
    CurrentSpeed.push((Math.random() * 5 + 6).toFixed(1));
    //重新绘制
    myChart.setOption(tline_opt(Temperature, CurrentSpeed, timeData));
  }, 1000);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
