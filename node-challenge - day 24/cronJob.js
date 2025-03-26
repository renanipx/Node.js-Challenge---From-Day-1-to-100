require('dotenv').config(); // Load environment variables
const cron = require('node-cron');
const fs = require('fs');

const cronSchedule = process.env.CRON_SCHEDULE || '* * * * *';

// Define and start the scheduled task
const task = cron.schedule(cronSchedule, () => {
    const log = `Task executed at: ${new Date().toLocaleString()}\n`;
    fs.appendFileSync('cron-log.txt', log); // Save to a log file
    console.log(log);
});

// Export the task to ensure it runs when imported
module.exports = task;
