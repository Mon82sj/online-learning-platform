const express = require("express");
const multer = require("multer");
const {
  registerController,
  loginController,
  postCourseController,
  getAllCoursesController,
  deleteCourseController,
  enrolledCourseController,
  sendCourseContentController,
  completeSectionController,
  getAllCoursesUserController,
  sendAllCoursesUserController,
} = require("../controllers/userControllers");

const router = express.Router();

// Setup Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });

// Authentication middleware
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/register", registerController);
router.post("/login", loginController);
router.post("/addcourse", authMiddleware, upload.array("S_content"), postCourseController);
router.get("/getallcourses", getAllCoursesController);
router.get('/getallcoursesteacher', authMiddleware, getAllCoursesUserController);
router.delete('/deletecourse/:courseid', authMiddleware, deleteCourseController);
router.post('/enrolledcourse/:courseid', authMiddleware, enrolledCourseController);
router.get('/coursecontent/:courseid', authMiddleware, sendCourseContentController);
router.post('/completemodule', authMiddleware, completeSectionController);
router.get('/getallcoursesuser', authMiddleware, sendAllCoursesUserController);

module.exports = router;
