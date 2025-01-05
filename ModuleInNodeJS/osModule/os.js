import os from "os";
const upTimeInsec = os.uptime();
console.log(`os up time in second ${upTimeInsec}`);
const upTimeInmin = upTimeInsec / 60;
console.log(`os up time in min ${upTimeInmin}`);
const upTimeInhours = upTimeInmin / 60;
console.log(`os up time in hours ${upTimeInhours}`);
const upTimeIndays = upTimeInhours / 60;
console.log(`os up time in days ${upTimeIndays}`);
const memInBytes = os.totalmem();
console.log(`total memo of system in bytes ${memInBytes}`);
const memInGb = memInBytes / 1024 ** 3;
console.log(`total memo of system in GB ${memInGb.toFixed(2)}`);
