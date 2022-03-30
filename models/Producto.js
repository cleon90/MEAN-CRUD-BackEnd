const mongoose = require('mongoose');
const ProductoSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    createdDate:{
        type: Date,
        default: Date.now()
    },
});

module.exports = mongoose.model('Producto', ProductoSchema)