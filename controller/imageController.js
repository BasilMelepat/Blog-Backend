const imageController = (req, res, next) => {
  

  res.status(201).json({ path: "images/" + req.file.filename });
};

module.exports = imageController;
