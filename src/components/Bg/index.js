import React, { PureComponent } from 'react'
import './bg.scss'

class Bg extends PureComponent {
  constructor() {
    super()
    this.width = document.body.clientWidth
    this.height = document.body.clientHeight
  }
  creating = () => {
    const canvas = this.bg

    // 实例化参数
    var content = canvas.getContext('2d'),
      number = 15,
      round = [],
      X = 0,
      Y = 0

    const width = document.body.clientWidth, height = document.body.clientHeight

    // 点击事件
    canvas.onclick = function (e) {
      X = e.pageX
      Y = e.pageY

      round.push(number++)
      round[round.length - 1] = new Round_item(round.length - 1, X, Y);
      round[round.length - 1].draw();
    }

    // 单个圆的构造函数
    function Round_item(index, x, y) {
      this.index = index;
      this.x = Math.floor(x);
      this.y = Math.floor(y);
      this.pauseStatus = false
      var alpha = (Math.floor(Math.random() * 10) + 1) / 10 / 2;
      this.color = "rgba(255,255,255," + alpha + ")";
    }

    // 渲染函数
    Round_item.prototype.draw = function () {
      content.fillStyle = this.color;
      content.shadowBlur = this.r * 2;
      content.beginPath();
      content.arc(this.x, this.y, 100, 0, 2 * Math.PI, false);
      content.closePath();
      content.fill();
    }

    // 移动函数

    Round_item.prototype.move = function () {
      this.y -= 0.15;
      if (this.y <= -100) {
        this.x = Math.random() * width
        this.y = height + 100;
      }
      this.draw();
    }

    // 渲染

    function animate() {
      content.clearRect(0, 0, width, height)
      for (var i in round) {
        round[i].move();
      }
      requestAnimationFrame(animate)
    }

    // 初始化
    function init() {
      for (var i = 0; i < number; i++) {
        round[i] = new Round_item(i, Math.random() * width, Math.random() * height);
        round[i].draw(i);
      }
      animate()
    }
    init()
  }

  componentDidMount() {
    this.creating()
  }

  render() {
    return (
      <canvas width={this.width} height={this.height} ref={(ref) => this.bg = ref} id="bg"></canvas>
    )
  }
}

export default Bg