import React from 'react'
import House from './House'
import './styles/Houses.css'

function Houses() {
  return (
    <div className='houses'>
      <h4>Immobilier et maisons à vendre partout au Maroc</h4>
      <div className="listing_options">
        <div className="agents">
          <span className='agent_number'>500</span>
          Agent listings
        </div>
        <div className="filter">
          <h5>
            Filtre par 
          </h5>
          <select>
            <option value="descending"> Date - Du plus récent au plus ancien</option>
            <option value="ascending"> Date - Du plus ancien au plus récent</option>
          </select>
        </div>
      </div>
      <div className="houses_list">
        <House days="3" price="1,110,122 MAD" image="https://www.propertieslamangaclub.com/perch/resources/gallery/11lasorquideasaticointerior02-w1600.jpg" type="Maison" chambres="3" surface="230" localisation="Marrakech, Ennakhil (Palmeraie)" annonceur="Marrakech conseils Invest" favorite="yes" />
        <House days="5" price="1,000,122 MAD" image="https://www.propertieslamangaclub.com/perch/resources/gallery/03lasorquideasconjunto02-1-w1600.jpg" type="Appartement" chambres="2" surface="140" localisation="Marrakech, Guéliz" annonceur="Marrakech conseils Invest" />
        <House days="3" price="1,000,122 MAD" image="https://www.propertieslamangaclub.com/perch/resources/gallery/08lasorquideasterrazaatico01-w1600.jpg" type="Maison" chambres="5" surface="300" localisation="Marrakech, Guéliz" annonceur="Marrakech conseils Invest" />
        <House days="5" price="1,000,122 MAD" image="https://media.lesechos.com/api/v1/images/view/61b728368fe56f2a11726725/1280x720-webp/070519160949-web-tete.webp" type="Maison" chambres="4" surface="270" localisation="Marrakech, Guéliz" annonceur="Marrakech conseils Invest" />
      </div>
    </div>
  )
}

export default Houses