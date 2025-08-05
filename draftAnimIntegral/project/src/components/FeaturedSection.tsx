import React from 'react'
import { motion } from 'framer-motion'

const FeaturedSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
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
                            Featured Projects
                        </motion.h2>
                        <motion.p 
                            className="text-gray-400 max-w-2xl"
                            variants={itemVariants}
                        >
                            Some of our most memorable sound and lighting
                            installations
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
                            transition: { duration: 0.3 }
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
                                    transition={{ type: "spring", stiffness: 300, delay: 0.3 }}
                                >
                                    Festival
                                </motion.div>
                                <motion.h3 
                                    className="text-2xl font-semibold text-white mb-2"
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                >
                                    Summer Music Festival 2023
                                </motion.h3>
                                <motion.p 
                                    className="text-gray-300 mb-4"
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                >
                                    Complete sound system and dynamic lighting
                                    setup for the main stage, serving an
                                    audience of 15,000 people.
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
                            transition: { duration: 0.3 }
                        }}
                    >
                        <div className="relative h-full w-full overflow-hidden rounded-xl">
                            <motion.img
                                src="https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&q=80"
                                alt="Corporate Gala"
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
                                    transition={{ type: "spring", stiffness: 300, delay: 0.3 }}
                                >
                                    Corporate
                                </motion.div>
                                <motion.h3 
                                    className="text-2xl font-semibold text-white mb-2"
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                >
                                    TechCorp Annual Gala
                                </motion.h3>
                                <motion.p 
                                    className="text-gray-300 mb-4"
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                >
                                    Custom lighting design incorporating brand
                                    colors and theme elements, with pristine
                                    audio for presentations and live music.
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
                            transition: { duration: 0.3 }
                        }}
                    >
                        <div className="relative h-full w-full overflow-hidden rounded-xl">
                            <motion.img
                                src="/lovable-uploads/48e75083-18aa-4df9-bc91-8515485aa465.png"
                                alt="Monegros Festival 2024"
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
                                    transition={{ type: "spring", stiffness: 300, delay: 0.3 }}
                                >
                                    Festival
                                </motion.div>
                                <motion.h3 
                                    className="text-2xl font-semibold text-white mb-2"
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                >
                                    Monegros Festival 2024 - Industry City PA
                                </motion.h3>
                                <motion.p 
                                    className="text-gray-300 mb-4"
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                >
                                    Professional PA system installation
                                    providing crystal-clear sound coverage for
                                    the entire Industry City Stage in
                                    collaboration with KWS and UF.
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
