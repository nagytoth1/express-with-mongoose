import mongoose from "mongoose";

//Schema is what dictates the structure of data we want to send to our database
//how our data is going to be stored in the MongoDB
export const ContactSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: "Enter first name!",
  },
  lastname: {
    type: String,
    required: "Enter last name!",
  },
  email: {
    type: String,
  },
  company: {
    type: String,
  },
  phone: {
    type: Number,
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
});
