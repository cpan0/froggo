const express = require('express')
const app = express();
const port = 3000

app.get('/', (req, res) => res.send('Bot is now running!!'))

app.listen(port, () =>
  console.log(`Your app is listening a http://localhost:${port}`)
);


/// 


const { Client, Intents, Guild, MessageAttachment } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
var CronJob = require('cron').CronJob;

client.on('ready', () => {
  console.log(`READY!!!`);

});

client.on('ready', () => {
  day_tasks('3', 'wed');
});

client.on('message', msg => {
  if (msg.content === 'hello') {
    msg.channel.send('hi!!!!');
  } else if (msg.content.includes('hey')) {
    msg.channel.send({files: ['./images/hi-hello-hey.jpeg']});
  }
});

client.on('message', msg => {
  if (msg.content.includes('cool')) {
    msg.channel.send('klar is so COOL i want to be as COOL as her! :3c');
  }
});

client.on('message', msg => {
  if (msg.content === 'listen') {
    msg.channel.send('im listening :3');
  }
});

client.on('message', msg => {
  if (msg.content === 'f') {
    msg.channel.send('f is for friends who do stuff together <3');
  }
});

function day_tasks(int, day) {
  var job = new CronJob(
    '0 0 0 * * ' + int,
    function() {
      console.log('You will see this message every ' + day);

      client.channels.cache.forEach(channel => {
        if (channel.type === 'GUILD_TEXT') {
          channel.send({
            files: ['./images/' + int + day + '/' +
              Math.floor(Math.random() * 20) + '.jpg']
          });
        }
      })
    },
    null,
    true,
    'America/Los_Angeles'
  );
};

client.login(process.env.TOKEN);