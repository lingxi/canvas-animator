import animator from '../src/index.js'
import Animation from '../src/animations/Bangs'
// import Animation from '../src/animations/ImageTest'

const canvas = document.getElementById('js-canvas')
canvas.width = document.body.clientWidth
canvas.height = document.body.clientHeight
canvas.style.background = '#000'

const context = canvas.getContext('2d')
const animation = new Animation(context, canvas.width / 2, canvas.height / 2)
// const animation = new Animation(context, canvas.width / 2, canvas.height / 2, 0, document.getElementById('test-img'))

const myAnimator = new animator.Animator(animation)
myAnimator.play()

// document.body.onclick = event => {
//   animation.x = event.clientX
//   animation.y = event.clientY
//   animation.reset()
//   myAnimator.play()
// }
