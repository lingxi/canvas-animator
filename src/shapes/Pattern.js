import Shape from '../base/Shape'

export default class Pattern extends Shape {
  constructor (context = null, x = 0, y = 0, w = 100, h = 100, img, repeat = 'repeat') {
    super(context, x, y)
    this.width = w
    this.height = h
    this.pattern = context.createPattern(img, repeat)
  }

  _draw () {
    this.context.fillStyle = this.pattern
    this.context.fillRect(-this.actualWidth / 2, -this.actualHeight / 2, this.actualWidth, this.actualHeight)
  }
}
