import React, { useEffect, useRef } from 'react'
import { MoveRight, Sparkles, Speaker, Music } from 'lucide-react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
    const backgroundRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!backgroundRef.current) return

            const x = e.clientX / window.innerWidth
            const y = e.clientY / window.innerHeight

            backgroundRef.current.style.transform = `translate(${x * -15}px, ${y * -15}px)`
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
                className="absolute inset-0 z-0 transition-transform duration-500 ease-out"
                style={{ willChange: 'transform' }}
            >
                <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-theme-yellow/20 rounded-full blur-3xl animate-pulse-glow"></div>
                <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-theme-pink/20 rounded-full blur-3xl animate-pulse-glow"></div>
                <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-theme-purple/20 rounded-full blur-3xl animate-pulse-glow"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/4 left-20 hidden lg:block">
                <Speaker className="h-12 w-12 text-theme-cyan animate-float" />
            </div>
            <div className="absolute bottom-1/4 right-20 hidden lg:block">
                <Music className="h-16 w-16 text-theme-orange animate-float" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center">
                    <div className="max-w-2xl">
                        <div className="flex items-center mb-4">
                            <div className="bg-gradient-to-r from-theme-yellow/30 via-theme-pink/30 to-theme-purple/30 text-white rounded-full px-4 py-1 text-sm font-medium inline-flex items-center glassmorphism">
                                <Sparkles className="h-3.5 w-3.5 mr-1 text-theme-yellow" />
                                Premium Sound & Light Services
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-glow mb-6">
                            Elevate Your{' '}
                            <span className="text-theme-yellow">Event</span>{' '}
                            Experience
                        </h1>

                        <p className="text-xl text-white/90 mb-8 font-medium">
                            Professional sound and lighting solutions that bring
                            your event to life. From concerts to private
                            parties, we deliver exceptional audiovisual
                            experiences.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/booking"
                                className="btn-glow text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center relative z-10 shadow-lg"
                            >
                                Book Now
                                <MoveRight className="ml-2 h-5 w-5" />
                            </Link>
                            <Link
                                to="/services"
                                className="bg-gradient-to-r from-theme-teal to-theme-cyan text-white hover:from-theme-cyan hover:to-theme-blue font-bold py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center shadow-lg"
                            >
                                Our Services
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
