const nodemailer = require("nodemailer");

const keys = require("../../config/keys");

module.exports = {
  createDefaultTransporter: () => {
    return nodemailer.createTransport({
      ...keys.mailTrap.default,
    });
  },

  createMailtrapConfig: (host, port, user, pass) => {
    return nodemailer.createTransport({
      host,
      port,
      auth: {
        user,
        pass,
      },
    });
  },

  exampleDKIM: () => {
    return nodemailer.createTransport({
      ...keys.mailTrap.defaultDKIM,
    });
  },

  /**
   * 
   * @param {Object} options 
   * e.g. { host: "smtp.example.com",
      port: 465,
      secure: true,
      dkim: {
        domainName: "example.com",
        keySelector: "2017",
        privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBg..."
      }
    }
   * @returns {Mail}
   */
  configureDKIM: (options) => {
    return nodemailer.createTransport({
      ...keys.default.host,
      ...keys.default.port,
      ...options,
    });
  },
};
