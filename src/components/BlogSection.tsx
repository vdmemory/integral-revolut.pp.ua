import BlogPost from '@/components/BlogPost.tsx'
import React from 'react'
import { easeOut, motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

const BlogSection = () => {
    const { t } = useLanguage()

    const blogPosts = [
        {
            id: 'modern-web-development',
            title: t('blog.post.web.title'),
            excerpt: t('blog.post.web.excerpt'),
            date: 'April 8, 2024',
            readTime: '6 min read',
            author: 'Development Team',
            category: t('blog.post.web.category'),
            imageSrc:
                'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80',
            featured: true,
            color: 'mediumseagreen',
        },
        {
            id: '2',
            title: t('blog.post.mobile.title'),
            excerpt: t('blog.post.mobile.excerpt'),
            date: '22 февраля 2024',
            readTime: '7 мин чтения',
            author: 'Мария Иванова',
            category: t('blog.post.mobile.category'),
            imageSrc:
                'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80',
            color: 'cornflowerblue',
        },
        {
            id: '3',
            title: t('blog.post.cloud.title'),
            excerpt: t('blog.post.cloud.excerpt'),
            date: '10 марта 2024',
            readTime: '6 мин чтения',
            author: 'Алексей Петров',
            category: t('blog.post.cloud.category'),
            imageSrc:
                'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
            color: 'orangered',
        },
        {
            id: '4',
            title: t('blog.post.devops.title'),
            excerpt: t('blog.post.devops.excerpt'),
            date: '5 апреля 2024',
            readTime: '8 мин чтения',
            author: 'Александр Сидоров',
            category: t('blog.post.devops.category'),
            imageSrc:
                'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80',
            color: 'goldenrod',
        },
        {
            id: '5',
            title: t('blog.post.design.title'),
            excerpt: t('blog.post.design.excerpt'),
            date: '18 мая 2024',
            readTime: '4 мин чтения',
            author: 'Сара Козлова',
            category: t('blog.post.design.category'),
            imageSrc:
                'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80',
            color: 'mediumorchid',
        },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: easeOut,
            },
        },
    }

    const sectionVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: easeOut,
            },
        },
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
                            {t('blog.title')}
                        </motion.h2>
                        <motion.p
                            className="text-gray-400 max-w-2xl"
                            variants={itemVariants}
                        >
                            {t('blog.description')}
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
                                transition: { duration: 0.3 },
                            }}
                            className={`${post.featured ? 'md:col-span-2 min-h-[378px]' : 'min-h-[378px]'}`}
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
