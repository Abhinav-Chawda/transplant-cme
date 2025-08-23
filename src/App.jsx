import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Registration from './components/Registration';
import Speaker_img from './components/Speaker_img';

import aiims_logo from './assets/aiims_logo.png';
import Dr_Dharmendra_img from './assets/Dr_Dharmendra.jpg';
import Dr_Anupma_img from './assets/Dr_Anupma.jpg';
import Dr_Alok_img from './assets/Dr_Alok.jpg';

// Define consistent spacing and styling for sections
const sectionClass = "py-16 px-4 md:px-16";
const gradientLight = "bg-gradient-to-b from-white to-gray-50";
const gradientDark = "bg-gradient-to-b from-gray-50 to-white";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      {/* Header/Navbar */}
      <header>
        <Navbar />
      </header>

      {/* Hero/Event Overview */}
      <section
        id="main"
        className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden"
        role="banner"
      >
        {/* Background with overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
          <div className="absolute inset-0 bg-[url('/src/assets/pattern.svg')] opacity-10 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
        </div>

        {/* Animated circles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto w-full flex flex-col items-center px-4 md:px-16 py-12">
          <div className="flex items-center gap-6 mb-8 mt-8">
            <img
              src={aiims_logo}
              alt="Institute Logo"
              className="w-16 h-16 md:w-20 md:h-20 animate-fadeIn filter brightness-0 invert"
            />
            <div className="h-14 w-px bg-white/30"></div>
            <div className="text-white">
              <h2 className="text-lg md:text-xl font-light">Department of Nephrology</h2>
              <h3 className="text-base md:text-lg font-bold">AIIMS Bhopal</h3>
            </div>
          </div>

          <div className="space-y-4 text-center max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight animate-slideDown">
              <span className="block text-base md:text-lg font-normal text-blue-200 mb-2">National Conference on</span>
              CME on Challenging Situations in
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text"> Kidney Transplantation</span>
            </h1>

            <p className="text-base md:text-lg text-blue-100 leading-relaxed animate-fadeIn max-w-3xl mx-auto">
              Join leading experts, clinicians, and researchers for a day of knowledge sharing, networking, and innovation in healthcare.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mt-6 animate-fadeIn">
              <div className="backdrop-blur-lg rounded-xl px-6 py-4 border-2 border-white/30 hover:border-white/50 transition-all duration-300 shadow-lg hover:shadow-white/10">
                <div className="text-blue-200 text-sm font-medium">Date</div>
                <p className="text-xl font-bold text-white">21st September 2025</p>
              </div>
              <div className="backdrop-blur-lg rounded-xl px-6 py-4 border-2 border-white/30 hover:border-white/50 transition-all duration-300 shadow-lg hover:shadow-white/10">
                <div className="text-blue-200 text-sm font-medium">Venue</div>
                <p className="text-xl font-bold text-white">Lecture Theatre-4, AIIMS Bhopal</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <a
                href="https://forms.gle/cvZhaRDrYv3Rks9n7"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-lg font-bold rounded-xl shadow-2xl hover:shadow-blue-500/25 hover:scale-105 active:scale-95 transition-all duration-300 animate-pulse hover:animate-none"
                aria-label="Register for the conference through Google Forms"
              >
                <span className="relative z-10">Register Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Keynote Speakers */}
      <section id="speakers" className="py-16 px-4 md:px-16 bg-gradient-to-b from-white to-gray-50" role="region" aria-labelledby="speakers-title">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="speakers-title" className="text-4xl font-bold text-gray-900 mb-4">Speakers</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Learn from leading experts in nephrology and transplantation who will share their insights and experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="h-full">
              <Speaker_img
                name="Dr. Dharmendra Bhadauria"
                post="Prof.(Ex.) - Nephrology SGPGI Lucknow"
                post2="Sr. Consultant & Director Nephrology Medanta, Lucknow"
                image={Dr_Dharmendra_img}
              />
            </div>
            <div className="h-full">
              <Speaker_img
                name="Dr. Anupma Kaul"
                post="Professor - Nephrology SGPGI Lucknow"
                image={Dr_Anupma_img}
              />
            </div>
            <div className="h-full">
              <Speaker_img
                name="Dr. Alok Sharma"
                post="Head Pathology & Renal Histopathology"
                post2="LAL Pathology - New Delhi"
                image={Dr_Alok_img}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Schedule/Timetable */}
      <section id="schedule" className="py-16 px-4 md:px-16 bg-gradient-to-b from-gray-50 to-white" role="region" aria-labelledby="schedule-title">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="schedule-title" className="text-4xl font-bold text-gray-900 mb-4">Conference Schedule</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive day of learning, networking, and professional development.
            </p>
          </div>
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full">
              <table className="min-w-full bg-white rounded-xl shadow-lg" role="table" aria-label="Conference Schedule">
                <thead className="bg-blue-50">
                  <tr>
                    <th scope="col" className="py-4 px-6 font-semibold text-gray-900">Time</th>
                    <th scope="col" className="py-4 px-6 font-semibold text-gray-900">Session</th>
                    <th scope="col" className="py-4 px-6 font-semibold text-gray-900">Speaker</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="py-2 px-4">10:00 - 10:30 am</td>
                    <td className="py-2 px-4">Tea and Breakfast</td>
                    <td className="py-2 px-4">-</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-2 px-4">10:30 - 11:30 am</td>
                    <td className="py-2 px-4">ABOi Kidney transplants</td>
                    <td className="py-2 px-4">Dr. Dharmendra Bhadauria<br/>Prof. (Ex.) Nephrology SGPGI, Lucknow<br/>Sr. Consultant & Director Nephrology Medanta, Lucknow</td>
                  </tr>
                  <tr className="border-t bg-blue-50">
                    <td className="py-2 px-4">11:30 - 12:00 pm</td>
                    <td className="py-2 px-4" colSpan="2">Inauguration by Prof. (Dr.) Madhavanand Kar, Director and CEO, AIIMS Bhopal at 12:00 am LT-4, Sardar Patel Building AIIMS, Bhopal</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-2 px-4">12:00 - 01:00 pm</td>
                    <td className="py-2 px-4">Evaluation of Highly Sensitive Kidney transplant Recipients</td>
                    <td className="py-2 px-4">Dr. Anupma Kaul<br/>Professor- Nephrology SGPGI, Lucknow</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-2 px-4">01:00 - 02:00 pm</td>
                    <td className="py-2 px-4">Challenges of Acute rejection diagnosis in Kidney transplant Patents</td>
                    <td className="py-2 px-4">Dr. Alok Sharma<br/>Head Pathology & Renal Histopathology<br/>LAL Pathology- New Delhi</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-2 px-4">02:00 - 02:15 pm</td>
                    <td className="py-2 px-4">Vote for Thanks</td>
                    <td className="py-2 px-4">Dr. Rajat<br/>SR Nephrology</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Information */}
      <Registration />

      {/* Contact Details */}
      <Contact />

      {/* Footer */}
      <footer className="mt-auto">
        <Footer gmail='cmeakicrrt@gmail.com' contact='7728043033' />
      </footer>
    </div>
  );
}

export default App;