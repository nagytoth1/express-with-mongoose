import mongoose from "mongoose";
//ha nem emlékszel/nem tudod/nem akarod elgépelni a schema nevét, akkor import {} from "../models/crmModel", és akkor kezdd el begépelni a {}-ba
import { ContactSchema } from "../models/crmModel";

const Contact = mongoose.model("Contact", ContactSchema);

//ezt az endpointnak add át
export const addNewContact = (req, res) => {
  let newContact = new Contact(req.body);
  newContact.save().then((err, contact) => {
    if (err) {
      return res.send(err);
    }
    return res.json(contact); //add vissza a contactot, amit lementettünk a db-ben
  });
};

export const listContacts = (req, res) => {
  Contact.find({}).then((err, contact) => {
    if (err) {
      return res.send(err);
    }
    return res.json(contact); //add vissza a contactok listáját, amit megtaláltunk a db-ben
  });
};

export const getContact = (req, res) => {
  Contact.findById(req.params.contactID).then((err, contact) => {
    if (err) {
      return res.send(err);
    }
    return res.json(contact); //add vissza a contactot, amit megtaláltunk a db-ben
  });
};

export const updateContact = (req, res) => {
  Contact.findOneAndUpdate(
    {
      _id: req.params.contactID,
    },
    req.body,
    { new: true } //mutasd a friss, MÓDOSÍTOTT contactot, ne a régit
  ).then((err, contact) => {
    if (err) {
      return res.send(err);
    }
    return res.json(contact); //add vissza a contactot, amit mentettünk a db-be
  });
};

export const deleteContact = (req, res) => {
  Contact.deleteOne({ _id: req.params.contactID })
    .then((deleted) => {
      if (deleted.acknowledged == true && deleted.deletedCount == 1)
        return res.json({ message: "Contact has been deleted successfully" });
      return res.json({
        message: "Contact does not exist or has already been deleted.",
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).send("ERROR: Invalid argument: contactID!");
    });
};
