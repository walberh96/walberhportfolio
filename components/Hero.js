import Image from "next/image"
import heroStyles from '../styles/Hero.module.css'

import img01 from '../public/profile1.png'
const Hero = () => {
  return (
    <div className={heroStyles.card}>
    <Image priority={true} src={img01} alt="Williams Tamayo" width={350} height={350} ></Image>
        <h1>Williams Tamayo</h1>
        <p>I’m a software engineer highly motivated to be better every day that found Game Development to be something really interesting and challenging that requires team work and communication to achieve the best result, I love programming in general and of course  I love challenges because they make me and my teammates better every day.</p>
    </div>
  )
}

export default Hero