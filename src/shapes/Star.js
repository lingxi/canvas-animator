import Shape from '../base/Shape'

export default class Star extends Shape {
  constructor (context = null, x = 0, y = 0, z = 0, R = 100, r = 50, angleNum = 5, strokeStyle = '#000', fillStyle = '#fff', lineWidth = 2, distance = Number.MAX_SAFE_INTEGER) {
    super(context, x, y, z, distance)
    this.R = R
    this.r = r
    this.angleNum = angleNum
    this.strokeStyle = strokeStyle
    this.fillStyle = fillStyle
    this.lineWidth = lineWidth
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
    this.context.fillStyle = this.fillStyle
    this.context.fill()
    this.context.lineWidth = this.lineWidth
    this.context.strokeStyle = this.strokeStyle
    this.context.stroke()
  }
}
