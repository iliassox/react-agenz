import React from 'react'
import './styles/HeaderOption.css'
import { Avatar } from '@mui/material';

function HeaderOption({title, Icon, AvatarIcon, pic}) {
  return (
    <div className={`header_option ${!Icon && "blue"}`}>
        {AvatarIcon && <AvatarIcon className="pic"/>}
        {pic && <Avatar src={pic} className="pic"/>}
        <h4>{title}</h4>
        {Icon && <Icon/>}
    </div>
  )
}

export default HeaderOption