//Write missing codes here
const mongoose = require("mongoose")

const schema = mongoose.Schema({
  title: String,
  content: String,
  img_url: String,
});

//Write missing codes here
const BlogModel = mongoose.model("card",schema)
module.exports = BlogModel