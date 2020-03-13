$(document).ready(function() {

    $.get('qd.json', function(geoJson) {
        echarts.registerMap('qd', geoJson, {});
        var myChart = echarts.init(document.getElementById('map'));
        var option = {


            tooltip: {
                trigger: 'item',
                formatter: '{b}<br/>{c} (例)'
            },
            visualMap: {
                min: 0,
                max: 20,

                left: 'right',
                realtime: false,
                calculable: true,
                inRange: {
                    color: ['#e1f5fe', '#ef5350']
                }

            },
            series: [{
                name: '青岛',
                type: 'map',
                mapType: 'qd',
                aspectScale: 1, //地图长度比
                label: {
                    normal: {
                        show: false,
                        textStyle: {
                            color: '#000'
                        }
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            color: '#333'
                        }
                    }
                },



                data: [{
                    name: '城阳区',
                    value: 0
                }, {
                    name: '李沧区',
                    value: 0
                }, {
                    name: '崂山区',
                    value: 0
                }, {
                    name: '市南区',
                    value: 1
                }, {
                    name: '市北区',
                    value: 0
                }, {
                    name: '黄岛区',
                    value: 0
                }, {
                    name: '胶州市',
                    value: 0
                }, {
                    name: '平度市',
                    value: 0
                }, {
                    name: '莱西市',
                    value: 0
                }, {
                    name: '即墨区',
                    value: 0
                }],
            }],
        }



        myChart.setOption(option);
    });
})