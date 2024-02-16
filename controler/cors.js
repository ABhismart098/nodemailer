const cron = require('node-cron');
const sendMail = require('./sendMAil');

// Schedule the cron job to run at 12:45 every day
const seduler = cron.schedule('43 01 * * 6', async () => {
    try {
        console.log('Sending email...');
        await sendMail();
        console.log('Email sent successfully.');
    } catch (error) {
        console.error('Error sending email:', error);
    }
}, {
    scheduled: true,
    timezone: "Asia/Kolkata" // Set your timezone here
});
module.exports = seduler;