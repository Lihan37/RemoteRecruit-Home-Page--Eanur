import { motion } from 'framer-motion';
import showcaseTalentVisual from '../assets/showcase-talent.png';

export default function ShowcaseSection() {
  return (
    <section className="relative bg-white px-6 pb-24 pt-2 sm:px-10 lg:px-12 lg:pb-32 lg:pt-0">
      <div className="mx-auto grid w-full max-w-[1320px] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-28 xl:gap-36">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="mx-auto max-w-[28rem] text-center lg:mx-0 lg:text-left xl:ml-4"
        >
          <span className="inline-flex rounded-full bg-[#BDEFFF] px-5 py-2 text-[13px] font-medium leading-none text-[#1E4B9C]">
            Custom Profile
          </span>

          <h2 className="mt-8 text-[32px] font-medium leading-[1.25] tracking-normal text-[#171731] sm:text-[40px] sm:leading-[52px]">
            Showcase Your Talents
          </h2>

          <p className="mt-8 text-[17px] font-normal leading-[30px] tracking-normal text-[#72748A]">
            Personalize your profile with everything that makes you unique. Add an introductory
            video and other media for a personal touch that stands out to employers and candidates.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.08 }}
          className="relative mx-auto mt-4 w-full max-w-[29rem] lg:mr-0 lg:mt-6 lg:max-w-[34rem]"
        >
          <img
            src={showcaseTalentVisual}
            alt="Custom profile preview with video, client feedback, and skills"
            className="h-auto w-full object-contain"
            loading="lazy"
            decoding="async"
          />
        </motion.div>
      </div>
    </section>
  );
}
