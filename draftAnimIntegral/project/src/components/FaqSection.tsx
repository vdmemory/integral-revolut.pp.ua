import React from 'react'
import { motion } from 'framer-motion'

const FaqSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    }

    const sectionVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    }

    return (
        <motion.section 
            id={'faq'} 
            className="py-16 px-6 md:px-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
        >
            <div className="max-w-7xl mx-auto">
                <motion.div 
                    className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12"
                    variants={itemVariants}
                >
                    <div>
                        <motion.h2 
                            className="text-3xl font-bold text-white mb-2"
                            variants={itemVariants}
                        >
                            Frequently Asked Questions
                        </motion.h2>
                        <motion.p 
                            className="text-gray-400 max-w-2xl"
                            variants={itemVariants}
                        >
                            Common questions about our booking process and
                            services
                        </motion.p>
                    </div>
                </motion.div>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {[
                        {
                            question: 'How far in advance should I book?',
                            answer: 'We recommend booking at least 4-6 weeks in advance for standard events, and 2-3 months for large events or peak season dates (May-September and December).',
                            color: 'cadetblue',
                        },
                        {
                            question:
                                'Is a deposit required to secure a booking?',
                            answer: 'Yes, a 30% deposit is required to secure your booking. The remaining balance is due one week before your event date.',
                            color: 'darkslateblue',
                        },
                        {
                            question:
                                'What happens after I submit my booking request?',
                            answer: 'Our team will review your request and contact you within 24-48 hours to discuss details and provide a customized quote.',
                            color: 'darkseagreen',
                        },
                        {
                            question: 'Do you provide all necessary equipment?',
                            answer: 'Yes, we provide all sound and lighting equipment needed for your event, including setup, operation, and teardown.',
                            color: 'darkorange',
                        },
                        {
                            question:
                                'Can I modify my booking after confirmation?',
                            answer: 'Yes, modifications can be made up to 2 weeks before your event, subject to equipment and staff availability.',
                            color: 'firebrick',
                        },
                        {
                            question: 'What is your cancellation policy?',
                            answer: 'Cancellations made 30+ days before the event receive a full deposit refund. Cancellations within 14-30 days receive a 50% deposit refund. Cancellations under 14 days are non-refundable.',
                            color: 'goldenrod',
                        },
                    ].map((faq, index) => (
                        <motion.div
                            key={index}
                            className="glassmorphism p-6"
                            style={{
                                backgroundColor: faq.color,
                            }}
                            variants={itemVariants}
                            whileHover={{ 
                                scale: 1.02, 
                                y: -5,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <motion.h3 
                                className="text-xl font-medium text-white mb-2"
                                variants={itemVariants}
                            >
                                {faq.question}
                            </motion.h3>
                            <motion.p 
                                className="text-gray-300"
                                variants={itemVariants}
                            >
                                {faq.answer}
                            </motion.p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    )
}

export default FaqSection
