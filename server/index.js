import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

app.use(cors());
app.use(express.json());

const port = 3000;
const connectionUrl = "mongodb+srv://togrul:togrul@firstcluster.udpwqcz.mongodb.net/"

const Schema = mongoose.Schema;

const ServiceSchema = new Schema({
  icon: String,
  title: String,
  desc: String,
  price:Number
});

const Services = mongoose.model('EducatureService', ServiceSchema);


app.get("/", async (req, res) => {
  try {
    const allServices = await Services.find({})
    res.send(allServices);
  } catch (error) {
    console.log(error);
  }
});

app.get("/:id", async (req, res) => {
  try {
    const {id} = req.params
    const service  = await Services.findById(id)
  res.send(service);
  } catch (error) {
    console.log(error);
  }
});

app.post("/", async (req, res) => {
  try {
    const newService = new Services(req.body)
  await newService.save()
  res.send("Service Created!");
  } catch (error) {
    console.log(error);
  }
});

app.delete("/:id", async (req, res) => {
  try {
    const {id} = req.params
    const service = await  Services.findByIdAndDelete(id)
    res.send("Service Deleted!");
  } catch (error) {
    console.log(error);
  }
});

mongoose.connect(connectionUrl)
  .then(() => console.log('Connected!'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
