import SchoolIcon from '@mui/icons-material/School';
import heroStyles from '../styles/Hero.module.css'
const Education = () => {
  return (
    <div className={heroStyles.card}>
        
        <h1>Education</h1>
        <SchoolIcon></SchoolIcon>
        <p>2015 - 2018 : Technological University of Havana CUJAE</p>
        <p>2018 - 2021 : East University Higher Technological Institute</p>
        
    </div>
  )
}

export default Education