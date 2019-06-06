import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from '../view/Home/index'
import Footer from '../components/Footer/index'
import styles from './Home.module.scss'

class HomeLayout extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={styles.app}>
        <Route exact path="/" component={Home} />
        <Footer />
      </div>
    )
  }
}

export default HomeLayout