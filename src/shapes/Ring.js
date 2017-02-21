import Shape from '../base/Shape'

export default class Ring extends Shape {
  constructor (context = null, x = 0, y = 0, R = 100, r = 50, fillStyle = '#fff') {
    super(context, x, y)
    this.R = R
    this.r = r
    this.fillStyle = fillStyle
  }

  _draw () {
    this.context.beginPath()
    const R = this.R
    const r = this.r

    // this.context.arc(0, 0, R, 0, 2 * Math.PI)
    // this.context.fillStyle = this.fillStyle
    // this.context.fill()

    // this.context.globalAlpha = 1
    // this.context.globalCompositeOperation = 'destination-out'
    // this.context.beginPath()
    // this.context.arc(0, 0, r, 0, 2 * Math.PI)
    // this.context.fill()

    this.context.moveTo(R, 0)
    this.context.arc(0, 0, R, 0, 2 * Math.PI, false)
    this.context.lineTo(r, 0)
    this.context.arc(0, 0, r, 0, 2 * Math.PI, true)
    this.context.lineTo(R, 0)
    this.context.closePath()

    this.context.fillStyle = this.fillStyle
    this.context.fill()
  }
}
