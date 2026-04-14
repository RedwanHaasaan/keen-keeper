import FooterLogo from "../assets/logo-xl.png";
import FacebookIcon from "../assets/facebook.png";
import TwitterIcon from "../assets/twitter.png";
import InstagramIcon from "../assets/instagram.png";

const Footer = () => {
  return (
    <footer className="bg-green text-primary-content">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col gap-4 items-center">
        
        {/* Logo + Description */}
        <div className="flex flex-col items-center gap-4">
          <img src={FooterLogo} alt="Keen Keeper Logo" className="w-40 lg:w-96" />
          <p className="text-sm leading-relaxed text-center text-gray-300">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-lg font-semibold">Social Links</h2>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/keenkeeper"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={FacebookIcon} alt="Facebook" className="w-8 h-8 hover:scale-110 transition" />
            </a>
            <a
              href="https://twitter.com/keenkeeper"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={TwitterIcon} alt="Twitter" className="w-8 h-8 hover:scale-110 transition" />
            </a>
            <a
              href="https://www.instagram.com/keenkeeper"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={InstagramIcon} alt="Instagram" className="w-8 h-8 hover:scale-110 transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/20"></div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} KeenKeeper. All rights reserved.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="hover:underline">
            Terms of Service
          </a>
          <a href="/cookies" className="hover:underline">
            Cookies
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;