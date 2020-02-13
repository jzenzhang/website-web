import React from 'react'
import { LineLayer, PolygonLayer, PointLayer, Control, Layers } from "@antv/l7";
import { info,legend,title } from './Control'
const colors = ['rgb(106,33,29)', 'rgb(144,55,53)', 'rgb(181,78,76)', 'rgb(211,104,101)', 'rgb(227,147,131)', 'rgba(255,255,255,0.8)'].reverse();

export default class ChinaLayer extends React.Component {
  constructor(scene, geo, datajson) {
    super()
    this.scene = scene
    this.geo = geo
    this.datajson = datajson
  }
  createLayer = () => {
    const china = new PolygonLayer({
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
    this.scene.addLayer(china);
    this.scene.addLayer(chinaline);
    this.scene.addLayer(pointLayer);
    this.scene.addControl(info())
    this.scene.addControl(legend())
    this.scene.addControl(title())
    china.on('mousemove', e => {
      const info = this.scene.getControlByName('infoControl');
      info.update(e.feature);


    });
  }
}