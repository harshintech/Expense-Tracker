const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("Wait please connecting to MongoDB")
    await mongoose.connect(process.env.MONGO_URI, {});
    console.log("MongoDB connected");
  } catch (error) {
    console.log("Error connecting to mongoDB", error);
    process.exit(1);
  }
};

module.exports = connectDB;
