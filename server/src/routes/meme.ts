import { Router } from 'express';
import axios from 'axios';
import { Telegraf } from 'telegraf';

const router = Router();
const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN!);

bot.command('meme', async (ctx) => {
  const topic = ctx.message.text.split(' ')[1];
  if (!topic) return ctx.reply('Usage: /meme [crypto/NFT topic]');
  
  // Show typing indicator
  ctx.sendChatAction('typing');
  
  try {
    const memeData = await generateMeme(topic);
    ctx.replyWithPhoto({ source: memeData.image }, {
      caption: `${memeData.caption}\n\n👉 Made by @MoodMemeBot - Tag 3 friends to roast next!`
    });
  } catch (error) {
    ctx.reply('Meme generation failed 😢 Try roasting another token!');
  }
});

export default router;