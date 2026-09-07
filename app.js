const express = require("express");

const tourRouter = require("./routes/tourRouter.js");

const app = express();

app.use(express.json());

app.use("/api/tours", tourRouter);

const port = 4000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
