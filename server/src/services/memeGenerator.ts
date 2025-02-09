import { getCryptoData } from './cryptoData';
import axios from 'axios';

export async function generateMeme(topic: string) {
  const cryptoData = await getCryptoData(topic);
  const caption = await generateGaiaCaption(topic, cryptoData);
  const memeImage = await generateMemeImage(caption);
  
  return { caption, image: memeImage };
}

async function generateGaiaCaption(topic: string, data: any) {
  const prompt = `Generate a snarky crypto meme caption about ${topic} with:
  - Current price: $${data.price}
  - 24h change: ${data.change24h}%
  - Use crypto slang and humor
  - Max 2 sentences`;
  
  const response = await axios.post(
    `${process.env.GAIANET_SERVER_URL}/chat/completions`,
    {
      model: process.env.GAIANET_MODEL,
      messages: [{ role: "user", content: prompt }]
    }
  );
  
  return response.data.choices[0].message.content;
}

async function generateMemeImage(caption: string) {
  const response = await axios.post('https://api.imgflip.com/caption_image', {
    template_id: '181913649', // Drake Hotline Bing template
    username: process.env.IMGFLIP_USER,
    password: process.env.IMGFLIP_PASS,
    boxes: [
      { text: "When you bought crypto at the peak", position: 0 },
      { text: caption, position: 1 }
    ]
  });
  
  return response.data.data.url;
}