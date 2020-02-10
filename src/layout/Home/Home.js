import React from 'react'
import Home from '../../view/Home/index'
import Footer from '../../components/Footer/index'
import styles from './Home.module.scss'

function HomeLayout(props) {
  return (
    <div className={styles.app}>
      <Home {...props}></Home>
      <Footer />
    </div>
  )
}

export default HomeLayout