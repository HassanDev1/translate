const Discord = require('discord.js');
const bot = new Discord.Client();
const erayada =require('./erey_bixin.js');

const token = 'NzAzNjQxMTkwOTUxNjgyMDgw.XqRveQ.0yjXLsiZT7zSiL3LLLwx1ZxgIN0';
bot.on('ready', ()=>{ 
    console.log('hello the bot is online');
    
})
bot.on('message',msg=>{
    erayada.map((er)=>{
        const micno = er.micno.toLowerCase().trim();
        const erey = er.erey.toLowerCase().trim()
        if(msg.content.toLowerCase()===(micno)){
            msg.reply("Micniisi waa: " + erey)
        }
        else if(msg.content.toLowerCase() ===(erey)){
            msg.reply("It means: " + micno);
        }
        
        
    })
})
bot.login(token)
