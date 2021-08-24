import { Optional } from "./types"

// Check if browser supports AudioContext.
export const accessContext = (): Optional<AudioContextType> => {
  return window.AudioContext || window.webkitAudioContext || null
}