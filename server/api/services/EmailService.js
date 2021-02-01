/**
 * EmailService.js
 *
 * @description :: EmailService manages the npm sendmail API for EmailController.js
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

const fs = require("fs");

module.exports = {
  attributes: {
    sendSimpleMail: function () {
      const sendmail = require("sendmail")({
        logger: {
          debug: console.log,
          info: console.info,
          warn: console.warn,
          error: console.error,
        },
        silent: false,
        // dkim: { // Default: False
        //   privateKey: fs.readFileSync('./dkim-private.pem', 'utf8'),
        //   keySelector: 'mydomainkey'
        // },
        // devPort: 1025, // Default: False
        // devHost: 'localhost', // Default: localhost
        // smtpPort: 2525, // Default: 25
        // smtpHost: 'localhost' // Default: -1 - extra smtp host after resolveMX
      });

      sendmail(
        {
          from: "test@yourdomain.com",
          to: "info@yourdomain.com",
          replyTo: "jason@yourdomain.com",
          subject: "MailComposer sendmail",
          html: "Mail of test sendmail ",
        },
        function (err, reply) {
          console.log(err && err.stack);
          console.dir(reply);
        }
      );
    },

    sendWithDkim: function () {
      const sendmail = require("sendmail")({
        silent: true,
        dkim: {
          privateKey: fs.readFileSync("./dkim-private.pem", "utf8"),
          keySelector: "mydomainkey",
        },
      });

      sendmail(
        {
          from: "test@yourdomain.com",
          to: "info@yourdomain.com",
          replyTo: "jason@yourdomain.com",
          subject: "MailComposer sendmail",
          html: "Mail of test sendmail ",
        },
        function (err, reply) {
          console.log(err && err.stack);
          console.dir(reply);
        }
      );
    },

    sendFromSmtp: function () {
      var sendmail = require("../sendmail")({
        smtpHost: "localhost",
        smtpPort: 1025,
      });

      sendmail(
        {
          from: "test@yourdomain.com",
          to: "info@yourdomain.com",
          replyTo: "jason@yourdomain.com",
          subject: "MailComposer sendmail",
          html: "Mail of test sendmail ",
        },
        function (err, reply) {
          console.log(err && err.stack);
          console.dir(reply);
        }
      );
    },
  },
};
