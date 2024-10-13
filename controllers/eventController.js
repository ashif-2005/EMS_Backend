const { Event } = require("../models/eventModel");
const { User } = require("../models/userModel");

const AddEvent = async (req, res) => {
  try {
    const { userName, eventName, date, time, location, price, desc, theme } = req.body;
    const newEvent = new Event({
      userName,
      eventName,
      date,
      time,
      location,
      price,
      desc,
      theme
    });
    await newEvent.save();
    res.status(201).json({ error: false, message: "Event added successfully" });
  } catch (err) {
    return res.status(500).json({ error: true, message: "Server Error", err: err });
  }
};

const UpdateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const { userName, eventName, date, time, location, price, desc, theme } = req.body;
    const updatedEvent = await Event.findByIdAndUpdate(
      id,
      {
        userName,
        eventName,
        date,
        time,
        location,
        price,
        desc,
        theme
      },
    );
    res.json({
      error: false,
      message: "Event updated successfully",
      updatedEvent,
    });
  } catch (err) {
    return res.status(500).json({ error: true, message: "Server Error" });
  }
};

const DeleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedEvent = await Event.findByIdAndDelete(id);
    res.json({
      error: false,
      message: "Event deleted successfully",
      deletedEvent,
    });
  } catch (err) {
    return res.status(500).json({ error: true, message: "Server Error" });
  }
};

const GetEvents = async (req, res) => {
  try {
    const events = await Event.find({});
    res.json({ error: false, message: events });
  } catch (err) {
    return res.status(500).json({ error: true, message: "Server Error" });
  }
};

const GetMyEvents = async (req, res) => {
  try {
    const { userName } = req.params;
    const doc = await User.findOne({userName})
    if(!doc) return res.status(404).json({ error: true, message: "User not found" });
    const myEvents = await Event.find({ userName });
    res.json({ error: false, message: myEvents });
  } catch (err) {
    return res.status(500).json({ error: true, message: "Server Error" });
  }
};

module.exports = { AddEvent, UpdateEvent, DeleteEvent, GetEvents, GetMyEvents };
