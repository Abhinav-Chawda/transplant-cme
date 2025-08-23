function Registration() {
    return (
        <div>
            <section id="registration" className="py-16 px-4 md:px-16 bg-white" role="region" aria-labelledby="registration-title">
                <h2 id="registration-title" className="text-3xl font-bold text-gray-900 mb-8 text-center">Registration</h2>
                <div className="max-w-2xl mx-auto">
                    <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                        <p className="mb-8 text-lg text-gray-600 leading-relaxed text-center">
                            Secure your spot at this exclusive medical conference. Registration is open to medical professionals, students, and researchers.
                        </p>

                        {/* Registration Fee Cards */}
                        <div className="grid md:grid-cols-2 gap-6 mb-10">
                            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 transform hover:scale-[1.02] transition-all duration-300">
                                <div className="text-center mb-4">
                                    <span className="text-sm font-medium text-blue-900 uppercase tracking-wide">Early Bird Registration</span>
                                    <h3 className="text-3xl font-bold text-blue-900 mt-2">₹1,000</h3>
                                    <p className="text-sm text-gray-600 mt-1">Until September 15, 2025</p>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 transform hover:scale-[1.02] transition-all duration-300">
                                <div className="text-center mb-4">
                                    <span className="text-sm font-medium text-gray-900 uppercase tracking-wide">Regular Registration</span>
                                    <h3 className="text-3xl font-bold text-gray-900 mt-2">₹2,000</h3>
                                    <p className="text-sm text-gray-600 mt-1">After September 15, 2025</p>
                                </div>
                            </div>
                        </div>

                        {/* Benefits */}
                        <div className="space-y-4 text-gray-700 mb-10">
                            <h4 className="font-medium text-gray-900 mb-4">Registration Includes:</h4>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3">
                                    <svg className="w-5 h-5 text-blue-900 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>Access to all conference sessions</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <svg className="w-5 h-5 text-blue-900 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>Networking opportunities</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <svg className="w-5 h-5 text-blue-900 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>Certificate of participation</span>
                                </div>
                            </div>
                        </div>

                        {/* Register Button */}
                        <div className="flex justify-center">
                            <a
                                href="https://forms.gle/cvZhaRDrYv3Rks9n7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-8 py-4 bg-blue-900 text-white font-medium rounded-lg shadow-md hover:bg-blue-800 hover:scale-[1.02] transition-all duration-300"
                                aria-label="Register for the conference through Google Forms"
                            >
                                <span>Register Now</span>
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Registration;