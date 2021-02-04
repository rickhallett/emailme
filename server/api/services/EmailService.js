/**
 * EmailService.js
 *
 * @description :: EmailService manages the npm sendmail API for EmailController.js
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

const localMessage = {
  from: "kaishin@m1-air.local",
  to: "kaishin@m1-air.local",
  subject: "Test Email",
  text: "Please confirm your email",
  html: "<p>Please confirm your email</p>",
};

const outgoingMessage = {
  from: '"Example Team" <from@example.com>',
  to: "user1@example.com, user2@example.com",
  subject: "Nice Nodemailer test",
  text: "Hey there, it’s our first message sent with Nodemailer ;) ",
};

const messageWithAttachments = {
  from: "from@example.com",
  to: "test@example.com",
  subject: "Test Nodemailer with Mailtrap",

  html: "<h1>Attachments</h1>",
  attachments: [
    {
      // utf-8 string as an attachment
      filename: "text.txt",
      content: "Attachments",
    },
    {
      filename: "logo",
      path: "/Users/kaishin/dev/ts/emailme/server/api/services/doge.ico",
    },
    {
      filename: "pdf",
      path: "/Users/kaishin/dev/ts/emailme/server/api/services/blockH.pdf",
    },
  ],
};

module.exports = {
  sendLocalMail: function () {
    return new Promise((resolve, reject) => {
      require("./localTransporter").sendMail(localMessage, (err, success) => {
        if (err) return reject(new Error(err));
        else return resolve(success);
      });
    });
  },

  sendToEtherealSmtp: function () {
    return new Promise((resolve, reject) => {
      require("./etherealTransporter")
      .createDefault()
      .sendMail(outgoingMessage, (err, success) => {
        if (err) return reject(new Error(err));
        else return resolve(success);
      });
    });
  },

  sendToEtherealWithAttachment: function () {
    return new Promise((resolve, reject) => {
      require("./etherealTransporter")
      .createDefault()
      .sendMail(messageWithAttachments, (err, success) => {
        if (err) return reject(new Error(err));
        else return resolve(success);
      });
    });
  },

  sendToMailTrapWithAttachment: function () {
    return new Promise((resolve, reject) => {
      require("./mailtrapTransporter").sendMail(messageWithAttachments, (err, success) => {
        if (err) return reject(new Error(err));
        else return resolve(success);
      });
    });
  },

  sendWithDkim: function () {},

  sendFromSmtp: function () {},
};
