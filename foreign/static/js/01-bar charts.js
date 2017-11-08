$(function () {
  google.charts.load("current", {
    packages: ["corechart"]
  });
  google.charts.setOnLoadCallback(drawChart);


  function drawChart() {
    var options = {
      title: "",
      titleTextStyle: {
        color: '#fff8ac',
        fontSize: 10,
      },
      width: 496,
      height: 560,
      chartArea: { //绘图区域
        top: 60,
        left: 250,
        width: 496,
        height: '85%'
      },
      bar: {
        groupWidth: 20
      },
      legend: {
        position: "none"
      },
      backgroundColor: 'transparent', // 画图的背景颜色
      hAxis: {
        baselineColor: 'transparent',
        gridlines: {
          color: 'transparent',
          count: 6
        },
        textStyle: {
          color: '#67cfff',
          fontSize: 11,
        },
      },
      vAxis: {
        baselineColor: '#fff',
        gridlines: {
          color: '#fff',
          count: 1
        },
        minorGridlines: {
          color: '#fff',
          count: 1
        },
        textStyle: {
          color: '#fff8ac',
          fontSize: 11,
        },
      },
    };
    var chart = new google.visualization.BarChart(document.getElementById("top_bar_div"));

    // var url = "http://127.0.0.1/work/0000workSoft/2-whb/04-MY%20map/php/chartsData.php"


    //设置图表数据
    // $.fn.setChartData(options, url, chart)

    // var data = google.visualization.arrayToDataTable(JSON.parse(datas)["data"]);
    var data = google.visualization.arrayToDataTable([
      ["Element", "Density", {
        "role": "style"
      }],
      ["PUBAT PERUBATAN UNIVERSITI MALAYA", 200, "#fff8ac"],
      ["PUBAT PERUBATAN UNIVERSITI MALAYA", 300, "#fff8ac"],
      ["PUBAT PERUBATAN UNIVERSITI MALAYA", 490, "#fff8ac"],
      ["PUBAT PERUBATAN UNIVERSITI MALAYA", 510, "#fff8ac"],
      ["PUBAT PERUBATAN UNIVERSITI MALAYA", 590, "#fff8ac"],
      ["PUBAT PERUBATAN UNIVERSITI MALAYA", 601, "#fff8ac"],
      ["PUBAT PERUBATAN UNIVERSITI MALAYA", 640, "#fff8ac"],
      ["PUBAT PERUBATAN UNIVERSITI MALAYA", 760, "#fff8ac"],
      ["PUBAT PERUBATAN UNIVERSITI MALAYA", 790, "#fff8ac"],
      ["PUBAT PERUBATAN UNIVERSITI MALAYA", 820, "#fff8ac"]
    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
      {
        calc: "stringify",
        sourceColumn: 1,
        type: "string",
        role: "annotation"
      },
      2
    ]);

    chart.draw(view, options);
  }
  $.fn.setBarLable();
})