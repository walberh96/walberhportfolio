import SchoolIcon from '@mui/icons-material/School';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
const Education = () => {
  return (
    <div>
      <Box justifyContent="center" alignItems="center" display={"flex"}  m={1} sx={{ flexDirection: 'column' }}>
        <Typography variant='h3' color='#5151ff' gutterBottom fontStyle={"italic"} fontFamily={"cursive"} >Education</Typography>
        <SchoolIcon></SchoolIcon>
        <Typography variant='body2' gutterBottom fontStyle={"italic"} fontFamily={"cursive"} textAlign="center" >2015 - 2018 : Technological University of Havana CUJAE</Typography>
        <Typography variant='body2' gutterBottom fontStyle={"italic"} fontFamily={"cursive"} textAlign="center" >2018 - 2021 : East University Higher Technological Institute</Typography>
      </Box>
    </div>
  )
}

export default Education