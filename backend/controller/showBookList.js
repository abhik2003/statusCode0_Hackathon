const book_list_db = require("../models/book_list_db");
exports.showBookList = async (req,res) => {
    try {
        const allBook = await book_list_db
            .find({})
            .sort({ book_name: 1 })
        
        console.log(allBook)


        res.json({ success: true, data: allBook ,message: "Show List"});
    } catch (error)
    {
        res.status(500).json({ success: false, error: error });

    }

}