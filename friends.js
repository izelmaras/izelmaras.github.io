





// If user not logged in, go to login page
var currentUser = Parse.User.current();
if(!currentUser) {
	window.location.replace("index.html");
} 




// THIS PAGE DISPLAYS A USER'S LIST OF FRIENDS AND THEIR CONTACT INFO


var htmlAllFriends = "";
var allFriends = [];        // stores list of friends from current user

// Retrieves list of friends
var query = new Parse.Query(Parse.User);
query.get(currentUser.objectId, {
    success: function(object) {        
        
        allFriends = currentUser.get("friends");

        
        console.log("here" + currentUser.get("username"));
        
        /*
        if (allFriends) {
            
            console.log(currentUser.get("username"));
            for (var i = 0; i < allFriends.length; i++) {

            }
        }
        */

        // Now that 
        onResponseFilterFurther();
    },
    error: function(error) {
        console.log("error");
        //$("#confirmationMessage").text("Problem loading profile data. Refresh to try again!");
    }
});






function onResponseFilterFurther() {
    
    query.containedIn("alikeId", allFriends);
    //query.containedIn("alikeId", [1,2,8776]);
    query.find({
        success: function(results) {
         
            //console.log(results.length);
            
            for (var i = 0; i < results.length; i++) {
                console.log(results[i].get("firstName"));
                
                
                htmlAllFriends = htmlAllFriends + 
                    
                    "<hr><div id=\"friend\">" + 
                    clean(results[i].get("firstName")) + " " + clean(results[i].get("lastName")) + "<br \/>" +
                    clean(results[i].get("position")) + "  " + clean(results[i].get("company")) +  "<br \/>" +
                    "<\/div>"
                    
                    " ";
                
                
                
            }
             
            $("#allFriends").html(htmlAllFriends);
        
        },
        error: function() {
        }
    });    
}


function clean(data) {
    
    if (typeof data !== 'undefined') {
        return data;   
    } else {
        return "";
    }
    
}





