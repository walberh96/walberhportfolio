import { Box,Button } from "@mui/material";
import Link from "next/link";

const pages = ['Profile', 'Jobs', 'Skills', 'Badges'];

const boxDefault={
  height:50,
  padding: 2,
  minWidth:600,
  m:1
}

const NavResp = () => {
  return (
    <div>
      <Box position={"sticky"}
        m={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={boxDefault}

      >
        <Link href={'/'} passHref>
          <Button variant="outlined" color="primary" sx={{ height: 40 }}>
            {pages[0]}
          </Button>
        </Link>

        <Link href={'/projects'} passHref>
          <Button variant="outlined" color="primary" sx={{ height: 40 }}>
            {pages[1]}
          </Button>
        </Link>

        <Link href={'/skills'} passHref>
          <Button variant="outlined" color="primary" sx={{ height: 40 }}>
            {pages[2]}
          </Button>
        </Link>

        <Link href={'/accomplishments'} passHref>
          <Button variant="outlined" color="primary" sx={{ height: 40 }}>
            {pages[3]}
          </Button>
        </Link>
</Box>

    </div>
  )
}

export default NavResp