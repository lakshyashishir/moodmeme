# MoodMeme 🎭

An AI-powered Telegram bot that generates hilarious crypto memes using real-time market data. Drop a token name, get back a perfectly timed meme with snarky AI captions! [NOTE: This project is incomplete.]

## Features

- **Real-time Meme Generation**: Type `/meme [token]` to get instant memes based on current market data
- **AI-Powered Captions**: Smart, contextual captions generated using Gaia AI
- **Market Integration**: Live price data from CoinGecko
- **Viral Features**: Auto-watermarks, sharing prompts, and "most roasted" token leaderboard

## Quick Start

1. Clone the repository:
```bash
git clone https://github.com/yourusername/moodmeme.git
cd moodmeme
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Fill in required environment variables:
- `TELEGRAM_BOT_TOKEN`: Get from @BotFather
- `GAIANET_SERVER_URL`: Gaia AI server URL
- `GAIANET_MODEL`: Your chosen Gaia model
- `IMGFLIP_USER` & `IMGFLIP_PASS`: Imgflip API credentials
- `COINGECKO_API_KEY`: CoinGecko API key

5. Start the development server:
```bash
pnpm run dev
```

## Bot Commands

- `/meme [token]`: Generate a meme for any crypto token
- `/leaderboard`: See the most roasted tokens
- `/help`: Show available commands

## Tech Stack

- **Backend**: Express.js + Node.js
- **AI**: Gaia AI for caption generation
- **Data**: CoinGecko API for market data
- **Memes**: Imgflip API
- **Bot Framework**: Telegraf
- **Type Safety**: TypeScript

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.