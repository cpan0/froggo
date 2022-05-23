const { Client, Intents, Guild, MessageAttachment } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const auth = require('./auth.json');

client.on('ready', () => {
 console.log(`READY!!!`);

});

client.on('ready', () => {
    
var CronJob = require('cron').CronJob;

 var job = new CronJob(
     '01 * * * * *',
     function() {
         console.log('You will see this message every second');

         client.channels.cache.forEach(channel => {
            if(channel.type === 'GUILD_TEXT') 
            channel.send({ files: ['./images/3wed/' + Math.floor(Math.random() * 20) + '.jpg']});
        })

        },
    null,
    true,
    'America/Los_Angeles'
    );

});

client.on('message', msg => {
 if (msg.content === 'hello') {
  msg.channel.send('hi!!!!');
 }
});

client.login(auth.token);