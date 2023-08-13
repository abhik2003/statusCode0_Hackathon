//import model
const {ObjectId}=require("mongodb");
const book_list_db = require("../models/book_list_db");
const individual_book_db = require("../models/individual_book_db");

const allotBook1 = async (_id, book_id_) => {
    try {
        const result = await book_list_db.findByIdAndUpdate({ _id }, {
            $inc: {
                available_copies_count: -1,
                allotted_count: 1
            },
            $pull: {
                available_books_id_list: new ObjectId(book_id_)
            }
        })

        console.log("Successfully Allotted From First DB", book_id_);
    } catch (error) {
        console.log(error);
    }
}

exports.allotBook = async (req, res) => {
    try {
        const { _id, stud_id } = req.body;
        if (!_id || !stud_id) {
            console.log("not all fields...");
            return res.status(400).json({
                status: 400,
                message: "Please fill all fields",
            });
        }
        const result0 = await individual_book_db.findById({ _id });
        const book_type_ = result0.book_type;
        console.log(book_type_);
        allotBook1(book_type_, _id);

        const result = await individual_book_db.findByIdAndUpdate({ _id }, {
            availabilty: false,
            student_id: stud_id
        })
        return res.status(200).json({
            status: 201,
            message: "Successfully Allotted",
            data: result,
        });
        //console.log("Successfully Allotted");
    } catch (error) {
        console.log("error", error);
        return res.status(500).json({
            status: 500,
            message: error.message,
        });
    }
}
