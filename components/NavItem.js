import Link from "next/link"
const NavItem = ({name,dest }) => {

  return (
    <>
        <li>
            <Link href={dest}>{name}</Link>
        </li>
    </>
  )
  }
export default NavItem