import Shape from '../base/Shape'

export default class Bitmap extends Shape {
  constructor (context = null, x = 0, y = 0, w = 100, h = 100, img, srcRect = null) {
    super(context, x, y)
    this.width = w
    this.height = h
    this.image = img
    this.srcRect = srcRect // { x, y, width, height }
  }

  _draw () {
    if (this.srcRect) {
      this.context.drawImage(this.image, this.srcRect.x, this.srcRect.y, this.srcRect.width, this.srcRect.height, -this.actualWidth / 2, -this.actualHeight / 2, this.actualWidth, this.actualHeight)
    } else {
      this.context.drawImage(this.image, -this.actualWidth / 2, -this.actualHeight / 2, this.actualWidth, this.actualHeight)
    }
  }
}
