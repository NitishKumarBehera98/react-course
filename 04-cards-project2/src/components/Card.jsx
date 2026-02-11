import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = (props) => {
  return (
    <div className="card">

        <div>

        <div className="top">
          <img src={props.logo} alt="" />
          <button>save <Bookmark size={20}/></button>
        </div>


        <div className="center">
          <h3>{props.company} <span>{props.date}</span></h3>
          <h2>{props.post}</h2>
          <div className='tag'>
            <h4>Part Time</h4>
            <h4>Senior Level</h4>
          </div>
        </div>
        </div>
        


        <div className="bottom">
            <div>
              <h3>{props.pay}</h3>
              <p>{props.location}</p>
            </div>
            <button>Apply now</button>
        </div>
      </div>
      
  )
}

export default Card
