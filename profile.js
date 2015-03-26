





// if user not logged in, go to login page
var currentUser = Parse.User.current();
//console.log(currentUser.get('lastName') );
if(!currentUser) {
	window.location.replace("index.html");
} 






// when user presses logout take her back to main login page
$(function(){
  

	$("#logout").click(function(){

		Parse.User.logOut();
		window.location.replace("index.html");
	});


	// assign username to DIV
	$("#username").text( "Username: " + currentUser.getUsername() );


	// Print out html for all questions with correct label coming from questions.js
	var htmlAllQuestions = "";
	for (i = 0; i < questionArray.length; i++) {

        htmlAllQuestions = htmlAllQuestions + "<label><input type=\"checkbox\" name=\"question"+i+"\" id=\"question"+i+"\" value=\"true\"><span class=\"label-body\">"+ questionArray[i]+"</span></label>";
        
    
    }
        
    
    
	$("#allQuestions").html(htmlAllQuestions);




	// retrieve the rest of user data
	var query = new Parse.Query(Parse.User);
	query.get(currentUser.objectId, {
	    success: function(object) {

	    	// put user data in form # is DIV id and object.get() is field name in Parse
	    	$("#firstName").val( currentUser.get("firstName") );
			$("#lastName").val( currentUser.get("lastName") );
			$("#email").val( currentUser.get("email") );

			$("#city").val( currentUser.get("city") );
			$("#country").val( currentUser.get("country") );
			$("#company").val( currentUser.get("company") );
			$("#position").val( currentUser.get("position") );

	    	//console.log(object.get("questions"));

	    	var userAnswersArray = [];
	    	var userAnswersArray = currentUser.get("questions");

	    	if (userAnswersArray) {
		    	for (var i = 0; i < userAnswersArray.length; i++) {
		    		
		    		$("#question" + i).attr("checked", userAnswersArray[i]);
		    		//$("#question1").attr("checked", questionArray[0]);

		    	}
	    	}
       
	    },
	    error: function(error) {
	        $("#confirmationMessage").text("Problem loading profile data. Refresh to try again!");
	    }
	});

});






// save changes from form
$("#saveUserChanges").click(function() {

    saveUserProfileUpdates();
    window.scrollTo(0, 0);
});


// submit form when enter is pressed
$('#profileForm').keypress(function (e) {
    if(e.which == 13) {
        saveUserProfileUpdates();
        window.scrollTo(0, 0);
    }
});





function saveUserProfileUpdates() {
    
    
    currentUser.save(null, {
        success: function(currentUser) {

        currentUser.set("firstName", $("#firstName").val());
        currentUser.set("lastName", $("#lastName").val());
        currentUser.set("email", $("#email").val());

        currentUser.set("city", $("#city").val());
        currentUser.set("country", $("#country").val());
        currentUser.set("company", $("#company").val());
        currentUser.set("position", $("#position").val());		    


        var justAnsweredQuestions = [];
        for (i = 0; i < questionArray.length; i++) {
            justAnsweredQuestions[i] = $("#question" + i).prop("checked");
        }

        currentUser.set("questions", justAnsweredQuestions);

        currentUser.save();

        $("#confirmationMessage").text("Profile Updated");


        }  

    });
    

}












