import BlogPost from '@/components/BlogPost.tsx'
import React from 'react'

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
        },
    ]

    return (
        <section id={'blog'} className="py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-2">
                            Blog & Insights
                        </h2>
                        <p className="text-gray-400 max-w-2xl">
                            Industry knowledge, technical tips, and event
                            inspiration from our expert team
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <BlogPost
                            key={post.id}
                            {...post}
                            className={`animate-fade-in ${post.featured ? 'md:col-span-2' : ''}`}
                            style={{
                                animationDelay: `${index * 100}ms`,
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BlogSection
