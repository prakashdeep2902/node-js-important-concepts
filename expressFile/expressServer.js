import express, { json } from "express";
import mongoose from "./dbConnection.js";
import UserData from "./Modals/User.js";
const Port = 9090;
const app = express();

// middleware started
app.use(express.json());
// middleware end

app.post("/create", async (req, res) => {
  try {
    const { name, email } = req.body;
    if (!name && !email) {
      return res.status(404).json({ error: "email or name is not  found" });
    }
    let data = new UserData({
      UserName: name,
      UserEmail: email,
    });

    await data.save();

    res.status(201).json({ name: name, email: email });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
});

app.put("/update/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const email = req.body.UserEmail;

    if (!userId) {
      return res.status(400).json({ Err: "Bad Request" });
    }
    const userData = await UserData.findByIdAndUpdate(userId, {
      UserEmail: email,
    });

    res.status(201).json({ data: userData });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
});

app.listen(Port, () => {
  console.log(`server is running port no:${Port}`);
});
