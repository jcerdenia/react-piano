import { Playground } from "../Playground"
import { NoAudioMessage } from "../NoAudioMessage"
import { useAudioContext } from "../AudioContextProvider"

// This is our main app screen.

export const Main = () => {
  const AudioContext = useAudioContext() // could be null
  return !!AudioContext ? <Playground /> : <NoAudioMessage />
}