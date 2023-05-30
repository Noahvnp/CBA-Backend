const Event = require("../models/eventModel");

const eventController = {
  getEvent: async (req, res) => {
    try {
      const event = await Event.find();
      res.status(200).json(event);
    } catch (error) {
      res.status(500).json(err);
    }
  },
  createEvent: async (req, res) => {
    try {
      const idBussiness = req.params.id;
      const newEvent = new Event({ ...req.body, idBussiness: idBussiness });
      const event = await newEvent.save();
      res.status(200).json(event);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  updateEvent: async (req, res) => {
    try {
      const event = await Event.findByIdAndUpdate(
        { _id: req.params.id },
        { $set: { ...req.body, idCreator: req.params.idCreator } }
      );
      if (!event) {
        res.status(404).json("Not found");
      }
      res.status(200).json("Update event successfully");
    } catch (err) {
      res.status(500).json(err);
    }
  },
  deleteEvent: async (req, res) => {
    try {
      await Event.findByIdAndDelete(req.params.id);
      res.status(200).json("Delete event successfully");
    } catch (err) {
      res.status(500).json(err);
      
    }
  }
};

module.exports = eventController;
