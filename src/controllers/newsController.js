const News = require("../models/newsModel");

const newsController = {
  createNews: async (req, res) => {
    try {
      const idCreator = req.params.id;
      const fileData = req.file;
      const newNews = new News({ ...req.body, idCreator: idCreator, newsPictureURL: fileData?.path });
      const news = await newNews.save();
      res.status(200).json(news);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getNews: async (req, res) => {
    try {
      const news = await News.find();
      res.status(200).json(news);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  updateNews: async (req, res) => {
    try {
      const news = await News.findByIdAndUpdate(
        { _id: req.params.id },
        { $set: { ...req.body, idCreator: req.params.idCreator } }
      );
      if (!news) {
        res.status(404).json("Not found");
      }
      res.status(200).json("Update news successfully");
    } catch (err) {
      res.status(500).json(err);
    }
  },
  deleteNews: async (req, res) => {
    try {
      await News.findByIdAndDelete(req.params.id);
      res.status(200).json("Delete news successfully!");
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = newsController;
