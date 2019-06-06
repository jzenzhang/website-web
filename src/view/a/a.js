import React, { Component } from 'react'

class A extends Component {
  render() {
    console.log(this.props);

    return (
      <div>a</div>
    )
  }
}

export default A