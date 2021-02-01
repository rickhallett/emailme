/**
 * EmailController
 *
 * @description :: Server-side logic for managing emails; so Angular has someone to talk to
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

const defaultConfigs = {
  config1: true,
  config2: false,
  config3: "admin",
};

let userConfigs = {
  config1: false,
  config2: false,
  config3: "user",
};

module.exports = {
  getTest: function (req, res) {
    return res.json({
      success: true,
      type: "EMAILER_TESTS",
      data: null,
    });
  },

  postTest: function (req, res) {
    console.log(req);

    return res.json({
      success: true,
      type: "EMAILER_TESTS",
      data: null,
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
    console.log(req);

    return res.json({
      success: true,
      type: "EMAILER_CONFIG",
      data: null,
    });
  },
};
