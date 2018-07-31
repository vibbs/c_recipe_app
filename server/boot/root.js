'use strict';

module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.get('/', server.loopback.status());
  server.use(router);
};


/**
 in middle ware.json add this property::

   "files": {
    "loopback#static": {
      "params": "$!../client"
    }
  },
 */