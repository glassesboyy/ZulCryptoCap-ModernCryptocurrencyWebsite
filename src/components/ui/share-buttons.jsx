"use client";

import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconLink,
} from "@tabler/icons-react";

export function ShareButtons({ title }) {
  const handleShare = (platform) => {
    const url = window.location.href;
    const text = title;

    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    };

    window.open(shareUrls[platform], "_blank");
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-white/60">Share:</span>
      <button
        onClick={() => handleShare("twitter")}
        className="p-2 rounded-full hover:bg-violet-500/20 text-violet-400"
      >
        <IconBrandTwitter size={20} />
      </button>
      <button
        onClick={() => handleShare("facebook")}
        className="p-2 rounded-full hover:bg-violet-500/20 text-violet-400"
      >
        <IconBrandFacebook size={20} />
      </button>
      <button
        onClick={() => handleShare("linkedin")}
        className="p-2 rounded-full hover:bg-violet-500/20 text-violet-400"
      >
        <IconBrandLinkedin size={20} />
      </button>
      <button
        onClick={handleCopyLink}
        className="p-2 rounded-full hover:bg-violet-500/20 text-violet-400"
      >
        <IconLink size={20} />
      </button>
    </div>
  );
}
