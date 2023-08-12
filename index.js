const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");



mongoose.connect("mongodb://127.0.0.1:27017/database4",{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connection successful")).catch((err) => console.log(err));


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



const book_list_db = new mongoose.model("book_list_db", book_list_db_schema)


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

const individual_book_db =new mongoose.model("individual_book_db",individual_book_schema)

const createNewBookInstance = async (book_type_) => {
    try {
        const book = new individual_book_db({
        
            book_type: book_type_
            
        })
        const result= await book.save();
        // console.log(result);
        
        return result._id;
    } catch (error) {
        console.log(error);
    }
}
const addNewBook = async (name,author, quantity) => {
    try {
        const book = new book_list_db({
            book_name: name,
            author_name: author,
            available_copies_count: quantity,
            allotted_count:0,
            total_count: quantity,
            
            
        })
        const result = await book.save();
        const id = result._id;
        console.log("bbook id : ",id);
        
        let new_book_list = [];
        await Promise.all(
            Array.from({ length: quantity }, async () => {
                const newBookInstance = await createNewBookInstance(id);
                new_book_list.push(newBookInstance);
                console.log(new_book_list);
            })


        );

        const updateList=async (_id) => {
            try {
                const result1 = await book_list_db.findByIdAndUpdate({ _id }, {
                    available_books_id_list: new_book_list
                    
                })
    
                console.log(result1);
            } catch (error) {
                console.log(error)
            }
            
        }
        updateList(id);
    
        console.log("after ",new_book_list);

        
    } catch (error) {
        console.log(error)
    }
}


// addNewBook("Book Name 2", "Author Name 2",3);


const allotBook1 = async (_id,book_id_) => {
    try {
        const result = await book_list_db.findByIdAndUpdate({ _id }, {
            $inc: {
                available_copies_count: -1,
                allotted_count: 1
            },
            $pull: {
                available_books_id_list : new ObjectId(book_id_)
            }
        })

        console.log("Successfully Allotted From First DB",book_id_);
    } catch (error) {
        console.log(error);
    }
}

const allotBook = async (_id, stud_id) => {
    try {
        const result0 = await individual_book_db.findById({ _id });
        const book_type_ = result0.book_type;
        console.log(book_type_);
        allotBook1(book_type_,_id);

        const result = await individual_book_db.findByIdAndUpdate({ _id }, {
            availabilty: false,
            student_id: stud_id
        })

        console.log("Successfully Allotted");
    } catch (error) {
        console.log(error);
    }
}


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

const returnBook = async (_id) => {
    try {
        const result0 = await individual_book_db.findById({ _id });
        const book_type_ = result0.book_type;
        console.log(book_type_);
        returnBook1(book_type_,_id);

        const result = await individual_book_db.findByIdAndUpdate({ _id }, {
            availabilty: true,
            student_id: 0
        })

        console.log("Successfully Returned");
    } catch (error) {
        console.log(error);
    }
}

const showBookList = async () => {
    try {
        const allBook = await book_list_db
            .find({})
            .sort({ book_name: 1 })
        
        console.log(allBook)


        // res.json({ success: true, data: allBook ,message: "Show List"});
    } catch (error)
    {
        // res.status(500).json({ success: false, error: error });

    }

}
// showBookList();

allotBook("64d76a50bf470db46ab566e6",670);
// returnBook("64d76a50bf470db46ab566e5");










