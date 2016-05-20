
$(function () {
    $('#container').highcharts({
	    colors: ['#ADFF2F', '#C0C0C0'],
        chart: {
            type: 'column'
        },
        title: {
            text: 'Class Interactivity for <b> 12/4/2016 </b>'
        },
        xAxis: {
            categories: ['100-3335', '235-789', '125-6533', '198-5555', '238-2222', '567-3322', '898-2345', '322-3456','456-3211','333-9090', '934-3450'],
			title: {text : '<b>Teacher ID</b>'
			}
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Percentage'
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
            }
        },
        legend: {
            align: 'right',
            x: -30,
            verticalAlign: 'top',
            y: 25,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false
        },
        tooltip: {
            headerFormat: '<b>{point.x}</b><br/>',
            pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                    style: {
                        textShadow: '0 0 3px black'
                    }
                }
            }
        },
        series: [{
           name: 'Interactive',
           data: [80, 50, 73, 90, 67,70,35,30,50,80,90]

        }, {
            name: 'Non-Interactive',
			data: [20, 50, 27, 10, 33,30,65,70,50,20,10]
        }]
        
    });
});
