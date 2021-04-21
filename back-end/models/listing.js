const mongoose = require('mongoose')

const Schema = mongoose.Schema

const listingSchema = new Schema({
    photocard: {
        name: String,
        group: String,
        member: String,
        album: String
    },
    // username: String,
    location: String,
    shipTo: String,
    description: String,
    posted: { 
        type: Date, 
        default: Date.now
    },
    listedFor: {
        selling: {
            price: Number,
            shipping: Number
        },
        trading: {
            want: String
        },
        looking: {
            offer: String
        }
    }
    // image1: { 
    //     data: Buffer, 
    //     contentType: String 
    // }
})

const Listing = mongoose.model('Listing', listingSchema)

module.exports = Listing