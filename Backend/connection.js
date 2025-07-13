const mongoose = require("mongoose");
//Write missing code here
mongoose
  .connect(
    "mongodb+srv://mahadevangopakumar:mahadevan@cluster0.ogcuc5i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
