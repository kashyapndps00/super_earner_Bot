const { Telegraf, session, Extra, Markup, Scenes } = require('telegraf');
const { inlineKeyboard } = require('telegraf/typings/markup');
const { BaseScene, Stage } = Scenes
const { enter, leave } = Stage
const stage = new Stage()
const admins = [5215163224]
const token = '5112487406:AAEJ7UWxppcRdvDTuUN4yeYMt7-JyKgAmNw';
const bot = new Telegraf(token);

//Scenes Register 

function senderr(e){
    try{
        for (const i of admins){
            bot.telegram.sendMessage(i,"*🥲 Wtf! Error Happened In Bot:\n\n"+e+"\n\nDon't Panic Bot Will Not Stop*",{parse_mode:'Markdown'})
        }
    }catch(err){
        console.log(err)
    }
}

bot.launch()
console.log('Bot Hosted On Server Try To Send /start');

const botstart = async (ctx) =>{
    try{
        bot.telegram.sendChatAction(ctx.from.id,'typing').catch((err) => console.log(err))
        if(ctx.message.chat.type != 'private'){
            return
        }
        let lifafa = ctx.startPayload;
        let name = ctx.from.first_name;
        let id = ctx.from.id;
// Encode the String
var token = id;

ctx.replyWithMarkdown(`*🥰 Hello ${name}🥰\n\n😎Welcome to User Verification Bot😎😁*`);

var inline = [
    [{text:"🎁 Open Claim Link 🎁",url:"https://localhost/lifafa/redirecting.php?id="+lifafa+"&token="+token+""}]
]
if (lifafa !== ""){
ctx.replyWithMarkdown("*👉Click Open Claim Link to Claim Lifafa*",{reply_markup:{inline_keyboard:inline}})
}
    }catch(e){
        console.log(e)
senderr(e)
    }
}
bot.start(botstart)