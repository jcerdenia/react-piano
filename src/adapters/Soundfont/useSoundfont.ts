import { useState, useRef } from "react"
import Soundfont, { InstrumentName, Player } from "soundfont-player"
import { MidiValue } from "../../domain/note"
import { Optional } from "../../domain/types"
import { AudioNodesRegistry, DEFAULT_INSTRUMENT } from "../../domain/sound"

type Settings = { 
  // This describes what our useSoundFont() adapter hook requires as args,
  // i.e., we want an AudioContext constructor.
  AudioContext: AudioContextType
}

interface Adapted {
  // This specifies what kind of object we're going to return from our hook.
  loading: boolean
  current: Optional<InstrumentName>
  load(instrument?: InstrumentName): Promise<void>
  play(note: MidiValue): Promise<void>
  stop(note: MidiValue): Promise<void>
}

export const useSoundfont = ({ AudioContext }: Settings): Adapted => {
  let activeNodes: AudioNodesRegistry = {} // This is an object with AudioNode items,
  // i.e., general interfaces to handling sound operations. Soundfont uses them to store
  // a state of played notes.
  const [current, setCurrent] = useState<Optional<InstrumentName>>(null) // current instrument
  const [loading, setLoading] = useState<boolean>(false)
  const [player, setPlayer] = useState<Optional<Player>>(null)
  const audio = useRef(new AudioContext()) // to access this instance, we use audio.current property
  
  const load = async (instrument: InstrumentName = DEFAULT_INSTRUMENT) => {
    setLoading(true)
    const player = await Soundfont.instrument(audio.current, instrument)
    setLoading(false)
    setCurrent(instrument)
    setPlayer(player)
  }

  const play = async (note: MidiValue) => {
    await resume()
    if (!player) return
    const node = player.play(note.toString())
    activeNodes = { ...activeNodes, [note]: node }
  }

  const stop = async (note: MidiValue) => {
    await resume()
    if (!activeNodes[note]) return
    activeNodes[note]!.stop() // ! is non-null assertion
    activeNodes = { ...activeNodes, [note]: null }
  }

  const resume = async () => {
    return audio.current.state === "suspended"
      ? await audio.current.resume()
      : Promise.resolve()
    // "Suspended" means AudioContext is halting audio hardware access and 
    // reducing CPU/battery usage. To continue we have to resume() it.
  }

  return { loading, current, load, play, stop }
}