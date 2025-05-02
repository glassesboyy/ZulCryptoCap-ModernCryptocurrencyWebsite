"use client";

import { getFeatureById } from "@/components/data/feature-data";
import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";

export function FeatureDetailClient({ id }) {
  // Move feature fetching to component body
  const feature = getFeatureById(id);
  const Icon = feature.icon;

  if (!feature) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Feature not found</h1>
          <Link
            href="/#feature"
            className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300"
          >
            <IconArrowLeft size={20} />
            Back to Features
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/#feature"
          className="inline-flex items-center text-violet-400 hover:text-white mb-8"
        >
          <IconArrowLeft className="mr-2" />
          Back
        </Link>

        <div className="space-y-8">
          <div className="flex items-center space-x-4">
            <div className="h-16 w-16 rounded-full bg-violet-900/20 p-2 flex items-center justify-center">
              <Icon className="h-8 w-8 text-violet-400" />
            </div>
            <h1 className="text-4xl font-bold">{feature.title}</h1>
          </div>

          <p className="text-xl text-white/70">{feature.description}</p>

          <div className="bg-violet-900/20 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-4">Detailed Overview</h2>
            <p className="text-white/80">{feature.longDescription}</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Key Benefits</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {feature.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <div className="h-2 w-2 bg-violet-400 rounded-full"></div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
