import React, { useEffect, useRef } from 'react'
import { MoveRight, Sparkles } from 'lucide-react'

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
                <div className="flex flex-col items-start">
                    <div className="max-w-2xl">
                        <div className="flex items-center mb-4">
                            <div className="text-white rounded-full px-4 py-1 text-sm font-medium inline-flex items-center glassmorphism">
                                <Sparkles className="h-3.5 w-3.5 mr-1 text-theme-yellow" />
                                Premium Sound & Light Services
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold lg:leading-[1.7] md:leading-[1.7] text-glow mb-6 ">
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
                            <a
                                href="#contacts"
                                className="btn-glow text-white font-bold py-3 px-8 rounded-lg flex items-center justify-center relative z-10 shadow-lg"
                            >
                                Get in Touch
                                <MoveRight className="ml-2 h-5 w-5" />
                            </a>
                            <a
                                href="#services"
                                className="bg-gradient-to-r from-theme-teal to-theme-cyan text-white hover:from-theme-cyan hover:to-theme-blue font-bold py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center shadow-lg"
                            >
                                Our Services
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
