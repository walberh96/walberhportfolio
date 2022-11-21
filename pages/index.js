import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import img01 from '../public/profile1.png'

export default function Home() {
  return (
    <div >
      <Head>
        <title>My portfolio</title>
        <meta name='keywords' content='programming,game development, web development'></meta>
      </Head>
      <Hero></Hero>
    </div>
  )
}
