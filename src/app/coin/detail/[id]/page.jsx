import { CoinDetailClient } from "@/components/page/market-page/coin-detail";

export default function CoinDetailPage({ params }) {
  return <CoinDetailClient id={params.id} />;
}
