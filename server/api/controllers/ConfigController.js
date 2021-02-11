/**
 * ConfigController
 *
 * @description :: Server-side logic for managing configs; so Angular has someone to talk to
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

const configService = require("../services/ConfigService");

module.exports = {
  /**
   * Features:
   * 1. checks request for optional fields (cc, bcc, attachments) and configures the transports/messages respectively
   * 2. server side requirements for certain fields (from, to, subject, body)
   */

  saveConfig: function (req, res) {},

  editConfig: function (req, res) {},

  deleteConfig: function (req, res) {},

  /**
   * TODO: standardise API responses for both email/config controller
   */

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
