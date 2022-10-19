import React from 'react'
import HeaderOption from './HeaderOption'
import './styles/Header.css'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import IosShareIcon from '@mui/icons-material/IosShare';


function Header() {
  return (
    <div className='header'>
        <img src='https://storage.googleapis.com/headers-agenz/logo-agenz/agenz-logo.webp' alt=''/>
        <div className="header_middle">
          <HeaderOption title="Acheter" Icon={ArrowDropDownIcon}/>
          <HeaderOption title="Louer" />
          <HeaderOption title="Estimer" Icon={ArrowDropDownIcon}/>
          <HeaderOption title="Prix immobiliers" />
          <HeaderOption title="Crédit" Icon={ArrowDropDownIcon}/>
          <HeaderOption title="Agences" />
        </div>
        <div className="header_right">
            <HeaderOption title="Arabe" pic="https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Morocco.svg"/>
            <HeaderOption title="Connexion" AvatarIcon={AccountCircleOutlinedIcon}/>
            <HeaderOption title="Offres pro" Icon={IosShareIcon}/>
        </div>
    </div>
  )
}

export default Header