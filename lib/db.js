import mongoose from "mongoose";

let isConnected = false;

const connectDB = async () => {
  if (isConnected) {
    console.log("Already connected to database");
    return;
  }

 

  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "testdb"
    });

    isConnected = true;
    console.log("Database connected");
  } catch (error) {
    console.log("DB Error:", error.message);
  }
};

export default connectDB;
