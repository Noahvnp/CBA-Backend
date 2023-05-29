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
};

module.exports = eventController;
