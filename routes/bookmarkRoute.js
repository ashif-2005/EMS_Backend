const router = require("express").Router();
const {
  AddToBookmark,
  removeFromBookmark,
  getBookmarks
} = require("../controllers/bookmarkController");
const checkUser = require("../middleware/auth");

router.post("/add", checkUser, AddToBookmark);
router.post("/remove/:id", checkUser, removeFromBookmark);
router.get("/get/:id", checkUser, getBookmarks);

module.exports = router;
