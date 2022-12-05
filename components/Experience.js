import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import heroStyles from '../styles/Hero.module.css'
const Experience = () => {
  return (
    <div className={heroStyles.card}>
        <h1>Experience</h1>
        <WorkHistoryIcon></WorkHistoryIcon>
        <p>2019-2021 : Computer Science Teacher.</p>
        <p> 2021-present day : Working as Game Developer in the Online Multiplayer R.P.G. "Online Chaos" with a team of indie game developers.</p>
        <p> 2022-present day : Working as Game Developer in the Online Multiplayer COOP "Salti Soldiers" with a team of indie game developers.</p>
    </div>
  )
}

export default Experience