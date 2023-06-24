const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true,"Vă rugăm să introduceți numele produsului evenimentului!"],
    },
    description:{
        type: String,
        required:[true,"Vă rugăm să introduceți descrierea produsului evenimentului!"],
    },
    category:{
        type: String,
        required:[true,"Vă rugăm să introduceți categoria produsului evenimentului!"],
    },
    start_Date: {
        type: Date,
        required: true,
      },
      Finish_Date: {
        type: Date,
        required: true,
      },
      status: {
        type: String,
        default: "Running",
      },
    tags:{
        type: String,
    },
    originalPrice:{
        type: Number,
    },
    discountPrice:{
        type: Number,
        required: [true,"Vă rugăm să introduceți prețul produsului evenimentului!"],
    },
    stock:{
        type: Number,
        required: [true,"Vă rugăm să introduceți stocul produsului evenimentului!"],
    },
    images:[
        {
            type: String,
        },
    ],
    shopId:{
        type: String,
        required: true,
    },
    shop:{
        type: Object,
        required: true,
    },
    sold_out:{
        type: Number,
        default: 0,
    },
    createdAt:{
        type: Date,
        default: Date.now(),
    }
});

module.exports = mongoose.model("Event", eventSchema);