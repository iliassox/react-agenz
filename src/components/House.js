import React from 'react'
import './styles/House.css'
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import FavoriteIcon from '@mui/icons-material/Favorite';

function House({days, price, image, type, chambres, surface, localisation, annonceur, favorite}) {
  return (
    <div className='house'>
        <div className="house_top">
            <div className="spacing">
                <p>{days} days on agenz</p>
            </div>
            {favorite ? <FavoriteIcon/> : <FavoriteTwoToneIcon/>}
        </div>
        <img src={image} className="image" alt='' />
        <div className="house_bot">
            <h4>{price}</h4>
            <h5>{type} à vendre | {chambres} chambres | {surface}m² </h5>
            <h6>{localisation}</h6>
            <p>ANNONCE PAR : {annonceur}</p>
        </div>
    </div>
  )
}

export default House