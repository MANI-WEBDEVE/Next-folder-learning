import express from "express";

const app = express();

app.use(express.static("dist"));
let img = app.use("static", express.static("public"));
console.log(img);
app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/img", (req, res) => {
  res.send(`<img src=${op.jpg} alt=''/`);
});

app.get("/api/jokes", (req, res) => {
  let jokes = [
    {
      id: 1,
      Name: " Albert Einstein",
      joke: "What did Albert Einstein say when he found a dead battery? I guess it's lost all its potential!",
      img: "",
    },
    {
      id: 2,
      Name: " Albert Einstein",
      joke: "Why did Albert Einstein bring a ladder to the bar? Because he heard the drinks were on the  high energy shelf!",
      img: "data:image/jpeg;base64,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",
    },
    {
      id: 3,
      Name: " Albert Einstein",
      joke: "Why did Albert Einstein refuse to eat cake? Because he didn't want to gain any mass on his energy!",
      img: "https://media.licdn.com/dms/image/D4D22AQH9RMonX4KVZA/feedshare-shrink_800/0/1712655322550?e=1715817600&v=beta&t=ey2VJ2Vlg4_CEgLfmlXzs3eH_bMkjNWPWhQM_hlDJzE",
    },
  ];

  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server at start http://localhost:${port}`);
});
