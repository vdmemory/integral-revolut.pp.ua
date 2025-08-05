import React, { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/contexts/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'
import SocialLinks from '@/components/SocialLinks.tsx'

const Navbar = () => {
    const { t } = useLanguage()
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setIsOpen(false)
    }, [location.pathname])

    const navLinks = [
        { name: t('nav.services'), path: '#services' },
        { name: t('nav.blog'), path: '#blog' },
        { name: t('nav.faq'), path: '#faq' },
        { name: t('nav.contacts'), path: '#contacts' },
    ]

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4',
                scrolled ? 'px-0 py-0' : 'px-12 py-4',
            )}
            style={{ borderRadius: 0 }}
        >
            <div
                className={cn(
                    'mx-auto flex items-center justify-between h-16 pr-6',
                    scrolled ? 'backdrop-blur-lg' : 'bg-transparent',
                )}
                style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                }}
            >
                <a href="#home" className="flex items-center">
                    <div className="w-auto md:w-auto relative flex items-center space-x-2">
                        <img
                            src="/uploads/logo.png"
                            alt="Logo"
                            className="h-[80px] w-auto object-contain"
                        />

                        <h1 className="text-2xl font-bold lg:leading-[1.7] md:leading-[1.7]">
                            <span className="text-theme-green">INTEGRAL</span>{' '}
                            <span className="text-theme-yellow">
                                REVOLUT
                            </span>{' '}
                        </h1>
                    </div>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.path}
                            href={link.path}
                            className={cn(
                                'text-white hover:text-green-400 link-hover text-sm font-medium tracking-wide',
                            )}
                        >
                            {link.name}
                        </a>
                    ))}
                    <SocialLinks isHeader isLight />
                    <LanguageSwitcher />
                </div>

                {/* Mobile Navigation Toggle */}
                <button
                    className="md:hidden text-white hover:text-green-400 transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            <div
                className={cn(
                    'fixed inset-0 z-40 glassmorphism pt-24 px-8 transition-all duration-300 ease-in-out transform md:hidden',
                    isOpen ? 'translate-x-0' : 'translate-x-full',
                )}
            >
                <div className="flex flex-col space-y-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.path}
                            href={link.path}
                            className={cn(
                                'text-white hover:text-green-400 py-2 text-xl',
                            )}
                            onClick={() => {
                                setIsOpen(false)
                            }}
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="pt-4">
                        <LanguageSwitcher />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
