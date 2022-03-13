import React from 'react'
import styles from "./Navbar.module.css"
const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <div className={styles.image}>
           <img src="https://media.istockphoto.com/photos/movie-projector-on-dark-background-picture-id1007557230?k=20&m=1007557230&s=612x612&w=0&h=hWEw8rA6ASt-Z18pNvUKk2GtQZVLj1GHv3HFlNB4p6U=" alt=""/>
      </div> 
      <div className={styles.width}>
          <h1 className={styles.h1}>Best theater in your city</h1>
      </div>
      <div>
          <input className={styles.inp} placeholder="Search Movie" type="text" />
          <span className={styles.span}>Search</span>
      </div>
      <div className={styles.image1}> 
          <img src="https://i.pinimg.com/originals/97/8e/33/978e334ee492dda7a96b7dcee8b468f2.jpg" alt=""/>
      </div>
      <div>
          <button className={styles.btn}>Login</button>
      </div>
    </div>
  )
}

export default Navbar
