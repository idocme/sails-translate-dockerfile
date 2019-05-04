/**
 * ApiController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const axios = require('axios');

module.exports = {
  translate: async function (req, res) {
    let translation = {err: "One of the params is missing!"};
    let from = req.query.from;//From language
    let to = req.query.to;//To Language
    let phrase = req.query.phrase;//What to translate

    if (to, from, phrase) {
        translation = await axios.get('http://nodered:1880/api/translate/?from='+from+'&to='+to+'&phrase='+phrase);
      }
      return res.json(translation.data);
  },


};
