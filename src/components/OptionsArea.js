import React from 'react'
import './styles/OptionsArea.css'
import SearchIcon from '@mui/icons-material/Search';
import SearchOption from './SearchOption';

function OptionsArea() {
  return (
    <div className='options_area'>
        <div className="inputbox">
            <input type="text" placeholder='Entrez une ville, un quartier , une adresse'/>
            <SearchIcon className='search_icon'/>
        </div>
        <SearchOption title="À vendre" selected="yes"/>
        <SearchOption title="Prix"/>
        <SearchOption title="Type"/>
        <SearchOption title="Surface"/>            
        <SearchOption title="Chambres"/>
        <SearchOption title="Valider" button="search"/>
    </div>
  )
}

export default OptionsArea