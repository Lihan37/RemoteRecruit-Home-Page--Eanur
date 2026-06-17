import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative isolate h-[clamp(540px,48.889vw,704px)] overflow-hidden bg-white text-white">
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 4320 2112"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3868.63 1339.5C3972.08 1339.5 4217.38 1335.16 4317 1339.5V0H0V2101.86C126.206 2108.41 257.394 2112 393.362 2112C1953.16 2112 2521.53 1339.5 3868.63 1339.5Z"
          fill="url(#light-blue-bg)"
        />
        <path
          d="M4320 0V1957.61C4320 1957.61 3786 1558.89 3102 1558.89C2418 1558.89 2056.5 2112 1264.5 2112C472.5 2112 0 1639.84 0 1639.84V0H4320Z"
          fill="url(#dark-blue-bg)"
        />
        <mask
          id="hero-bg-mask"
          style={{ maskType: 'luminance' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="4320"
          height="2112"
        >
          <path
            d="M4320 0V1957.61C4320 1957.61 3786 1558.89 3102 1558.89C2418 1558.89 2056.5 2112 1264.5 2112C472.5 2112 0 1639.84 0 1639.84V0H4320Z"
            fill="white"
          />
        </mask>
        <g mask="url(#hero-bg-mask)">
          <circle opacity="0.05" cx="2682" cy="1902" r="786" fill="white" />
          <circle opacity="0.02" cx="768" cy="-315" r="786" fill="white" />
        </g>
        <defs>
          <linearGradient
            id="light-blue-bg"
            x1="-1999.3"
            y1="1313.49"
            x2="-158.148"
            y2="4769.17"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#52B4DA" />
            <stop offset="1" stopColor="#1E3E85" />
          </linearGradient>
          <linearGradient
            id="dark-blue-bg"
            x1="-1934.13"
            y1="1372.09"
            x2="-54.415"
            y2="4789.43"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1E3E85" />
            <stop offset="1" stopColor="#336DA6" />
          </linearGradient>
        </defs>
      </svg>

      <div className="mx-auto flex h-full w-full max-w-[78rem] items-start justify-center px-8 pb-44 pt-[clamp(150px,15.4vw,222px)] sm:px-11 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative z-10 w-full max-w-[1040px] text-center"
        >
          <h1 className="text-center text-[2.75rem] font-bold leading-[1.2] tracking-normal sm:text-[53px] sm:leading-[68px]">
            RemoteRecruit's Difference
          </h1>
          <p className="mx-auto mt-3 max-w-[53rem] text-center text-base font-medium leading-7 tracking-normal text-white/95 sm:text-[20px] sm:leading-[32px]">
            RemoteRecruit is connecting the world with an easy-to-use platform that lets full-time,
            part-time, and freelance workers showcase their talents to businesses that need them.
            With no paywalls, no fees, and no barriers, there's nothing but you, your talents, and
            the next step in your career.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
