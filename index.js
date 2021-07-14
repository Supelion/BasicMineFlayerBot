// Importing the necessary modules
const mineflayer = require('mineflayer')

// Options for the bot
const options = {
    host: 'INSERT SERVER IP HERE',
    port: "INSERT SERER PORT HERE, DEFAULT WILL BE 25565. IF YOU DON'T HAVE A PORT NUMBER, REMOVE THIS LINE!",
    username: "INSERT A USERNAME / EMAIL HERE.",
    password: "INSERT YOUR PASSWORD HERE, IF YOU'RE USING A CRACKED ACCOUNT, REMOVE THIS LINE!"
}

// Creating the actual bot
const bot = mineflayer.createBot(options)

// Creating a function to say "Hey I am a bot." in minecraft chat and logs "I spawned." in console.
function typeHiInChat() {
    bot.chat("Hey! I am a bot.")
    console.log('I spawned.')
}

// Setting up a listener that listens for the 'spawn' event.
bot.once('spawn', typeHiInChat)