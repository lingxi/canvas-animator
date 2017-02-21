import Shape from '../base/Shape'

export default class Rect extends Shape {
  constructor (context = null, x = 0, y = 0, width = 100, height = 100, fillStyle = '#000') {
    super(context, x, y)
    this.width = width
    this.height = height
    this.fillStyle = fillStyle
  }

  _draw () {
    this.context.fillRect(-this.width / 2, -this.height / 2, this.width, this.height)
  }
}
