const router = require("express").Router()
const ListingModel = require('./models/listing')

router.get("/", (req, res) => {
    res.send("Hello")
})

router.post("/", async (req, res) => {
    
    const photocard = req.body.photocard
    const username = req.body.username
    const location = req.body.location
    const shipTo = req.body.shipTo
    const description = req.body.description
    const posted = req.body.posted
    const listedFor = req.body.listedFor
    const image = req.body.image

    const newListing = new ListingModel({
        photocard,
        username,
        location,
        shipTo,
        description,
        posted,
        listedFor,
        image
    })

    //console.log(newListing)

    newListing.save(function (err) {
        if (err){
            console.log(err)
            return
        }
        
        res.json("Listing added!")
    })

})

module.exports = router