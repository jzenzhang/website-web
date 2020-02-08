import React from 'react'
import styles from './index.module.scss'


function Footer(){
  return (
    <div className={styles.footer}>
      <p><a target="_blank" rel="noopener noreferrer" href="https://gitee.com/jzenzhang">gitee</a></p>
      <p><a href="mailto:jzenzhang@foxmail.com">jzenzhang@foxmail.com</a></p>
      <p><a target="_blank" rel="noopener noreferrer" href='http://www.beian.miit.gov.cn/'>京ICP备19023743号</a></p>
    </div>
  )
}

export default Footer