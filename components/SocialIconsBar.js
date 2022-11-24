import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SocialIconsStyle from '../styles/SocialIconsBar.module.css'
import Button from '@mui/material/Button';
import Link from 'next/link';
import { ButtonGroup } from '@mui/material';


const SocialIconsBar = () => {
  return (
    <div className={SocialIconsStyle.social}>
        <ButtonGroup>
          <Link target={'_blank'} href={'https://github.com/walberh96'} passHref>
          <Button endIcon={<GitHubIcon></GitHubIcon>} variant='outlined'></Button>
          </Link>
          <Link target={'_blank'} href={'https://www.linkedin.com/in/williams-alberh'} passHref>
          <Button variant='outlined' startIcon={<LinkedInIcon></LinkedInIcon>}></Button>
          </Link>
        </ButtonGroup>
        <footer>
          <h1>Contact Me</h1>
          <h3>willgamedevelopment@gmail.com</h3>
        </footer>
    </div>
  )
}

export default SocialIconsBar