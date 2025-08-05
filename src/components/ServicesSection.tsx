import { Link } from 'react-router-dom'
import { easeOut, motion } from 'framer-motion'
import {
    CalendarDays,
    Code,
    Shield,
    Smartphone,
    Globe,
    MoveRight,
    Database,
    Server,
    Lock,
    Monitor,
    Cloud,
    Settings,
} from 'lucide-react'
import ServiceCard from '@/components/ServiceCard.tsx'
import React from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

const ServicesSection = () => {
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

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: easeOut,
            },
        },
    }

    const featureVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: easeOut,
            },
        },
    }

    const mainServices = [
        {
            id: 'web-development',
            icon: <Globe size={32} />,
            title: t('services.web.title'),
            description: t('services.web.description'),
            image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80',
            features: [
                'React, Vue.js, Angular',
                'Node.js, Python, PHP',
                'Responsive Design',
                'SEO Optimization',
                'API Integration',
                'Content Management System',
            ],
        },
        {
            id: 'mobile-development',
            icon: <Smartphone size={32} />,
            title: t('services.mobile.title'),
            description: t('services.mobile.description'),
            image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80',
            features: [
                'React Native, Flutter',
                'iOS (Swift), Android (Kotlin)',
                'Cloud Services Integration',
                'Push Notifications',
                'Offline Mode',
                'App Store & Google Play Publishing',
            ],
        },
        {
            id: 'security',
            icon: <Shield size={32} />,
            title: t('services.security.title'),
            description: t('services.security.description'),
            image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80',
            features: [
                'Security Audit',
                'Cyber Attack Protection',
                'Data Encryption',
                'Authentication Systems',
                'GDPR Compliance',
                '24/7 Security Monitoring',
            ],
        },
    ]

    const additionalServices = [
        {
            icon: <Database size={24} />,
            title: t('services.database'),
            description: t('services.database.desc'),
            color: 'cadetblue',
        },
        {
            icon: <Cloud size={24} />,
            title: t('services.cloud'),
            description: t('services.cloud.desc'),
            color: 'lightcoral',
        },
        {
            icon: <Server size={24} />,
            title: t('services.devops'),
            description: t('services.devops.desc'),
            color: 'mediumseagreen',
        },
        {
            icon: <Settings size={24} />,
            title: t('services.support'),
            description: t('services.support.desc'),
            color: 'goldenrod',
        },
        {
            icon: <Monitor size={24} />,
            title: t('services.design'),
            description: t('services.design.desc'),
            color: 'orchid',
        },
        {
            icon: <Lock size={24} />,
            title: t('services.blockchain'),
            description: t('services.blockchain.desc'),
            color: 'tomato',
        },
    ]

    return (
        <>
            {/* Main Services */}
            <motion.section
                id={'services'}
                className="py-20 px-6 md:px-12"
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
                                {t('services.title')}
                            </motion.h2>
                            <motion.p
                                className="text-gray-400 max-w-2xl"
                                variants={itemVariants}
                            >
                                {t('services.description')}
                            </motion.p>
                        </div>
                    </motion.div>

                    {mainServices.map((service, index) => (
                        <motion.div
                            key={service.id}
                            id={service.id}
                            className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 mb-20 last:mb-0 animate-fade-in`}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={containerVariants}
                        >
                            <motion.div
                                className="w-full lg:w-1/2"
                                variants={imageVariants}
                            >
                                <div className="glassmorphism p-1 rounded-2xl h-full">
                                    <div className="relative w-full h-full overflow-hidden rounded-xl">
                                        <motion.img
                                            src={service.image}
                                            alt={service.title}
                                            className="object-cover w-full h-full aspect-video lg:aspect-auto transition-transform duration-10000 hover:scale-110"
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                className="w-full lg:w-1/2 flex flex-col justify-center"
                                variants={itemVariants}
                            >
                                <motion.div
                                    className="text-psyco-green-DEFAULT mb-4"
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 300,
                                    }}
                                >
                                    {service.icon}
                                </motion.div>
                                <motion.h3
                                    className="text-2xl font-semibold text-white mb-4"
                                    variants={itemVariants}
                                >
                                    {service.title}
                                </motion.h3>
                                <motion.p
                                    className="text-gray-300 mb-6"
                                    variants={itemVariants}
                                >
                                    {service.description}
                                </motion.p>

                                <motion.div
                                    className="bg-psyco-black-light rounded-xl p-6"
                                    variants={itemVariants}
                                >
                                    <motion.h4
                                        className="text-lg font-medium text-white mb-4"
                                        variants={itemVariants}
                                    >
                                        {service.id === 'web-development'
                                            ? t('services.technologies')
                                            : t('services.included')}
                                    </motion.h4>
                                    <motion.ul
                                        className="grid grid-cols-1 md:grid-cols-2 gap-3"
                                        variants={containerVariants}
                                    >
                                        {service.features.map(
                                            (feature, idx) => (
                                                <motion.li
                                                    key={idx}
                                                    className="flex items-start"
                                                    variants={featureVariants}
                                                    whileHover={{ x: 5 }}
                                                    transition={{
                                                        duration: 0.2,
                                                    }}
                                                >
                                                    <motion.div
                                                        className="text-psyco-green-DEFAULT mt-1 mr-2"
                                                        whileHover={{
                                                            scale: 1.2,
                                                        }}
                                                        transition={{
                                                            type: 'spring',
                                                            stiffness: 400,
                                                        }}
                                                    >
                                                        <svg
                                                            width="16"
                                                            height="16"
                                                            viewBox="0 0 16 16"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M6.66675 10.1148L12.7947 3.98608L13.7381 4.92875L6.66675 12.0001L2.42675 7.76008L3.36941 6.81741L6.66675 10.1148Z"
                                                                fill="currentColor"
                                                            />
                                                        </svg>
                                                    </motion.div>
                                                    <span className="text-gray-300">
                                                        {feature}
                                                    </span>
                                                </motion.li>
                                            ),
                                        )}
                                    </motion.ul>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>
            {/* Additional Services */}
            <motion.section
                className="py-20 px-6 md:px-12 bg-psyco-black-light"
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
                                {t('services.additional.title')}
                            </motion.h2>
                            <motion.p
                                className="text-gray-400 max-w-2xl"
                                variants={itemVariants}
                            >
                                {t('services.additional.description')}
                            </motion.p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        {additionalServices.map((service, index) => (
                            <motion.div
                                key={index}
                                className="glassmorphism p-6 card-hover animate-fade-in"
                                style={{ backgroundColor: service.color }}
                                variants={itemVariants}
                                whileHover={{
                                    scale: 1.05,
                                    y: -5,
                                    transition: { duration: 0.3 },
                                }}
                            >
                                <motion.div
                                    className="text-psyco-green-DEFAULT mb-4"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 300,
                                    }}
                                >
                                    {service.icon}
                                </motion.div>
                                <motion.h3
                                    className="text-xl font-medium text-white mb-2"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    {service.title}
                                </motion.h3>
                                <motion.p
                                    className="text-gray-300"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                >
                                    {service.description}
                                </motion.p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>
        </>
    )
}

export default ServicesSection
