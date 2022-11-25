import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
const Skill = ({nameSkill,rank}) => {
  return (
    <>
    <Box sx={{ display: 'flow',  ml: 2}} fontStyle={'italic'} fontFamily= 'cursive'>{nameSkill}</Box>
    <Rating
      name="text-feedback"
      value={rank}
      readOnly
      precision={0.5}
      emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
    />
    
    </>
    

);
}

export default Skill