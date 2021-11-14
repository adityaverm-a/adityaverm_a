import { useEffect, useState } from "react"
import useDelayedRender from 'use-delayed-render'
import styles from 'styles/mobile-menu.module.css'
import cn from "classnames"

export const MobileMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
        isMenuOpen,
        {
          enterDelay: 20,
          exitDelay: 300
        }
      )

    const MenuIcon = (
        <svg
            className="h-5 w-5 absolute text-gray-900 dark:text-gray-100"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
        >
            <path
                d="M2.5 7.5H17.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M2.5 12.5H17.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )

    const CloseIcon = (
        <svg
            className="h-5 w-5 absolute text-gray-900 dark:text-gray-100"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            shapeRendering="geometricPrecision"
        >
            <path d="M18 6L6 18" />
            <path d="M6 6l12 12" />
        </svg>
    )

    const MobileMenuItem = ({ link, title, delay }) => {
        return (
            <li
            className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold"
            style={{ transitionDelay: delay }}
          >
            <Link href={link}>
              <a className="flex w-auto pb-4 pl-2">{title}</a>
            </Link>
          </li>
        )
    }
    
    function toggleMenu() {
        if(isMenuOpen){
            setIsMenuOpen(false)
            // document.body.style.overflow = ''
        } else {
            setIsMenuOpen(true)
            // document.body.style.overflow = 'hidden'
        }
    }

    useEffect(() => {
        return function cleanUp() {
            document.body.style.overflow = ''
        }
    }, [])

    return (
        <>
            <button
                type='button'
                aria-label='Toggle Menu'
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={cn(styles.burger, 'visible md:hidden')}
            >
                {isMenuOpen ? (
                     <svg
                        className="h-5 w-5 absolute text-gray-900 dark:text-gray-100"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        shapeRendering="geometricPrecision"
                    >
                        <path d="M18 6L6 18" />
                        <path d="M6 6l12 12" />
                    </svg>
                ) : (
                    <svg
                        className="h-5 w-5 absolute text-gray-900 dark:text-gray-100"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                    >
                        <path
                            d="M2.5 7.5H17.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M2.5 12.5H17.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                )}
            </button>
            {isMenuMounted && (
                <ul className={cn(
                    styles.menu,
                    'flex flex-col absolute bg-gray-100 dark:bg-gray-900',
                    isMenuRendered && styles.menuRendered
                )}>
                    <MobileMenuItem link='/' title='Home' delay='150ms' />
                    <MobileMenuItem link='/projects' title='Projects' delay='200ms' />
                    <MobileMenuItem link='/blog' title='Blog' delay='250ms' />
                    <MobileMenuItem link='/aboutMe' title='About Me' delay='300ms' />
                </ul>
            )}
        </>
    )
}
