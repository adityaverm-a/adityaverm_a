import Head from 'next/head'
import Layout from '../components/Layout'

export default function Projects() {
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
