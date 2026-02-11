import React from 'react'
import {Bookmark} from 'lucide-react'
import Card from './components/Card'
import User from './components/User'

const App = () => {

  const arr = [10,20,30,40,50]
  return (
    <div className='parent'>

      
      {/* <Card /> 

       <User  name = {arr}/>
      <User  name = 'Aman'/>  */}

      {arr.map(function(elem){
        return <Card />
               
      })}

      <User  name = {arr}/>
      <User  name = 'Aman'/>

    </div>
  )
}

export default App
