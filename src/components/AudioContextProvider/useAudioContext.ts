import { useRef } from "react"
import { Optional } from "../../domain/types"
import { accessContext } from "../../domain/audio"

export const useAudioContext = (): Optional<AudioContextType> => {
  // We use the useRef hook to "remember" the value that our accessContext function is going to return.
  const AudioContext = useRef(accessContext()) 
  return AudioContext.current
}