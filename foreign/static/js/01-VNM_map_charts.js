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
        let dataMap = google.visualization.arrayToDataTable([
            ['City', 'Popularity'],
            ['Tỉnh An Giang', 12],
            ['Tỉnh Bắc Giang', 1],
            ['Tỉnh Bắc Kạn', 11],
            ['Tỉnh Bạc Liêu', 13],
            ['Tỉnh Bắc Ninh', 1],
            ['Tỉnh Bà Rịa – Vũng Tàu', 1],
            ['Tỉnh Bến Tre', 2],
            ['Tỉnh Bình Định', 1],
            ['Tỉnh Bình Dương', 10],
            ['Tỉnh Bình Phước', 2],
            ['Tỉnh Bình Thuận', 4],
            ['Tỉnh Cà Mau', 11],
            ['Thành phố Cần Thơ', 12],
            ['Tỉnh Cao Bằng', 18],
            ['Tỉnh Đắk Lắk', 11],
            ['Tỉnh Đắk Nông', 13],
            ['Thành phố Đà Nẵng', 12],
            ['Tỉnh Điện Biên', 1],
            ['Tỉnh Đồng Nai', 11],
            ['Tỉnh Đồng Tháp', 13],
            ['Tỉnh Gia Lai', 1],
            ['Tỉnh Hà Giang', 1],
            ['Tỉnh Hải Dương', 2],
            ['Thành phố Hải Phòng', 1],
            ['Tỉnh Hà Nam', 10],
            ['Tỉnh Hà Nam', 2],
            ['Tỉnh Hà Tĩnh', 4],
            ['Tỉnh Hòa Bình', 11],
            ['Thành phố Hồ Chí Minh', 12],
            ['Tỉnh Hậu Giang', 18],
            ['Tỉnh Hưng Yên', 11],
            ['Tỉnh Khánh Hòa', 13],
            ['Tỉnh Kiên Giang', 12],
            ['Tỉnh Kon Tum', 1],
            ['Tỉnh Lai Châu', 11],
            ['Tỉnh Lâm Đồng', 13],
            ['Tỉnh Lạng Sơn', 1],
            ['Tỉnh Lào Cai', 1],
            ['Tỉnh Long An', 2],
            ['Tỉnh Nam Định', 1],
            ['Tỉnh Nghệ An', 10],
            ['Tỉnh Ninh Bình', 2],
            ['Tỉnh Ninh Thuận', 4],
            ['Tỉnh Phú Thọ', 11],
            ['Tỉnh Phú Yên', 12],
            ['Tỉnh Quảng Bình', 18],
            ['Tỉnh Quảng Nam', 11],
            ['Tỉnh Quảng Ngãi', 13],
            ['Tỉnh Quảng Ninh', 12],
            ['Tỉnh Quảng Trị', 1],
            ['Tỉnh Sóc Trăng', 11],
            ['Tỉnh Sơn La', 13],
            ['Tỉnh Tây Ninh', 1],
            ['Tỉnh Thái Bình', 1],
            ['Tỉnh Thái Nguyên', 2],
            ['Tỉnh Thanh Hóa', 1],
            ['Tỉnh Thừa Thiên – Huế', 10],
            ['Tỉnh Tiền Giang', 2],
            ['Tỉnh Trà Vinh', 4],
            ['Tỉnh Tuyên Quang', 11],
            ['Tỉnh Vĩnh Long', 12],
            ['Tỉnh Vĩnh Phúc', 18],
            ['Tỉnh Yên Bái', 11]
        ]);
        //地图的配置参数
        let options = {
            displayMode: 'text', //制定某种类型的地理图
            region: 'VN', // Africa
            backgroundColor: 'transparent',
            datalessRegionColor: 'transparent',
            backgroundColor: {
                fill: 'transparent'
            },
            colorAxis: {
                colors: ['#fff8ac', '#fff8ac', '#fff8ac']
            },
            chartArea: {
                width: '95%',
                height: '50%'
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
        if(geoChart){
            $.fn.setTips(geoChart, dataMap, 63);
        }else {
            return;
        }
    };

    function drawVisualization() {
        let geoChartsData = google.visualization.arrayToDataTable([
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
        let geochart_map = new google.visualization.GeoChart(
            document.getElementById('visualization'));
        
        $.fn.setMapCharts('VN', '#001d5f', 800, 950, geochart_map, geoChartsData)

        setTimeout(function () {
            $('#visualization path').attr('stroke-width', 0)
            $('#geochart_map svg').children('g').children('g').eq(1).remove()
        }, 2000)
    };
    setInterval(function () {
        $.fn.setFunNum(1000)
    }, 1000);
})