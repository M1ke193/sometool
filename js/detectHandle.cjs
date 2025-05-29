const { exec } = require("child_process");

//https://learn.microsoft.com/en-us/sysinternals/downloads/handle
const handleExePath = "C:\\Users\\mndx1\\Downloads\\Handle\\handle.exe";
const logFile = "C:\\Users\\mndx1\\Desktop\\log.txt";
const targetFolder = "";

const command = `"${handleExePath}" -nobanner "${targetFolder}" >> "${logFile}"`;

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(err);
    return;
  }
  if (stdout) {
    console.log(stdout);
  }
  if (stderr) {
    console.error(stderr);
  }
});
