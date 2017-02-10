import Shape from '../base/Shape'

export default class Bitmap extends Shape {
  constructor (context = null, x = 0, y = 0, z = 0, w = 100, h = 100, img, srcRect = null, repeat = 'repeat', distance = Number.MAX_SAFE_INTEGER) {
    super(context, x, y, z, distance)
    this.width = w
    this.height = h
    this.image = img
    this.srcRect = srcRect // { x, y, width, height }
  }

  draw () {
    this.context.save()

    this.context.translate(this.worldX, this.worldY)
    this.context.rotate(this.rotationZ)

    const actualWidth = this.width * this.finalScale
    const actualHeight = this.height * this.finalScale

    this.context.fillStyle = this.pattern
    this.context.fillRect(-actualWidth / 2, -actualHeight / 2, actualWidth, actualHeight)
    if (this.srcRect) {
      this.context.drawImage(this.image, this.srcRect.x, this.srcRect.y, this.srcRect.width, this.srcRect.height, -actualWidth / 2, -actualHeight / 2, actualWidth, actualHeight)
    } else {
      this.context.drawImage(this.image, -actualWidth / 2, -actualHeight / 2, actualWidth, actualHeight)
    }
    this.context.restore()
  }
}
