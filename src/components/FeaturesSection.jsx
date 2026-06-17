import { motion } from 'framer-motion';
import premiumMemberVisual from '../assets/premium-member.png';

export default function FeaturesSection() {
  return (
    <section className="relative bg-white px-6 pb-24 pt-2 sm:px-10 lg:px-12 lg:pb-32 lg:pt-0">
      <div className="mx-auto grid w-full max-w-[1320px] items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-28 xl:gap-36">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-[29rem] lg:ml-0 lg:max-w-[34rem] xl:ml-4"
        >
          <img
            src={premiumMemberVisual}
            alt="Premium membership tier benefits preview"
            className="h-auto w-full object-contain"
            loading="lazy"
            decoding="async"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.08 }}
          className="mx-auto max-w-[28rem] text-center lg:mx-0 lg:text-left"
        >
          <span className="inline-flex rounded-full bg-[#BDEFFF] px-5 py-2 text-[13px] font-medium leading-none text-[#1E4B9C]">
            Actually Fee Free
          </span>

          <h2 className="mt-8 text-[32px] font-medium leading-[1.25] tracking-normal text-[#171731] sm:text-[40px] sm:leading-[52px]">
            Fee-Free Forever
          </h2>

          <p className="mt-8 text-[17px] font-normal leading-[30px] tracking-normal text-[#72748A]">
            We don&apos;t charge you fees and we don&apos;t put up paywalls. We&apos;re the bridge
            that connects job opportunities with the best candidates, with no middleman involved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
