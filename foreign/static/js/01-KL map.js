$(function () {
    //医院的雾化数据
    var hosData = [{
            name: 'Tung Shin Hospital', // hospital name  // 医院名称
            total: 100, // function number
            type: '', // hospital type
            value: '4', // now count
            x: "315.31598",
            y: "329.47604"
        },
        {
            name: 'Selayang Hospital', // hospital name  // 医院名称
            total: 100, // function number
            type: '', // hospital type
            value: '6', // now count
            x: "391.10495",
            y: "308.72604"
        },
        {
            name: 'Chinese Hospital', // hospital name  // 医院名称
            total: 100, // function number
            type: '', // hospital type
            value: '7', // now count
            x: "375.3566",
            y: "205.3911"
        },
        {
            name: 'Gleneagles Hospital', // hospital name  // 医院名称
            total: 100, // function number
            type: '', // hospital type
            value: '9', // now count
            x: "370.50366",
            y: "138.55721"
        },
        {
            name: 'University Hospital', // hospital name  // 医院名称
            total: 100, // function number
            type: '', // hospital type
            value: '2', // now count
            x: "238.1642",
            y: "153.1062"
        },
        {
            name: 'Pantai Hospital', // hospital name  // 医院名称
            total: 100, // function number
            type: '', // hospital type
            value: '4', // now count
            x: "147.69614",
            y: "122.00824"
        },
        {
            name: 'KLF Hospital', // hospital name  // 医院名称
            total: 100, // function number
            type: '', // hospital type
            value: '6', // now count
            x: "147.8186",
            y: "255.48953"
        },
        {
            name: 'HSC Medical Hospital', // hospital name  // 医院名称
            total: 100, // function number
            type: '', // hospital type
            value: '1', // now count
            x: "193.86804",
            y: "378.00388"
        },
        {
            name: 'znader Hospital', // hospital name  // 医院名称
            total: 100, // function number
            type: '', // hospital type
            value: '4', // now count
            x: "247.01862",
            y: "500.20377"
        },
        {
            name: 'MY_KL Hospital', // hospital name  // 医院名称
            total: 100, // function number
            type: '', // hospital type
            value: '3', // now count
            x: "357.7424",
            y: "555.75024"
        },
        {
            name: 'weiai Hospital', // hospital name  // 医院名称
            total: 100, // function number
            type: '', // hospital type
            value: '9', // now count
            x: "404.41138",
            y: "475.14005"
        },
    ];
    var url = "http://127.0.0.1/work/0000workSoft/2-whb/03-provence%20map.3/php/chartsData.php";
    // $.ajax({
    //     url: "",
    //     type: "post",
    //     data: {},
    // }).then(function(data){
    //     // console.log(data)
    // }, function(error){
    //     // console.log(error)
    // });
    //医院数据的tips
    $.fn.cityHospitalTips(hosData);
    //页面左上角的时间
    $.fn.setTimer($('.newTimer'));
})