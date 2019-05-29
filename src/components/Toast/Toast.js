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
          this.props.type === 'info' ? <span className={`${toast.info} iconfont`}>&#xe62f;</span> : <span className={`${toast.error} iconfont`}>&#xe6c5;</span>
        }

        {this.props.text}
      </div>
    )
  }
}

export default ToastComponent