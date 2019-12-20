import React, { Component } from 'react'
import styles from './index.module.scss'

class Footer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className={styles.footer}>
        <p><a target="_blank" href="https://gitee.com/jzenzhang">gitee</a></p>
        <p><a href="mailto:jzenzhang@foxmail.com">jzenzhang@foxmail.com</a></p>
        <p><a target="_blank" href='http://www.beian.miit.gov.cn/'>京ICP备19023743号</a></p>
      </div>
    )
  }
}

export default Footer