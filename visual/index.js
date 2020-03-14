$(document).ready(function() {

    $.get('qd.json', function(geoJson) {
        echarts.registerMap('qd', geoJson, {});
        var myChart = echarts.init(document.getElementById('map'));
        var option = {
            baseOption: {
                timeline: {
                    bottom: '6%',
                    autoPlay: true,
                    show: true,
                    data: ['1.21', '1.22', '1.23', '1.24', '1.25', '1.26', '1.27', '1.28', '1.29', '1.3', '1.31', '2.1', '2.2', '2.3', '2.4', '2.5', '2.6', '2.7', '2.8', '2.9', '2.10', '2.11', '2.12', '2.13', '2.14', '2.15', '2.16', '2.17', '2.18', '2.19', '2.20', '2.21', '2.22', '2.23', '2.24', '2.25', '2.26', '2.27', '2.28', '2.29', '3.1', '3.2', '3.3', '3.4', '3.5', '3.6', '3.7', '3.8', '3.9', '3.10', '3.11', '3.12', '3.13', '3.14'],
                    playInterval: 800,
                    lineStyle: 'none',
                    label: { show: false },
                    controlStyle: {
                        itemSize: 30,
                        showPrevBtn: false,
                        showNextBtn: false,
                        color: '#e3f2fd',
                        borderColor: '#e3f2fd'
                    },
                    top: '70%',
                    right: '10%',
                    controlPosition: 'right'
                },
                title: {
                    left: '5%',
                    textStyle: {
                        color: '#424242',
                        fontSize: 15
                    }
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{b}<br/>{c} (例)'
                },
                visualMap: {
                    min: 0,
                    max: 10,
                    show: false,
                    left: 'right',
                    realtime: true,
                    calculable: true,
                    inRange: {
                        color: ['#e3f2fd', '#d50000']
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
                                color: '#ffd54f'
                            }
                        }
                    },

                }],
            },
            options: [{ //op1
                    title: { text: '1月21日' },
                    series: [{
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
                    }]
                },
                { //op2
                    title: {
                        text: '1月22日',

                    },
                    series: [{
                        data: [

                            { name: '城阳区', value: 0 },
                            { name: '李沧区', value: 1 },
                            { name: '崂山区', value: 0 },
                            { name: '市南区', value: 1 },
                            { name: '市北区', value: 1 },
                            { name: '黄岛区', value: 0 },
                            { name: '胶州市', value: 0 },
                            { name: '平度市', value: 0 },
                            { name: '莱西市', value: 0 },
                            { name: '即墨区', value: 0 }
                        ],
                    }]
                },
                { //op3
                    title: { text: '1月23日' },
                    series: [{
                        data: [

                            { name: '城阳区', value: 0 },
                            { name: '李沧区', value: 1 },
                            { name: '崂山区', value: 0 },
                            { name: '市南区', value: 1 },
                            { name: '市北区', value: 1 },
                            { name: '黄岛区', value: 0 },
                            { name: '胶州市', value: 0 },
                            { name: '平度市', value: 0 },
                            { name: '莱西市', value: 0 },
                            { name: '即墨区', value: 0 }
                        ],
                    }]
                },
                { //op4
                    title: { text: '1月24日' },
                    series: [{
                        data: [
                            { name: '城阳区', value: 0 },
                            { name: '李沧区', value: 1 },
                            { name: '崂山区', value: 0 },
                            { name: '市南区', value: 1 },
                            { name: '市北区', value: 1 },
                            { name: '黄岛区', value: 1 },
                            { name: '胶州市', value: 0 },
                            { name: '平度市', value: 0 },
                            { name: '莱西市', value: 0 },
                            { name: '即墨区', value: 0 }
                        ],
                    }]
                },
                { //op5
                    title: { text: '1月25日' },
                    series: [{
                        data: [
                            { name: '城阳区', value: 1 },
                            { name: '李沧区', value: 1 },
                            { name: '崂山区', value: 0 },
                            { name: '市南区', value: 1 },
                            { name: '市北区', value: 1 },
                            { name: '黄岛区', value: 1 },
                            { name: '胶州市', value: 0 },
                            { name: '平度市', value: 0 },
                            { name: '莱西市', value: 1 },
                            { name: '即墨区', value: 0 }
                        ],
                    }]
                },
                { //op6
                    title: { text: '1月26日' },
                    series: [{
                        data: [
                            { name: '城阳区', value: 1 },
                            { name: '李沧区', value: 2 },
                            { name: '崂山区', value: 0 },
                            { name: '市南区', value: 1 },
                            { name: '市北区', value: 1 },
                            { name: '黄岛区', value: 2 },
                            { name: '胶州市', value: 0 },
                            { name: '平度市', value: 0 },
                            { name: '莱西市', value: 1 },
                            { name: '即墨区', value: 0 }
                        ],
                    }]
                },
                { //op7
                    title: { text: '1月27日' },
                    series: [{
                        data: [
                            { name: '城阳区', value: 1 },
                            { name: '李沧区', value: 2 },
                            { name: '崂山区', value: 0 },
                            { name: '市南区', value: 1 },
                            { name: '市北区', value: 2 },
                            { name: '黄岛区', value: 5 },
                            { name: '胶州市', value: 1 },
                            { name: '平度市', value: 0 },
                            { name: '莱西市', value: 1 },
                            { name: '即墨区', value: 0 }
                        ],
                    }]
                },
                { //op8
                    title: { text: '1月28日' },
                    series: [{
                        data: [
                            { name: '城阳区', value: 1 },
                            { name: '李沧区', value: 1 },
                            { name: '崂山区', value: 2 },
                            { name: '市南区', value: 1 },
                            { name: '市北区', value: 3 },
                            { name: '黄岛区', value: 5 },
                            { name: '胶州市', value: 1 },
                            { name: '平度市', value: 0 },
                            { name: '莱西市', value: 1 },
                            { name: '即墨区', value: 0 }
                        ],
                    }]
                },
                { //op9
                    title: { text: '1月29日' },
                    series: [{
                        data: [
                            { name: '城阳区', value: 1 },
                            { name: '李沧区', value: 1 },
                            { name: '崂山区', value: 2 },
                            { name: '市南区', value: 0 },
                            { name: '市北区', value: 3 },
                            { name: '黄岛区', value: 5 },
                            { name: '胶州市', value: 1 },
                            { name: '平度市', value: 1 },
                            { name: '莱西市', value: 1 },
                            { name: '即墨区', value: 1 }
                        ],
                    }]
                },
                { //op10
                    title: { text: '1月30日' },
                    series: [{
                        data: [
                            { name: '城阳区', value: 1 },
                            { name: '李沧区', value: 1 },
                            { name: '崂山区', value: 2 },
                            { name: '市南区', value: 0 },
                            { name: '市北区', value: 4 },
                            { name: '黄岛区', value: 6 },
                            { name: '胶州市', value: 1 },
                            { name: '平度市', value: 2 },
                            { name: '莱西市', value: 1 },
                            { name: '即墨区', value: 2 }
                        ],
                    }]
                },
                { //op11
                    title: { text: '1月31日' },
                    series: [{
                        data: [
                            { name: '城阳区', value: 1 },
                            { name: '李沧区', value: 1 },
                            { name: '崂山区', value: 2 },
                            { name: '市南区', value: 0 },
                            { name: '市北区', value: 4 },
                            { name: '黄岛区', value: 6 },
                            { name: '胶州市', value: 1 },
                            { name: '平度市', value: 2 },
                            { name: '莱西市', value: 1 },
                            { name: '即墨区', value: 2 }
                        ],
                    }]
                },
                { //op12
                    title: { text: '2月1日' },
                    series: [{
                        data: [
                            { name: '城阳区', value: 1 },
                            { name: '李沧区', value: 1 },
                            { name: '崂山区', value: 2 },
                            { name: '市南区', value: 0 },
                            { name: '市北区', value: 4 },
                            { name: '黄岛区', value: 6 },
                            { name: '胶州市', value: 1 },
                            { name: '平度市', value: 2 },
                            { name: '莱西市', value: 1 },
                            { name: '即墨区', value: 2 }
                        ],
                    }]
                },
                { //op13
                    title: { text: '2月2日' },
                    series: [{
                        data: [
                            { name: '城阳区', value: 1 },
                            { name: '李沧区', value: 2 },
                            { name: '崂山区', value: 2 },
                            { name: '市南区', value: 0 },
                            { name: '市北区', value: 4 },
                            { name: '黄岛区', value: 8 },
                            { name: '胶州市', value: 1 },
                            { name: '平度市', value: 2 },
                            { name: '莱西市', value: 1 },
                            { name: '即墨区', value: 2 }
                        ],
                    }]
                },
                { //op14
                    title: { text: '2月3日' },
                    series: [{
                        data: [
                            { name: '城阳区', value: 1 },
                            { name: '李沧区', value: 2 },
                            { name: '崂山区', value: 2 },
                            { name: '市南区', value: 0 },
                            { name: '市北区', value: 4 },
                            { name: '黄岛区', value: 9 },
                            { name: '胶州市', value: 1 },
                            { name: '平度市', value: 2 },
                            { name: '莱西市', value: 1 },
                            { name: '即墨区', value: 3 }
                        ],
                    }]
                },
                { //op15
                    title: { text: '2月4日' },
                    series: [{
                        data: [
                            { name: '城阳区', value: 2 },
                            { name: '李沧区', value: 2 },
                            { name: '崂山区', value: 2 },
                            { name: '市南区', value: 2 },
                            { name: '市北区', value: 4 },
                            { name: '黄岛区', value: 9 },
                            { name: '胶州市', value: 1 },
                            { name: '平度市', value: 3 },
                            { name: '莱西市', value: 1 },
                            { name: '即墨区', value: 5 }
                        ],
                    }]
                },
                { //op16
                    title: { text: '2月5日' },
                    series: [{
                        data: [
                            { name: '城阳区', value: 2 },
                            { name: '李沧区', value: 4 },
                            { name: '崂山区', value: 1 },
                            { name: '市南区', value: 2 },
                            { name: '市北区', value: 5 },
                            { name: '黄岛区', value: 8 },
                            { name: '胶州市', value: 1 },
                            { name: '平度市', value: 3 },
                            { name: '莱西市', value: 1 },
                            { name: '即墨区', value: 5 }
                        ],
                    }]
                },
                { //op17
                    title: { text: '2月6日' },
                    series: [{
                        data: [
                            { name: '城阳区', value: 1 },
                            { name: '李沧区', value: 4 },
                            { name: '崂山区', value: 1 },
                            { name: '市南区', value: 4 },
                            { name: '市北区', value: 6 },
                            { name: '黄岛区', value: 8 },
                            { name: '胶州市', value: 1 },
                            { name: '平度市', value: 3 },
                            { name: '莱西市', value: 1 },
                            { name: '即墨区', value: 8 }
                        ],
                    }]
                },
                { //op18
                    title: { text: '2月7日' },
                    series: [{
                        data: [
                            { name: '城阳区', value: 1 },
                            { name: '李沧区', value: 5 },
                            { name: '崂山区', value: 1 },
                            { name: '市南区', value: 4 },
                            { name: '市北区', value: 7 },
                            { name: '黄岛区', value: 8 },
                            { name: '胶州市', value: 1 },
                            { name: '平度市', value: 3 },
                            { name: '莱西市', value: 1 },
                            { name: '即墨区', value: 8 }
                        ],
                    }]
                },
                { //op19
                    title: { text: '2月8日' },
                    series: [{
                        data: [
                            { name: '城阳区', value: 1 },
                            { name: '李沧区', value: 5 },
                            { name: '崂山区', value: 2 },
                            { name: '市南区', value: 4 },
                            { name: '市北区', value: 8 },
                            { name: '黄岛区', value: 6 },
                            { name: '胶州市', value: 1 },
                            { name: '平度市', value: 3 },
                            { name: '莱西市', value: 1 },
                            { name: '即墨区', value: 8 }
                        ],
                    }]
                },
                { //op20
                    title: { text: '2月9日' },
                    series: [{
                        data: [
                            { name: '城阳区', value: 1 },
                            { name: '李沧区', value: 5 },
                            { name: '崂山区', value: 2 },
                            { name: '市南区', value: 3 },
                            { name: '市北区', value: 8 },
                            { name: '黄岛区', value: 8 },
                            { name: '胶州市', value: 1 },
                            { name: '平度市', value: 3 },
                            { name: '莱西市', value: 2 },
                            { name: '即墨区', value: 7 }
                        ],
                    }]
                },
                { //op21
                    title: { text: '2月10日' },
                    series: [{
                        data: [
                            { name: '城阳区', value: 1 },
                            { name: '李沧区', value: 4 },
                            { name: '崂山区', value: 3 },
                            { name: '市南区', value: 3 },
                            { name: '市北区', value: 9 },
                            { name: '黄岛区', value: 9 },
                            { name: '胶州市', value: 1 },
                            { name: '平度市', value: 2 },
                            { name: '莱西市', value: 3 },
                            { name: '即墨区', value: 7 }
                        ],
                    }]
                },
                { //op22
                    title: { text: '2月11日' },
                    series: [{
                        data: [
                            { name: '城阳区', value: 1 },
                            { name: '李沧区', value: 4 },
                            { name: '崂山区', value: 3 },
                            { name: '市南区', value: 3 },
                            { name: '市北区', value: 9 },
                            { name: '黄岛区', value: 9 },
                            { name: '胶州市', value: 1 },
                            { name: '平度市', value: 2 },
                            { name: '莱西市', value: 2 },
                            { name: '即墨区', value: 7 }
                        ],
                    }]
                },
                { //op23
                    title: { text: '2月12日' },
                    series: [{
                        data: [
                            { name: '城阳区', value: 1 },
                            { name: '李沧区', value: 4 },
                            { name: '崂山区', value: 3 },
                            { name: '市南区', value: 3 },
                            { name: '市北区', value: 9 },
                            { name: '黄岛区', value: 9 },
                            { name: '胶州市', value: 0 },
                            { name: '平度市', value: 1 },
                            { name: '莱西市', value: 2 },
                            { name: '即墨区', value: 7 }
                        ],
                    }]
                },
                { //op24
                    title: { text: '2月13日' },
                    series: [{
                        data: [
                            { name: '城阳区', value: 1 },
                            { name: '李沧区', value: 4 },
                            { name: '崂山区', value: 3 },
                            { name: '市南区', value: 3 },
                            { name: '市北区', value: 9 },
                            { name: '黄岛区', value: 9 },
                            { name: '胶州市', value: 0 },
                            { name: '平度市', value: 1 },
                            { name: '莱西市', value: 2 },
                            { name: '即墨区', value: 6 }
                        ],
                    }]
                },
                { //op25
                    title: { text: '2月14日' },
                    series: [{
                        data: [
                            { name: '城阳区', value: 1 },
                            { name: '李沧区', value: 5 },
                            { name: '崂山区', value: 3 },
                            { name: '市南区', value: 3 },
                            { name: '市北区', value: 9 },
                            { name: '黄岛区', value: 7 },
                            { name: '胶州市', value: 0 },
                            { name: '平度市', value: 1 },
                            { name: '莱西市', value: 2 },
                            { name: '即墨区', value: 6 }
                        ],
                    }]
                },
                { //op26
                    title: { text: '2月15日' },
                    series: [{
                        data: [
                            { name: '城阳区', value: 1 },
                            { name: '李沧区', value: 5 },
                            { name: '崂山区', value: 3 },
                            { name: '市南区', value: 4 },
                            { name: '市北区', value: 7 },
                            { name: '黄岛区', value: 5 },
                            { name: '胶州市', value: 0 },
                            { name: '平度市', value: 1 },
                            { name: '莱西市', value: 2 },
                            { name: '即墨区', value: 6 }
                        ],
                    }]
                },
                { //op27
                    title: { text: '2月16日' },
                    series: [{
                        data: [
                            { name: '城阳区', value: 1 },
                            { name: '李沧区', value: 4 },
                            { name: '崂山区', value: 3 },
                            { name: '市南区', value: 5 },
                            { name: '市北区', value: 6 },
                            { name: '黄岛区', value: 4 },
                            { name: '胶州市', value: 0 },
                            { name: '平度市', value: 1 },
                            { name: '莱西市', value: 2 },
                            { name: '即墨区', value: 6 }
                        ],
                    }]
                },
                { //op28
                    title: { text: '2月17日' },
                    series: [{
                        data: [
                            { name: '城阳区', value: 0 },
                            { name: '李沧区', value: 4 },
                            { name: '崂山区', value: 2 },
                            { name: '市南区', value: 5 },
                            { name: '市北区', value: 6 },
                            { name: '黄岛区', value: 4 },
                            { name: '胶州市', value: 0 },
                            { name: '平度市', value: 1 },
                            { name: '莱西市', value: 2 },
                            { name: '即墨区', value: 6 }
                        ],
                    }]
                },
                { //op29
                    title: { text: '2月18日' },
                    series: [{
                        data: [
                            { name: '城阳区', value: 0 },
                            { name: '李沧区', value: 4 },
                            { name: '崂山区', value: 2 },
                            { name: '市南区', value: 5 },
                            { name: '市北区', value: 6 },
                            { name: '黄岛区', value: 5 },
                            { name: '胶州市', value: 0 },
                            { name: '平度市', value: 1 },
                            { name: '莱西市', value: 2 },
                            { name: '即墨区', value: 6 }
                        ],
                    }]
                },
                { //op30
                    title: { text: '2月19日' },
                    series: [{
                        data: [
                            { name: '城阳区', value: 0 },
                            { name: '李沧区', value: 4 },
                            { name: '崂山区', value: 2 },
                            { name: '市南区', value: 5 },
                            { name: '市北区', value: 6 },
                            { name: '黄岛区', value: 4 },
                            { name: '胶州市', value: 0 },
                            { name: '平度市', value: 1 },
                            { name: '莱西市', value: 2 },
                            { name: '即墨区', value: 5 }
                        ],
                    }]
                },
                { //op31
                    title: { text: '2月20日' },
                    series: [{
                        data: [
                            { name: '城阳区', value: 0 },
                            { name: '李沧区', value: 4 },
                            { name: '崂山区', value: 2 },
                            { name: '市南区', value: 4 },
                            { name: '市北区', value: 6 },
                            { name: '黄岛区', value: 4 },
                            { name: '胶州市', value: 0 },
                            { name: '平度市', value: 1 },
                            { name: '莱西市', value: 2 },
                            { name: '即墨区', value: 4 }
                        ],
                    }]
                },
                { //op32
                    title: { text: '2月21日' },
                    series: [{
                        data: [
                            { name: '城阳区', value: 0 },
                            { name: '李沧区', value: 2 },
                            { name: '崂山区', value: 2 },
                            { name: '市南区', value: 4 },
                            { name: '市北区', value: 6 },
                            { name: '黄岛区', value: 4 },
                            { name: '胶州市', value: 0 },
                            { name: '平度市', value: 0 },
                            { name: '莱西市', value: 2 },
                            { name: '即墨区', value: 4 }
                        ],
                    }]
                },
                { //op33
                    title: { text: '2月22日' },
                    series: [{
                        data: [
                            { name: '城阳区', value: 0 },
                            { name: '李沧区', value: 2 },
                            { name: '崂山区', value: 2 },
                            { name: '市南区', value: 4 },
                            { name: '市北区', value: 6 },
                            { name: '黄岛区', value: 4 },
                            { name: '胶州市', value: 0 },
                            { name: '平度市', value: 0 },
                            { name: '莱西市', value: 2 },
                            { name: '即墨区', value: 4 }
                        ],
                    }]
                },

                { //op34
                    title: { text: '2月23日' },
                    series: [{
                        data: [
                            { name: '城阳区', value: 0 },
                            { name: '李沧区', value: 2 },
                            { name: '崂山区', value: 2 },
                            { name: '市南区', value: 4 },
                            { name: '市北区', value: 6 },
                            { name: '黄岛区', value: 4 },
                            { name: '胶州市', value: 0 },
                            { name: '平度市', value: 0 },
                            { name: '莱西市', value: 2 },
                            { name: '即墨区', value: 4 }
                        ],
                    }]
                },
                { //op35
                    title: { text: '2月24日' },
                    series: [{
                        data: [
                            { name: '城阳区', value: 0 },
                            { name: '李沧区', value: 2 },
                            { name: '崂山区', value: 2 },
                            { name: '市南区', value: 3 },
                            { name: '市北区', value: 6 },
                            { name: '黄岛区', value: 4 },
                            { name: '胶州市', value: 0 },
                            { name: '平度市', value: 0 },
                            { name: '莱西市', value: 2 },
                            { name: '即墨区', value: 2 }
                        ],
                    }]
                },
                { //op36
                    title: { text: '2月25日' },
                    series: [{
                        data: [
                            { name: '城阳区', value: 0 },
                            { name: '李沧区', value: 2 },
                            { name: '崂山区', value: 2 },
                            { name: '市南区', value: 3 },
                            { name: '市北区', value: 6 },
                            { name: '黄岛区', value: 4 },
                            { name: '胶州市', value: 0 },
                            { name: '平度市', value: 0 },
                            { name: '莱西市', value: 2 },
                            { name: '即墨区', value: 2 }
                        ],
                    }]
                },
                { //op37
                    title: { text: '2月26日' },
                    series: [{
                        data: [
                            { name: '城阳区', value: 0 },
                            { name: '李沧区', value: 2 },
                            { name: '崂山区', value: 2 },
                            { name: '市南区', value: 3 },
                            { name: '市北区', value: 5 },
                            { name: '黄岛区', value: 4 },
                            { name: '胶州市', value: 0 },
                            { name: '平度市', value: 0 },
                            { name: '莱西市', value: 2 },
                            { name: '即墨区', value: 2 }
                        ],
                    }]
                },
                { //op38
                    title: { text: '2月27日' },
                    series: [{
                        data: [
                            { name: '城阳区', value: 0 },
                            { name: '李沧区', value: 1 },
                            { name: '崂山区', value: 2 },
                            { name: '市南区', value: 3 },
                            { name: '市北区', value: 4 },
                            { name: '黄岛区', value: 3 },
                            { name: '胶州市', value: 0 },
                            { name: '平度市', value: 0 },
                            { name: '莱西市', value: 2 },
                            { name: '即墨区', value: 2 }
                        ],
                    }]
                },
                { //op39
                    title: { text: '2月28日' },
                    series: [{
                        data: [
                            { name: '城阳区', value: 0 },
                            { name: '李沧区', value: 1 },
                            { name: '崂山区', value: 1 },
                            { name: '市南区', value: 3 },
                            { name: '市北区', value: 4 },
                            { name: '黄岛区', value: 2 },
                            { name: '胶州市', value: 0 },
                            { name: '平度市', value: 0 },
                            { name: '莱西市', value: 1 },
                            { name: '即墨区', value: 2 }
                        ],
                    }]
                },
                { //op40
                    title: { text: '2月29日' },
                    series: [{
                        data: [
                            { name: '城阳区', value: 0 },
                            { name: '李沧区', value: 1 },
                            { name: '崂山区', value: 0 },
                            { name: '市南区', value: 2 },
                            { name: '市北区', value: 3 },
                            { name: '黄岛区', value: 2 },
                            { name: '胶州市', value: 0 },
                            { name: '平度市', value: 0 },
                            { name: '莱西市', value: 1 },
                            { name: '即墨区', value: 2 }
                        ],
                    }]
                },
                { //op41
                    title: { text: '3月1日' },
                    series: [{
                        data: [
                            { name: '城阳区', value: 0 },
                            { name: '李沧区', value: 1 },
                            { name: '崂山区', value: 0 },
                            { name: '市南区', value: 1 },
                            { name: '市北区', value: 2 },
                            { name: '黄岛区', value: 1 },
                            { name: '胶州市', value: 0 },
                            { name: '平度市', value: 0 },
                            { name: '莱西市', value: 0 },
                            { name: '即墨区', value: 2 }
                        ],
                    }]
                },
                { //op42
                    title: { text: '3月2日' },
                    series: [{
                        data: [
                            { name: '城阳区', value: 0 },
                            { name: '李沧区', value: 0 },
                            { name: '崂山区', value: 0 },
                            { name: '市南区', value: 0 },
                            { name: '市北区', value: 1 },
                            { name: '黄岛区', value: 0 },
                            { name: '胶州市', value: 0 },
                            { name: '平度市', value: 0 },
                            { name: '莱西市', value: 0 },
                            { name: '即墨区', value: 0 }
                        ],
                    }]
                },
                { //op43
                    title: { text: '3月3日' },
                    series: [{
                        data: [
                            { name: '城阳区', value: 0 },
                            { name: '李沧区', value: 0 },
                            { name: '崂山区', value: 0 },
                            { name: '市南区', value: 0 },
                            { name: '市北区', value: 1 },
                            { name: '黄岛区', value: 0 },
                            { name: '胶州市', value: 0 },
                            { name: '平度市', value: 0 },
                            { name: '莱西市', value: 0 },
                            { name: '即墨区', value: 0 }
                        ],
                    }]
                },
                { //op44
                    title: { text: '3月4日' },
                    series: [{
                        data: [
                            { name: '城阳区', value: 0 },
                            { name: '李沧区', value: 0 },
                            { name: '崂山区', value: 0 },
                            { name: '市南区', value: 0 },
                            { name: '市北区', value: 1 },
                            { name: '黄岛区', value: 0 },
                            { name: '胶州市', value: 0 },
                            { name: '平度市', value: 0 },
                            { name: '莱西市', value: 0 },
                            { name: '即墨区', value: 0 }
                        ],
                    }]
                },
                { //op45
                    title: { text: '3月5日' },
                    series: [{
                        data: [
                            { name: '城阳区', value: 0 },
                            { name: '李沧区', value: 0 },
                            { name: '崂山区', value: 0 },
                            { name: '市南区', value: 0 },
                            { name: '市北区', value: 1 },
                            { name: '黄岛区', value: 0 },
                            { name: '胶州市', value: 0 },
                            { name: '平度市', value: 0 },
                            { name: '莱西市', value: 0 },
                            { name: '即墨区', value: 0 }
                        ],
                    }]
                },
                { //op46
                    title: { text: '3月6日' },
                    series: [{
                        data: [
                            { name: '城阳区', value: 0 },
                            { name: '李沧区', value: 0 },
                            { name: '崂山区', value: 0 },
                            { name: '市南区', value: 0 },
                            { name: '市北区', value: 1 },
                            { name: '黄岛区', value: 0 },
                            { name: '胶州市', value: 0 },
                            { name: '平度市', value: 0 },
                            { name: '莱西市', value: 0 },
                            { name: '即墨区', value: 0 }
                        ],
                    }]
                },
                { //op47
                    title: { text: '3月7日' },
                    series: [{
                        data: [
                            { name: '城阳区', value: 0 },
                            { name: '李沧区', value: 0 },
                            { name: '崂山区', value: 0 },
                            { name: '市南区', value: 0 },
                            { name: '市北区', value: 1 },
                            { name: '黄岛区', value: 0 },
                            { name: '胶州市', value: 0 },
                            { name: '平度市', value: 0 },
                            { name: '莱西市', value: 0 },
                            { name: '即墨区', value: 0 }
                        ],
                    }]
                },
                { //op48
                    title: { text: '3月8日' },
                    series: [{
                        data: [
                            { name: '城阳区', value: 0 },
                            { name: '李沧区', value: 0 },
                            { name: '崂山区', value: 0 },
                            { name: '市南区', value: 0 },
                            { name: '市北区', value: 1 },
                            { name: '黄岛区', value: 0 },
                            { name: '胶州市', value: 0 },
                            { name: '平度市', value: 0 },
                            { name: '莱西市', value: 0 },
                            { name: '即墨区', value: 0 }
                        ],
                    }]
                },
                { //op49
                    title: { text: '3月9日' },
                    series: [{
                        data: [
                            { name: '城阳区', value: 0 },
                            { name: '李沧区', value: 0 },
                            { name: '崂山区', value: 0 },
                            { name: '市南区', value: 0 },
                            { name: '市北区', value: 1 },
                            { name: '黄岛区', value: 0 },
                            { name: '胶州市', value: 0 },
                            { name: '平度市', value: 0 },
                            { name: '莱西市', value: 0 },
                            { name: '即墨区', value: 0 }
                        ],
                    }]
                },
                { //op50
                    title: { text: '3月10日' },
                    series: [{
                        data: [
                            { name: '城阳区', value: 0 },
                            { name: '李沧区', value: 0 },
                            { name: '崂山区', value: 0 },
                            { name: '市南区', value: 0 },
                            { name: '市北区', value: 1 },
                            { name: '黄岛区', value: 0 },
                            { name: '胶州市', value: 0 },
                            { name: '平度市', value: 1 },
                            { name: '莱西市', value: 0 },
                            { name: '即墨区', value: 0 }
                        ],
                    }]
                },
                { //op49
                    title: { text: '3月11日' },
                    series: [{
                        data: [
                            { name: '城阳区', value: 0 },
                            { name: '李沧区', value: 0 },
                            { name: '崂山区', value: 0 },
                            { name: '市南区', value: 0 },
                            { name: '市北区', value: 0 },
                            { name: '黄岛区', value: 0 },
                            { name: '胶州市', value: 0 },
                            { name: '平度市', value: 1 },
                            { name: '莱西市', value: 0 },
                            { name: '即墨区', value: 0 }
                        ],
                    }]
                },
                { //op49
                    title: { text: '3月11日' },
                    series: [{
                        data: [
                            { name: '城阳区', value: 0 },
                            { name: '李沧区', value: 0 },
                            { name: '崂山区', value: 0 },
                            { name: '市南区', value: 0 },
                            { name: '市北区', value: 0 },
                            { name: '黄岛区', value: 0 },
                            { name: '胶州市', value: 0 },
                            { name: '平度市', value: 1 },
                            { name: '莱西市', value: 0 },
                            { name: '即墨区', value: 0 }
                        ],
                    }]
                },
                { //op49
                    title: { text: '3月12日' },
                    series: [{
                        data: [
                            { name: '城阳区', value: 0 },
                            { name: '李沧区', value: 0 },
                            { name: '崂山区', value: 0 },
                            { name: '市南区', value: 0 },
                            { name: '市北区', value: 0 },
                            { name: '黄岛区', value: 0 },
                            { name: '胶州市', value: 0 },
                            { name: '平度市', value: 1 },
                            { name: '莱西市', value: 0 },
                            { name: '即墨区', value: 0 }
                        ],
                    }]
                },
                { //op49
                    title: { text: '3月13日' },
                    series: [{
                        data: [
                            { name: '城阳区', value: 0 },
                            { name: '李沧区', value: 0 },
                            { name: '崂山区', value: 0 },
                            { name: '市南区', value: 0 },
                            { name: '市北区', value: 0 },
                            { name: '黄岛区', value: 0 },
                            { name: '胶州市', value: 0 },
                            { name: '平度市', value: 1 },
                            { name: '莱西市', value: 0 },
                            { name: '即墨区', value: 0 }
                        ],
                    }]
                }, { //op49
                    title: { text: '3月14日' },
                    series: [{
                        data: [
                            { name: '城阳区', value: 0 },
                            { name: '李沧区', value: 0 },
                            { name: '崂山区', value: 0 },
                            { name: '市南区', value: 0 },
                            { name: '市北区', value: 0 },
                            { name: '黄岛区', value: 0 },
                            { name: '胶州市', value: 0 },
                            { name: '平度市', value: 1 },
                            { name: '莱西市', value: 0 },
                            { name: '即墨区', value: 0 }
                        ],
                    }]
                },
            ],
        }



        myChart.setOption(option);
    });
})