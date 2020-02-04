import React from 'react'
import styles from '../styles/components/drag.module.scss'

export function drag(Components, props) {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        left: false,
        right: false
      }
    }

    drag(e) {
      e.target.style.opacity = 0.4
    }
    end(e) {
      console.log(e.target.getBoundingClientRect());

    }
    down(e) {
      console.info(e);

      e.stopPropagation();
      document.onmousemove = (event) => {
        this.ref.style.left = event.clientX - 20 + 'px'
        this.ref.style.top = event.clientY - 20 + 'px'
      }
    }
    up(e) {
      e.stopPropagation();
      if (e.clientX >= document.body.clientWidth / 2) {
        this.ref.style.right = 0
        this.ref.style.left = null
        this.setState({
          right: true,
          left: false
        })
      } else {
        this.ref.style.left = 0
        this.setState({
          left: true,
          right: false
        })
      }
      document.onmousemove = null;
    }
    render() {
      return (
        <div  className={styles.drag} style={props}>
          <Components props={props} />
        </div>
      )
    }
  }
}