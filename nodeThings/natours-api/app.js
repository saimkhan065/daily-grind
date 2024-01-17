const express = require("express");
const app = express();
const port = 8080;
const fs = require("fs");
app.use(express.json());
const toursData = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);
//---------------------------------------
app.get("/", (req, res) => {
  //HOME
  res.status(200).send("Hello from server!");
}); //this is called 'route handler'
//---------------------------------------
app.get("/api/v1/tours", (req, res) => {
  //READ ALL
  res.status(200).json({
    status: "success",
    result: toursData.length,
    data: {
      tours: toursData,
    },
  });
});
//---------------------------------------
app.post("/api/v1/tours", (req, res) => {
  //CREATE NEW
  const newId = toursData[toursData.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);
  toursData.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(toursData),
    () => {
      res.status(201).json({
        status: "success",
        data: {
          tour: newTour,
        },
      });
    }
  );
});

app.listen(port, () => {
  console.log(`App running on ${port}`);
});
