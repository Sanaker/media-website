const { spawn } = require("child_process");

const startNextJsApp = () => {
  console.log("Running some startup tasks...");

  // Perform any initialization tasks, like connecting to the database, etc.
  // Example: Set up some database initialization or tasks before starting Next.js
  setTimeout(() => {
    console.log("Startup tasks completed.");

    // Now, start the Next.js app by running `npm start`
    console.log("Starting Next.js app...");

    // Spawn the `npm start` process
    const nextApp = spawn("npm", ["start"], { stdio: "inherit" });

    nextApp.on("close", (code) => {
      console.log(`Next.js app stopped with exit code ${code}`);
    });
  }, 2000); // Simulate a 2-second delay for startup tasks
};

// Run initialization tasks and then start the Next.js app
startNextJsApp();
