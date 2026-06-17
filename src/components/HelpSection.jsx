import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import helpDashboard from '../assets/help-dashboard.png';

export default function HelpSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(105deg,#f7fcff_0%,#f5f8ff_48%,#f0edff_100%)] px-6 py-20 sm:px-10 lg:min-h-[610px] lg:px-12 lg:py-0">
      <div className="pointer-events-none absolute -left-28 top-16 h-72 w-72 rounded-full bg-white/62" />
      <div className="pointer-events-none absolute -right-14 -top-24 h-72 w-72 rounded-full bg-white/44" />
      <div className="pointer-events-none absolute left-[22%] top-10 h-12 w-12 rounded-full bg-[#FFC832]" />
      <div className="pointer-events-none absolute bottom-16 right-[22%] h-8 w-8 rounded-full bg-[linear-gradient(145deg,#52B4DA,#1E4B9C)]" />

      <motion.div
        initial={{ opacity: 0, x: -34 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-10 mx-auto mb-12 w-full max-w-[38rem] lg:absolute lg:left-0 lg:top-[82px] lg:mb-0 lg:w-[850px] lg:max-w-none xl:w-[930px]"
      >
        <img
          src={helpDashboard}
          alt="RemoteRecruit job dashboard preview"
          className="h-auto w-full object-contain"
          loading="lazy"
          decoding="async"
        />
      </motion.div>

      <div className="relative z-20 mx-auto flex w-full max-w-[1320px] justify-center lg:min-h-[610px] lg:justify-end">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.08 }}
          className="w-full max-w-[28rem] text-center lg:mr-[8.5rem] lg:mt-[150px] lg:text-left xl:mr-[11rem]"
        >
          <p className="text-[15px] font-semibold leading-none text-[#1E4B9C]">
            Are you ready?
          </p>

          <h2 className="mt-7 text-[34px] font-semibold leading-[1.2] tracking-normal text-[#171731] sm:text-[42px] sm:leading-[52px]">
            Help is only a few
            <br className="hidden sm:block" />
            clicks away!
          </h2>

          <p className="mt-8 text-[18px] font-normal leading-[31px] tracking-normal text-[#72748A]">
            Click Below to get set up super
            <br className="hidden sm:block" />
            quickly and find help now!
          </p>

          <a
            href="#signup"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#D1ECFA] py-2 pl-2 pr-7 text-[16px] font-medium text-[#1E4B9C] transition hover:bg-[#BDEFFF]"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#52B4DA] text-white">
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </span>
            Get Started
          </a>
        </motion.div>
      </div>
    </section>
  );
}
