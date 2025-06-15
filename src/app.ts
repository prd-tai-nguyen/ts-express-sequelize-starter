import express from "express";
import sequelize from "./models";
import User from "./models/user";

const app = express();
app.use(express.json());

app.get("/users", async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
  });
});
