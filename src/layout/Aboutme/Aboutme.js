import React from 'react'
import Footer from '../../components/Footer/index'
import Nav from '../../components/Nav/index'
import Aboutme from '../../view/Aboutme/index'
import styles from './Aboutme.module.scss'

function AboutmeLayout(props) {
  return (
    <div className={styles.wrap}>
      <Nav {...props} className='nav'></Nav>
      <Aboutme {...props}></Aboutme>
      <Footer></Footer>
    </div>
  )
}
export default AboutmeLayout
