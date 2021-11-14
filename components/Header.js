import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes';
import NavItem from '@/components/NavItem'
import { MobileMenu } from '@/components/MobileMenu';

export default function Header() {
    const [mounted, setMounted] = useState(false)
    const { resolvedTheme, setTheme } = useTheme()

    useEffect(() => setMounted(true))

    return (
        <div className='flex flex-col justify-center px-4 sm:px-8 bg-gray-50  dark:bg-gray-900 bg-opacity-60'>
            <nav className='flex items-center justify-between w-full max-w-2xl mx-auto pt-8 pb-8 border-gray-200 dark:border-gray-700 sm:pb-16 text-gray-900 dark:text-gray-100'>
            <div>
                <MobileMenu />
                <NavItem href='/' text='Home' />
                <NavItem href='/projects' text='Projects' />  
                <NavItem href='/blog' text='Blog' />  
                <NavItem href='/aboutMe' text='About Me' />
            </div>
            <button
                onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                className='w-9 h-9 rounded-lg bg-gray-200 flex items-center justify-center dark:bg-gray-700 hover:ring-2 ring-gray-300 transition-all'
            >
                {mounted && (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="w-5 h-5 text-gray-800 dark:text-gray-200"
                    >
                        {resolvedTheme === 'dark' ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                            />
                        )}
                    </svg>
                )}
            </button>
            </nav>
        </div>
    )
}