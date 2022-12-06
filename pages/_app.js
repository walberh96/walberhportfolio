import '../styles/globals.css'
import NavResp from '../components/NavResp'

function MyApp({ Component, pageProps }) {
  return(
    <>
      <NavResp></NavResp>
      <Component {...pageProps} />
    </>
    
  ) 
}

export default MyApp
