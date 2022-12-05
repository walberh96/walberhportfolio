import style from '../styles/Accomplishment.module.css'
import Link from 'next/link' 
const Accomplishment = ({name,CredURL}) => {
  return (
    
    <div className={style.main}>
        <Link target={'_blank'} href={CredURL} passHref >
        <h3>{name}</h3>
        </Link>
    
    </div>
  )
}

export default Accomplishment