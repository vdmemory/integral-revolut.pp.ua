import React, { useEffect } from 'react'
import HeroSection from '@/components/HeroSection'
import ServiceCard from '@/components/ServiceCard'
import { Link } from 'react-router-dom'
import {
    Volume2,
    Music2,
    Lightbulb,
    PartyPopper,
    MoveRight,
    CalendarDays,
} from 'lucide-react'
import ServicesSection from '@/components/ServicesSection.tsx'
import BlogSection from '@/components/BlogSection.tsx'
import FeaturedSection from '@/components/FeaturedSection.tsx'
import FaqSection from '@/components/FaqSection.tsx'
import ContactsSection from '@/components/ContactsSection.tsx'
import TestimonialSection from '@/components/TestimonialSection.tsx'

const Index = () => {
    // Scroll to top on page load
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <HeroSection />
            <ServicesSection />
            <BlogSection />
            <FeaturedSection />
            <TestimonialSection />
            <FaqSection />
            <ContactsSection />
        </div>
    )
}

export default Index
