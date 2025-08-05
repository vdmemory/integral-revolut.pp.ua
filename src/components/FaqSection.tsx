import React from 'react'

const FaqSection = () => {
    return (
        <section id={'faq'} className="py-16 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-2">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-gray-400 max-w-2xl">
                            Common questions about our booking process and
                            services
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        {
                            question: 'How far in advance should I book?',
                            answer: 'We recommend booking at least 4-6 weeks in advance for standard events, and 2-3 months for large events or peak season dates (May-September and December).',
                        },
                        {
                            question:
                                'Is a deposit required to secure a booking?',
                            answer: 'Yes, a 30% deposit is required to secure your booking. The remaining balance is due one week before your event date.',
                        },
                        {
                            question:
                                'What happens after I submit my booking request?',
                            answer: 'Our team will review your request and contact you within 24-48 hours to discuss details and provide a customized quote.',
                        },
                        {
                            question: 'Do you provide all necessary equipment?',
                            answer: 'Yes, we provide all sound and lighting equipment needed for your event, including setup, operation, and teardown.',
                        },
                        {
                            question:
                                'Can I modify my booking after confirmation?',
                            answer: 'Yes, modifications can be made up to 2 weeks before your event, subject to equipment and staff availability.',
                        },
                        {
                            question: 'What is your cancellation policy?',
                            answer: 'Cancellations made 30+ days before the event receive a full deposit refund. Cancellations within 14-30 days receive a 50% deposit refund. Cancellations under 14 days are non-refundable.',
                        },
                    ].map((faq, index) => (
                        <div
                            key={index}
                            className="glassmorphism p-6 animate-fade-in"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <h3 className="text-xl font-medium text-white mb-2">
                                {faq.question}
                            </h3>
                            <p className="text-gray-300">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FaqSection
