'use strict';
const MongoClient = require('mongodb').MongoClient;
const dbInfo = require('../../server/datasources.json');

module.exports = function(Recipe) {

 


  Recipe.remoteMethod(
    'getRandom', {
      accepts : [{'arg': 'filter','type': 'string'}],
      http: {
        path: '/random',
        verb: 'get'
      },
      returns: {
        arg: 'data',
        type: 'array'
      }
    }
  );


  Recipe.getRandom = function(filter, callback){

    const query = [];
    if(filter){
      console.log(filter);
      filter = JSON.parse(filter);

      query.push(
        {'$match' : filter}
      )
    }
    

    query.push({ $sample: { size: 1 } });
    const url = 'mongodb://'+dbInfo.db.host+':'+dbInfo.db.port;
    const dbName = dbInfo.db.database;
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
      const db = client.db(dbName);
      const collection = db.collection('recipe');

      collection.aggregate(query).toArray(function(err, data){
          if(err){
            return callback(err);
          }
          return callback(null,data);
      });

    });

       //filter = JSON.parse(filter);
      //  Recipe.count({}, function(err, count) {
      //     if (err) {
      //       return callback(err);
      //     }
      //     Recipe.find({}, function(err2, data){
      //       if (err) {
      //         return callback(err2);
      //       }
      //       return callback(data);
      //     })
      //   });
  }

};

