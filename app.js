const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/authRoutes");
const connectDB = require("./config/db");
const blogPostRoutes = require("./routes/blogRoutes");
const app = express();

// Set up middleware, other routes, etc.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// User routes
app.use("/auth", userRoutes);

// blog routes
app.use("/api", blogPostRoutes);

// Connect to the database
connectDB();

const port = 8080;

app.listen(port, () => {
  console.log(`Listen on ${port}`);
});
