const express = require("express");
const cors = require("cors");
require("./connection")

const app = express();
var PORT = 3001;
app.use(express.json());
app.use(cors());
//Write missing code here
const BlogModel = require("./model")
//Write your POST API here
app.post("/add", async (req, res) => {
  try {
    await BlogModel(req.body).save()
    res.send({ message: "Data Added Successfully" })
  } catch (error) {
    console.log(error);
  }
})

app.get("/get", async (req, res) => {
  try {
    const data = await BlogModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

app.delete("/delete/:id", async (req, res) => {
  try {
    await BlogModel.findByIdAndDelete(req.params.id);
    res.send({ message: "Data Deleted Successfully" });
  } catch (error) {
    console.log(error);
  }
});

app.put("/update/:id", async (req, res) => {
  try{
    const id = req.params.id;
    const updatedData = req.body;
    await BlogModel.findByIdAndUpdate(id, updatedData);
    res.send({ message: "Data Updated Successfully" });
  } catch (error) {
    console.log(error);
  }
});


app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
