const express = require("express");
const dotenv = require("dotenv").config();
const port = 3000; //process.env.PORT ||
const { errorHandler } = require("./middleware/errorMiddleware");
const app = express(); // object;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes.js"));
app.use(errorHandler);
app.listen(port, () => console.log(`server started at ${port}`));
