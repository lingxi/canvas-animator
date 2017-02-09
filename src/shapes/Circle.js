import Shape from '../base/Shape'

export default class Circle extends Shape {
  constructor (context = null, x = 0, y = 0, z = 0, r = 100, color = '#000', distance = Number.MAX_SAFE_INTEGER) {
    super(context, x, y, z, distance)
    this.r = r
    this.color = color
  }

  draw () {
    this.context.beginPath()
    this.context.arc(this.worldX, this.worldY, this.r * this.finalScale, 0, 2 * Math.PI)
    this.context.fillStyle = this.color
    this.context.fill()
  }
}
