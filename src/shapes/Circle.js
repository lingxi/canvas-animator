import Shape from '../base/Shape'

export default class Circle extends Shape {
  constructor (context = null, x = 0, y = 0, r = 100, fillStyle = '#000') {
    super(context, x, y)
    this.r = r
    this.fillStyle = fillStyle
  }

  _draw () {
    this.context.beginPath()
    this.context.arc(0, 0, this.r, 0, 2 * Math.PI)
    this.context.fill()
  }
}
