function About() {
    return (
        <div>
            <section id="about" className="py-16 px-4 md:px-16 bg-gray-50" role="region" aria-labelledby="about-title">
                <h2 id="about-title" className="text-3xl font-bold text-gray-900 mb-8 text-center">About the Event</h2>
                <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-gray-800 border border-gray-100">
                    <p className="mb-4 leading-relaxed text-gray-600">Kidney transplantation is the gold standard of treatment for end-stage kidney disease (ESKD) patients. Transplant surgeons, nephrologists, and anesthetists frequently encounter challenging situations that require specialized knowledge and expertise. This CME aims to address these complex scenarios and provide valuable insights for healthcare professionals involved in kidney transplantation.</p>
                    <ul className="list-disc ml-6 mb-4 space-y-2">
                        <li className="text-blue-900">Learn from experienced specialists</li>
                        <li className="text-blue-900">Discuss challenging cases</li>
                        <li className="text-blue-900">Network with peers and experts</li>
                        <li className="text-blue-900">Stay updated with latest developments</li>
                    </ul>
                    <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
                        <p className="mb-2"><span className="font-medium text-gray-900">Date:</span> 21st September 2025</p>
                        <p className="mb-4"><span className="font-medium text-gray-900">Venue:</span><br />
                            Lecture Theatre-4, 2nd Floor<br />
                            Sardar Vallabh Bhai Patel Building (Medical College Building)<br />
                            AIIMS, Bhopal
                        </p>
                        <p className="mb-2"><span className="font-medium text-gray-900">Organized by:</span></p>
                            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                                <div className="mb-2">
                                    <span className="font-semibold text-gray-900">Organising Secretary:</span><br />
                                    <span className="font-bold text-gray-800">Dr. Mahendra Atlani</span><br />
                                    <span className="text-gray-600">Professor-Nephrology, AIIMS, Bhopal</span>
                                </div>
                            </div>
                    </div>
                </div>

                {/* Who Should Attend */}
                <div className="max-w-3xl mx-auto mt-12 bg-white p-8 rounded-xl shadow-md border border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Who Should Attend?</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center mt-1">
                                    <svg className="w-4 h-4 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900">Nephrologists</h4>
                                    <p className="text-gray-600 text-sm">Medical professionals specializing in kidney care</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center mt-1">
                                    <svg className="w-4 h-4 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900">Transplant Surgeons</h4>
                                    <p className="text-gray-600 text-sm">Specialists in kidney transplantation procedures</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center mt-1">
                                    <svg className="w-4 h-4 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900">Urologists</h4>
                                    <p className="text-gray-600 text-sm">Specialists in urinary tract and kidney surgery</p>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center mt-1">
                                    <svg className="w-4 h-4 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900">Anesthetists</h4>
                                    <p className="text-gray-600 text-sm">Specialists in transplant anesthesia</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center mt-1">
                                    <svg className="w-4 h-4 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900">Pathologists</h4>
                                    <p className="text-gray-600 text-sm">Experts in transplant pathology</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center mt-1">
                                    <svg className="w-4 h-4 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900">Transplant Nurses</h4>
                                    <p className="text-gray-600 text-sm">Healthcare professionals involved in transplant care</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;