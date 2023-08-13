
// import model
const book_list_db = require("../models/book_list_db");
const individual_book_db = require("../models/individual_book_db");

const createNewBookInstance = async (book_type_) => {
    try {
        const book = new individual_book_db({
        
            book_type: book_type_
            
        })
        const result= await book.save();
        // console.log(result);
        
        
        return result._id;
    } catch (error) {
        console.log("error", error);
        // return res.status(500).json({
        //   status: 500,
        //   message: error.message,
        // });
    }
}
exports.addNewBook = async (req,res) => {
    try {
        const {name,author, quantity} = req.body;
        if (!name || !author || !quantity) {
            console.log("not all fields...");
            return res.status(400).json({
              status: 400,
              message: "Please fill all fields",
            });
        }
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
        return res.status(200).json({
            status: 201,
            message: "User added new book successfully",
            data: result,
        });

        
    } catch (error) {
        console.log("error", error);
        return res.status(500).json({
          status: 500,
          message: error.message,
        });
    }
}

