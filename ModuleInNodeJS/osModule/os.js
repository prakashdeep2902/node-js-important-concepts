import os from "os"; // ES6 import

const upTimeInSec = os.uptime();
console.log(`OS uptime in seconds: ${upTimeInSec}`);

const upTimeInMin = upTimeInSec / 60;
console.log(`OS uptime in minutes: ${upTimeInMin}`);

const upTimeInHours = upTimeInMin / 60;
console.log(`OS uptime in hours: ${upTimeInHours}`);

const upTimeInDays = upTimeInHours / 24; // Corrected to divide by 24 for days
console.log(`OS uptime in days: ${upTimeInDays.toFixed(2)}`);

const memInBytes = os.totalmem();
console.log(`Total memory of system in bytes: ${memInBytes}`);

const memInGb = memInBytes / 1024 ** 3;
console.log(`Total memory of system in GB: ${memInGb.toFixed(2)}`);
