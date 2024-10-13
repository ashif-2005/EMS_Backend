const router = require("express").Router();
const {
  AddEvent,
  UpdateEvent,
  DeleteEvent,
  GetEvents,
  GetMyEvents,
} = require("../controllers/eventController");
const checkUser = require("../middleware/auth");

router.post("/add", checkUser, AddEvent);
router.post("/update/:id", checkUser, UpdateEvent);
router.post("/delete/:id", checkUser, DeleteEvent);
router.get("/get", GetEvents);
router.get("/my/:userName", checkUser, GetMyEvents);

module.exports = router;
