import { InstrumentName, Player } from "soundfont-player"
import { MidiValue } from "./note"
import { Optional } from "./types"

export const DEFAULT_INSTRUMENT: InstrumentName = "acoustic_grand_piano"

export type AudioNodesRegistry = Record<MidiValue, Optional<Player>>
// AudioNodesRegistry is a Record of MidiValue as key and Player as value.
// Player type is provided by Soundfont; basically an entity that handles
// every musical operation that we want to perform.