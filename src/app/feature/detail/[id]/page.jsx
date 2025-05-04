import { FeatureDetailClient } from "@/components/page/home-page/feature-detail";

export default function FeatureDetailPage({ params }) {
  return <FeatureDetailClient id={params.id} />;
}
