import Animator from './animator/Animator'
import Animation from './animation/TweenTest'
// import Cube from './animation/Cube'
// import Squares from './animation/Squares'
// import Circles from './animation/Circles'

const canvas = document.getElementById('js-canvas')
canvas.width = document.body.clientWidth
canvas.height = document.body.clientHeight

const context = canvas.getContext('2d')
const animation = new Animation(context, canvas.width / 2, canvas.height / 2)

const animator = new Animator(animation)
animator.play()
