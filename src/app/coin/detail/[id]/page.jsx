import { CoinDetailClient } from "@/components/page/coin-detail";

export default function CoinDetailPage({ params }) {
  return <CoinDetailClient id={params.id} />;
}
