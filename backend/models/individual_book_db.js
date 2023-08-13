const {ObjectId}=require("mongodb");
const mongoose = require("mongoose");

const individual_book_schema = new mongoose.Schema({
    // book_id: {
    //     type: Number,
    //     required: true
    // },
    book_type: {
        type: ObjectId
    },
    availabilty: {
        type: Boolean,
        default: true   //true -->available in library  false-->allotted
    },
    student_id: {
        type: Number,
        default: 0
    }


})

module.exports = mongoose.model("individual_book_db",individual_book_schema)