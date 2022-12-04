import Image from "next/image"
import Link from "next/link"
import { Button } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import ProjectPictures from "./ProjectPictures";

const Project = ({name, description,image, githubLink}) => {
  return (
    <>
    <h2>{name}</h2>
    <p>{description}</p>
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