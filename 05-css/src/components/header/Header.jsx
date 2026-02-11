// import React from 'react'
// import styles from'./Header.module.css'

// const Header = () => {
//   return (
//     <div className='header'>
//         <h3>sheriyansh</h3>
//         <button className='btn1'>Hello</button>     
//     </div>
//   )
// }

// export default Header


import React from 'react'
import styles from'./Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
        <h3>sheriyansh</h3>
        <button className={styles.btn}>Hello</button>     
    </div>
  )
}

export default Header
