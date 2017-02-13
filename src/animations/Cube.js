import Circle from '../shapes/Circle'
import ShapeContainer from '../base/ShapeContainer'

export default class Cube extends ShapeContainer {
  constructor (context = null, x = 0, y = 0, z = 0, distance = Number.MAX_SAFE_INTEGER) {
    super(context, x, y, z, distance)
    const l = 20
    const r = 3
    this.circles = [
      new Circle(this.context, l, l, l, r, '#00b0df'), // 0
      new Circle(this.context, l, l, -l, r, '#00e7c3'), // 1
      new Circle(this.context, l, -l, l, r, '#5c6b8f'), // 2
      new Circle(this.context, l, -l, -l, r, '#9da6e2'), // 3
      new Circle(this.context, -l, l, l, r, '#79dee7'), // 4
      new Circle(this.context, -l, l, -l, r, '#ffdb7d'), // 5
      new Circle(this.context, -l, -l, l, r, '#ff88eb'), // 6
      new Circle(this.context, -l, -l, -l, r, '#c4ebad') // 7
    ]
    for (let i = 0; i < this.circles.length; i++) {
      const circle = this.circles[i]
      this.add(circle)
    }
    this.lines = [
      { from: 0, to: 1, color: '#00b0df' },
      { from: 0, to: 2, color: '#00b0df' },
      { from: 0, to: 4, color: '#79dee7' },

      { from: 1, to: 3, color: '#00e7c3' },
      { from: 1, to: 5, color: '#00e7c3' },

      { from: 2, to: 3, color: '#5c6b8f' },
      { from: 2, to: 6, color: '#5c6b8f' },

      { from: 3, to: 7, color: '#9da6e2' },

      { from: 4, to: 5, color: '#79dee7' },
      { from: 4, to: 6, color: '#ff88eb' },

      { from: 5, to: 7, color: '#ffdb7d' },
      { from: 6, to: 7, color: '#c4ebad' }

      // 对角
      // { from: 0, to: 7, color: '#c4ebad' },
      // { from: 1, to: 6, color: '#ff88eb' },
      // { from: 2, to: 5, color: '#ffdb7d' },
      // { from: 3, to: 4, color: '#9da6e2' }
    ]
    const rate = Math.random() * 0.2 + 0.1
    this.rotationVelX = Math.PI * (Math.random() < 0.5 ? 1 : -1) * rate
    this.rotationVelY = Math.PI * (Math.random() < 0.5 ? 1 : -1) * rate * 2
    this.rotationVelZ = Math.PI * (Math.random() < 0.5 ? 1 : -1) * rate * 3
  }

  _drawAllLines () {
    for (let i = 0; i < this.circles.length; i++) {
      const fromCircle = this.circles[i]
      for (let j = i + 1; j < this.circles.length; j++) {
        const toCircle = this.circles[j]
        this.context.beginPath()
        this.context.moveTo(fromCircle.worldX, fromCircle.worldY)
        this.context.lineTo(toCircle.worldX, toCircle.worldY)
        this.context.strokeStyle = fromCircle.color
        this.context.stroke()
      }
    }
  }

  _drawLines () {
    for (let i = 0; i < this.lines.length; i++) {
      const line = this.lines[i]
      const fromCircle = this.circles[line.from]
      const toCircle = this.circles[line.to]
      this.context.beginPath()
      this.context.moveTo(fromCircle.worldX, fromCircle.worldY)
      this.context.lineTo(toCircle.worldX, toCircle.worldY)
      this.context.strokeStyle = line.color
      this.context.stroke()
    }
  }

  draw () {
    this._drawLines()

    // draw circles
    super.draw()
  }
}
