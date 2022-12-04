import style from '../styles/Accomplishment.module.css'

const Accomplishment = ({name, icon, credID, CredURL}) => {
  return (
    <div className={style.main}>
    <h3>{name}</h3>
    </div>
  )
}

export default Accomplishment