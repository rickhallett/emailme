/**
 * EmailController
 *
 * @description :: Server-side logic for managing emails; so Angular has someone to talk to
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

const fs = require('fs');
const emailService = require('../services/EmailService');
const nodemon = require('nodemon');
const commandLineUsage = require('command-line-usage');

const defaultConfigs = {
  address: "rickhallett",
  domain: "smtp@live.co.uk.",
  password: "admin",
};

module.exports = {

  localmail: function(req, res) {

    emailService.sendLocalMail()
    .then(result => {
      sails.log.info(result);
      res.status(200);
      res.send(result);
    })
    .catch(err => {
      // TODO: why is port 25 blocked sometimes and not others?
      // TODO: why is nodemailer using 127.0.0.1 sometimes, and my machine IP at other times?
      
      sails.log.error('msg', err.message);
      if (err.message.includes('ECONNREFUSED')) {
        sails.log.error('Please check your firewall allows incoming connections on port 25');
        if (sails.config.environment === 'development') {
          sails.log.info('Restarting server; sometimes the dynamic IP has changed and is allowed through my local firewall.');
          fs.writeFileSync('restart.js', `// restart ${Date.now()} ${err.message}\n`, 'utf-8', {flag:'a+'});
        }
      }
    });

  },

  getConfigs: function (req, res) {
    return res.json({
      success: true,
      type: "EMAILER_CONFIG",
      data: defaultConfigs,
    });
  },

  setConfigs: function (req, res) {
    return res.json({
      success: true,
      type: "EMAILER_CONFIG",
      data: null,
    });
  },
};
