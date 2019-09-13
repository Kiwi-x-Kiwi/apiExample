const express = require('express');
const router = express.Router();
const axios = require("axios");

/* GET home page */
router.get('/', (req, res, next) => {
  axios.get("https://pokeapi.co/api/v2/pokemon/2")
  .then(responseFromApi => {
    console.log(responseFromApi.data);
    // res.send(responseFromApi.data);
    data = {
      name: responseFromApi.data.name,
      type: responseFromApi.data.types
    };
    res.render('api', {data});
  })
  .catch(err => console.error(err));
});

module.exports = router;
