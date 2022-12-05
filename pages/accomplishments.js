import Accomplishment from '../components/Accomplishment'
import style from '../styles/Accomplishment.module.css'
import Image from "next/image"
import iGoogle from '../public/logos/google.svg'
import iSololearn from '../public/logos/sololearn.svg'
import iPlatzi from '../public/logos/platzi.svg'
import iUdemy from '../public/logos/udemy.svg'



const accomplishments = () => {
  return (
    <div className={style.main}>
      <div>
        <h1>Platzi</h1>
        <Image priority={true} src={iPlatzi} alt="Williams Tamayo" width={70} height={70}></Image>
        <Accomplishment name={'Curso Básico de Python'} CredURL= {'../platzi/diploma-python-basico.png'}></Accomplishment>
        <Accomplishment name={'Curso de C# para Videojuegos'} CredURL={'/'}></Accomplishment>
        <Accomplishment name={'Curso de Fundamentos para el Desarrollo de Videojuegos Multijugador Online'} CredURL={'/'}></Accomplishment>
        <Accomplishment name={'Curso de Introducción a la Programación de Videojuegos 3D con Unity'} CredURL={'/'}></Accomplishment>
        <Accomplishment name={'Curso de Programación de Videojuegos 2D con Unity'} CredURL={'/'}></Accomplishment>
        <Accomplishment name={'Curso Práctico de Videojuegos Multijugador Online con Unity y Mirror'} CredURL={'/'}></Accomplishment>
        <Accomplishment name={'Curso Profesional de Diseño de Videojuegos'} CredURL={'/'}></Accomplishment>
        <Accomplishment name={'Curso Profesional de Git y GitHub'} CredURL={'/'}></Accomplishment>
        <Accomplishment name={'Curso Profesional de Python'} CredURL={'/'}></Accomplishment>
      </div>
      <div>
        <h1>Udemy</h1>
        <Image priority={true} src={iUdemy} alt="Williams Tamayo" width={45} height={45} ></Image>
        <Accomplishment name={'Máster en Programación de Videojuegos con Unity® 2021 y C#'} CredURL={'/'}></Accomplishment>
      </div>
      <div>
        <h1>Sololearn</h1>
        <Image priority={true} src={iSololearn} alt="Williams Tamayo" width={50} height={50} ></Image>
        <Accomplishment name={'Java'} CredURL={'/'}></Accomplishment>
        <Accomplishment name={'C#'} CredURL={'/'}></Accomplishment>
      </div>
      <div>
        <h1>Google</h1>
        <Image priority={true} src={iGoogle} alt="Williams Tamayo" width={50} height={50} ></Image>
        <Accomplishment name={'Fundamentals of digital marketing'} CredURL={'/'}></Accomplishment>
        <Accomplishment name={'Cloud Computing'} CredURL={'/'}></Accomplishment>
      </div>
    </div>
  )
}

export default accomplishments