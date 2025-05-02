import { FeatureDetailClient } from "@/components/page/feature-detail";

export default function FeatureDetailPage({ params }) {
  return <FeatureDetailClient id={params.id} />;
}
