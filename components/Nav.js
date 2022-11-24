import navStyles from '../styles/Nav.module.css'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Link from 'next/link';

const Nav = () => {


  return (
    <nav className={navStyles.nav}>
        <ButtonGroup>
          <Link href={'/'} passHref >
          <Button  variant='outlined'>Home</Button>
          </Link>
          <Link href={'/projects'} passHref >
          <Button variant='outlined' >Projects</Button>
          </Link>
          <Link href={'/skills'} passHref >
          <Button variant='outlined'>Skills</Button>
          </Link>
        </ButtonGroup>
    </nav>
  )
}

export default Nav