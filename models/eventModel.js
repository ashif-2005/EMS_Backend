const db = require("mongoose");

const schema = new db.Schema(
  {
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
    theme: {
      type: String,
      enum: ["All", "Music", "Dance", "Education", "Party", "Comedy", "Hackathon", "Business", "Workshop"],
      default: "All",
    },
    isBookmarked: {
      type: Boolean,
      default: false,
    }
  },
  {
    timestamps: true,
  }
);

const Event = db.model("event", schema);
module.exports = { Event };
