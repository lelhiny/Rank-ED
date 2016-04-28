(function(){
  'use strict';
  var module = angular.module('app', ['onsen']);
 // alert("here 1");
  module.controller('AppController', function($scope, $data) {
    $scope.doSomething = function() {
      setTimeout(function() {
        ons.notification.alert({ message: 'tapped' });
      }, 100);
    };
  });
    module.controller('DetailController', function($scope, $data, $WIS, $AUS) {
  //  alert('inside detail controller');
    
    $scope.item = $data.selectedItem;

		 if($scope.item.title == 'WIS'){
		 	  	  $scope.details = $WIS.items;
				  	  } else if($scope.item.title == 'AUS'){
                   	  	  $scope.details = $AUS.items;
}
  $data.selectedSchool = $scope.item.title;

  $scope.showGraphs = function(index) {
	//alert('Inside show Details');
     // var selectedItem = $data.items[index].title;
	 var selectedRoom = $scope.details[index].title;
	      //alert(selectedRoom);
		  $data.selectedRoom = selectedRoom;
     $scope.selectedRoom = selectedRoom;
	/* if(selectedItem.title == 'WIS'){
	  $scope.details = $WIS.items;
	  } else if(selectedItem.title == 'AUS'){
	  	  $scope.details = $AUS.items;
	  }*/
	  var tempT = $scope.item.title+'-'+ selectedRoom;

      $scope.navi.pushPage('chooseCharts.html', {title : $data.selectedSchool+'-'+ selectedRoom});
	 // $scope.navi.pushPage('chart.html', {title : selectedItem.title});
    };


  });

  module.controller('chooseChartsController', function($scope, $data) {
   // alert('inside chooseGraph controller');
//	alert($data.selectedRoom);
	//alert($scope.item.title);
    
   // $scope.item = $data.selectedItem;



  $scope.chooseGraph = function(index) {
	//alert('Inside show Details');
     // var selectedItem = $data.items[index].title;
	// var selectedRoom = $scope.details[index].title;
	    // alert(index); 
		 	//alert($data.selectedRoom);
			if(index == '0')
			{
			//alert('inside index=0');
			$scope.navi.pushPage('chart.html', {title : $data.selectedSchool});
			} else {
			$scope.navi.pushPage('chart2.html', {title : $data.selectedSchool});
			}


	/* if(selectedItem.title == 'WIS'){
	  $scope.details = $WIS.items;
	  } else if(selectedItem.title == 'AUS'){
	  	  $scope.details = $AUS.items;
	  }*/
    //  $scope.navi.pushPage('chooseCharts.html', {title : $scope.item.title+'-'+ selectedRoom);
	 // $scope.navi.pushPage('chart.html', {title : selectedItem.title});
    };


  });

  module.controller('MasterController', function($scope, $data, $WIS, $AUS) {
    $scope.items = $data.items;
  // alert("Inside mastercontroller");
    $scope.showDetail = function(index) {
	//alert('Inside show Details');
     // var selectedItem = $data.items[index].title;
	 var selectedItem = $data.items[index];
	       $data.selectedItem = selectedItem;
		  // alert(selectedItem.title);
     if(selectedItem.title == 'KHDA Summary'){
	       // alert('Inside khda Summary');
	        $scope.navi.pushPage('summary.html', {title : selectedItem.title});
	 }else{
	/* if(selectedItem.title == 'WIS'){
	  $scope.details = $WIS.items;
	  } else if(selectedItem.title == 'AUS'){
	  	  $scope.details = $AUS.items;
	  }*/
      $scope.navi.pushPage('detail.html', {title : selectedItem.title});
	 // $scope.navi.pushPage('chart.html', {title : selectedItem.title});
	 }
    };
  });
   module.controller('ChartController', function($http, $data) {
   //alert("Inside chartControlleer");
   var result;
        $http.get("http://localhost:5984/ranked/_design/testNew/_view/find")
          	     .then(function(response) {
				         result = response.data;
						         result = result.rows;
								// alert(result.length);
								  var tempArray =[];
             for (var d in result) {
			 if(result[d].key[0] == $data.selectedSchool && result[d].key[1] == $data.selectedRoom) {
			  tempArray.push(Number(result[d].value));
			  }
			}
		//	alert(tempArray.length);
		//	alert(tempArray[0]);
		//	var tempArrayText = JSON.parse(tempArray);
		//	var ttt = JSON.parse(tempArray);
		//	alert(tempArray.toString());
			var valueArray = tempArray.toString();
			
			
						 $('#container').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: 'Average Temperature'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
          //  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: 'Temperature (°C)'
            }
        },
        plotOptions: {
		 

            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: [{
            name: $data.selectedSchool,
            data: tempArray
        }]
    });
	


      /*  $('#container').highcharts({

            chart: {
                type: 'arearange',
                zoomType: 'x'
            },

            title: {
                text: 'Temperature variation by day'
            },

            xAxis: {
                type: 'datetime'
            },

            yAxis: {
                title: {
                    text: null
                }
            },

            tooltip: {
                crosshairs: true,
                shared: true,
                valueSuffix: '°C'
            },

            legend: {
                enabled: false
            },

            series: [{
                name: 'Temperatures',
                data: tempArray
            }]

        });*/
    
						 		    }, function(response) {

        alert( "Something went wrong");
		});


   /* $('#container').highcharts({

        chart: {
            type: 'line'
        },
        title: {
            text: 'Monthly Average Temperature'
        },
        subtitle: {
            text: 'Source: WorldClimate.com'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: 'Temperature (°C)'
            }
        },
        plotOptions: {
		 

            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: [{
            name: 'Tokyo',
            data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: 'London',
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }]
    });*/


});
 module.controller('SummaryController', function($http, $data) {
  // alert("Inside summaryControlleer");
   var result;
        $http.get("http://localhost:5984/ranked/_design/test/_view/foo")
          	     .then(function(response) {
				         result = response.data;
						         result = result.rows;
								// alert(result.length);
								  var tempArray =[];
								  var tempArrayName=[];
								  var tempArray1 =[]
             for (var d in result) {
			 if(result[d].value[0] != null && result[d].value[1] != null) {
			  tempArray.push(Number(result[d].value[0]));
			   tempArray1.push(Number(result[d].value[1]));
			   tempArrayName.push(result[d].key[0]);
			  }
			}
			//alert(tempArray.length);
			//alert(tempArray[0]);
		//	var tempArrayText = JSON.parse(tempArray);
		//	var ttt = JSON.parse(tempArray);
		//	alert(tempArray.toString());
			//var valueArray = tempArray.toString();
			 $('#container').highcharts({

        chart: {
            type: 'column'
        },

        title: {
            text: 'Class Interaction Summary'
        },

        xAxis: {
            categories: tempArrayName
        },

        yAxis: {
            allowDecimals: false,
            min: 0,
            title: {
                text: 'Percentage'
            }
        },

        tooltip: {
            formatter: function () {
                return '<b>' + this.x + '</b><br/>' +
                    this.series.name + ': ' + this.y + '<br/>' +
                    'Total: ' + this.point.stackTotal;
            }
        },

        plotOptions: {
            column: {
                stacking: 'normal'
            }
        },

        series: [{
            name: 'Interactive',
            data: tempArray,
            stack: 'male'
        },  {
            name: 'Non-Interactive',
            data: tempArray1,
            stack: 'female'
        }]
    });
			
			
					
	


      /*  $('#container').highcharts({

            chart: {
                type: 'arearange',
                zoomType: 'x'
            },

            title: {
                text: 'Temperature variation by day'
            },

            xAxis: {
                type: 'datetime'
            },

            yAxis: {
                title: {
                    text: null
                }
            },

            tooltip: {
                crosshairs: true,
                shared: true,
                valueSuffix: '°C'
            },

            legend: {
                enabled: false
            },

            series: [{
                name: 'Temperatures',
                data: tempArray
            }]

        });*/
    
						 		    }, function(response) {

        alert( "Something went wrong");
		});
});
/* module.controller('MasterController', function($scope, $data, $WIS, $AUS) {
    $scope.items = $data.items;
   // alert("Inside mastercontroller");
    $scope.showDetail = function(index) {
	//alert('Inside show Details');
     // var selectedItem = $data.items[index].title;
	 var selectedItem = $data.items[index];
	       $data.selectedItem = selectedItem;

	/* if(selectedItem.title == 'WIS'){
	  $scope.details = $WIS.items;
	  } else if(selectedItem.title == 'AUS'){
	  	  $scope.details = $AUS.items;
	  }*/
  /*    $scope.navi.pushPage('detail.html', {title : selectedItem.title});
	 // $scope.navi.pushPage('chart.html', {title : selectedItem.title});
    };
  });*/
   module.controller('Chart2Controller', function($http, $data) {
   //alert("Inside chartControlleer");
   var result;
        $http.get("http://localhost:5984/ranked/_design/test/_view/foo")
          	     .then(function(response) {
				         result = response.data;
						         result = result.rows;
								// alert(result.length);
								  var interactiveValue ={};
								  var noninteractiveValue ={};
             for (var d in result) {
			 if(result[d].key[0] == $data.selectedSchool && result[d].key[1] == $data.selectedRoom && result[d].value[0] != null && result[d].value[1] != null) {
			  interactiveValue = result[d].value[0];
			  noninteractiveValue = result[d].value[1];
			  }
			}
			//alert(tempArray.length);
			//alert(tempArray[0]);
		//	var tempArrayText = JSON.parse(tempArray);
		//	var ttt = JSON.parse(tempArray);
			//alert(tempArray.toString());
			//var valueArray = tempArray.toString();
			
			
    $('#container').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Class Interactivity'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'Interactive',
                y: interactiveValue
            }, {
                name: 'Non-Interactive',
                y: noninteractiveValue,
                sliced: true,
                selected: true
            
            }]
        }]
    });

	
    
						 		    }, function(response) {

        alert( "Something went wrong");
		});


   


});
  module.factory('$data', function() {
   	
      var data = {};
     
      data.items = [
          {
              title: 'AUS',
              label: '',
              desc: 'The American University of Sharjah.',
			  list: [ {title:'Floor-2', label: '', desc: 'room'}, {title:'Floor-3', label: '', desc: 'class'}]
          },
          {
              title: 'WIS',
              label: '',
              desc: 'Willington International School.',
			  list: [ {title:'Floor-2', label: '', desc: 'room'}, {title:'Floor-3', label: '', desc: 'class'}]

          },
		  {
              title: 'KHDA Summary',
              label: '',
              desc: 'Summary for class interaction for different schools.',
			  list: [ {title:'', label: '', desc: ''}, {title:'', label: '', desc: ''}]

          }
      ];
       var selectedSchool;
	   var selectedRoom;
	   var selectedGraph;
      return data;
  });
  module.factory('$WIS', function() {
   var school = {};
    school.items = [
	{
	    title: 'Floor2-MS',
	    desc: 'Class for grade 2 second floor.'
    },
	{
	   title: 'Floor2-C',
	   desc: 'Class for grade 2 second floor.'
	}
	];
	return school;
	
});


//})();
module.factory('$AUS', function() {
 var school = {};
 school.items = [
 {
    title: 'EB02-036',
	desc: 'Class for at AUS.'
 }
 ];
 //Floor2-MS
 return school;
 });
 })();
