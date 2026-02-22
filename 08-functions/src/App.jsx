import React from 'react'

const App = () => {

// function btnClick(){
//   console.log("btn was clicked");
// }

function mouseEnt(){
  console.log("mouse was entered");
  
}


  return (
    <div>
      <button onMouseEnter={mouseEnt} onClick={function(){
        console.log("Clicked ");
        
      }}>Click here !</button>
    </div>
  )
}

export default App
