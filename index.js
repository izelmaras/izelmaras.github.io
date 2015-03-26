



var currentUser = Parse.User.current();
if(currentUser) {

	startApplication();
} 


function startApplication() {

	window.location.replace("profile.htm");

}


////////// VISIBILITY CONTROL
var currentState = 0;
$("#signinForm").hide(); //display:none; //hide();
$("#goToSignup").hide(); //display:none; 



function showSignup() {
   	$("#signupForm").show();
	$("#goToSignin").show();    
    
	$("#signinForm").hide();
	$("#goToSignup").hide();       
       
}


function showSignin() {
 	$("#signupForm").hide();
	$("#goToSignin").hide();    
    
	$("#signinForm").show();
	$("#goToSignup").show();      
}





//////////// SIGN UP
function signUpUser() {
        		
	        var user = new Parse.User();

	        var username = $("#signup-username").val();
	        var email = $("#signup-email").val();
	        var password = $("#signup-password").val();
	        //var school = $("#signup-school").val();

	        user.set("username", username);
			user.set("password", password);
			user.set("email", email);
    
    
    
             // Get higher AlikeId number so far
            var highestAlikeId = 0;
    
            var query = new Parse.Query(Parse.User);
            query.descending("alikeId");
            query.limit(1);
            query.find({
                success: function(results) {

                    highestAlikeId = results[0].get("alikeId");
                
                },
                error: function(error) {
                    //alert("Error: " + error.code + " " + error.message);
                }
            
                // once i have highest alike, then go create a new user
            }).then(function(results) {
            
            
                user.set("alikeId", highestAlikeId + 1);


                user.signUp(null, {
                    success: function(user) {
                        $("#signupMessage").text("You've successfully signed up");
                        var currentUser = Parse.User.current();  
                            if(currentUser) {

                                startApplication();

                        }  
                     },
                    error: function(user, error) {
                        $("#signupMessage").text(error.message)
                        //alert("Error: " + error.code + " " + error.message);
                    }
                 });           
            
            });               
                
}



////// HANDLES ENTER PRESS
$('#signupForm').keypress(function (e) {
    if(e.which == 13) {
        signUpUser();
    }
});




////////////////// SIGN IN
function signInUser() {

			var username = $("#signin-username").val();
			var password = $("#signin-password").val();

			Parse.User.logIn(username, password, {
  				success: function(user) {
  					//alert("You successfully logged in!");
  					var currentUser = Parse.User.current();
  					if(currentUser) {
			        		startApplication();
  					}  
  				},
 				 error: function(user, error) {
 				 	//$("#signinMessage").text(error.code + " " + error.message)
 				 	//alert("Error: " + error.code + " " + error.message);

 				 	if (error.code == "101") {
 				 		$("#signinMessage").text("Invalid login.")
 				 	}

			 	}
		});
}



////// HANDLES ENTER PRESS
$('#signinForm').keypress(function (e) {
    if(e.which == 13) {
        signInUser();
    }
});




function resetPassword() {

	Parse.User.requestPasswordReset($("#reset-email").val(), {
	  success: function() {
	    // Password reset request was sent successfully
	    alert("email submitted");

	  },
	  error: function(error) {
	    // Show the error message somewhere
	    $("#retrievePasswordMessage").text(error.message)
	    //alert("Error: " + error.code + " " + error.message);
	  }
	});


}



