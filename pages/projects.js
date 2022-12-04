import Project from '../components/Project'
import style from '../styles/Projects.module.css'
const projects = () => {
  return (
    <div className={style.main}>
        <h1>
            Projects
        </h1>
        <Project name={"WorldBox Legends 2.0"} description={"This is a puzzle game"} image={'/profile1.png'} githubLink={'https://github.com/walberh96'}></Project>
        <Project name={"I'm Not Mario"} description={"This is a 2D classic game"} image={'/profile1.png'} githubLink={'https://github.com/walberh96'}></Project>
        <Project name={"Online Chaos"} description={"This is an online R.P.G. Game"} image={'/profile1.png'} githubLink={'https://github.com/walberh96'}></Project>
        <Project name={"Facking Squares"} description={"This is a survival Top-Down Shooting game"} image={'/profile1.png'} githubLink={'https://github.com/walberh96'}></Project>
        <Project name={"Salti Soldiers"} description={"This is an online survival COOP Game"} image={'/profile1.png'} githubLink={'https://github.com/walberh96'}></Project>
    </div>
  )
}

export default projects