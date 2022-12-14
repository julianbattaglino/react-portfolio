import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from '@chakra-ui/react'


import "./Navbar.css";
import { Link } from 'react-router-dom';

import { HamburgerIcon } from '@chakra-ui/icons'
import Pdf from '../../cv-julian-battaglino.pdf';

const onResumeClick = () => {
  window.open(Pdf);
}





const Navbar = () => {
  return (
    <div className="header">
      <Menu>
        <MenuButton
          className='hamburguer-btn'
          as={IconButton}
          aria-label='Options'
          icon={<HamburgerIcon />}
          variant='outline'
        />
        <MenuList>
          <Link to="/">
          <MenuItem className='menu-item'>
            Home 
          </MenuItem>
          </Link>
          <Link to="/about">
          <MenuItem className='menu-item'>
            About me
          </MenuItem>
          </Link>
          <Link to="/proyectos">
          <MenuItem className='menu-item'>
            Projects
          </MenuItem>
          </Link>
          <a onClick={onResumeClick} target = "_blank">
          <MenuItem className='menu-item'>
            Download resume
          </MenuItem>
          </a>
        </MenuList>

      </Menu>
    </div>
  )
}

export default Navbar;