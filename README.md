# ZulCryptoCap

ZulCryptoCap is a modern platform for cryptocurrency price tracking, analytics, and education based on Next.js. This platform provides real-time market data, the latest news, educational features, and various tools to help users understand and manage their crypto assets.

## Main Features

- **Real-Time Market Data**: Real-time updates for prices, volume, market cap, and coin statistics.
- **Crypto News Aggregator**: Latest news and articles about blockchain, regulations, and market trends.
- **Market Ranking & Top Movers**: View coin rankings by market cap, gainers/losers, and daily performance.
- **Portfolio Tracking**: Monitor your crypto asset portfolio (demo feature).
- **Crypto Education Hub**: Tutorials, FAQ, and educational content for beginners to advanced users.
- **Event Calendar**: Important events in the crypto world (coming soon).
- **Responsive UI**: Modern, responsive, and user-friendly design.
- **About Us & Partnership**: Team information, vision-mission, global locations, and strategic partners.

## Folder Structure

```
src/
  app/                # Next.js routing & layout
  components/         # UI & page components
    data/             # Dummy data for coins, news, features
    page/             # Page components (home, news, market, about)
    ui/               # Reusable UI components (card, table, grid, etc.)
  lib/                # Utilities & font configuration
public/
  coin/               # Coin logos
  news/               # News images
  partners/           # Partner logos
  team/               # Team & employee photos
  tutorial/           # Tutorial images
```

## Installation & Running the Project

1. **Clone the repository**

   ```bash
   git clone <repo-url>
   cd landingpage-portoproject1
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## Technologies Used

- [Next.js 15](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) (animation)
- [Tabler Icons](https://tabler.io/icons) (icons)
- [Recharts, React Sparklines] (data visualization)
- [clsx, tailwind-merge] (utility classes)
- Dummy data (coin, news, feature) in `src/components/data/`

## Usage Guide

- **Home**: Landing page with hero, features, market updates, top movers, tutorials, FAQ, and latest news.
- **Market**: Crypto market data, market recap, coin details, ranking, and statistics.
- **News**: Trending news, all news, news details, and newsletter.
- **About Us**: Vision-mission, team, global locations, partners, and feature details.
- **Auth**: Login/register page (dummy, no backend).

## Development Notes

- All data is dummy/static, not yet connected to external APIs.
- Portfolio, event calendar, and authentication features are mockups only.
- For production, integrate crypto data APIs & authentication systems.

## Contact

For questions or support, please contact [suryazulfikar22@gmail.com].
