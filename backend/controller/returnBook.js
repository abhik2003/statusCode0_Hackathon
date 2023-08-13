//import model
const {ObjectId}=require("mongodb");
const book_list_db = require("../models/book_list_db");
const individual_book_db = require("../models/individual_book_db");

const returnBook1 = async (_id,book_id_) => {
    try {
        const result = await book_list_db.findByIdAndUpdate({ _id }, {
            $inc: {
                available_copies_count: 1,
                allotted_count: -1
            },
            $push: {
                available_books_id_list : new ObjectId(book_id_)
            }
        })
        console.log("Successfully Returned Book To First DB");
    } catch (error) {
        console.log(error);
    }
}

exports.returnBook = async (req,res) => {
    try {
        const { _id} = req.body;
        if (!_id ) {
            console.log("not all fields...");
            return res.status(400).json({
                status: 400,
                message: "Please fill all fields",
            });
        }
        const result0 = await individual_book_db.findById({ _id });
        const book_type_ = result0.book_type;
        console.log(book_type_);
        returnBook1(book_type_,_id);

        const result = await individual_book_db.findByIdAndUpdate({ _id }, {
            availabilty: true,
            student_id: 0
        })

        console.log("Successfully Returned");
        return res.status(200).json({
            status: 201,
            message: "Successfully Returned",
            data: result,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 500,
            message: error.message,
        });
    }
}