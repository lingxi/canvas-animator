import Shape from './base/Shape'

export default class Rect extends Shape {
  constructor (context = null, x = 0, y = 0, z = 0, w = 100, h = 100, color = '#000', distance = Number.MAX_SAFE_INTEGER) {
    super(context, x, y, z, distance)
    this.width = w
    this.height = h
    this.color = color
  }

  draw () {
    this.context.save()

    this.context.translate(this.worldX, this.worldY)
    this.context.rotate(this.rotationZ)

    const actualWidth = this.width * this.finalScale
    const actualHeight = this.height * this.finalScale

    this.context.fillStyle = this.color
    this.context.fillRect(-actualWidth / 2, -actualHeight / 2, actualWidth, actualHeight)

    this.context.restore()
  }
}
