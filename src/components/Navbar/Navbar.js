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
          as={IconButton}
          aria-label='Options'
          icon={<HamburgerIcon />}
          variant='outline'
        />
        <MenuList>
          <Link to="/">
          <MenuItem className='menu-item'>
            Inicio 
          </MenuItem>
          </Link>
          <MenuItem className='menu-item'>
            Sobre Mi
          </MenuItem>
          <MenuItem className='menu-item'>
            Proyectos
          </MenuItem>
          <a onClick={onResumeClick} target = "_blank">
          <MenuItem className='menu-item'>
            CV
          </MenuItem>
          </a>
        </MenuList>

      </Menu>
    </div>
  )
}

export default Navbar;