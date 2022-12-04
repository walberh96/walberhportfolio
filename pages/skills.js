
import Skill from "../components/Skill"
import skillsStyle from '../styles/Skills.module.css'

const skills = () => {
  return (
  
<div className={skillsStyle.skills}>

  <div>
    <h1>Programming Languages</h1>  
    <Skill rank={5} nameSkill={'Java'}></Skill>
    <Skill rank={5} nameSkill={'C#'}></Skill>
    <Skill rank={5} nameSkill={'HTML'}></Skill>
    <Skill rank={5} nameSkill={'CSS'}></Skill>
    <Skill rank={5} nameSkill={'SQL'}></Skill>
    <Skill rank={4} nameSkill={'JavaScript'}></Skill>
    <Skill rank={4} nameSkill={'P.H.P'}></Skill>
    <Skill rank={4} nameSkill={'Python'}></Skill>
    <Skill rank={3} nameSkill={'C++'}></Skill>
  </div>

  <div>
    <h1>Technologies</h1>  
    <Skill rank={5} nameSkill={'Git&&Github'}></Skill>
    <Skill rank={5} nameSkill={'Android Studio'}></Skill>
    <Skill rank={5} nameSkill={'Next JS'}></Skill>
    <Skill rank={5} nameSkill={'Unity Game Engine'}></Skill>
  </div>

  <div>
    <h1>Spoken Languages</h1>  
    <Skill rank={5} nameSkill={'Spanish'}></Skill>
    <Skill rank={5} nameSkill={'English'}></Skill>
    <Skill rank={3} nameSkill={'Japanese'}></Skill>
  </div>
    

</div>

  )
}

export default skills