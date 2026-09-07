const express = require("express");
const morgan = require("morgan"); // Step 1: Morgan require kiya

const tourRouter = require("./routes/tourRouter.js");
const userRouter = require("./routes/userRouter");

const app = express();

// Middlewares
app.use(express.json());
app.use(morgan("tiny")); // Step 2: Morgan middleware attach kiya

// Routes
app.use("/api/tours", tourRouter);
app.use("/api/users", userRouter);

const port = 4000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});