import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
class About extends PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <div>qwdada</div>
        <Link to="/about-me/a">点击</Link>
      </div>
    )
  }
}
export default About