import Shape from '../base/Shape'

export default class Star extends Shape {
  constructor (context = null, x = 0, y = 0, r = 100, angleNum = 5, fillStyle = '#000', strokeStyle = '#000') {
    super(context, x, y)
    this.r = r
    this.angleNum = angleNum
    this.strokeStyle = strokeStyle
    this.fillStyle = fillStyle
  }

  _draw () {
    this.context.miterLimit = this.r
    this.context.beginPath()
    const r = this.r
    const zero = 0
    this.context.moveTo(Math.cos(zero) * r, Math.sin(zero) * r)
    const per = Math.PI * 2 / this.angleNum
    for (let i = 0; i < this.angleNum; i++) {
      const a = zero + i * per + per
      this.context.lineTo(Math.cos(a) * r, Math.sin(a) * r)
    }
    this.context.closePath()
    if (this.fillStyle) {
      this.context.fill()
    }
    if (this.lineWidth && this.strokeStyle) {
      this.context.stroke()
    }
  }
}
