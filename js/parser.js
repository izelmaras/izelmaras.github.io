'use strict'; 
/**
 * parses any RSS/XML feed through Google and returns JSON data
 * source: http://stackoverflow.com/a/6271906/477958
 */
    
function parseRSS(url, container) {
    var entryData;
  $.ajax({
    //Ajax call to encode url
    url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(url),
    dataType: 'json',
    //Data includes the data we get in the json format
    success: function(data) {
        console.log("entry size is"+data.responseData.feed.entries.length);
        entryData = data.responseData.feed.entries.length;
//      console.log("I am printing the entire data feed object");
//      console.log(data.responseData.feed);
//      console.log("I am printing only the entries object from the feed");
//      console.log(data.responseData.feed.entries);
//      console.log("I am printing only an entry object");
//      console.log(data.responseData.feed.entries[0]);
//      console.log("I am printing the string value within the content prperty");
//      console.log(data.responseData.feed.entries[0].content);
//        console.log("I am trying to print the title per post");
//        console.log(data.responseData.feed.entries[0].title);
      var iter = 1;
      $.each(data.responseData.feed.entries, function(key, value){
//        var thehtml = '<h3><a href="'+value.link+'" target="_blank">'+value.title+'</a></h3>'+ value.content;
          var thehtml = value.content;        
          $("<li/>").appendTo(".test-div .test-list").html(thehtml);
          var cleanHtml = $("ul.test-list").find("img");
                 

//          console.log(cleanHtml);
//          console.log(value.title);
//          var textNode = document.createTextNode(value.title);  
//          console.log(textNode);
//          $("#selected-1").html($("#selected-1").html() + $("#selected-2").html())
//          $.extend(cleanHtml, textNode);
//          console.log(cleanHtml);
          $("<li/>").appendTo("#slider .slides").html(cleanHtml).addClass("slide") ;
          
          
      });
       // hello = $(".slide").size();

console.log("Entry data before return is"+entryData);
        return entryData;
    }
  });
    

}
