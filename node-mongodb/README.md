NodeJS using MongoDB

This package imports mongodb module using `npm install -save mongodb`.

# Prerequiste
    1. Make sure that nodeJS is installed, you can check via command `node -v` and `npm -v`.
    2. Make sure 'mongoDB' is installed and 'mongod' is running:
        - check installation via 'mongodb -v'
        - check mongodb service is running via executing `mongod` in terminal
        - open another window in termial and execute `mongo` to open a mongoDB client, run `show dbs` to check successful connection 
# Use
    Execute `node node-mongodb.js` to start the javascript file, if everything is fine, you shall be given a list of arrays in JSON format in console.
# Detail
    The entry file *node-mongodb.js* uses API provide by module *mongodb* and open connection to *mongodb://localhost:27017/jdproject*, which will create db *jdproject* in your local mongoDB server. Then below function will be called to insert 3 documents to collection "jduser":
 ```JavaScript
var createDocuments = function(db, callback) {
     var collection = db.collection("jduser");
     collection.insert([
	{firstname : "Rams",lastname: "Posa",emailid: "rams@journaldev.com"}, 
	{firstname : "Mani",lastname: "Nulu",emailid: "mani@journaldev.com"},  
	{firstname : "Bhargs",lastname: "Nulu",emailid: "Bhargs@journaldev.com"}, 
	], function(err, result) {
	callback(result);
      });
```
