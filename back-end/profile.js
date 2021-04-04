const router = require("express").Router()
const axios = require("axios")

router.get("/", async (req, res) => {
    const apiResponse = await axios
      .get(
        "https://my.api.mockaroo.com/profile.json?key=bce2c650"
        // get using .env variables
        //`${process.env.API_BASE_URL}/?key=${process.env.API_SECRET_KEY}`
      )
      .catch(err => next(err))
    res.json(apiResponse.data)
  }
)

module.exports = router