import Animator from './animator/Animator'
import Animation from './animation/Bang'
// import Animation from './animation/TweenTest'
// import Animation from './animation/Cube'
// import Animation from './animation/Squares'
// import Animation from './animation/Circles'

const canvas = document.getElementById('js-canvas')
canvas.width = document.body.clientWidth
canvas.height = document.body.clientHeight

const context = canvas.getContext('2d')
const animation = new Animation(context, canvas.width / 2, canvas.height / 2)

const animator = new Animator(animation)
animator.play()

document.body.onclick = event => {
  animation.x = event.clientX
  animation.y = event.clientY
  animation.reset()
  animator.play()
}
