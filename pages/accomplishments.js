import Accomplishment from '../components/Accomplishment'
import style from '../styles/Accomplishment.module.css'
import GoogleIcon from '@mui/icons-material/Google';


const accomplishments = () => {
  return (
    <div className={style.main}>
      <div>
        <h1>Platzi</h1>
        <Accomplishment name={'Curso Básico de Python'} credID={'7aec5837-761d-4ecd-8a11-27e56c37aec9'} CredURL= {'https://platzi.com/p/walberh96/curso/1937-python-basico/diploma/detalle/'}></Accomplishment>
        <Accomplishment name={'Curso de C# para Videojuegos'}></Accomplishment>
        <Accomplishment name={'Curso de Fundamentos para el Desarrollo de Videojuegos Multijugador Online'}></Accomplishment>
        <Accomplishment name={'Curso de Introducción a la Programación de Videojuegos 3D con Unity'}></Accomplishment>
        <Accomplishment name={'Curso de Programación de Videojuegos 2D con Unity'}></Accomplishment>
        <Accomplishment name={'Curso Práctico de Videojuegos Multijugador Online con Unity y Mirror'}></Accomplishment>
        <Accomplishment name={'Curso Profesional de Diseño de Videojuegos'}></Accomplishment>
        <Accomplishment name={'Curso Profesional de Git y GitHub'}></Accomplishment>
        <Accomplishment name={'Curso Profesional de Python'}></Accomplishment>
      </div>
      <div>
        <h1>Udemy</h1>
        <Accomplishment name={'Máster en Programación de Videojuegos con Unity® 2021 y C#'}></Accomplishment>
      </div>
      <div>
        <h1>Sololearn</h1>
        <Accomplishment name={'Java'}></Accomplishment>
        <Accomplishment name={'C#'}></Accomplishment>
      </div>
      <div>
        <h1>Google</h1>
        <GoogleIcon></GoogleIcon>
        <Accomplishment name={'Fundamentals of digital marketing'}></Accomplishment>
        <Accomplishment name={'Cloud Computing'}></Accomplishment>
        <Accomplishment name={'Desarrollo de aplicaciones moviles'}></Accomplishment>
      </div>
    </div>
  )
}

export default accomplishments