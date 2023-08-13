const express = require("express");
const router = express.Router();

//Handler
const { createUser } = require("../controller/createUser");
const { loginUser } = require("../controller/loginUser");
const { showBookList } = require("../controller/showBookList");
const { addNewBook } = require("../controller/add_new_book");
const { allotBook } = require("../controller/allotBook");
const { returnBook } = require("../controller/returnBook");

// routes create
router.post("/createUser", createUser);
router.post("/loginUser",loginUser);
router.get("/showBookList", showBookList);
router.post("/addNewBook", addNewBook);
router.post("/allotBook", allotBook);
router.post("/returnBook", returnBook);

module.exports = router;
