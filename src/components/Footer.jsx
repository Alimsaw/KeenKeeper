const Footer = () => {
  return (
    <footer className="bg-[#285943] w-full pt-[80px] pb-[32px]">
      <div className="max-w-[1100px] mx-auto px-[24px] text-center">
        <h1 className="text-white text-[64px] font-semibold tracking-tight mb-[16px]">
          KeenKeeper
        </h1>

        <p className="text-[#d1d5db] text-[18px] max-w-[640px] mx-auto mb-[48px]">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <div className="mb-[64px]">
          <h3 className="text-white text-[18px] font-medium mb-[20px]">
            Social Links
          </h3>

          <div className="flex justify-center gap-[16px]">
            <a href="#" className="w-[44px] h-[44px] rounded-full bg-white flex items-center justify-center hover:opacity-80 transition">
              <img src="/assets/instagram.png" alt="Instagram" className="w-[50px] h-[40px]" />
            </a>

            <a href="#" className="w-[44px] h-[44px] rounded-full bg-white flex items-center justify-center hover:opacity-80 transition">
              <img src="/assets/facebook.png" alt="Facebook" className="w-[50px] h-[40px]" />
            </a>

            <a href="#" className="w-[44px] h-[44px] rounded-full bg-white flex items-center justify-center hover:opacity-80 transition">
              <img src="/assets/twitter.png" alt="Twitter" className="w-[50px] h-[40px]" />
            </a>
          </div>
        </div>

        <div className="border-t border-[#3f6f5b] mb-[24px]" />

        <div className="flex flex-col md:flex-row items-center justify-between text-[14px] text-[#cbd5e1] gap-[12px]">
          <div>
            © {new Date().getFullYear()} KeenKeeper. All rights reserved.
          </div>

          <div className="flex gap-[24px]">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;