import React, { PureComponent } from 'react'
import toast from './Toast.module.scss'
class ToastComponent extends PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className={toast.toast}>
        {
          this.props.type === 'info' ? <span className={`${toast.info} iconfont icon-success_circle`}></span> : <span className={`${toast.error} iconfont icon-shibaibaocuo`}></span>
        }

        {this.props.text}
      </div>
    )
  }
}

export default ToastComponent