// write a function using fs module to take data from ex.txt and pust into nobroker.txt
import fs from "fs";

function funForread(pathOfReadFile) {
  return new Promise((resolve, reject) => {
    fs.readFile(pathOfReadFile, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

async function readAndCopyFn() {
  try {
    const dataAboutNB = await funForread("ModuleInNodeJS/Fs-module/ex.txt");
    fs.writeFileSync("ModuleInNodeJS/Fs-module/nobroker.txt", dataAboutNB);
    console.log("Data has been written to nobroker.txt");
    fs.lstat("ModuleInNodeJS/Fs-module/nobroker.txt", function (err, data) {
      console.log(data);
    });
  } catch (error) {
    console.error(error);
  }
}

readAndCopyFn();
