export async function register() {
  var spawn = require("child_process").spawn;
  spawn("python3", ["src/server/pyserver/server.py"], {
    detached: true,
  });
  console.log("py server started");
}
