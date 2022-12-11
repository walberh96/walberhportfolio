import Project from '../components/Project'
import { Typography , Box } from '@mui/material'

const projects = () => {
  return (
    <div>
      <Box justifyContent="center" alignItems="center" display={"flex"}  m={1} sx={{ flexDirection: 'column' }}>
        <Typography variant='h3' color='#5151ff' gutterBottom fontStyle={"italic"} fontFamily={"cursive"} >Projects</Typography>
        <Project name={"WorldBox Legends 2.0"} description={"This is a puzzle game"}  githubLink={'https://github.com/walberh96'} images = {""}></Project>
        <Project name={"I'm Not Mario"} description={"This is a 2D classic game"}  githubLink={'https://github.com/walberh96'} images = {""}></Project>
        <Project name={"Online Chaos"} description={"This is an online R.P.G. Game"}  githubLink={'https://github.com/walberh96'} images = {""}></Project>
        <Project name={"Facking Squares"} description={"This is a survival Top-Down Shooting game"} githubLink={'https://github.com/walberh96'} images = {""}></Project>
        <Project name={"Salti Soldiers"} description={"This is an online survival COOP Game"} githubLink={'https://github.com/walberh96'} images = {""}></Project>
      </Box>
    </div>
  )
}

export default projects