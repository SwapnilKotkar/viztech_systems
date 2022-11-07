import mongoose from "mongoose";

const db = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGODB_URL);
    if (connection.readyState == 1) {
      console.log("Databse Connected");
    }
  } catch (error) {
    console.log("Database Error: ", error);
  }
};

export default db;
