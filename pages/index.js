import Head from 'next/head'
import Education from '../components/Education'
import Experience from '../components/Experience'
import Hero from '../components/Hero'
import SocialIconsBar from '../components/SocialIconsBar'

export default function Home() {
  return (
    < >
      <Head>
        <title>My portfolio</title>
        <meta name='keywords' content='programming,game development, web development'></meta>
      </Head>
      <Hero></Hero>
      <Education></Education>
      <Experience></Experience>
      <SocialIconsBar></SocialIconsBar>
    </>
  )
}
