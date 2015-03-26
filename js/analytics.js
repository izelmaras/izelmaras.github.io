        var query = new Parse.Query(Parse.User);
        var peopleDidntCome = 0;
        var numberOfMatches = 0;
        var numberOfAttendees = 0;
        var interestsAnswers = [];
        var resultsLength = 0;

        // Parse limits query to 10K, work around it for larger events
        query.limit(10000);
        query.find({ success: function(results) {
                for (var i = 0; i < results.length; i++) { 
                    // get data from matches
                    if (typeof results[i].get('friends') == "undefined") {
                        peopleDidntCome = peopleDidntCome + 1;
                    } else {
                        var friendsArray = [];
                        friendsArray = results[i].get('friends');
                        numberOfMatches = numberOfMatches +
                            friendsArray.length;
                    }        
                }
                var compiledInterests = [];
                // this makes the array a number array. 
                // there must be a better way to do this
                for (var k = 0; k < results.length; k++) {
                    compiledInterests[k] = 0;
                }
                var userFilledInterests = false;  
                // loop through all users  
                for (var i = 0; i < results.length; i++) { 
                    // if user hasn't answered questions do nothing,                   otherwise do stuff
                    if (typeof results[i].get('questions') == "undefined")             {
                        userFilledInterests = false;
                    } else {
                        userFilledInterests = true;

                        var answersArray = []; 
                        answersArray = results[i].get('questions');
                        // loop though all answers of a single user
                        for (var j = 0; j < answersArray.length; j++) {
                            // transform boolean into integer
                            var blah = 0;
                            if (answersArray[j] == true) {
                                blah = 1;
                            } else {
                                blah = 0;
                            }
                            //var blah = answersArray[j] ? 1 : 0; 
                            compiledInterests[j] = compiledInterests[j] +                     blah;
                        }
                    } 
                 }

                // make interests string
                var interestsHtml = "";
                for (var i = 0; i < questionArray.length; i++) {
                    interestsHtml = interestsHtml + questionArray[i] + ":             " + compiledInterests[i] + "<br>";     
                }
                numberOfMatches = Math.round(numberOfMatches/2); 
                numberOfAttendees = results.length - peopleDidntCome;
                resultsLength = results.length;
                $("#registrants").text("Number of registrants: " +                 results.length);
                $("#attendees").text("Number of attendees: " +                     numberOfAttendees);
             //   $("#matches").text("Number of matches: " +                         numberOfMatches);
            //  $("#possibleMatches").text("Number of possible matches: " + (numberOfAttendees*(numberOfAttendees-1))/2);      
               // $("#interestsCompilation").html(interestsHtml);
                $("#registrants").val(results.length);

              //First Visualization
 
            $(function () {
                 Highcharts.setOptions({
        colors: ['#058DC7', '#50B432', '#E591A9', '#DDDF00', '#24CBE5', '#50B445', '#FF9655', '#FFF263', '#6AF9C4']
        });
    $('#viz1').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: ''
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.y:.0f}$</b>'
        },
        credits: {
            enabled: false
        },

       

        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.y:.0f}$',
                    style: {
                        fontFamily: 'Avenir',
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                    
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Cost',
            data: [
                ['Books and Supplies', 2050],
                ['Fees', 276],
                ['Food', 1730],
                ['Personal Expenses', 1550],
                ['Transportation', 460],
                {
                    name: 'Tuition',
                    y: 44680,
                    sliced: true,
                    selected: true
                },
            ]
        }]
    });
});
//$22,340.00
         

        //2nd Visualization
       $(function () {
            Highcharts.setOptions({
        colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
        });
    $('#viz2').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            style: {
                fontFamily: 'avenir',
                color: '#474747',
               
            },
            text: ''
        },
        credits: {
            enabled: false
        },
        xAxis: {
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Parental Income ($)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y} $</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                stacking: 'sum',
                pointPadding: 0.4,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Household Expanses',
            data: [3400, 3600, 3600, 3600, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000]

        }, {
            name: 'Expanses for Other Children Supported',
            data: [1200, 1000, 1000, 800, 800, 800, 800, 800, 800, 800, 800, 800]

        }, {
            name: 'Expected Contribution',
            data: [600, 620, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600]

        }, ]
    });
});
//7200
            
        //3rd Visualization
        $(function () {
            Highcharts.setOptions({
        colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
        });
    $('#viz3').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        credits: {
            enabled: false
        },
        xAxis: {
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                style: {
                fontFamily: 'avenir',
                color: '#474747',
               
            },
                text: 'Personal Income ($)'
            },
            subtitle: {
                style: {
                fontFamily: 'avenir',
              
               
            },
            text: 'Earned via Part-Time Employment'
            },
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y} $</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                stacking: 'sum',
                pointPadding: 0.2,
                borderWidth: 2
            }
        },
        series: [{
            name: 'On Campus Opportunity',
            data: [200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200]

        }, {
            name: 'Off-Campus OPT/CPT Opportunity',
            data: [1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120, 1120]

        },  ]
    });
});
//15840

$(function () {
    $('#viz5').highcharts({
        chart: {
            type: 'waterfall'
        },

        title: {
            text: ' '
        },

        xAxis: {
            type: 'category'
        },
 credits: {
            enabled: false
        },
        yAxis: {
            title: {
                text: 'USD'
            }
        },

        legend: {
            enabled: false
        },

        tooltip: {
            pointFormat: '<b>${point.y:,.2f}</b> USD'
        },

        series: [{
            upColor: Highcharts.getOptions().colors[2],
            color: Highcharts.getOptions().colors[3],
            data: [{
                name: "Cost of Attendance",
                y: 65896
            }, {
                name: "Provost's Scholarship",
                y: -22340
            }, {
                name: 'Parental Contribution',
                y: -7200
            }, {
                name: 'Max Personal Contribution',
                y: -15840
            }, {
                name: 'Extras',
                y: -4800
            },{
                name: 'Required Amount',
                isIntermediateSum: true,
                color: Highcharts.getOptions().colors[1]
            }, ],
            dataLabels: {
                style: {
                fontFamily: 'avenir',
               
               
                },
                enabled: true,
                formatter: function () {
                    return Highcharts.numberFormat(this.y / 1000, 0, ',') + 'k';
                },
                style: {
                    color: '#FFFFFF',
                    fontWeight: 'bold',
                    textShadow: '0px 0px 3px black'
                }
            },
            pointPadding: 0
        }]
    });
});


            $(function () {
    $('#subviz').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            style: {
                fontFamily: 'avenir',
                color: '#474747',
               
            },
            
            text: 'Summer Income<br>$3840',
            align: 'center',
            verticalAlign: 'middle',
            y: 50
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.y}$</b>'
        },
         credits: {
            enabled: false
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -50,
                    style: {
                        color: 'white',
                        textShadow: '0px 1px 2px black'
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%']
            }
        },
        series: [{
            type: 'pie',
            name: 'Income',
            innerSize: '50%',
            data: [
                ['June',   1920],
                ['July',       1920],
               
                
            ]
        }]
    });
});


//Total money 45380
//Required 65896 
//Lacking 20516
//Lacking 


              },
              error: function(error) {
                console.log("Error: " + error.code + " " + error.message);
              }
        });



