import React from 'react'
import { inject, observer } from 'mobx-react'

import { Scene } from '@antv/l7';
import { GaodeMap } from '@antv/l7-maps';
import data from '../../asset/data.json'
import chinagData from '../../asset/中国.json'
import ChinaLayer from '../../components/Ncov/ChinaLayer'
import { joinData } from '../../components/Ncov/utils'




@inject('store')
@observer
class About extends React.Component {

  constructor(props) {
    super(props)
    this.ncovModule = this.props.store.ncovModule
  }
  componentWillUnmount() {
    // this.scene.destroy();
  }

  componentDidMount() {
    this.ncovModule.ncovCity({
      key: '390ce4132ec49d902fd780b910b4191e'
    }).then(res => {
      const scene = new Scene({
        id: "map",
        map: new GaodeMap({
          center: [112.3956, 34.9392],
          doubleClickZoom: false,
          pitch: 0,
          zoom: 4,
          rotation: 0,
          style: "blank"
        })
      });
      const chinageo = joinData(chinagData, res)
      new ChinaLayer(scene, chinageo, data).createLayer()
    })
    

    
  }

  render() {
    return (
      <div id="map" style={{
        position: 'absolute',
        top: '50px',
        left: 0,
        right: 0,
        bottom: '80px',
      }} />
    );
  }
}

export default About