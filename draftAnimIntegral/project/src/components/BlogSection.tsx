import BlogPost from '@/components/BlogPost.tsx'
import React from 'react'
import { motion } from 'framer-motion'

const BlogSection = () => {
    const blogPosts = [
        {
            id: 'tentacular-urutz',
            title: 'PA Rental & Live Sets on Tentacular Urutz Party, Italy',
            excerpt:
                'Our team provided a custom sound system and technical support for the underground psychedelic trance event in Italy, featuring our signature horn-loaded setup.',
            date: 'April 8, 2023',
            readTime: '6 min read',
            author: 'Technical Crew',
            category: 'Sound',
            imageSrc:
                '/lovable-uploads/8dced82a-6a2c-48ee-a060-463c28764183.png',
            featured: true,
            color: 'mediumseagreen',
        },
        {
            id: '2',
            title: 'The Evolution of Stage Lighting Technology',
            excerpt:
                'From traditional par cans to modern LED fixtures and intelligent lighting, we explore how stage lighting has evolved over the decades.',
            date: 'February 22, 2023',
            readTime: '7 min read',
            author: 'Maria Williams',
            category: 'Lighting',
            imageSrc:
                'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80',
            color: 'cornflowerblue',
        },
        {
            id: '3',
            title: 'DJ Techniques That Get the Crowd Moving',
            excerpt:
                'Experienced DJs share their secrets for reading the room and keeping the dance floor packed all night long.',
            date: 'March 10, 2023',
            readTime: '6 min read',
            author: 'DJ Rhythm',
            category: 'DJ',
            imageSrc:
                'https://images.unsplash.com/photo-1571266087814-e7360f035f25?auto=format&fit=crop&q=80',
            color: 'orangered',
        },
        {
            id: '4',
            title: 'Setting Up the Perfect Festival Sound',
            excerpt:
                'Special considerations for outdoor festival sound setups that ensure great audio experience for all attendees regardless of weather conditions.',
            date: 'April 5, 2023',
            readTime: '8 min read',
            author: 'Alex Thompson',
            category: 'Sound',
            imageSrc:
                'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&q=80',
            color: 'goldenrod',
        },
        {
            id: '5',
            title: 'Creative Lighting Ideas for Corporate Events',
            excerpt:
                'Elevate your corporate event with these innovative lighting techniques that create a professional yet engaging atmosphere.',
            date: 'May 18, 2023',
            readTime: '4 min read',
            author: 'Sarah Johnson',
            category: 'Lighting',
            imageSrc:
                'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80',
            color: 'mediumorchid',
        },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
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
            id={'blog'} 
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
                            Blog & Insights
                        </motion.h2>
                        <motion.p 
                            className="text-gray-400 max-w-2xl"
                            variants={itemVariants}
                        >
                            Industry knowledge, technical tips, and event
                            inspiration from our expert team
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
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            variants={itemVariants}
                            whileHover={{ 
                                y: -10,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <BlogPost
                                {...post}
                                className={`${post.featured ? 'md:col-span-2' : ''}`}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    )
}

export default BlogSection
