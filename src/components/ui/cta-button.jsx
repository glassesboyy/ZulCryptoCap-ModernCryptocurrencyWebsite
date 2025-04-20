"use client";

const WalletIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="opacity-90"
  >
    <path
      d="M18.04 13.55C17.62 13.96 17.38 14.55 17.44 15.18C17.53 16.26 18.52 17.05 19.6 17.05H21.5V18.24C21.5 20.31 19.81 22 17.74 22H6.26C4.19 22 2.5 20.31 2.5 18.24V11.51C2.5 9.44001 4.19 7.75001 6.26 7.75001H17.74C19.81 7.75001 21.5 9.44001 21.5 11.51V12.95H19.48C18.92 12.95 18.41 13.17 18.04 13.55Z"
      stroke="url(#paint0_linear_wallet)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.5 12.41V7.84004C2.5 6.65004 3.23 5.59004 4.34 5.17004L12.28 2.17004C13.52 1.70004 14.85 2.62004 14.85 3.95004V7.75004"
      stroke="url(#paint1_linear_wallet)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22.5588 13.9702V16.0302C22.5588 16.5802 22.1188 17.0302 21.5588 17.0502H19.5988C18.5188 17.0502 17.5288 16.2602 17.4388 15.1802C17.3788 14.5502 17.6188 13.9602 18.0388 13.5502C18.4088 13.1702 18.9188 12.9502 19.4788 12.9502H21.5588C22.1188 12.9702 22.5588 13.4202 22.5588 13.9702Z"
      stroke="url(#paint2_linear_wallet)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear_wallet"
        x1="2.5"
        y1="7.75001"
        x2="21.5"
        y2="22"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8B5CF6" />
        <stop offset="1" stopColor="#3B82F6" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_wallet"
        x1="2.5"
        y1="2"
        x2="14.85"
        y2="7.75004"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8B5CF6" />
        <stop offset="1" stopColor="#3B82F6" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_wallet"
        x1="17.4388"
        y1="12.9502"
        x2="22.5588"
        y2="17.0502"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8B5CF6" />
        <stop offset="1" stopColor="#3B82F6" />
      </linearGradient>
    </defs>
  </svg>
);

const CTAButton = ({
  buttonText = "Connect to Wallet",
  icon: Icon = WalletIcon,
}) => {
  const gradientStyle = {
    background: "linear-gradient(135deg, rgb(76, 29, 149), rgb(76, 29, 149))",
  };

  const borderGlowStyle = {
    animation:
      "10s ease-in-out 0s infinite alternate none running border-glow-scale",
    background: "linear-gradient(135deg, rgb(139, 92, 246), rgb(59, 130, 246))",
  };

  return (
    <button className="cursor-pointer group relative bg-black rounded-full p-px overflow-hidden border border-white/20 hover:border-blue-900 transition-all duration-1000">
      <span className="absolute inset-0 rounded-full overflow-hidden ">
        <span className="inset-0 absolute pointer-events-none select-none">
          <span
            className="block -translate-x-1/2 -translate-y-1/3 size-60 blur-2xl"
            style={gradientStyle}
          />
        </span>
      </span>

      <span
        className="inset-0 absolute pointer-events-none select-none"
        style={{
          animation:
            "10s ease-in-out 0s infinite alternate none running border-glow-translate",
        }}
      >
        <span
          className="block z-0 h-full w-12 blur-xl -translate-x-1/2 rounded-full"
          style={borderGlowStyle}
        />
      </span>

      <span className="flex items-center justify-center gap-3 relative z-[1] bg-black/90 rounded-full py-3.5 px-6 w-full">
        <span className="relative -rotate-45 group-hover:rotate-0 group-hover:scale-105 transition-transform duration-500">
          <Icon />
        </span>
        <span className="px-2 text-white font-normal text-lg">
          {buttonText}
        </span>
      </span>
    </button>
  );
};

export default CTAButton;
