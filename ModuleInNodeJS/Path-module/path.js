// i am in currently path-module file . i want to read data from package.json and make a directory in FS-module file dump all the data

import path from "path";
import url from "url";
import fs from "fs";
import os from "os";

const fileUrl = url.fileURLToPath(import.meta.url);
const ThreeStepBackfile = path.join(fileUrl, "..", "..", "..");
const readFile = path.join(ThreeStepBackfile, "README.md");
const TwoStepBackFile = path.join(fileUrl, "..", "..");
const TargetDirToDumpData = path.join(TwoStepBackFile, "Fs-module");

function readDatabyPromish(url) {
  return new Promise((resolve, reject) => {
    fs.readFile(url, "utf-8", (err, data) => {
      if (err) {
        reject("error in reading data");
      } else {
        resolve(data);
      }
    });
  });
}

async function readingAndDumpingData() {
  try {
    const readingData = await readDatabyPromish(readFile);
    fs.appendFileSync(`${TargetDirToDumpData}/dump.txt`, readingData);
    console.log("data append succesfully");
  } catch (error) {
    console.error(error);
  }
}

// readingAndDumpingData();
