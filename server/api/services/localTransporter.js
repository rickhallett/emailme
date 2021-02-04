const nodemailer = require("nodemailer");

/**
 * NB: this transporter requires any firewall to allow connections through port 25
 */
module.exports = nodemailer.createTransport({
  port: 25,
  host: "m1-air.local",
  tls: {
    rejectUnauthorized: false,
  },
});
