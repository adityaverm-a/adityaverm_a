import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/layout'
import PorjectsCard from '../components//PorjectsCard'
import BlogPostCard from '../components//BlogPostCard'

export default function Home() {
  const meta = {
    title: 'Aditya Verma'
  } 

  return (
    <Layout meta={meta}>
      <div className='flex flex-col-reverse md:flex-row items-start md:items-center justify-between mb-8'>
        <div className='md:w-2/3'>
          <h1 className="text-3xl md:text-5xl font-bold mb-2 text-black dark:text-white">I'm Aditya Verma</h1>
          <h3 className='text-lg font-normal text-gray-700 dark:text-gray-200'>I build things for the Web!</h3>
          <p className='text-sm sm:text-base text-gray-500 dark:text-gray-400 text-justify'>
            Currently pursing a Bachelor of Technology focused in Software Engineering 
            from Delhi Technological University.</p>
        </div>
        <div className='w-[75px] md:w-[150px]'>
          <Image
            width={150}
            height={150}
            src='/avatar.jpg'
            alt='Aditya Verma'
            className='rounded-full'
          />
        </div>
      </div>
      <div className='mb-6'>
        <h2 className='text-xl md:text-3xl font-semibold mb-2'>Some Things I've Built</h2>
        <PorjectsCard />
        <Link href='/projects'>
          <a className='text-blue-600 dark:text-blue-400 flex cursor-pointer hover:underline'>
            see more projects
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6 ml-1"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
              />
            </svg>
          </a>
        </Link>
      </div>
      <div>
        <h2 className='text-xl md:text-3xl font-semibold mb-2'>Some Knowledge I've Gained</h2>
        <div className='flex gap-6 flex-col md:flex-row mt-6 mb-4'>
          <BlogPostCard
              title="Work in Progress, Stay Tuned!"
              slug="/blog"
              gradient="from-[#D8B4FE] to-[#818CF8]"
            />
            {/* <BlogPostCard
              title="Past, Present, and Future of React State Management"
              slug="react-state-management"
              gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
            />
            <BlogPostCard
              title="Which Back End Should I Use As A Front-End Developer?"
              slug="backend"
              gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
            /> */}
        </div>
        <Link href='/blog'>
          <a className='text-blue-600 dark:text-blue-400 mb-5 flex cursor-pointer rounded-lg hover:underline'>
              read all posts
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-6 w-6 ml-1"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                />
              </svg>
            </a>
        </Link>
      </div>
    </Layout>
  )
}
