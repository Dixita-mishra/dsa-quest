import mongoose from "mongoose";

// Connects to MongoDB using the URI from environment variables.
// No real database is connected during this setup phase -
// MONGO_URI is expected to be a placeholder value in .env.
const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI;

    if (!mongoUri) {
      console.warn("MONGO_URI is not set. Skipping database connection.");
      return;
    }

    await mongoose.connect(mongoUri);
    console.log("MongoDB connected successfully.");
  } catch (error) {
    console.error(`MongoDB connection error: ${error.message}`);
  }
};

export default connectDB;
