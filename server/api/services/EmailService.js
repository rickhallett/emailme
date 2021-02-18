/**
 * EmailService.js
 *
 * @description :: EmailService manages the npm sendmail API for EmailController.js
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

const mailgen = require("mailgen");
const messageOptions = require("./messageOptions");

module.exports = {
  sendLocalMail: function () {
    return new Promise((resolve, reject) => {
      require("./localTransporter").sendMail(
        messageOptions.localMessage,
        (err, success) => {
          if (err) return reject(new Error(err));
          else return resolve(success);
        }
      );
    });
  },

  /**
   * SPEC REQUIREMENT
   */
  sendToMailTrapSmtp: function () {
    return new Promise((resolve, reject) => {
      require("./mailtrapTransporter")
        .createDefault()
        .sendMail(messageOptions.outgoingMessage, (err, success) => {
          if (err) return reject(new Error(err));
          else return resolve(success);
        });
    });
  },

  /**
   * SPEC REQUIREMENT
   */
  sendToMailTrapWithAttachment: function () {
    return new Promise((resolve, reject) => {
      require("./mailtrapTransporter")
        .createDefaultTransporter()
        .sendMail(messageOptions.messageWithAttachments, (err, success) => {
          if (err) return reject(new Error(err));
          else return resolve(success);
        });
    });
  },

  /**
   * TODO: SPEC REQUIREMENT
   */
  sendToMailTrapWithCustomMessage: function (request) {
    sails.log.debug(
      "generated email",
      messageOptions.generateEmailFromRequest(request)
    );

    return new Promise((resolve, reject) => {
      require("./mailtrapTransporter")
        .createDefaultTransporter()
        .sendMail(
          messageOptions.generateEmailFromRequest(request),
          (err, success) => {
            if (err) return reject(new Error(err));
            else return resolve(success);
          }
        );
    });
  },

  /**
   * TODO: SPEC REQUIREMENT
   */
  saveSmtpConfig: function () {
    return new Promise((resolve, reject) => {});
  },

  /**
   * TODO: SPEC REQUIREMENT
   */
  listSmtpConfigs: function () {
    return new Promise((resolve, reject) => {});
  },

  /**
   * TODO: SPEC REQUIREMENT
   */
  chooseActiveSmtpConfig: function () {
    return new Promise((resolve, reject) => {});
  },

  /**
   * NB: NOT TESTED
   */
  sendToMailTrapWithDKIN: function () {
    return new Promise((resolve, reject) => {
      require("./mailtrapTransporter")
        .configureDKIM()
        .sendMail(messageOptions.messageWithAttachments, (err, success) => {
          if (err) return reject(new Error(err));
          else return resolve(success);
        });
    });
  },

  /**
   * SPEC: Nice to have
   * Can potentially be used to create basic 'templates' to create more attractive emails if these are ever needed.
   */
  scriptHtmlFromJs: () => {
    const Mailgen = require("mailgen");

    // Configure mailgen by setting a theme and your product info
    const mailGenerator = new Mailgen({
      theme: "default",
      product: {
        // Appears in header & footer of e-mails
        name: "Mailgen",
        link: "https://mailgen.js/",
        // Optional product logo
        logo: "https://mailgen.js/img/logo.png",
      },
    });

    return new Promise((resolve, reject) => {
      const transporter = require("./mailtrapTransporter").createDefault();

      const emailBody = mailGenerator.generate(messageOptions.mailGenSeedData);
      const emailText = mailGenerator.generatePlaintext(
        messageOptions.mailGenSeedData
      );
      require("fs").writeFileSync("preview.html", emailBody, "utf8");

      transporter.sendMail(
        messageOptions.generateEmailBody(emailBody),
        (err, success) => {
          if (err) return reject(new Error(err));
          return resolve(success);
        }
      );
    });
  },
};
