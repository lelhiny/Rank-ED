$(function () {
    $('#container').highcharts({
	    colors: ['#ADFF2F','#8bbc21','#1aadce'],
        chart: {
            type: 'areaspline',
        },
        title: {
            text: 'Average Class Interactivity during one week <b>(20/4/2016 - 27/4/2016) </b>'
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 150,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        xAxis: {
            categories: [
			     'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday'
               
            ],
          /*  plotBands: [{ // visualize the weekend
                from: 4.5,
                to: 6.5,
                color: 'rgba(68, 170, 213, .2)'
            }]*/
        },
        yAxis: {
            title: {
                text: 'Percentage of Interactivity'
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: ' %'
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            areaspline: {
                fillOpacity: 0.5
            }
        },
        series: [{
            name: 'Teacher ID: 872-3345',
            data: [50, 60, 40, 70, 40]
        }]
    });
});
