// run throught UptimeRobot
// https://uptimerobot.com/dashboard

const express = require('express')
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Bot is now running!!'));

app.listen(port, () =>
  console.log(`Your app is listening a http://localhost:${port}`)
);

// hello :^)

const { Client, Intents, Guild, MessageAttachment } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
var CronJob = require('cron').CronJob;
var wednesday_id = "";

client.on('ready', () => {
  console.log(`READY!!!`);
});

client.on('ready', () => {

  var job1 = new CronJob(
    '0 0 0 * * 1',
    function() {
      client.channels.cache.forEach(channel => {
        if (channel.type === 'GUILD_TEXT')
          channel.send({ files: ['./images/1mon/' + Math.floor(Math.random() * 25) + '.jpg'] });
      })

    },
    null,
    true,
    'America/Los_Angeles'
  );

  var job2 = new CronJob(
    '0 0 0 * * 2',
    function() {
      client.channels.cache.forEach(channel => {
        if (channel.type === 'GUILD_TEXT')
          channel.send({ files: ['./images/2tues/' + Math.floor(Math.random() * 26) + '.jpg'] });
      })

    },
    null,
    true,
    'America/Los_Angeles'
  );

  var job3 = new CronJob(
    '0 0 0 * * 3',
    function() {
      client.channels.cache.forEach(channel => {
        if (channel.type === 'GUILD_TEXT')
          channel.send({ files: ['./images/3wed/' + Math.floor(Math.random() * 30) + '.jpg'] });
      })

    },
    null,
    true,
    'America/Los_Angeles'
  );

  var job4 = new CronJob(
    '0 0 0 * * 4',
    function() {
      client.channels.cache.forEach(channel => {
        if (channel.type === 'GUILD_TEXT')
          channel.send({ files: ['./images/4thurs/' + Math.floor(Math.random() * 25) + '.jpg'] });
      })

    },
    null,
    true,
    'America/Los_Angeles'
  );

  var job5 = new CronJob(
    '0 0 0 * * 5',
    function() {
      client.channels.cache.forEach(channel => {
        if (channel.type === 'GUILD_TEXT')
          channel.send({ files: ['./images/5fri/' + Math.floor(Math.random() * 32) + '.jpg'] });
      })

    },
    null,
    true,
    'America/Los_Angeles'
  );

  var job6 = new CronJob(
    '0 0 0 * * 6',
    function() {
      client.channels.cache.forEach(channel => {
        if (channel.type === 'GUILD_TEXT')
          channel.send({ files: ['./images/6sat/' + Math.floor(Math.random() * 20) + '.jpg'] });
      })

      var job7 = new CronJob(
        '0 0 0 * * 7',
        function() {
          client.channels.cache.forEach(channel => {
            if (channel.type === 'GUILD_TEXT')
              channel.send({ files: ['./images/7sun/' + Math.floor(Math.random() * 20) + '.jpg'] });
          })

        },
        null,
        true,
        'America/Los_Angeles'
      );

    },
    null,
    true,
    'America/Los_Angeles'
  );


});

client.on('message', msg => {
  switch (msg.content.toLowerCase()) {
    case 'hello':
      msg.channel.send('hi!!!!');
      break;
    case 'hey':
      msg.channel.send({ files: ['./images/hi-hello-hey.jpeg'] });
      break;
    case 'cool':
      msg.channel.send('klar is so COOL i want to be as COOL as her! :3c');
      break;
    case 'listen':
      msg.channel.send('im listening :3');
      break;
    case 'f':
      msg.channel.send('f is for friends who do stuff together <3');
      break;
    case 'coward':
      msg.channel.send('haha yeah coward');
      break;

    case '8) set wednesday':
      wednesday_id = msg.channel.id;
      msg.channel.send('wednesday channel set :3');
      break;
  }
});

// day_tasks('1', 'mon', 25);
// day_tasks('2', 'tues', 26);
// day_tasks('3', 'wed', 30);
// day_tasks('4', 'thurs', 25);
// day_tasks('5', 'fri', 32);
// // day_tasks('6', 'sat', 20);
// // day_tasks('7', 'sun', 20);

// function day_tasks(int, day, total_n_jpg) {
//   var job = new CronJob(
//     '0 0 0 * * ' + int,
//     // '* * * * * ' + ? ,  // testing
//     function() {
//       client.channels.cache.forEach(channel => {
//         if (channel.id === wednesday_id) {
//           channel.send({
//             files: ['./images/' + int + day + '/' +
//               Math.floor(Math.random() * total_n_jpg) + '.jpg']
//           });
//           console.log('You will see this message every ' + day);
//         }
//       })
//     },
//     null,
//     true,
//     'America/Los_Angeles'
//   );
// };

client.login(process.env.TOKEN);