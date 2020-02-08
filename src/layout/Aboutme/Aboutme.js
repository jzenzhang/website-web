import React from 'react'
import Footer from '../../components/Footer/index'
import Nav from '../../components/Nav/index'
import Aboutme from '../../view/Aboutme/index'
import styles from './Aboutme.module.scss'

function AboutmeLayout() {
  return (
    <div className={styles.wrap}>
      <Nav className='nav'></Nav>
      <Aboutme></Aboutme>
      <Footer></Footer>
    </div>
  )
}
export default AboutmeLayout
