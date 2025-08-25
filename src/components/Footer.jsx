import phone_logo from '../assets/phone.svg';
import gmail_logo from '../assets/gmail.svg';
import aiims_logo from '../assets/aiims_logo.png';

const Footer = (props) => {
  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Logo and Institute Info */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <img src={aiims_logo} alt="AIIMS Logo" className="h-16 w-auto brightness-0 invert" />
            <h3 className="text-2xl font-bold text-white">AIIMS Bhopal</h3>
            <p className="text-blue-200 text-sm">Department of Nephrology</p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-blue-200 hover:text-white transition-colors">About</a></li>
              <li><a href="#speakers" className="text-blue-200 hover:text-white transition-colors">Speakers</a></li>
              <li><a href="#schedule" className="text-blue-200 hover:text-white transition-colors">Schedule</a></li>
              <li><a href="#registration" className="text-blue-200 hover:text-white transition-colors">Registration</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <div className="space-y-4">
              <a className="flex items-center justify-center md:justify-start space-x-3 text-blue-200 hover:text-white transition-colors">
                <img src={phone_logo} alt="" className="w-5 h-5 invert" aria-hidden="true" />
                <span>{props.contact}</span>
              </a>
              <a href={`mailto:${props.gmail}`} className="flex items-center justify-center md:justify-start space-x-3 text-blue-200 hover:text-white transition-colors group">
                <img src={gmail_logo} alt="" className="w-5 h-5 invert flex-shrink-0" aria-hidden="true" />
                <span className="text-sm break-all">{props.gmail}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
