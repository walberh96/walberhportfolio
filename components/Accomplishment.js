import style from '../styles/Accomplishment.module.css'
import Link from 'next/link' 
import { Typography } from '@mui/material'

const hoverSX={
  "&:hover": {
    color:'#00ffff'
}
}
const Accomplishment = ({name,CredURL}) => {
  return (
    
    <div>
        <Link target={'_blank'} href={CredURL} passHref >
        <Typography sx={hoverSX} variant="h6" gutterBottom fontStyle={"italic"} fontFamily={"cursive"} textAlign="center" >{name}</Typography>
        </Link>
    </div>
  )
}
export default Accomplishment