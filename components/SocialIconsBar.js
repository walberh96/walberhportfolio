import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import Button from '@mui/material/Button';
import Link from 'next/link';
import { ButtonGroup , Typography, Box} from '@mui/material';


const SocialIconsBar = () => {
  return (
    <div>
<Box justifyContent="center" alignItems="center" display={"flex"}  m={1} sx={{ flexDirection: 'column' }}>
        <ButtonGroup>
          <Link target={'_blank'} href={'https://github.com/walberh96'} passHref>
          <Button endIcon={<GitHubIcon></GitHubIcon>} variant='outlined'></Button>
          </Link>
          <Link target={'_blank'} href={'https://www.linkedin.com/in/williams-alberh'} passHref>
          <Button variant='outlined' startIcon={<LinkedInIcon></LinkedInIcon>}></Button>
          </Link>
        </ButtonGroup>
        <footer>
        <Typography variant="h3" color='#5151ff' gutterBottom fontStyle={"italic"} fontFamily={"cursive"} textAlign={'center'} >Contact Me</Typography>
        <Typography variant="h6" gutterBottom fontStyle={"italic"} fontFamily={"cursive"} textAlign={'center'}>willgamedevelopment@gmail.com</Typography>
        </footer>
        </Box>
    </div>
  )
}

export default SocialIconsBar