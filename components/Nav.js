import navStyles from '../styles/Nav.module.css'
import NavItem from './NavItem'

const Nav = () => {


  return (
    <nav className={navStyles.nav}>
        <ul>
            <NavItem name={'Home'} dest={'#home'}></NavItem>
          
            <NavItem name={'Projects'} dest={'#projects'}></NavItem>    
          
            <NavItem name={'About'} dest={'#about'} ></NavItem>

            
            
        </ul>

    </nav>
  )
}

export default Nav