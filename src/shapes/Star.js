import Shape from '../base/Shape'

export default class Star extends Shape {
  constructor (context = null, x = 0, y = 0, R = 100, r = 50, angleNum = 5, fillStyle = '#000', strokeStyle = '#000') {
    super(context, x, y)
    this.R = R
    this.r = r
    this.angleNum = angleNum
    this.strokeStyle = strokeStyle
    this.fillStyle = fillStyle
  }

  _draw () {
    this.context.miterLimit = this.R
    this.context.beginPath()
    const R = this.R
    const r = this.r
    const zero = 0
    this.context.moveTo(Math.cos(zero) * R, Math.sin(zero) * R)
    const per = Math.PI * 2 / (this.angleNum * 2)
    for (let i = 0; i < this.angleNum; i++) {
      let a = zero + i * 2 * per + per
      this.context.lineTo(Math.cos(a) * r, Math.sin(a) * r)
      a += per
      this.context.lineTo(Math.cos(a) * R, Math.sin(a) * R)
    }
    this.context.closePath()
    if (this.fillStyle) {
      this.context.fill()
    }
    if (this.lineWidth) {
      this.context.stroke()
    }
  }
}
