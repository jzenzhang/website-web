import React from 'react'
import { LineLayer, PolygonLayer, PointLayer, Control, Scene } from "@antv/l7";
import { Mapbox } from '@antv/l7-maps';
import CityLayer from './CityLayer'
import { info, legend, title } from './Control'
const colors = ['rgb(106,33,29)', 'rgb(144,55,53)', 'rgb(181,78,76)', 'rgb(211,104,101)', 'rgb(227,147,131)', 'rgba(255,255,255,0.8)'].reverse();

export default class ChinaLayer extends React.Component {
  constructor(scene, geo, datajson) {
    super()
    this.scene = scene
    this.geo = geo
    this.datajson = datajson
    this.china = null
  }
  createLayer = () => {
    this.china = new PolygonLayer({
      autoFit: true
    })
      .source(this.geo)
      .shape("fill")
      .color("confirmedCount", (d) => {
        return d > 1000 ? colors[5] :
          d > 499 ? colors[4] :
            d > 100 ? colors[3] :
              d > 10 ? colors[2] :
                d > 0 ? colors[1] :
                  colors[0];
      })
      .style({
        opacity: 1
      });
    const chinaline = new LineLayer({})
      .source(this.geo)
      .size(0.5)
      .shape("line")
      .color("#222")
      .style({
        opacity: 1
      });
    const pointLayer = new PointLayer({})
      .source(this.datajson, {
        parser: {
          type: "json",
          coordinates: "center"
        }
      })
      .shape("name", "text")
      .size(14)
      .color("#fff")
      .style({
        stroke: "#ffffff",
        strokeWidth: 1
      });
    this.scene.addLayer(this.china);
    this.scene.addLayer(chinaline);
    this.scene.addLayer(pointLayer);
    this.scene.addControl(info())
    this.scene.addControl(legend())
    this.scene.addControl(title())
    this.china.on('mousemove', e => {
      const info = this.scene.getControlByName('infoControl');
      info.update(e.feature);
    });
    this.china.on('dblclick', (e) => {
      const { adcode, cities = [] } = e.feature.properties;
      this.updateLayer(adcode, cities)
    })
  }
  async updateLayer(adcode, citydata) {
    const cityGeo = await (await fetch(`https://gw.alipayobjects.com/os/antvdemo/assets/json/${adcode}.json`)).json();
    const dataPoint = cityGeo.features.map(fe => {
      return {
        name: fe.properties.name,
        center: fe.properties.centroid || fe.properties.center
      }
    })
    var obj = {}
    citydata.forEach(item => {
      obj[item.cityName] = item
    })
    cityGeo.features = cityGeo.features.map(fe => {
      const name = fe.properties.name.replace('市', '');
      if (obj[name]) {
        return {
          ...fe,
          properties: {
            ...fe.properties,
            confirmedCount: obj[name].confirmedCount,
            suspectedCount: obj[name].suspectedCount,
            curedCount: obj[name].curedCount,
            deadCount: obj[name].deadCount,
          }
        }
      } else {
        return {
          ...fe,
          properties: {
            ...fe.properties,
            confirmedCount: 0,
            suspectedCount: 0,
            curedCount: 0,
            deadCount: 0,
          }
        }
      }
    })
    const scene = new Scene({
      id: "map",
      map: new Mapbox({
        center: [112.3956, 34.9392],
        doubleClickZoom: false,
        pitch: 0,
        zoom: 4,
        rotation: 0,
        style: "blank"
      })
    });
    this.scene.removeAllLayer()
    this.scene.destroy()
    setTimeout(()=> {
      new CityLayer(scene, cityGeo, dataPoint, this.geo, this.datajson).createLayer();
    }, 0)
  }
}