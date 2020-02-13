import { LineLayer, PolygonLayer, PointLayer, Control, Layers } from "@antv/l7";
import './style.scss'
const colors = ['rgb(106,33,29)', 'rgb(144,55,53)', 'rgb(181,78,76)', 'rgb(211,104,101)', 'rgb(227,147,131)', 'rgba(255,255,255,0.8)'].reverse()

export function info() {
  const info = new Control({
    position: 'topright',
    name: 'infoControl'
  })
  info.onAdd = function () {
    this._div = document.createElement('div');
    this.update();
    return this._div;
  }
  info.update = function (feature) {
    if (!feature) {
      return '';
    }
    this._div.innerHTML = `<div class=info_control>
          <h4>${feature.properties.name}</h4>
          <div>
            <p><span>确诊</span>: <i>${feature.properties.confirmedCount || 0}</i></p>
            <p><span>疑似</span>: <i>${feature.properties.suspectedCount || 0}</i></p>
            <p><span>治愈</span>: <i>${feature.properties.curedCount || 0}</i></p>
            <p><span>死亡</span>: <i>${feature.properties.deadCount || 0}</i></p>
          </div>`;
  };
  return info;
}

export function legend() {
  const legend = new Control({
    position: 'bottomleft'
  });
  legend.onAdd = function () {
    var el = document.createElement('div');
    el.className = 'infolegend legend';
    var grades = [0, 1, 10, 100, 500, 1000];
    el.innerHTML += '<h4>图例</h4><span>确诊数</span><br>'
    for (var i = 0; i < grades.length; i++) {
      el.innerHTML += '<i style="background:' + colors[i] + '"></i> ' + grades[i] + (grades[i + 1] ? '–' + grades[i + 1] + '<br>' : '+');
    }
    return el;
  };
  return legend;
}

export function title() {
  const title = new Control({
    position: 'topleft'
  });
  title.onAdd = function () {
    var el = document.createElement('div');
    el.className = 'title';
    el.innerHTML = `<h2>新型冠状病毒肺炎实时跟踪（不含港澳台）</h2>
                    <p>实时数据来源：<a href="https://www.tianapi.com/" target="_block">天行数据</a>可视化工具：<a href="https://antv-l7.gitee.io/zh" target="_block">L7</a></p>    `
    return el;
  };
  return title;
}