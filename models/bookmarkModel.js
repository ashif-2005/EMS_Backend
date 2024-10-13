const db = require("mongoose");

const schema = new db.Schema(
  {
    bookmarkedBy: {
      type: db.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    eventId: {
      type: db.Schema.Types.ObjectId,
      ref: "Event",
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    eventName: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Bookmark = db.model("bookmark", schema);
module.exports = { Bookmark };
