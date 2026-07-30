import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import connectDB from "./config/db.js";

const PORT = process.env.PORT || 5000;

// Attempt DB connection (placeholder URI at this stage), then start the server.
connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
