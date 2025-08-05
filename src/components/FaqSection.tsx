import React from 'react'
import { easeOut, motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

const FaqSection = () => {
    const { t } = useLanguage()

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: easeOut,
            },
        },
    }

    const sectionVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: easeOut,
            },
        },
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
                            {t('faq.title')}
                        </motion.h2>
                        <motion.p
                            className="text-gray-400 max-w-2xl"
                            variants={itemVariants}
                        >
                            {t('faq.description')}
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
                            question: t('faq.q1.question'),
                            answer: t('faq.q1.answer'),
                            color: 'cadetblue',
                        },
                        {
                            question: t('faq.q2.question'),
                            answer: t('faq.q2.answer'),
                            color: 'darkslateblue',
                        },
                        {
                            question: t('faq.q3.question'),
                            answer: t('faq.q3.answer'),
                            color: 'darkseagreen',
                        },
                        {
                            question: t('faq.q4.question'),
                            answer: t('faq.q4.answer'),
                            color: 'darkorange',
                        },
                        {
                            question: t('faq.q5.question'),
                            answer: t('faq.q5.answer'),
                            color: 'firebrick',
                        },
                        {
                            question: t('faq.q6.question'),
                            answer: t('faq.q6.answer'),
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
                                transition: { duration: 0.3 },
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
