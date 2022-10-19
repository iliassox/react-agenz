import React from 'react'
import './styles/SearchOption.css'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function SearchOption({title, selected, button}) {
  return (
    <div className={`search_option ${button && "--search"} ${selected && "--selected"}`}>
        {selected && <FiberManualRecordIcon className='dot'/>}
        <h5>{title}</h5>
    </div>
  )
}

export default SearchOption