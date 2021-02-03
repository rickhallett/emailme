/**
 * EmailController
 *
 * @description :: Server-side logic for managing emails; so Angular has someone to talk to
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

const emailService = require('../services/EmailService');

const defaultConfigs = {
  address: "rickhallett",
  domain: "smtp@live.co.uk.",
  password: "admin",
};

module.exports = {

  testmail: function(req, res) {

    emailService.sendSimpleMail()
    .then(result => {
      console.log('res', result);
      console.log('typeof res', typeof result);
    })
    .catch(err => {
      sails.log.error('msg', err.message);
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
