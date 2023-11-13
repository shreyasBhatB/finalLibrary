const express = require("express");
const router = express.Router();

// const StudentController = require("../controllers/studentController");
// const FacultyController = require("../controllers/facultyController");
// const UserController = require("../controllers/unserController");




const BookController = require("../Controller/bookcontroller")

//user api
router.post("/book/add",BookController.addBook);
router.get("/book/dis",BookController.readBook);
router.put("/book/update",BookController.updateBook);
router.post("/book/del",BookController.deleteBook);


module.exports = router;
