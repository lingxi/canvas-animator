import Shape from '../base/Shape'

export default class Pattern extends Shape {
  constructor (context = null, x = 0, y = 0, width = 100, height = 100, image, repeat = 'repeat') {
    super(context, x, y)
    this.width = width
    this.height = height
    this.pattern = context.createPattern(image, repeat)
  }

  _draw () {
    this.context.fillStyle = this.pattern
    this.context.fillRect(-this.width / 2, -this.height / 2, this.width, this.height)
  }
}
