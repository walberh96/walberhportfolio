import Head from 'next/head'
import Hero from '../components/Hero'
import SocialIconsBar from '../components/SocialIconsBar'

export default function Home() {
  return (
    <div >
      <Head>
        <title>My portfolio</title>
        <meta name='keywords' content='programming,game development, web development'></meta>
      </Head>
      <Hero></Hero>
      <SocialIconsBar></SocialIconsBar>
    </div>
  )
}
