/**
 * EmailController
 *
 * @description :: Server-side logic for managing emails; so Angular has someone to talk to
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

const fs = require('fs');
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

      // TODO: find a way of grabbing only the reponse properties we want for more intelligent response processing
      // res.send(res) automatically
      // const util = require('util');
      // console.log(util.inspect(res, {depth: null}));
      // fs.writeFileSync('output.txt', util.inspect(res, {depth: null}), 'utf-8');

      // Object.keys(res).map(k => {
      //   if (res.hasOwnProperty(k)) {
      //     console.log(k)
      //   }
      // });

      console.log(res);

      // const payload = {
      //   accepted: res.accepted,
      //   rejected: res.rejected,
      //   envelopeTime: res.envelopeTime,
      //   messageTime: res.messageTime,
      //   messageSize: res.messageSize,
      //   response: res.response,
      //   envelope: res.envelope,
      //   messageId: res.messageId
      // };

      res.status(200);

      

      res.send(payload);

    })
    .catch(err => {
      sails.log.error('msg', err.message);
      // if (err.message.includes('ECONNREFUSED')) {
      //   sails.log.error('Please check your firewall allows incoming connections on port 25');
      // }
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
