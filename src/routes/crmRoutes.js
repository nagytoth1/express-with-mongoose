import {
  addNewContact,
  listContacts,
  getContact,
  updateContact,
  deleteContact,
} from "../controllers/crmController";
const routes = (app) => {
  app
    .route("/contact")
    .get((req, res, next) => {
      console.log(`Request from ${req.originalUrl}`);
      console.log(`Request type ${req.method}`);
      next();
    }, listContacts)
    //az addNewContactot adjuk ehhez, majd ő kezeli a requestet és a responset
    .post(addNewContact);
  app
    //contactID paraméterrel ellátott route-ok
    .route("/contact/:contactID")
    //kérjünk le egy konkrét contactot
    .get(getContact)
    //frissítsünk/módosítsunk egy contactot
    .put(updateContact)
    //töröljünk egy contactot
    .delete(deleteContact);
};

export default routes;
