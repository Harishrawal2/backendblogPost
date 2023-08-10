const mongoose = require("mongoose");
const MONGO_URI =
  "mongodb+srv://harishrawal703:jVFPi0UnsWHxBxHz@blogapp.sjn6hpm.mongodb.net/";
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

module.exports = connectDB;
