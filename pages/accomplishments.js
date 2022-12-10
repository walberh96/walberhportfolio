import Accomplishment from '../components/Accomplishment'
import { Box , Typography } from '@mui/material'
import Image from "next/image"
import iGoogle from '../public/logos/google.svg'
import iSololearn from '../public/logos/sololearn.svg'
import iPlatzi from '../public/logos/platzi.svg'
import iUdemy from '../public/logos/udemy.svg'

const accomplishments = () => {
  return (
    <div>
      <div>
      <Box justifyContent="center" alignItems="center" display={"flex"}  m={1} sx={{ flexDirection: 'column' }}>
      <Typography variant="h3" color='#5151ff' gutterBottom fontStyle={"italic"} fontFamily={"cursive"} textAlign="center" >Platzi</Typography>
        <Image priority={true} src={iPlatzi} alt="Williams Tamayo" width={70} height={70}></Image>
        <Accomplishment name={'Basic Python Course'} CredURL= {'../platzi/diploma-python-basico.png'}></Accomplishment>
        <Accomplishment name={'Python Professional Course'} CredURL={'../platzi/diploma-python-profesional.png'}></Accomplishment>
        <Accomplishment name={'C# for Video Games Course'} CredURL={'../platzi/diploma-desarrollo-unity.png'}></Accomplishment>
        <Accomplishment name={'Fundamentals Course for the Development of Online Multiplayer Video Games'} CredURL={'../platzi/diploma-videojuegos-multijugador.png'}></Accomplishment>
        <Accomplishment name={'Introduction to Programming 3D Video Games with Unity Course'} CredURL={'../platzi/diploma-unity-3d.png'}></Accomplishment>
        <Accomplishment name={'2D Video Game Programming Course with Unity'} CredURL={'../platzi/diploma-unity-2d.png'}></Accomplishment>
        <Accomplishment name={'Practical Online Multiplayer Video Games Course with Unity and Mirror'} CredURL={'../platzi/diploma-unity-mirror.png'}></Accomplishment>
        <Accomplishment name={'Professional Video Game Design Course'} CredURL={'../platzi/diploma-profesional-diseno-videojuegos.png'}></Accomplishment>
        <Accomplishment name={'Git and GitHub Professional Course'} CredURL={'../platzi/diploma-git-github.png'}></Accomplishment>
      </Box>
      </div>

      <div>
      <Box justifyContent="center" alignItems="center" display={"flex"}  m={1} sx={{ flexDirection: 'column' }}>
      <Typography variant="h3" color='#5151ff' gutterBottom fontStyle={"italic"} fontFamily={"cursive"} textAlign="center" >Udemy</Typography>
        <Image priority={true} src={iUdemy} alt="Williams Tamayo" width={45} height={45} ></Image>
        <Accomplishment name={'Master in Video Game Programming with Unity® 2021 and C#'} CredURL={'../udemy/vg.png'}></Accomplishment>
      </Box>
      </div>
      <div>
      <Box justifyContent="center" alignItems="center" display={"flex"}  m={1} sx={{ flexDirection: 'column' }}>
      <Typography variant="h3" color='#5151ff' gutterBottom fontStyle={"italic"} fontFamily={"cursive"} textAlign="center" >Sololearn</Typography>
        <Image priority={true} src={iSololearn} alt="Williams Tamayo" width={50} height={50} ></Image>
        <Accomplishment name={'Java'} CredURL={'../sololearn/java.png'}></Accomplishment>
        <Accomplishment name={'C#'} CredURL={'../sololearn/cs.png'}></Accomplishment>
        <Accomplishment name={'React'} CredURL={'../sololearn/react.png'}></Accomplishment>
      </Box>
      </div>
      <div>
      <Box justifyContent="center" alignItems="center" display={"flex"}  m={1} sx={{ flexDirection: 'column' }}>
      <Typography variant="h3" color='#5151ff' gutterBottom fontStyle={"italic"} fontFamily={"cursive"} textAlign="center" >Google</Typography>
        <Image priority={true} src={iGoogle} alt="Williams Tamayo" width={50} height={50} ></Image>
        <Accomplishment name={'Fundamentals of digital marketing'} CredURL={'../google/dm.png'}></Accomplishment>
        <Accomplishment name={'Cloud Computing'} CredURL={'../google/cc.png'}></Accomplishment>
      </Box>
      </div>
    </div>
  )
}

export default accomplishments