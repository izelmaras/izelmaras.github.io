


Parse.initialize("8aPTfEgzt8z5U1ZRpPitPquXk07nAMdSqXO4helq", "VTog9ecqFGP0DJ1KH4MFyLyccqyN5bEqWwhQ2qCs");


/* This adds a pointer to user table
var currentUser = Parse.User.current();

var NewRelation = Parse.Object.extend("UserRelations");

var newRelation = new NewRelation();

newRelation.set("score", 1234);
newRelation.set("User1", Parse.User.current());
    
newRelation.save();
*/



// This code adds myself as a friend of myself to main User table as a RELATION
/*
var user = Parse.User.current();
var relation = user.relation("friends");
relation.add(user);
relation.add(user);
user.save();
*/







/*
///////// 1. retrieve from _User two users based on AlikeId. Write those users to Joint Table


//retrieve user 1
var alikeId1 = 1;
var user1;


//var query = new Parse.Query(Parse.User);


//var FirstUser = Parse.Object.extend("User");
var query = new Parse.Query(Parse.User);
query.equalTo("alikeId", alikeId1);
query.find({
  success: function(results) {
      //alert("Successfully retrieved " + results.length + " scores.");
      user1 = results[0];
      alert(user1.id);
  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
});



//retrieve user 2
var alikeId2 =2;
var user2;

query.equalTo("alikeId", alikeId2);
query.find({
  success: function(results) {
    alert("Successfully retrieved " + results.length + " scores.");
      //alert("Successfully retrieved " + results.length + " scores.");
      user2 = results[0];
      alert(user2.id);
  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
});
*/


// write users to joint table
var Relationships = Parse.Object.extend("Relationships");
var relationships = new Relationships();
relationships.set("from", Parse.User.current());
relationships.set("to", Parse.User.current());
//relationships.set("from", Parse.User.current());
//relationships.set("to", Parse.User.current());
relationships.save();

//////// 2. after a user has lots of friends, then try to delete user to see what happens



/////// 3. print out all friends a user has

// get current user

// user current user to query Relations table for friends

// then for every friend, query user table for contact info



