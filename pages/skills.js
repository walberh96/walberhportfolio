
import Skill from "../components/Skill"
import { Typography, Box } from "@mui/material"

const skills = () => {
  return (
  
<div>
  <div>
  <Box justifyContent="center" alignItems="center" display={"flex"}  m={1} sx={{ flexDirection: 'column' }}>
  <Typography variant='h3' color='#5151ff' gutterBottom fontStyle={"italic"} fontFamily={"cursive"} >Programming Languages</Typography>
    <Skill rank={5} nameSkill={'Java'}></Skill>
    <Skill rank={5} nameSkill={'C#'}></Skill>
    <Skill rank={5} nameSkill={'HTML'}></Skill>
    <Skill rank={5} nameSkill={'CSS'}></Skill>
    <Skill rank={5} nameSkill={'SQL'}></Skill>
    <Skill rank={4} nameSkill={'JavaScript'}></Skill>
    <Skill rank={4} nameSkill={'P.H.P'}></Skill>
    <Skill rank={4} nameSkill={'Python'}></Skill>
    <Skill rank={3} nameSkill={'C++'}></Skill>
  </Box>
  </div>
  <div>
  <Box justifyContent="center" alignItems="center" display={"flex"}  m={1} sx={{ flexDirection: 'column' }}>
  <Typography variant='h3' color='#5151ff' gutterBottom fontStyle={"italic"} fontFamily={"cursive"} >Technologies</Typography>
    <Skill rank={5} nameSkill={'Git&&Github'}></Skill>
    <Skill rank={5} nameSkill={'Android Studio'}></Skill>
    <Skill rank={5} nameSkill={'Next JS'}></Skill>
    <Skill rank={5} nameSkill={'Unity Game Engine'}></Skill>
  </Box>
  </div>
  <div>
  <Box justifyContent="center" alignItems="center" display={"flex"}  m={1} sx={{ flexDirection: 'column' }}>
  <Typography variant='h3' color='#5151ff' gutterBottom fontStyle={"italic"} fontFamily={"cursive"} >Spoken Languages</Typography>
    <Skill rank={5} nameSkill={'Spanish'}></Skill>
    <Skill rank={5} nameSkill={'English'}></Skill>
    <Skill rank={3} nameSkill={'Japanese'}></Skill>
  </Box>
  </div>
</div>
  )
}

export default skills