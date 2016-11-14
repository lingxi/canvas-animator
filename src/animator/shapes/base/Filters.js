export const sinInOut = (progress) => {
  const tweenedProgress = -(Math.cos(Math.PI * progress) - 1) / 2
  return tweenedProgress
}
export const back = (progress) => {
  if (progress < 0.5) {
    progress /= 0.5
  } else {
    progress = 1 - (progress - 0.5) / 0.5
  }
  return progress
}
