import { motion } from 'framer-motion';
import faqData from '../data/faqData.js';

export default function FAQSection() {
  return (
    <section className="bg-white px-6 py-24 sm:px-10 lg:px-12 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="mx-auto w-full max-w-[1040px]"
      >
        <h2 className="text-[34px] font-medium leading-tight tracking-normal text-[#171731] sm:text-[40px] sm:leading-[52px]">
          Common Questions
        </h2>

        <div className="mt-14 space-y-10">
          {faqData.map((item) => (
            <article key={item.question}>
              <h3 className="text-[17px] font-semibold leading-[28px] text-[#171731]">
                {item.question}
              </h3>
              <p className="mt-4 max-w-[62rem] text-[17px] font-normal leading-[30px] text-[#72748A]">
                {item.answer}
              </p>
            </article>
          ))}
        </div>

        <a
          href="#faq"
          className="mt-16 inline-flex min-h-14 items-center justify-center rounded-lg border border-[#52B4DA] px-8 text-[15px] font-semibold text-[#1E4B9C] transition hover:bg-[#E8F8FE]"
        >
          More Questions
        </a>
      </motion.div>
    </section>
  );
}
