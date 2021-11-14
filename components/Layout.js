import Head from "next/head"
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Layout ({ children, meta }) {
    return (
        <div className='bg-gray-50 dark:bg-gray-900 min-h-[100vh]'>
            <Head>
                <title>{meta.title}</title>
                {/* <meta name="robots" content="follow, index" />
                <meta content={meta.description} name="description" />
                <meta property="og:url" content={`https://leerob.io${router.asPath}`} />
                <link rel="canonical" href={`https://leerob.io${router.asPath}`} />
                <meta property="og:type" content={meta.type} />
                <meta property="og:site_name" content="Lee Robinson" />
                <meta property="og:description" content={meta.description} />
                <meta property="og:title" content={meta.title} />
                <meta property="og:image" content={meta.image} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@leeerob" />
                <meta name="twitter:title" content={meta.title} />
                <meta name="twitter:description" content={meta.description} />
                <meta name="twitter:image" content={meta.image} />
                {meta.date && (
                <meta property="article:published_time" content={meta.date} />
                )} */}
            </Head>
            <Header />
            <main className='flex flex-col justify-center px-4 bg-gray-50 dark:bg-gray-900 w-full max-w-2xl mx-auto'>
                {children}
                <Footer />
            </main>
        </div>
    )
}