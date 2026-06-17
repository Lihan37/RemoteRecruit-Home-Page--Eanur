import { motion } from 'framer-motion';
import jobBoardVisual from '../assets/Group 136@2x.png';

export default function DifferenceSection() {
  return (
    <section className="relative bg-white px-6 pb-24 pt-12 sm:px-10 lg:px-12 lg:pb-32 lg:pt-20">
      <div className="mx-auto grid w-full max-w-[1320px] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-28 xl:gap-36">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="mx-auto max-w-[25rem] text-center lg:mx-0 lg:max-w-[34rem] lg:text-left xl:ml-4"
        >
          <span className="inline-flex rounded-full bg-[#BDEFFF] px-5 py-2 text-[13px] font-medium leading-none text-[#1E4B9C]">
            Global Reach
          </span>

          <h2 className="mt-8 text-[32px] font-medium leading-tight tracking-normal text-[#171731] sm:text-[40px] sm:leading-[52px]">
            <span className="sm:whitespace-nowrap">The First Fully Global Job</span>
            <br />
            Board, Anywhere, Ever
          </h2>

          <p className="mt-8 text-[17px] font-normal leading-[30px] tracking-normal text-[#72748A]">
            RemoteRecruit connects candidates with
            <br className="hidden sm:block" />
            opportunities around the world. With today&apos;s
            <br className="hidden sm:block" />
            remote-first workforce, you need to be able to find
            <br className="hidden sm:block" />
            the best jobs and the best people for them,
            <br className="hidden sm:block" />
            wherever they may be.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.08 }}
          className="relative mx-auto mt-6 w-full max-w-[29rem] lg:mr-0 lg:mt-10 lg:max-w-[34rem]"
        >
          <img
            src={jobBoardVisual}
            alt="RemoteRecruit job board preview with candidate cards"
            className="h-auto w-full object-contain"
            loading="lazy"
            decoding="async"
          />
        </motion.div>
      </div>
    </section>
  );
}
