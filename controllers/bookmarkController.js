const { Bookmark } = require("../models/bookmarkModel");
const { Event } = require('../models/eventModel')

const AddToBookmark = async (req, res) => {
  try {
    const { userId, eventId, userName, eventName, date, time, location, price, desc, theme } =
      req.body;
    await Event.findByIdAndUpdate(eventId, {isBookmarked: true})
    const bookmark = new Bookmark({
      bookmarkedBy: userId,
      eventId,
      userName,
      eventName,
      date,
      time,
      location,
      price,
      desc,
      theme
    });
    await bookmark.save();
    res
      .status(200)
      .json({ error: false, message: "Event Bookmarked successfully" });
  } catch (err) {
    res.status(500).json({ error: true, message: "Server Error" });
  }
};

const removeFromBookmark = async (req, res) => {
  try {
    const { id } = req.params;
    const { eventId } = req.body;
    await Event.findByIdAndUpdate(eventId, {isBookmarked: false})
    await Bookmark.findByIdAndDelete(id);
    res.status(200).json({
      error: false,
      message: "Event removed from bookmark successfully",
    });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

const getBookmarks = async (req, res) => {
  try {
    const bookmarks = await Bookmark.find({ bookmarkedBy: req.params.id }); 
    res.status(200).json({ error: false, message: bookmarks });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { AddToBookmark, removeFromBookmark, getBookmarks };
