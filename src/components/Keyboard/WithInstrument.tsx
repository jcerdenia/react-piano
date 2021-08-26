import { useEffect } from "react"
import { useInstrument } from "../../state/Instrument/Context"
import { useAudioContext } from "../AudioContextProvider"
import { useSoundfont } from "../../adapters/Soundfont/useSoundfont"
import { Keyboard } from "./Keyboard"

export const KeyboardWithInstrument = () => {
  const AudioContext = useAudioContext()!
  const { instrument } = useInstrument()
  const { loading, current, play, stop, load } = useSoundfont({ AudioContext })

  useEffect(() => {
    // This useEffect hook replaces useMount(load) which was here earlier since
    // we want to dynamically change our instrument's sound set, rather than
    // loading it once when mounted.
    if (!loading && instrument !== current) load(instrument)
  }, [load, loading, current, instrument])

  return <Keyboard loading={loading} play={play} stop={stop} />
}