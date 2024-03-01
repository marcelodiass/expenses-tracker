const express = require("express");
const cors = require("cors");
const { db } = require("./db/db");
const { readdirSync } = require("fs");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT;

// middlewares
app.use(express.json());
app.use(cors({
  origin: ["https://expenses-tracker-backend-4hn7w5cze.vercel.app"],
  methods: ["POST", "GET", "DELETE"],
  credentials: true
}));

mongoose.connect(process.env.MONGO_URL)

// routes
readdirSync("./routes").map((route) =>
  app.use("/api/v1", require("./routes/" + route))
);

const server = () => {
  db();
  app.listen(PORT, () => {
    console.log("listening to port:", PORT);
  });
};

server();
