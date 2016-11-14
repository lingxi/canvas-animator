import Shape from './base/Shape'

export default class Ring extends Shape {
  constructor (context = null, x = 0, y = 0, z = 0, R = 100, r = 50, fillStyle = '#fff', distance = Number.MAX_SAFE_INTEGER) {
    super(context, x, y, z, distance)
    this.R = R
    this.r = r
    this.fillStyle = fillStyle
  }

  draw () {
    this.context.save()

    this.context.translate(this.worldX, this.worldY)
    this.context.rotate(this.rotationZ)

    this.context.globalAlpha = this.alpha
    this.context.beginPath()
    const R = this.R * this.finalScale
    const r = this.r * this.finalScale

    this.context.arc(0, 0, R, 0, 2 * Math.PI)
    this.context.fillStyle = this.fillStyle
    this.context.fill()

    this.context.globalAlpha = 1
    this.context.globalCompositeOperation = 'destination-out'
    this.context.beginPath()
    this.context.arc(0, 0, r, 0, 2 * Math.PI)
    this.context.fill()


    this.context.restore()
  }
}
