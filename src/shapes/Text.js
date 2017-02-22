import Shape from '../base/Shape'

export default class Text extends Shape {
  constructor (context = null, x = 0, y = 0, text = '', maxWidth) {
    super(context, x, y)
    this.text = text
    this.maxWidth = maxWidth
  }

  _draw () {
    this.context.fillText(this.text, 0, 0, this.maxWidth)
  }
}
