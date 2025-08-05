import React from 'react'
import TestimonialCard from '@/components/TestimonialCard.tsx'
import { motion } from 'framer-motion'

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
        <motion.section 
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
                            What Our Clients Say
                        </motion.h2>
                        <motion.p 
                            className="text-gray-400 max-w-2xl"
                            variants={itemVariants}
                        >
                            Hear from our satisfied clients about their
                            experiences with our services
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
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ 
                                y: -10,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <TestimonialCard
                                {...testimonial}
                                color={testimonial.color}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    )
}

export default TestimonialSection
