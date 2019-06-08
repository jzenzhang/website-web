import React, { Component } from 'react'
import styles from './index.module.scss'

class Footer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className={styles.footer}>
        <p><a href="mailto:jzenzhang@163.com">jzenzhang@163.com</a></p>
        <p><a target="_block" href='http://www.beian.miit.gov.cn/'>京ICP备19023743号</a></p>
      </div>
    )
  }
}

export default Footer