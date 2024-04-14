import mongoose from "mongoose";
const db_url = "mongodb://127.0.0.1/db";
let db;
//So that nothing else but what is defined in the schemas goes into the db.
mongoose.set("strictQuery", true);

const connectDb = async () => {
  try {
    mongoose.connect(db_url);
  } catch (error) {
    console.log(error);
  }
  db = mongoose.connection;
  db.once("open", async () => {
    console.log("Connected to DB");
  });
  db.on("error", () => {
    console.log("Error connecting to DB");
  });
};

export default connectDb;
