import Project from '../components/Project'
import { Typography , Box } from '@mui/material'

const onlinec_pictures = [
  {
    img: '../projects/online_chaos/1.png',
    title: 'Login Page',
  },
  {
    img: '../projects/online_chaos/2.png',
    title: 'Lobby',
  },
  {
    img: '../projects/online_chaos/3.png',
    title: 'Character Customization',
  },
  {
    img: '../projects/online_chaos/4.png',
    title: 'Settings',
  },
  {
    img: '../projects/online_chaos/5.png',
    title: 'Messages',
  },
  {
    img: '../projects/online_chaos/6.png',
    title: 'Custom Skin 1',
  },
  {
    img: '../projects/online_chaos/7.png',
    title: 'Custom Skin 2',
  },
  {
    img: '../projects/online_chaos/8.png',
    title: 'In Game',
  },
  {
    img: '../projects/online_chaos/9.png',
    title: 'In Game 2',
  },
  {
    img: '../projects/online_chaos/10.png',
    title: 'Inventory in Game',
  },
];
const worldbox_pictures = [
  {
    img: '../projects/worldbox_legends/1.png',
    title: 'Main Menu',
  },
  {
    img: '../projects/worldbox_legends/2.png',
    title: 'Level Selection',
  },
  {
    img: '../projects/worldbox_legends/3.png',
    title: 'InGame1',
  },
  {
    img: '../projects/worldbox_legends/4.png',
    title: 'InGame2',
  },
  {
    img: '../projects/worldbox_legends/5.png',
    title: 'InGame3',
  },
];
const projects = () => {
  return (
    <div>
      <Box justifyContent="center" alignItems="center" display={"flex"}  m={1} sx={{ flexDirection: 'column' }}>
        <Typography variant='h3' color='#5151ff' gutterBottom fontStyle={"italic"} fontFamily={"cursive"} >Projects</Typography>
        <Project name={"Online Chaos"} description={"This is an online R.P.G. Game been developed in Unity for PC and in future releases also mobile. We're using Mirror as the core for networking with some changes so that it can support players and network objects in multiple scenes at the same time."}  githubLink={'https://github.com/walberh96/'} images = {onlinec_pictures}></Project>
        <Project name={"WorldBox Legends 2.0"} description={"This is a puzzle game made in Unity, using Tilemaps with absolutely no colliders or physics."}  githubLink={'https://github.com/walberh96'} images = {worldbox_pictures}></Project>
        {/*
        <Project name={"I'm Not Mario"} description={"This is a 2D classic game"}  githubLink={'https://github.com/walberh96'} images = {""}></Project>
        <Project name={"Facking Squares"} description={"This is a survival Top-Down Shooting game"} githubLink={'https://github.com/walberh96'} images = {""}></Project>
        <Project name={"Salti Soldiers"} description={"This is an online survival COOP Game"} githubLink={'https://github.com/walberh96'} images = {""}></Project>
       */}
        </Box>
    </div>
  )
}

export default projects