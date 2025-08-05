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

const Index = () => {
    // Scroll to top on page load
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const featuredServices = [
        {
            title: 'Sound System',
            description:
                'Professional sound systems for any size venue, from small gatherings to large festivals.',
            icon: <Volume2 size={24} />,
            imageSrc:
                '/lovable-uploads/708f9e32-840d-46a4-aaa4-75ad2689e16f.png',
            link: '/services#sound',
        },
        {
            title: 'Lighting Equipment',
            description:
                'Create the perfect atmosphere with our state-of-the-art lighting equipment and expert setup.',
            icon: <Lightbulb size={24} />,
            imageSrc:
                '/lovable-uploads/becfc2e3-b59f-4f86-afca-b9f6fc7b7c14.png',
            link: '/services#lighting',
        },
        {
            title: 'DJ Services',
            description:
                'Experienced DJs to keep your event energized with the perfect music selection.',
            icon: <Music2 size={24} />,
            imageSrc:
                '/lovable-uploads/03e83f18-76a1-4349-a197-dbde03a93343.png',
            link: '/services#dj',
        },
    ]

    return (
        <div>
            <HeroSection />
            <ServicesSection />
            <BlogSection />
            <FeaturedSection />
            <FaqSection />
            <ContactsSection />
        </div>
    )
}

export default Index
