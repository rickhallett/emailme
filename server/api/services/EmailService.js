/**
 * EmailService.js
 *
 * @description :: EmailService manages the npm sendmail API for EmailController.js
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

const nodemailer = require('nodemailer');

module.exports = {

  sendSimpleMail: function () {

    /**
     * NB: this transporter requires any firewall to allow connections through port 25
     */
    const transporter = nodemailer.createTransport({
      port: 25,
      host: 'm1-air.local',
      tls: {
        rejectUnauthorized: false
      },
    });
  
    var message = {
      from: 'kaishin@m1-air.local',
      to: 'kaishin@m1-air.local',
      subject: 'Test Email',
      text: 'Please confirm your email',
      html: '<p>Please confirm your email</p>'
    };
  

    return new Promise((resolve, reject) => {

      transporter.sendMail(message, (error, info) => {
        if (error) {
            // return console.log(error);
            return reject(new Error(error))
        }
        // console.log('Message sent: %s', info.messageId);

        return resolve(info);
      });
      
    })

    
  },

  sendWithDkim: function () {
    
  },

  sendFromSmtp: function () {

  }
    
};


// const sendmail = require("sendmail")({
//   logger: {
//     debug: console.log,
//     info: console.info,
//     warn: console.warn,
//     error: console.error,
//   },
//   silent: false,
//   dkim: { // Default: False
//     privateKey: fs.readFileSync('./dkim-private.pem', 'utf8'),
//     keySelector: 'mydomainkey'
//   },
//   devPort: 1025, // Default: False
//   devHost: 'localhost', // Default: localhost
//   smtpPort: 2525, // Default: 25
//   smtpHost: 'localhost' // Default: -1 - extra smtp host after resolveMX
// });
