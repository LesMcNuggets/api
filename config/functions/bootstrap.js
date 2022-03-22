'use strict';

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#bootstrap
 */

module.exports = () => {
  const io = require('socket.io')(strapi.server, {
    cors: {
      origin: "https://charles-bourtoire.com",
      methods: ["GET", "POST"],
      allowedHeaders: ["my-custom-header"],
      credentials: true
    }
  });

  io.on('connection', function (socket) {
    socket.on('join', ({username, room}) => {
      console.log("user connected");
      console.log("username is ", username);
      console.log("room is...", room)
    })
  });
};
