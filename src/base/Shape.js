export default class Shape {
  constructor (context = null, x = 0, y = 0, z = 0, distance = Number.MAX_SAFE_INTEGER) {
    this.x = x
    this.y = y
    this.z = z

    this.context = context
    this.distance = distance

    this.worldX = this.x
    this.worldY = this.y
    this.worldZ = this.z

    this.rotationX = 0
    this.rotationY = 0
    this.rotationZ = 0
    this.rotationVelX = 0
    this.rotationVelY = 0
    this.rotationVelZ = 0

    this.scale = 1
    this.zScale = 1
    this.finalScale = 1

    this.alpha = 1

    this.loop = false
    this.period = false

    this.autoRemoveWhenStopped = true

    this.reset()
    this.map()
  }

  reset () {
    this.stopped = false
    this.total = 0
    this.progress = 0
  }

  // 3D => 2D
  map () {
    this.zScale = (this.worldZ + this.distance) / this.distance
    this.worldX *= this.zScale
    this.worldY *= this.zScale
  }

  update (elapsed) {
    if (!this.stopped) {
      if (this.period) {
        this.progress = this.total / this.period
        // console.log(elapsed, this.progress, this.total, this.period)
        if (this.progress >= 1) {
          if (!this.loop) {
            this.stopped = true
            this.total = this.period
            this.progress = 1
          } else {
            this.total = 0
            this.progress = 0
          }
        }
      }

      this.rotationX += this.rotationVelX * elapsed
      this.rotationY += this.rotationVelY * elapsed
      this.rotationZ += this.rotationVelZ * elapsed
      this.finalScale = this.zScale * this.scale

      this.total += elapsed
    }
  }
}
