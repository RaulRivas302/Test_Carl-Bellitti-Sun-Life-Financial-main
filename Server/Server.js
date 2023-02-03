const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/v1/amazon-status", (req, res) => {
  const dummyData = {
    url: "https://www.amazon.com",
    statusCode: 200,
    duration: 154,
    date: 1606636800,
  };

  res.json(dummyData);
});

app.get("/v1/google-status", (req, res) => {
  const dummyData = {
    url: "https://www.google.com",
    statusCode: 200,
    duration: 154,
    date: 1606636800,
  };

  res.json(dummyData);
});

app.get("/v1/all-status", (req, res) => {
  const dummyData = [
    {
      url: "https://www.amazon.com",
      statusCode: 200,
      duration: 154,
      date: 1606636800,
    },
    {
      url: "https://www.google.com",
      statusCode: 200,
      duration: 154,
      date: 1606636800,
    },
  ];

  res.json(dummyData);
});

const port = 3000;
app.listen(port, () => {
  console.log(`API server started on http://localhost:${port}`);
});

app.use(
  cors({
    origin: "http://localhost:5173/",
  })
);
