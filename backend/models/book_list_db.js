const {ObjectId}=require("mongodb");
const mongoose = require("mongoose");

const book_list_db_schema = new mongoose.Schema({
    book_name: {
        type: String,
        required:true
    },
    author_name: {
        type: String,
        required:true
    },
    available_copies_count: {
        type: Number,
        required:true
    },
    allotted_count: {
        type: Number,
        required: true
    },
    total_count: {
        type: Number,
        required: true
    },
    available_books_id_list: {
        type: Array,
        required: true,
        default: []

    }
})



module.exports =  mongoose.model("book_list_db", book_list_db_schema)
