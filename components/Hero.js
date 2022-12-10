import Image from "next/image"

import img01 from '../public/profile1.png'
import { Typography, Box } from "@mui/material"

const Hero = () => {
  return (
    <div>
        <Box justifyContent="center" alignItems="center" display={"flex"}  m={1} sx={{ flexDirection: 'column' }}>
          <Image priority={true} src={img01} alt="Williams Tamayo" width={350} height={350} ></Image>
          <Typography variant="h3" color='#5151ff' gutterBottom fontStyle={"italic"} fontFamily={"cursive"} textAlign="center" >Williams Tamayo</Typography>
          <Typography variant="body2" textAlign="center" gutterBottom fontStyle={"italic"} fontFamily={"cursive"} >I’m a software engineer highly motivated to be better every day that found Game Development to be something really interesting and challenging that requires team work and communication to achieve the best result, I love programming in general and of course  I love challenges because they make me and my teammates better every day.</Typography>
        </Box>
        </div>
  )
}

export default Hero