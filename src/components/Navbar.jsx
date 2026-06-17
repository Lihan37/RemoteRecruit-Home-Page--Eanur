import logo from '../assets/remote-logo.png';

export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <nav className="flex min-h-[5.25rem] w-full items-start justify-between px-8 pt-7 sm:px-11 md:px-12">
        <a href="/" className="inline-flex shrink-0" aria-label="RemoteRecruit home">
          <img
            src={logo}
            alt="RemoteRecruit"
            className="h-auto w-[124px] object-contain sm:w-[142px]"
          />
        </a>

        <div className="flex items-center gap-8 pt-1 text-[14px] font-bold text-white">
          <a href="#signin" className="transition hover:text-white/75">
            Sign In
          </a>
          <a
            href="#signup"
            className="rounded-[18px] bg-[#5eb7dd] px-7 py-3 text-white shadow-sm transition hover:bg-[#69c6eb]"
          >
            Sign Up
          </a>
        </div>
      </nav>
    </header>
  );
}
