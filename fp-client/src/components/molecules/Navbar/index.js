import React, { useState } from "react"
import * as PropTypes from "prop-types"
import styles from "./styles.module.scss"
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome"
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons"

const Navbar = props => {
  const { children } = props
  const [isOpen, setIsOpen] = useState(false)

  const icon = isOpen ? faAngleDown : faAngleUp

  const onClickHandler = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className={styles.navbar}>
      <button className={styles["menu-button"]} onClick={onClickHandler}>
        <Icon size="lg" icon={icon} />
      </button>
      {isOpen && <div className={styles.content}>{children}</div>}
    </nav>
  )
}

Navbar.propTypes = {
  children: PropTypes.node
}

export default Navbar
