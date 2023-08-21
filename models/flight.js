const mongoose = require('mongoose')

const Schema = mongoose.Schema 

const destinationSchema = new Schema ({
    airport: {
        type: String
    }, 
    arrival: {
        type: Date
    }
})

const flightSchema = new Schema ({
    airline: {
        type: String, 
        enum: ['American', 'Southwest', 'United', 'Delta']
    }, 
    airport: {
        type: String, 
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DFW'
    }, 
    flightNo: {
        type: Number, 
        required: true, 
        min: 10,
        max: 9999
    }, 
    departs: {
        type: Date, 
        default: function () {
            const today = new Date() 
            return today.setFullYear(today.getFullYear() + 1)     
            // const today = new Date() 
            // const thisYear = today.getFullYear()
            // const nextYear = thisYear + 1 
            // const departYear = today.setFullYear(nextYear)   
            // return departYear
        }
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Flight', flightSchema)
