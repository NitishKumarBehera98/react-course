import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = (props) => {
  // console.log(props);
  
  return (
    
      <div className="card">

        <div>

        <div className="top">
          <img src="https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-512.png" alt="" />
          <button>save <Bookmark size={20}/></button>
        </div>


        <div className="center">
          <h3>amazon <span>5 days ago</span></h3>
          <h2>Senoor UI/UX Designer</h2>
          <div className='tag'>
            <h4>Part Time</h4>
            <h4>Senior Level</h4>
          </div>
        </div>
        </div>
        


        <div className="bottom">
            <div>
              <h3>$120/hr</h3>
              <p>Mumbai,India</p>
            </div>
            <button>Apply now</button>
        </div>
      </div>
  )
}

export default Card
