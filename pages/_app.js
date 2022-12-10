import '../styles/globals.css'
import NavResp from '../components/NavResp'
import { Box } from '@mui/material'
import { height, width } from '@mui/system'

function MyApp({ Component, pageProps }) {
  return(
    <>
      <NavResp></NavResp>
      <Box justifyContent="center" alignItems="center" display={"flex"}  m={1} sx={{ flexDirection: 'column' , marginInline:'auto' }} width={600}>
      <Component {...pageProps} />
      </Box>
    </>
    
  ) 
}

export default MyApp
