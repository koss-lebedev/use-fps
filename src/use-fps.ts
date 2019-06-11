import { useEffect, useRef, useReducer } from 'react'

type Action = ReturnType<typeof increment | typeof reset>
type State = {
  frames: number
  fps: number
  prevTime: number
}

const RESET = 'RESET' as const
const INCREMENT = 'INCREMENT' as const

const increment = () => ({ type: INCREMENT })
const reset = (fps: number, time: number) => ({
  type: RESET,
  fps,
  time,
})

const initialState: State = {
  frames: 0,
  fps: 0,
  prevTime: new Date().getTime(),
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, frames: state.frames + 1 }
    case RESET:
      return { frames: 0, fps: action.fps, prevTime: action.time }
    default:
      return state
  }
}

const useFPS = () => {
  const animationFrameHandle = useRef(-1)
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleAnimationFrame = () => {
    const currentTime = new Date().getTime()

    if (currentTime > state.prevTime + 1000) {
      const fpsValue = Math.round(
        (state.frames * 1000) / (currentTime - state.prevTime)
      )
      dispatch(reset(fpsValue, currentTime))
    } else {
      dispatch(increment())
    }

    animationFrameHandle.current = window.requestAnimationFrame(
      handleAnimationFrame
    )
  }

  useEffect(() => {
    animationFrameHandle.current = window.requestAnimationFrame(
      handleAnimationFrame
    )

    return () => {
      window.cancelAnimationFrame(animationFrameHandle.current)
    }
  }, [state.frames])

  return state.fps
}

export default useFPS
