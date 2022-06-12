require('dotenv').config();
const { Telegraf } = require('telegraf')
const fetch = require('node-fetch');
const bot = new Telegraf(process.env.BOT_TOKEN||8080)
bot.start((ctx) => {ctx.reply(`Привет ${ctx.message.from.first_name}`)
console.log(ctx.message)})
bot.help((ctx) => ctx.reply('Напиши /bot'))
bot.hears('/bot', async (ctx) => {
  async function request2() {
    const response = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-30-09/8/1/")
    const data = await response.json()
    let res = 2;
    let res2 = 0;
    let result=0,result2=0;
    for (let i = 0; i <= 1; i++) {
      score_dealer = data.items.results[i].results.score_dealer
      score_player = data.items.results[i].results.score_player
      if (score_player == score_dealer)
          res = res - 1; 
  }
  console.log(res);
  if (res == 0)
  {ctx.reply( '2 ничьи подряд');}
  for (let i = 0; i <= 1; i++) {
    score_dealer = data.items.results[i].results.score_dealer
    score_player = data.items.results[i].results.score_player
    if ((score_player == 8 && score_dealer == 8)||(data.items.results[0].results.score_player == 8 &&data.items.results[1].results.score_dealer==8))
        res2 = res2 + 1; 
}
console.log(res);
if (res2 == 1)
{ctx.reply( '8 в ряд');}
for (let i = 0; i <= 2; i++) {
  score_dealer = data.items.results[i].results.score_dealer
  score_player = data.items.results[i].results.score_player
  // console.log("игрок " + score_player + " "+ score_dealer +" дилер")
  if ((score_player > 8) && (score_dealer > 8))
      result = result + 1;
}
if (result === 3)
{ctx.reply( '6 карт больше 8');}

for (let i = 0; i <= 2; i++) {
  score_dealer = data.items.results[i].results.score_dealer
  score_player = data.items.results[i].results.score_player
  // console.log("игрок " + score_player + " "+ score_dealer +" дилер")
  if ((score_player < 8) && (score_dealer < 8))
      result2 = result2 + 1;
}
if (result2 === 3)
{ctx.reply( '6 карт меньше 8');}

  }
   async function request() {
      const response = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-30-09/8/1/")
      const data = await response.json()
      let result = 0;
      let result2 = 0;
      let result3 = 0;
      let result4 = 0;
      let result5 = 0;
      score_dealer = data.items.results[0].results.score_dealer
  
      for (let i = 0; i <= 19; i++) {
          score_dealer = data.items.results[i].results.score_dealer
          score_player = data.items.results[i].results.score_player
          // console.log("игрок " + score_player + " "+ score_dealer +" дилер")
              if ((score_player == 3 && (score_dealer == 2 || score_dealer == 8 || score_dealer == 3))
               || (score_player == 13 && (score_dealer == 13 || score_dealer == 8 || score_dealer == 14)) 
               || (score_player == score_dealer) || (score_player == 8) || (score_dealer == 8))
              result = result + 1;
      }
      console.log(result);
      if (result == 0)
     { ctx.reply( 'Больших кэфов давно не было 20 минут');}
     
      for (let i = 0; i <= 19; i++) {
         score_dealer = data.items.results[i].results.score_dealer
         score_player = data.items.results[i].results.score_player
         if ((score_player == 8) || (score_dealer == 8))
             result2 = result2 + 1;
         
     }
     console.log(result2);
     if (result2 == 0)
    {ctx.reply( 'Не было 8 уже 20 минут');}
  for (let i = 0; i <= 19; i++) {
         score_dealer = data.items.results[i].results.score_dealer
         score_player = data.items.results[i].results.score_player
         if ((score_player == 8) || (score_dealer == 8))
             result2 = result2 + 1;
         
     }
     console.log(result2);
     if (result2 == 0)
    {ctx.reply( 'Не было 8 уже 20 минут');}

    for (let i = 0; i <= 29; i++) {
      score_dealer = data.items.results[i].results.score_dealer
      score_player = data.items.results[i].results.score_player
      if (score_player == 8)
          result4 = result4 + 1;
      
  }
  console.log(result4);
  if (result4 == 0)
 {ctx.reply( 'Не было 8 у игрока уже 30 минут (вертикаль)');}
 for (let i = 0; i <= 29; i++) {
  score_dealer = data.items.results[i].results.score_dealer
  score_player = data.items.results[i].results.score_player
  if (score_dealer == 8)
      result5 = result5 + 1;
}

console.log(result5);
if (result5 == 0)
{ctx.reply( 'Не было 8 у дилера уже 30 минут (вертикаль)');}
     for (let i = 0; i <= 29; i++) {
         score_dealer = data.items.results[i].results.score_dealer
         score_player = data.items.results[i].results.score_player
 
         if (score_player == score_dealer)
             result3 = result3 + 1;
     }
     console.log(result3);
     if (result3 == 0)
    { ctx.reply( 'Не было ничьи 30 минут');}
    
  }

 

  
    function good(){
      
       ctx.reply( "Вы запустили Бота на стратегию «Большие кэфы» ⚠ Не забудьте поставить особые уведомления на Бота, и ждите сигнала на валуйные ситуации!");
       ctx.reply( "Удачи! По всем вопросам пишите @BetgamesTV_Admin"); 
       global.time= setInterval(request, 120000)  
       global.time2= setInterval(request2, 40000) 
       }



good()}
)
bot.hears('/end', async (ctx) => {
    try {
      clearInterval(time);
      clearInterval(time2);
      ctx.reply("Пока");  
    } catch(err) {
      ctx.reply("Этот бот и так выключен");    
    } 
})
bot.launch()

