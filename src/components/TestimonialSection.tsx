import React from 'react'
import TestimonialCard from '@/components/TestimonialCard.tsx'

const TestimonialSection = () => {
    const testimonials = [
        {
            name: 'John Doe',
            position: 'CEO',
            company: 'Tech Innovations',
            testimonial: 'This service transformed our business!',
            rating: 5,
            imageSrc: '/uploads/testim1.jpg',
            color: 'darkcyan',
        },
        {
            name: 'Jane Smith',
            position: 'Marketing Director',
            company: 'Creative Solutions',
            testimonial: 'Exceptional quality and support!',
            rating: 4,
            imageSrc: '/uploads/testim2.webp',
            color: 'darkmagenta',
        },
        {
            name: 'Alice Johnson',
            position: 'Product Manager',
            company: 'Future Tech',
            testimonial: 'Highly recommend for any project!',
            rating: 5,
            imageSrc: '/uploads/testim3.jpg',
            color: 'darkblue',
        },
    ]

    return (
        <section className="py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-2">
                            What Our Clients Say
                        </h2>
                        <p className="text-gray-400 max-w-2xl">
                            Hear from our satisfied clients about their
                            experiences with our services
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            {...testimonial}
                            color={testimonial.color}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TestimonialSection
