import Shape from '../base/Shape'

export default class Rect extends Shape {
  constructor (context = null, x = 0, y = 0, w = 100, h = 100, color = '#000') {
    super(context, x, y)
    this.width = w
    this.height = h
    this.color = color
  }

  _draw () {
    this.context.fillStyle = this.color
    this.context.fillRect(-this.actualWidth / 2, -this.actualHeight / 2, this.actualWidth, this.actualHeight)
  }
}
