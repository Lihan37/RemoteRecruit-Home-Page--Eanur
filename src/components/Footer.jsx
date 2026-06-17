import { Check, Facebook, Instagram, Linkedin, X, XCircle } from 'lucide-react';
import footerBackground from '../assets/footer-background.png';
import logo from '../assets/remote-logo.png';

const freeFeatures = [
  { label: '1 Active Job', enabled: true },
  { label: 'Basic List Placement', enabled: true },
  { label: 'Unlimited Job Applicants', enabled: false },
  { label: 'Invite Anyone to Apply to Your Jobs', enabled: false },
];

const premiumFeatures = [
  'Unlimited Job Posts',
  'Instant Job Post Approval',
  'Premium List Placement',
  'Unlimited Job Applicants',
];

function FeatureItem({ enabled = true, children }) {
  const Icon = enabled ? Check : XCircle;

  return (
    <li className="flex items-start gap-3 text-[13px] font-medium leading-5 text-[#171731]">
      <span
        className={`mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
          enabled
            ? 'bg-[linear-gradient(129.98deg,#52B4DA_-106.35%,#1E3E85_95.25%)] text-white'
            : 'bg-[#8A8DA1] text-white'
        }`}
      >
        <Icon className="h-3 w-3" aria-hidden="true" />
      </span>
      <span className={enabled ? '' : 'text-[#8A8DA1]'}>{children}</span>
    </li>
  );
}

function SocialIcon({ children, label }) {
  return (
    <a
      href="#social"
      aria-label={label}
      className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/15 text-white/80 transition hover:bg-white/25 hover:text-white"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="relative mt-40 min-h-[569px] overflow-visible bg-white pt-0">
      <img
        src={footerBackground}
        alt=""
        className="absolute inset-x-0 bottom-0 z-0 h-full w-full object-fill"
        loading="lazy"
        decoding="async"
        aria-hidden="true"
      />

      <div className="relative z-30 mx-auto flex w-full max-w-[980px] -translate-y-32 flex-col items-center px-6">
        <h2 className="text-center text-[30px] font-semibold leading-tight text-[#171731] sm:text-[34px]">
          Help Is One Click Away
        </h2>

        <div className="mt-11 grid w-full gap-10 lg:grid-cols-2">
          <div className="rounded-[20px] bg-white p-6 shadow-[0_18px_60px_rgba(30,75,156,0.12)]">
            <div className="grid gap-7 sm:grid-cols-[128px_1fr]">
              <div className="flex min-h-[128px] flex-col items-center justify-center rounded-xl bg-[#EEF4FF] text-center">
                <span className="text-[27px] font-semibold leading-none text-[#52B4DA]">Free</span>
                <span className="mt-2 text-[16px] font-normal text-[#8A8DA1]">Basic</span>
              </div>

              <ul className="space-y-3">
                {freeFeatures.map((item) => (
                  <FeatureItem key={item.label} enabled={item.enabled}>
                    {item.label}
                  </FeatureItem>
                ))}
              </ul>
            </div>

            <a
              href="#signup"
              className="mt-6 inline-flex min-h-14 w-full items-center justify-center rounded-2xl border-2 border-[#1E4B9C] bg-white text-[15px] font-semibold text-[#1E4B9C] transition hover:bg-[linear-gradient(129.98deg,#52B4DA_-106.35%,#1E3E85_95.25%)] hover:text-white"
            >
              Get Started
            </a>
          </div>

          <div className="relative rounded-[20px] bg-white p-6 shadow-[0_18px_60px_rgba(30,75,156,0.12)]">
            <span className="absolute left-8 top-3 inline-flex items-center gap-2 rounded-full bg-[#BDEFFF] px-5 py-2 text-[13px] font-semibold text-[#171731]">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#1E4B9C]">
                $
              </span>
              Premium
            </span>

            <div className="grid gap-7 sm:grid-cols-[128px_1fr]">
              <div className="flex min-h-[128px] flex-col items-center justify-center rounded-xl bg-[#EEF4FF] text-center">
                <span className="text-[27px] font-semibold leading-none text-[#3E8AC2]">$79.99</span>
                <span className="mt-2 text-[16px] font-normal text-[#8A8DA1]">Per Month</span>
              </div>

              <ul className="space-y-3">
                {premiumFeatures.map((item) => (
                  <FeatureItem key={item}>{item}</FeatureItem>
                ))}
              </ul>
            </div>

            <a
              href="#signup"
              className="mt-6 inline-flex min-h-14 w-full items-center justify-center rounded-2xl bg-[linear-gradient(129.98deg,#52B4DA_-106.35%,#1E3E85_95.25%)] text-[15px] font-semibold text-white transition hover:brightness-110"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-16 flex w-full max-w-[980px] flex-col items-center justify-between gap-10 px-6 sm:flex-row">
        <img src={logo} alt="RemoteRecruit" className="h-auto w-[145px]" loading="lazy" />

        <div className="flex items-center gap-3">
          <SocialIcon label="Facebook">
            <Facebook className="h-4 w-4" aria-hidden="true" />
          </SocialIcon>
          <SocialIcon label="Instagram">
            <Instagram className="h-4 w-4" aria-hidden="true" />
          </SocialIcon>
          <SocialIcon label="X">
            <X className="h-4 w-4" aria-hidden="true" />
          </SocialIcon>
          <SocialIcon label="Twitter">
            <span className="text-xs font-bold">t</span>
          </SocialIcon>
          <SocialIcon label="LinkedIn">
            <Linkedin className="h-4 w-4" aria-hidden="true" />
          </SocialIcon>
          <SocialIcon label="Snapchat">
            <span className="text-xs font-bold">s</span>
          </SocialIcon>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-[54px] z-10 border-t border-white/15" />
      <div className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 text-[34px] font-bold leading-none text-[#5FD0F4]">
        R
      </div>
    </footer>
  );
}
