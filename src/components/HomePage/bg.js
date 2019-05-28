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
    var content = canvas.getContext('2d'),
      initRoundPopulation = 15,
      round = [],
      pause = [],
      width = document.body.clientWidth,
      height = document.body.clientHeight,
      pagex = 0,
      pagey = 0

    canvas.onclick = function (e) {
      pagex = e.pageX
      pagey = e.pageY

      round.push(initRoundPopulation++)
      round[round.length - 1] = new Round_item(round.length - 1, pagex, pagey);
      console.log(round.length - 1);

      round[round.length - 1].draw();

    }

    function Round_item(index, x, y) {
      this.index = index;
      this.x = Math.floor(x);
      this.y = Math.floor(y);
      this.r = 3;
      this.pauseStatus = false
      var alpha = (Math.floor(Math.random() * 10) + 1) / 10 / 2;
      this.color = "rgba(255,255,255," + alpha + ")";
    }

    Round_item.prototype.draw = function () {
      content.fillStyle = this.color;
      content.shadowBlur = this.r * 2;
      content.beginPath();
      content.arc(this.x, this.y, this.r + 100, 0, 2 * Math.PI, false);
      content.closePath();
      content.fill();
    }

    Round_item.prototype.pause = function () {
      this.y = this.y
      this.draw()
    }

    Round_item.prototype.move = function () {
      this.y -= 0.15;
      if (this.y <= -100) {
        this.x = Math.random() * width
        this.y = height + 100;
      }
      this.draw();
    }

    function animate() {
      content.clearRect(0, 0, width, height)
      for (var i in round) {
        round[i].move();
      }
      // animate()
      requestAnimationFrame(animate)
    }

    function init() {
      for (var i = 0; i < initRoundPopulation; i++) {
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