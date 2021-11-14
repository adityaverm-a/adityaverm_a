import Head from 'next/head'
import Layout from '@/components//layout'

export default function AboutMe() {
  const meta = {
    title: 'Aditya Verma'
  } 

  return (
    <Layout meta={meta}>
      <h1 className="text-6xl font-bold">
        Coming{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Soon!
          </a>
        </h1>
    </Layout>
  )
}
