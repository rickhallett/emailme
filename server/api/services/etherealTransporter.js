const nodemailer = require("nodemailer");

const keys = require("../../config/keys");

module.exports = {
  createDefault: () => {
    return nodemailer.createTransport({
      ...keys.ethereal.default,
    });
  },
  configureTransport: (options) =>
    nodemailer.createTransport({
      ...keys.ethereal.host,
      ...keys.ethereal.port,
      ...options,
    }),
};
