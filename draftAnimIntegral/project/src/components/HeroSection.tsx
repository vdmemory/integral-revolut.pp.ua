import React, { useEffect, useRef } from 'react'
import { MoveRight, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const HeroSection = () => {
    const backgroundRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!backgroundRef.current) return

            const x = e.clientX / window.innerWidth
            const y = e.clientY / window.innerHeight

            backgroundRef.current.style.transform = `translate(${x * -25}px, ${y * -25}px)`
        }

        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    return (
        <div
            id={'home'}
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 rainbow-bg"
        >
            {/* Background Elements */}
            <div
                ref={backgroundRef}
                className="absolute inset-[8px] z-0 transition-transform duration-500 ease-out"
                style={{
                    willChange: 'transform',
                    backgroundImage: `url('/uploads/bg9.png')`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    opacity: 0.7,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                }}
            ></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div 
                    className="flex flex-col items-start"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="max-w-2xl">
                        <motion.div 
                            className="flex items-center mb-4"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <motion.div 
                                className="text-white rounded-full px-4 py-1 text-sm font-medium inline-flex items-center glassmorphism"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Sparkles className="h-3.5 w-3.5 mr-1 text-theme-yellow" />
                                Premium Sound & Light Services
                            </motion.div>
                        </motion.div>

                        <motion.h1 
                            className="text-4xl md:text-5xl lg:text-6xl font-bold lg:leading-[1.7] md:leading-[1.7] text-glow mb-6"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Elevate Your{' '}
                            <span className="text-theme-yellow">Event</span>{' '}
                            Experience
                        </motion.h1>

                        <motion.p 
                            className="text-xl text-white/90 mb-8 font-medium"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            Professional sound and lighting solutions that bring
                            your event to life. From concerts to private
                            parties, we deliver exceptional audiovisual
                            experiences.
                        </motion.p>

                        <motion.div 
                            className="flex flex-col sm:flex-row gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            <motion.a
                                href="#contacts"
                                className="btn-glow text-white font-bold py-3 px-8 rounded-lg flex items-center justify-center relative z-10 shadow-lg"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                Get in Touch
                                <MoveRight className="ml-2 h-5 w-5" />
                            </motion.a>
                            <motion.a
                                href="#services"
                                className="bg-gradient-to-r from-theme-teal to-theme-cyan text-white hover:from-theme-cyan hover:to-theme-blue font-bold py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center shadow-lg"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                Our Services
                            </motion.a>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default HeroSection
