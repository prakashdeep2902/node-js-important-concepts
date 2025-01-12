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

// update
app.put("/update/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const email = req.body.UserEmail;
    const name = req.body.UserName;

    // Validate if user ID is provided
    if (!userId) {
      return res.status(400).json({ Err: "Bad Request: User ID is missing" });
    }

    // Validate if at least one field (email or name) is provided
    if (!email && !name) {
      return res
        .status(400)
        .json({ Err: "You didn't provide fields to update" });
    }

    // Query the database for the document
    const DbData = await UserData.findById(userId);

    if (!DbData) {
      return res.status(404).json({ Err: "Data not found in the database" });
    }

    // Update both fields if they exist
    if (email) {
      DbData.UserEmail = email;
    }
    if (name) {
      DbData.UserName = name;
    }

    // Save the changes
    const updatedData = await DbData.save();

    // Send the updated data as the response
    res.status(200).json({ data: updatedData });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.get("/read/:name", async (req, res) => {
  try {
    const NameToread = req.params.name;

    console.log(NameToread);
    if (!NameToread) {
      return res.status(400).json({ Err: "Bad Request: User ID is missing" });
    }
    const fetchedData = await UserData.findOne({ UserName: NameToread });
    if (!fetchedData) {
      return res.status(404).json({ Err: "Data not found in the database" });
    }

    res.status(200).json({ data: fetchedData });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.delete("/read/:name", async (req, res) => {
  try {
    const NameToread = req.params.name;

    console.log(NameToread);
    if (!NameToread) {
      return res.status(400).json({ Err: "Bad Request: User ID is missing" });
    }
    const fetchedData = await UserData.find({ UserName: NameToread });
    if (!fetchedData) {
      return res.status(404).json({ Err: "Data not found in the database" });
    }

    const deletedData = fetchedData.res.status(200).json({ data: fetchedData });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.listen(Port, () => {
  console.log(`server is running port no:${Port}`);
});
