export default class Animator {
  constructor (shape) {
    this.shape = shape

    this.playing = true
    this.start = false
    this.lastTimestamp = Number.POSITIVE_INFINITY
    this.loop = false
  }

  _enterframe (timestamp) {
    if (this.playing) {
      if (!this.start) {
        this.start = timestamp
      }
      const elapsed = (timestamp - this.lastTimestamp) / 1000
      this.lastTimestamp = timestamp

      if (this.shape.context) {
        this.shape.context.clearRect(0, 0, this.shape.context.canvas.width, this.shape.context.canvas.height)
      }
      this.shape.worldX = this.shape.x
      this.shape.worldY = this.shape.y
      this.shape.worldZ = this.shape.z
      if (elapsed >= 0) {
        this.shape.update(elapsed)
      }

      if (!this.shape.stopped || this.loop) {
        window.requestAnimationFrame(this._enterframe.bind(this))
      }
    }
  }

  play (loop = false) {
    this.loop = loop
    this.playing = true
    this.start = null
    this.lastTimestamp = Number.POSITIVE_INFINITY
    // this.lastTimestamp = window.performance.now()
    window.requestAnimationFrame(this._enterframe.bind(this))
  }

  replay () {
    this.shape.reset()
    this.play()
  }

  pause () {
    this.playing = false
  }
}
