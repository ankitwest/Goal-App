const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = 3000; //process.env.PORT ||

connectDB();

const app = express(); // object;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes.js"));
app.use(errorHandler);
app.listen(port, () => console.log(`server started at ${port}`));
