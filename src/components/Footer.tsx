import React from 'react'
import { NavLink } from 'react-router-dom'
import {
    Mail,
    Facebook,
    Instagram,
    Youtube,
    Phone,
    Home,
    Info,
} from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import SocialLinks from '@/components/SocialLinks.tsx'
import { configCompany } from '@/lib/configCompany.ts'

const Footer = () => {
    const { t, language } = useLanguage()

    return (
        <footer
            className="border-t border-green-500/10"
            style={{
                backgroundColor: 'darkslategray',
            }}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Logo and Description */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="h-16 w-16 relative">
                                <img
                                    src="/uploads/logo.png"
                                    alt="Integral Revolut Logo"
                                    className="h-full w-full object-contain"
                                />
                            </div>
                            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-500">
                                {configCompany.name}
                            </h2>
                        </div>
                        <p className="text-gray-300 max-w-md">
                            {t('footer.description')}
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <SocialLinks isLight />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-medium mb-4 pb-2 border-b border-green-500/10">
                            {t('footer.links')}
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#home"
                                    className="text-gray-300 hover:text-green-400 transition-colors"
                                >
                                    {t('nav.home')}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#services"
                                    className="text-gray-300 hover:text-green-400 transition-colors"
                                >
                                    {t('nav.services')}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#blog"
                                    className="text-gray-300 hover:text-green-400 transition-colors"
                                >
                                    {t('nav.blog')}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contacts"
                                    className="text-gray-300 hover:text-green-400 transition-colors"
                                >
                                    {t('nav.contacts')}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-medium mb-4 pb-2 border-b border-green-500/10">
                            {t('footer.contact.info')}
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-center space-x-3 text-gray-300">
                                <Mail size={16} className="text-green-500" />
                                <span>{configCompany.email}</span>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-300">
                                <Phone size={16} className="text-green-500" />
                                <span>{configCompany.phone}</span>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-300">
                                <Info size={16} className="text-green-500" />
                                <span>
                                    {language === 'en'
                                        ? configCompany.infoEng
                                        : language === 'uk'
                                          ? configCompany.infoUa
                                          : configCompany.info}
                                </span>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-300">
                                <Home size={16} className="text-green-500" />
                                <span>
                                    {language === 'en'
                                        ? configCompany.addressEng
                                        : language === 'uk'
                                          ? configCompany.addressUa
                                          : configCompany.address}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-green-500/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} {configCompany.name}{' '}
                        {t('footer.rights')}
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a
                            href="#"
                            className="text-gray-400 hover:text-green-400 text-sm transition-colors"
                        >
                            {t('footer.privacy')}
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-green-400 text-sm transition-colors"
                        >
                            {t('footer.terms')}
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
