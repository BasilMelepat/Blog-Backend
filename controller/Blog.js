const { Aggregate } = require("mongoose");
const BLOG = require("../Model/blogModel");

const doBlog = (req, res, next) => {
  try {
    const doc = {
      content: req.body.content,
      createdby: req.userId,
      ImagePath: req.body.imagePath,
    };
    BLOG(doc)
      .save()
      .then(() => {
        res.status(201).json("Created succefully");
        console.log(req.body);
      })
      .catch((err) => {
        res.status(500).json("Error creating blog");
      });
  } catch (error) {
    console.error("Unexpected error in doBlog:", error); // Log unexpected errors
    res.status(500).json({ error: "An unexpected error occurred" });
  }
};

const allBlog = async (req, res, next) => {
  try {
    const limitValue = parseInt(req.query.limit) || 1;
    const page = parseInt(req.query.skip) || 5;
    const skipValue = (page - 1) * limitValue;

    const total = await BLOG.countDocuments();

    const blogs = await BLOG.find()
      .limit(limitValue)
      .skip(skipValue)
      .sort({ createdAt: 1 });

    console.log(blogs);

    res.status(200).json({ blogs, total });
  } catch (e) {
    console.log(e);
  }
};


module.exports = { doBlog, allBlog };
