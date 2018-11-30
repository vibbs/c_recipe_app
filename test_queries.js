/*
To run on the same server:

Edit ./server/boot/root.js and ./server/middleware.json

*/


/*
    {
      "accessType": "WRITE",
      "principalType": "ROLE",
      "principalId": "$unauthenticated",
      "permission": "DENY",
      "property": ""
    }
  
 */
 var TODO = [
   "add validation to all th possible attr in forms",
   "user authentication",
   {"add more attributes based on" : {
    1: "baseAlcohol",//? should be one value or many ?
    2: "flavours",
    3: "see if the qty can be made more dynamic or not",
    4: ""
   }}
 ]
/*
Main page would have pagination ans search opton on the name of the cocktails
Category based filter
Label based filter

categories are: refreshing, spirit forward, texture and like that..ETC
1. while traversal you should be able to see cocktails under it, 
2. and an option to add more cocktails if needed



 Labels have both alcohols(base) and like other spirits and bitters liquer
1. should be able to see from labels perspective and add new labels as well.
2. 



TODO: Technical implementation
1. Actual integration with the User authentication
2. registration  and User verification
3. Attach the recipies with the cocktail
 */