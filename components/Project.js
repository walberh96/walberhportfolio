import Image from "next/image"
import Link from "next/link"
import { Button , Typography } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import ProjectPictures from "./ProjectPictures";

const Project = ({name, description,image, githubLink}) => {
  return (
    <>
    <Typography variant="h5" color='#51ff9f' gutterBottom fontStyle={"italic"} fontFamily={"cursive"} textAlign="center" >{name}</Typography>
    <Typography variant="body2" gutterBottom fontStyle={"italic"} fontFamily={"cursive"} textAlign="center" >{description}</Typography>
    <div>
      <ProjectPictures ></ProjectPictures>
    </div>
    <Link target={'_blank'} href={githubLink} passHref>
        <Button endIcon={<GitHubIcon></GitHubIcon>} variant='outlined'></Button>
    </Link>
    
    </>
    
  )
}

export default Project