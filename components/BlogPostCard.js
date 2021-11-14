import Link from 'next/link'
import cn from 'classnames'

export default function BlogPostCard({ gradient, title, slug }) {
    return (
        <Link 
            href={`/${slug}`}
            // href={`/posts/${slug}`}
        >
            <a className={cn(
                'transform transition-all',
                'rounded-xl w-full',
                // md:w-1/3 hover:scale-105
                'bg-gradient-to-r p-1',
                gradient
            )}>
                <div className='flex justify-center h-full bg-white dark:bg-gray-900 rounded-lg p-4'>
                    <h4 className='text-lg text-center font-medium mb-1 md:mb-2 w-full text-gray-900 dark:text-gray-100 tracking-tight'>{title}</h4>
                </div>
            </a>
        </Link>
    )
}
