import Shape from '../base/Shape'

export default class Bitmap extends Shape {
  constructor (context = null, x = 0, y = 0, width = 100, height = 100, image, sourceRect = null) {
    super(context, x, y)
    this.width = width
    this.height = height
    this.image = image
    this.sourceRect = sourceRect // { x, y, width, height }
  }

  _draw () {
    if (this.sourceRect) {
      this.context.drawImage(this.image, this.sourceRect.x, this.sourceRect.y, this.sourceRect.width, this.sourceRect.height, -this.actualWidth / 2, -this.actualHeight / 2, this.actualWidth, this.actualHeight)
    } else {
      this.context.drawImage(this.image, -this.actualWidth / 2, -this.actualHeight / 2, this.actualWidth, this.actualHeight)
    }
  }
}
