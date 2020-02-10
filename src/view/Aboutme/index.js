import React from 'react'
import { inject, observer } from 'mobx-react'


@inject('store')
@observer
class About extends React.Component {
  constructor(props) {
    super(props)
    this.ncovModule = this.props.store.ncovModule
  }
  componentDidMount() {
    this.ncovModule.ncovCity({
      key: '390ce4132ec49d902fd780b910b4191e'
    })
  }
  render() {
    return (
      <div>

      </div>
    )
  }
}

export default About