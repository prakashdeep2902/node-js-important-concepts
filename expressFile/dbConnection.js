import mongoose from "mongoose";
const url = "mongodb://localhost:27017/crudOperation";

mongoose
  .connect(url)
  .then(() => {
    console.log(`mongooseDb connected success`);
  })
  .catch((err) => {
    console.log(`find error in connecting th doc ${err}`);
  });

export default mongoose;
