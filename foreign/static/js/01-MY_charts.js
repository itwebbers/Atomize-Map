$(function () {
    //加载地图key
    google.charts.load('current', {
        'packages': ['corechart'],
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
    });
    // 渲染地图函数
    google.charts.setOnLoadCallback(drawMarkersMap);
    // 渲染地图函数
    google.charts.setOnLoadCallback(drawVisualization);
    //渲染地图的配置函数
    function drawMarkersMap() {
        //tooltips的数据
        var dataMap = google.visualization.arrayToDataTable([
            ['City', 'Popularity'],
            ['Perlis', 12],
            ['Kedah', 1],
            ['Pulau Pinang', 11],
            ['Perak', 13],
            ['Selangor', 1],
            ['Negeri Sembilan', 1],
            ['Melaka', 2],
            ['Johor', 1],
            ['Pahang', 10],
            ['Terengganu', 2],
            ['Kelantan', 4],
            ['Sarawak', 11],
            ['Sabah', 12],
            ['Kuala Lumpur', 18],
            ['Labuan', 11],
            ['Putrajaya', 13]
        ]);
        //地图的配置参数
        var options = {
            displayMode: 'text', //制定某种类型的地理图
            region: 'MY', // Africa
            backgroundColor: 'transparent',
            datalessRegionColor: 'transparent',
            colorAxis: {
                colors: ['#fff8ac', '#fff8ac', '#fff8ac']
            },
            width: 800,
            height: 950,
        };
        //
        var geoChart = new google.visualization.GeoChart(document.getElementById('chart_map'));
        geoChart.draw(dataMap, options);


        //设置加载状态
        $('.chart_map').hide();
        $('.version').text(NProgress.version);
        NProgress.start();

        /*
         * tooltips的配置参数
         */
        $.fn.setTips(geoChart, dataMap, 16);
    };

    function drawVisualization() {
        var geoChartsData = google.visualization.arrayToDataTable([
            ['City', 'Popularity'],
            ['MY-01', 12],
            ['MY-02', 1],
            ['MY-03', 11],
            ['MY-04', 13],
            ['MY-05', 1],
            ['MY-06', 1],
            ['MY-07', 2],
            ['MY-08', 1],
            ['MY-09', 10],
            ['MY-010', 2],
            ['MY-11', 4],
            ['MY-12', 11],
            ['MY-13', 12],
            ['MY-14', 18],
            ['MY-15', 11],
            ['MY-16', 13]
        ]);

        var geoChartsOpts = {
            region: 'MY',
            displayMode: 'regions',
            resolution: 'provinces',
            colorAxis: {
                colors: ['skyblue', 'skyblue']
            },
            backgroundColor: 'transparent',
            enableRegionInteractivity: false,
            datalessRegionColor: 'transparent',
            // defaultColor: '#ccc',
            // width: $('.nth2').width(),
            width: 800,
            height: 950,
            keepAspectRatio: true,
            // height: $(window).height()
        };
        var geochart_map = new google.visualization.GeoChart(
            document.getElementById('visualization'));
        geochart_map.draw(geoChartsData, geoChartsOpts);


        setTimeout(function () {
            // console.log(geochart)
            $('#visualization path').attr('stroke-width', 0)
            $('#geochart_map svg').children('g').children('g').eq(1).remove()
        }, 2000)
    };
    setInterval(function () {
        $.fn.setFunNum(1000)
    }, 1000);

    $.fn.setTimer($('.newTimer'));
})