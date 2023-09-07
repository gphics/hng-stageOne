const express = require("express");

const app = express();

app.use(express.json());

app.get("/api", (req, res) => {
  const date = new Date();
  const dateArr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const current_day = dateArr[date.getDay()];
  const { slack_name, track } = req.query;
  res.status(200).json({
    slack_name,
    current_day,
    track,
    utc_time: date.toISOString(),
    github_file_url:
      "https://github.com/gphics/hng-stageOne/blob/main/server.js",
    github_repo_url: "https://github.com/gphics/hng-stageOne",
    status_code: 200,
  });
});

app.listen(7000);
