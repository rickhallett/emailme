/**
 * EmailController
 *
 * @description :: Server-side logic for managing emails; so Angular has someone to talk to
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

const fs = require("fs");
const emailService = require("../services/EmailService");

module.exports = {
  /**
   * Features:
   * 1. checks request for optional fields (cc, bcc, attachments) and configures the transports/messages respectively
   * 2. server side requirements for certain fields (from, to, subject, body)
   */
  sendEmail: function (req, res) {
    emailService
      .sendToMailTrapWithCustomMessage(req.body)
      .then((result) => this.successHandler.apply(this, [result, res]))
      .catch((error) => this.successHandler.apply(this, [error, res]));
  },

  setSmtpConfigs: function (req, res) {},

  /**
   * TESTING METHODS
   */

  localMail: (req, res) => {
    emailService
      .sendLocalMail()
      .then(this.successHandler)
      .catch((err) => {
        // TODO: why is port 25 blocked sometimes and not others?
        // TODO: why is nodemailer using 127.0.0.1 sometimes, and my machine IP at other times?

        sails.log.error("msg", err.message);
        if (err.message.includes("ECONNREFUSED")) {
          sails.log.error(
            "Please check your firewall allows incoming connections on port 25"
          );
          if (sails.config.environment === "development") {
            sails.log.info(
              "Restarting server; sometimes the dynamic IP has changed and is allowed through my local firewall."
            );
            // writeFileSync forces nodemon to reload
            fs.writeFileSync(
              "restart.js",
              `// restart ${Date.now()} ${err.message}\n`,
              "utf-8",
              { flag: "a+" }
            );
          }
        }

        res.status(500);
        res.send(err);
      });
  },

  mailtrapMailAttachment: function (req, res) {
    emailService
      .sendToMailTrapWithAttachment()
      .then((result) => this.successHandler.apply(this, [result, res]))
      .catch((error) => this.successHandler.apply(this, [error, res]));
  },

  mailtrapScriptFromJs: function (req, res) {
    emailService
      .scriptHtmlFromJs()
      .then((result) => this.successHandler.apply(this, [result, res]))
      .catch((error) => this.successHandler.apply(this, [error, res]));
  },

  // TODO: standardise API responses
  getConfigs: function (req, res) {
    return res.json({
      success: true,
      type: "EMAILER_CONFIG",
      data: defaultConfigs,
    });
  },

  // TODO: standardise API responses
  setConfigs: function (req, res) {
    return res.json({
      success: true,
      type: "EMAILER_CONFIG",
      data: null,
    });
  },

  // Generic success handler. Probably an unncessary overcomplication
  successHandler: function (result, res) {
    sails.log.info(result);
    res.status(200);
    res.send(result);
  },

  // Generic error handler. Probably an unncessary overcomplication
  errorHandler: function (error, res) {
    sails.log.error(error);
    res.status(500);
    res.send(error);
  },
};
