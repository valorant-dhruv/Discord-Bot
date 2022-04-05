require("dotenv").config();
const discord = require("discord.js");
const client = new discord.Client();

const fetch = require("node-fetch");
client.on("ready", () => {
  console.log(`${client.user.tag} is up and running`);
});

client.on("message", (msg) => {
  if (msg.content === "hey") {
    msg.channel.send("heyy");
  }
});
client.login(process.env.token);
