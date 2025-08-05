import React from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Clock, User } from 'lucide-react'
import { cn } from '@/lib/utils'

interface BlogPostProps {
    id: string
    title: string
    excerpt: string
    date: string
    readTime: string
    author: string
    category: string
    imageSrc: string
    featured?: boolean
    className?: string
    style?: React.CSSProperties
    color?: string
}

const BlogPost = ({
    title,
    excerpt,
    date,
    readTime,
    author,
    category,
    imageSrc,
    featured = false,
    className,
    style,
    color = 'psyco-green-DEFAULT',
}: BlogPostProps) => {
    return (
        <article
            className={cn(
                'glassmorphism overflow-hidden card-hover',
                featured ? 'md:col-span-2' : '',
                className,
            )}
            style={style}
        >
            <div className="relative h-52 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-psyco-black-DEFAULT to-transparent z-10"></div>
                <img
                    src={imageSrc}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute top-4 left-4 z-20">
                    <span className="bg-psyco-green-DEFAULT px-3 py-1 text-xs font-medium text-white rounded-full">
                        {category}
                    </span>
                </div>
            </div>

            <div className="p-6 h-full" style={{ backgroundColor: color }}>
                <h3 className="text-xl font-semibold text-white mb-2 hover:text-psyco-green-light transition-colors">
                    {title}
                </h3>

                <p className="text-gray-300 mb-4 text-sm line-clamp-2">
                    {excerpt}
                </p>

                <div className="flex items-center text-xs text-gray-400 space-x-4"></div>
            </div>
        </article>
    )
}

export default BlogPost
