import React from "react"
import Link from "./layout/atoms/Link"
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome"
import { faHome, faSignOutAlt } from "@fortawesome/free-solid-svg-icons"
import Navbar from "./layout/molecules/Navbar"
import { useSelector } from "react-redux"
import authService from "./auth/authService"

const Menu = () => {
  const auth = useSelector(state => state.auth)
  const { isAuthenticated } = auth
  const { logout } = authService

  return (
    <Navbar show={isAuthenticated}>
      <Link onClick={logout}>
        <Icon to={"/login"} icon={faSignOutAlt} size={"lg"} />
      </Link>
      <Link to={"/"}>
        <Icon icon={faHome} size={"lg"} />
      </Link>
    </Navbar>
  )
}

Menu.propTypes = {}

export default Menu
