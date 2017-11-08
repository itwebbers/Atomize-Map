$(function () {
    // 设置顶部时间
    $.fn.setTimer($(".newTimer"));

    // 绘制缩略图
    google.charts.load('current', {
        'packages': ['corechart'],
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
    });
    // 渲染地图函数

    console.log($("#thumbnails2").exist())
    if ($("#thumbnails2").exist()) {
        console.log('true')
        google.charts.setOnLoadCallback(drawVisualization_MY);

        function drawVisualization_MY() {
            var geoChartsData_MY = google.visualization.arrayToDataTable([
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
            let geochart_map_MY = new google.visualization.GeoChart(
                document.getElementById('thumbnails2'));
            // 马来西亚
            $.fn.setMapCharts('MY', '#67cfff', 460, 380, geochart_map_MY, geoChartsData_MY)
        };
    } else if ($("#thumbnails1").exist()) {
        console.log('sucess')
        google.charts.setOnLoadCallback(drawVisualization_VNM);

        function drawVisualization_VNM() {
            var geoChartsData_VNM = google.visualization.arrayToDataTable([
                ['City', 'Popularity'],
                ['VN-01', 12],
                ['VN-02', 1],
                ['VN-03', 11],
                ['VN-04', 13],
                ['VN-05', 1],
                ['VN-06', 1],
                ['VN-07', 2],
                ['VN-08', 1],
                ['VN-09', 10],
                ['VN-010', 2],
                ['VN-11', 4],
                ['VN-12', 11],
                // ['Thành phố Cần Thơ', 12],
                ['VN-13', 18],
                ['VN-14', 11],
                ['VN-15', 13],
                ['VN-16', 12],
                ['VN-17', 1],
                ['VN-18', 11],
                ['VN-19', 13],
                ['VN-020', 1],
                ['VN-21', 1],
                ['VN-22', 2],
                // ['Thành phố Hải Phòng', 1],
                ['VN-23', 10],
                ['VN-24', 2],
                ['VN-25', 4],
                ['VN-26', 11],
                // ['Thành phố Hồ Chí Minh', 12],
                ['VN-27', 18],
                ['VN-28', 11],
                ['VN-29', 13],
                ['VN-030', 12],
                ['VN-31', 1],
                ['VN-32', 11],
                ['VN-33', 13],
                ['VN-34', 1],
                ['VN-35', 1],
                ['VN-36', 2],
                ['VN-37', 1],
                ['VN-38', 10],
                ['VN-39', 2],
                ['VN-040', 4],
                ['VN-41', 11],
                ['VN-42', 12],
                ['VN-43', 18],
                ['VN-44', 11],
                ['VN-45', 13],
                ['VN-46', 12],
                ['VN-47', 1],
                ['VN-48', 11],
                ['VN-49', 13],
                ['VN-50', 1],
                ['VN-51', 1],
                ['VN-52', 2],
                ['VN-53', 1],
                ['VN-54', 10],
                ['VN-55', 2],
                ['VN-56', 4],
                ['VN-57', 11],
                ['VN-58', 12],
            ]);
            let geochart_map_VNM = new google.visualization.GeoChart(
                document.getElementById('thumbnails1'));
            // 越南
            $.fn.setMapCharts('VN', '#67cfff', 460, 380, geochart_map_VNM, geoChartsData_VNM)
        };
    } else {
        return;
    }








    // if($('#thumbnails1')){
    //     // 越南
    //     function drawVisualization_VNM() {
    //         var geoChartsData = google.visualization.arrayToDataTable([
    //             ['City', 'Popularity'],
    //             ['VN-01', 12],
    //             ['VN-02', 1],
    //             ['VN-03', 11],
    //             ['VN-04', 13],
    //             ['VN-05', 1],
    //             ['VN-06', 1],
    //             ['VN-07', 2],
    //             ['VN-08', 1],
    //             ['VN-09', 10],
    //             ['VN-010', 2],
    //             ['VN-11', 4],
    //             ['VN-12', 11],
    //             // ['Thành phố Cần Thơ', 12],
    //             ['VN-13', 18],
    //             ['VN-14', 11],
    //             ['VN-15', 13],
    //             ['VN-16', 12],
    //             ['VN-17', 1],
    //             ['VN-18', 11],
    //             ['VN-19', 13],
    //             ['VN-020', 1],
    //             ['VN-21', 1],
    //             ['VN-22', 2],
    //             // ['Thành phố Hải Phòng', 1],
    //             ['VN-23', 10],
    //             ['VN-24', 2],
    //             ['VN-25', 4],
    //             ['VN-26', 11],
    //             // ['Thành phố Hồ Chí Minh', 12],
    //             ['VN-27', 18],
    //             ['VN-28', 11],
    //             ['VN-29', 13],
    //             ['VN-030', 12],
    //             ['VN-31', 1],
    //             ['VN-32', 11],
    //             ['VN-33', 13],
    //             ['VN-34', 1],
    //             ['VN-35', 1],
    //             ['VN-36', 2],
    //             ['VN-37', 1],
    //             ['VN-38', 10],
    //             ['VN-39', 2],
    //             ['VN-040', 4],
    //             ['VN-41', 11],
    //             ['VN-42', 12],
    //             ['VN-43', 18],
    //             ['VN-44', 11],
    //             ['VN-45', 13],
    //             ['VN-46', 12],
    //             ['VN-47', 1],
    //             ['VN-48', 11],
    //             ['VN-49', 13],
    //             ['VN-50', 1],
    //             ['VN-51', 1],
    //             ['VN-52', 2],
    //             ['VN-53', 1],
    //             ['VN-54', 10],
    //             ['VN-55', 2],
    //             ['VN-56', 4],
    //             ['VN-57', 11],
    //             ['VN-58', 12],
    //         ]);


    //         var geochart_map = new google.visualization.GeoChart(
    //             document.getElementById('thumbnails1'));

    //         // 越南
    //         $.fn.setMapCharts('VN', '#67cfff', 460, 380, geochart_map, geoChartsData)



    //     };
    // }else if($('#thumbnails2')){
    //     // 马来西亚
    //     function drawVisualization_MY() {
    //         var geoChartsData_MY = google.visualization.arrayToDataTable([
    //             ['City', 'Popularity'],
    //             ['MY-01', 12],
    //             ['MY-02', 1],
    //             ['MY-03', 11],
    //             ['MY-04', 13],
    //             ['MY-05', 1],
    //             ['MY-06', 1],
    //             ['MY-07', 2],
    //             ['MY-08', 1],
    //             ['MY-09', 10],
    //             ['MY-010', 2],
    //             ['MY-11', 4],
    //             ['MY-12', 11],
    //             ['MY-13', 12],
    //             ['MY-14', 18],
    //             ['MY-15', 11],
    //             ['MY-16', 13]
    //         ]);
    //         var geochart_map_MY = new google.visualization.GeoChart(
    //             document.getElementById('thumbnails1'));

    //         // 马来西亚
    //         $.fn.setMapCharts('MY', '#67cfff', 460, 380, geochart_map_MY, geoChartsData_MY)

    //         // setTimeout(function () {
    //         //     // console.log(geochart)
    //         //     $('#thumbnails path').attr('stroke-width', 0)
    //         //     $('#thumbnails svg').children('g').children('g').eq(1).remove()
    //         // }, 2000)
    //     };
    // }else {
    //     return;
    // }


    setTimeout(function () {
        // console.log(geochart)
        $('#thumbnails1 path').attr('stroke-width', 0)
        $('#thumbnails1 svg').children('g').children('g').eq(1).remove()
        $('#thumbnails2 path').attr('stroke-width', 0)
        $('#thumbnails2 svg').children('g').children('g').eq(1).remove()
    }, 2000)
})