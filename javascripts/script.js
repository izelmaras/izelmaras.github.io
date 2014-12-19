var screenWidth  = 400;
var screenHeight = 300;
var dataArray = [{name : q1,count : 0},{name : q2,count:  0},
{name : q3,count : 0},{name : q4,count:  0},
{name : q5,count : 0} ];
var q1 = 0;
var q2 = 0;
var q3 = 0;
var q4 = 0;
var q5 = 0;
var currArray = [];
var dataSize = 0;
var qDimensions = 5;
var bardata = [];
var margin = { top: 30, right: 30, bottom: 80, left:50 }
var height = 1200 - margin.top - margin.bottom,
width = 2400 - margin.left - margin.right,
barWidth = 30,
barOffset = 45;



///////////Parse Data Retrieval Starts Here///////////
Parse.initialize("8aPTfEgzt8z5U1ZRpPitPquXk07nAMdSqXO4helq", "VTog9ecqFGP0DJ1KH4MFyLyccqyN5bEqWwhQ2qCs");//This creates a new class named "results", it is an extension of the parse class



    // Parse.Cloud.run('hello', {},  {
    //     success: function(result){
    //         alert(result);
    //     },
    //     error: function(error) {
    //         alert(error);
    //     }
    // });


Parse.Cloud.run('test', {},  {
    success: function(result){
    var deepObject = {
        "user" : {
          "name": "Luís Landeiro Ribeiro",
          "age": 28,
          "sex": "M",
          "interests": [ "Technology", "Mountain Biking", "People" ]
        }
    };
        var identedText = JSON.stringify(deepObject,null,4);
    
    /* output the serialized JSON with pretty print */
   // document.write("<h1>Idented 4 spaces</h1> <pre>"+identedText+"</pre>");
    
    /* Create a string serialization of the "deepObject" JS Oject */
    var jsonString = JSON.stringify(deepObject);
    
    /* ouput the JSON string to html */
    document.write(jsonString);
    
    /* Convert the jsonString into Javascript object */
    var newObject = JSON.parse(jsonString);
    
    /* output the javascript object to HTML */
   // document.write("<h1>JS Object</h1>" + newObject);
    
    /* output the name of the user, calling js methods on the recently serialized object */
  //  document.write("<h1>User name</h1>" + newObject.user.name);
},
error: function(error) {
}
});


// for( var j= 0; j < 5; j++){
//      bardata.push(Math.round((dataArray[j].count)*30));
// }
// for( var j= 0; j < 5; j++){
//      bardata.push(Math.round((Math.random())*30));
// }


