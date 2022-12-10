import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import { Typography, Box } from "@mui/material"
const Experience = () => {
  return (
    <div>
      <Box justifyContent="center" alignItems="center" display={"flex"}  m={1} sx={{ flexDirection: 'column' }}>
        <Typography variant='h3' color='#5151ff' gutterBottom fontStyle={"italic"} fontFamily={"cursive"} >Experience</Typography>
        <WorkHistoryIcon></WorkHistoryIcon>
        <Typography variant='body2' gutterBottom fontStyle={"italic"} fontFamily={"cursive"} textAlign="center" >2019-2021 : Computer Science Teacher.</Typography>
        <Typography variant='body2' gutterBottom fontStyle={"italic"} fontFamily={"cursive"} textAlign="center">2021-present day : Working as Game Developer in the Online Multiplayer R.P.G. "Online Chaos" with a team of indie game developers.</Typography>
        <Typography variant='body2' gutterBottom fontStyle={"italic"} fontFamily={"cursive"} textAlign="center">2022-present day : Working as Game Developer in the Online Multiplayer COOP "Salti Soldiers" with a team of indie game developers.</Typography>
      </Box>
    </div>
  )
}

export default Experience