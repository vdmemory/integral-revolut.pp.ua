import React from 'react'
import { easeOut, motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

const FeaturedSection = () => {
    const { t } = useLanguage()

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
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
        //  {/* Featured Project */}
        <motion.section
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
                            {t('projects.title')}
                        </motion.h2>
                        <motion.p
                            className="text-gray-400 max-w-2xl"
                            variants={itemVariants}
                        >
                            {t('projects.description')}
                        </motion.p>
                    </div>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <motion.div
                        className="glassmorphism p-1 h-full"
                        variants={itemVariants}
                        whileHover={{
                            scale: 1.02,
                            y: -5,
                            transition: { duration: 0.3 },
                        }}
                    >
                        <div className="relative h-full w-full overflow-hidden rounded-xl">
                            <motion.img
                                src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80"
                                alt="Summer Music Festival"
                                className="object-cover h-full w-full"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.6 }}
                            />
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-t from-psyco-black-DEFAULT to-transparent flex flex-col justify-end p-6"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <motion.div
                                    className="bg-psyco-green-DEFAULT inline-block px-3 py-1 text-xs font-medium text-white rounded-full mb-2 self-start"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 300,
                                        delay: 0.3,
                                    }}
                                >
                                    {t('projects.ecommerce.category')}
                                </motion.div>
                                <motion.h3
                                    className="text-2xl font-semibold text-white mb-2"
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                >
                                    {t('projects.ecommerce.title')}
                                </motion.h3>
                                <motion.p
                                    className="text-gray-300 mb-4"
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                >
                                    {t('projects.ecommerce.description')}
                                </motion.p>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="glassmorphism p-1 h-full"
                        variants={itemVariants}
                        whileHover={{
                            scale: 1.02,
                            y: -5,
                            transition: { duration: 0.3 },
                        }}
                    >
                        <div className="relative h-full w-full overflow-hidden rounded-xl">
                            <motion.img
                                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80"
                                alt="Mobile App"
                                className="object-cover h-full w-full"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.6 }}
                            />
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-t from-psyco-black-DEFAULT to-transparent flex flex-col justify-end p-6"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <motion.div
                                    className="bg-psyco-green-DEFAULT inline-block px-3 py-1 text-xs font-medium text-white rounded-full mb-2 self-start"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 300,
                                        delay: 0.3,
                                    }}
                                >
                                    {t('projects.banking.category')}
                                </motion.div>
                                <motion.h3
                                    className="text-2xl font-semibold text-white mb-2"
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                >
                                    {t('projects.banking.title')}
                                </motion.h3>
                                <motion.p
                                    className="text-gray-300 mb-4"
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                >
                                    {t('projects.banking.description')}
                                </motion.p>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="glassmorphism p-1 h-full"
                        variants={itemVariants}
                        whileHover={{
                            scale: 1.02,
                            y: -5,
                            transition: { duration: 0.3 },
                        }}
                    >
                        <div className="relative h-full w-full overflow-hidden rounded-xl">
                            <motion.img
                                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80"
                                alt="Security System"
                                className="object-cover h-full w-full"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.6 }}
                            />
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-t from-psyco-black-DEFAULT to-transparent flex flex-col justify-end p-6"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <motion.div
                                    className="bg-psyco-green-DEFAULT inline-block px-3 py-1 text-xs font-medium text-white rounded-full mb-2 self-start"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 300,
                                        delay: 0.3,
                                    }}
                                >
                                    {t('projects.security.category')}
                                </motion.div>
                                <motion.h3
                                    className="text-2xl font-semibold text-white mb-2"
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                >
                                    {t('projects.security.title')}
                                </motion.h3>
                                <motion.p
                                    className="text-gray-300 mb-4"
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                >
                                    {t('projects.security.description')}
                                </motion.p>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    )
}

export default FeaturedSection
