import phone_logo from '../assets/phone.svg';
import gmail_logo from '../assets/gmail.svg';
import map_logo from '../assets/map.svg';

function Contact() {
    return (
        <div>
            <section id="contact" className="py-16 px-4 md:px-16 bg-gray-50" role="region" aria-labelledby="contact-title">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 id="contact-title" className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Have questions about the conference? We're here to help. Reach out to us through any of the following channels.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-stretch">
                        {/* Contact Information */}
                        <div className="h-full">
                            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 h-full">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
                                <div className="space-y-6">
                                    {/* Email */}
                                    <div className="flex items-start gap-4 group">
                                        <div className="p-3 rounded-lg bg-blue-50 group-hover:bg-blue-100 transition-colors flex-shrink-0">
                                            <img src={gmail_logo} alt="" className="w-6 h-6" aria-hidden="true" />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-sm font-medium text-gray-500 mb-1">Email</p>
                                            <a href="mailto:cmekidneytransplantsaiimsbpl@gmail.com" 
                                               className="text-base md:text-lg text-gray-900 hover:text-blue-900 transition-colors break-all block">
                                                cmekidneytransplantsaiimsbpl@gmail.com
                                            </a>
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="flex items-start gap-4 group">
                                        <div className="p-3 rounded-lg bg-blue-50 group-hover:bg-blue-100 transition-colors">
                                            <img src={phone_logo} alt="" className="w-6 h-6" aria-hidden="true" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-500 mb-1">Call Us</p>
                                            <div className="space-y-1">
                                                <a className="block text-lg text-gray-900">
                                                    Mr. Alok: +91-9406540669
                                                </a>
                                                <a className="block text-lg text-gray-900">
                                                    Mr. Deepak: +91-7999779397
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Address */}
                                    <div className="flex items-start gap-4 group">
                                        <div className="p-3 rounded-lg bg-blue-50 group-hover:bg-blue-100 transition-colors">
                                            <img src={map_logo} alt="" className="w-6 h-6" aria-hidden="true" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-500 mb-1">Venue</p>
                                            <address className="text-lg text-gray-900 not-italic">
                                                <p className="mb-2">CME: Lecture Theatre - 4,</p>
                                                <p className="mb-2">2nd Floor, Sardar Vallabh Bhai Patel Building</p>
                                                <p>AIIMS Bhopal, Madhya Pradesh, India</p>
                                            </address>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100 h-full min-h-[450px] overflow-hidden">
                            <iframe
                                title="AIIMS Bhopal Medical College Building Location"
                                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2730.0279262725917!2d77.45815080284764!3d23.20899085042855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sLecture%20Theatre%20-%204%2C%202nd%20Floor%2C%20Sardar%20Vallabh%20Bhai%20Patel%20Building%20AIIMS%20Bhopal%2C%20Madhya%20Pradesh%2C%20India!5e0!3m2!1sen!2sin!4v1756138940546!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0, borderRadius: '1rem' }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact;
