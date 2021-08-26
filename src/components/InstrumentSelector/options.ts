import { InstrumentName } from "soundfont-player"
import instruments from "soundfont-player/names/musyngkite.json"

type Option = {
  value: InstrumentName
  label: string
}

type OptionsList = Option[]
type InstrumentList = InstrumentName[]

const normalizeList = (list: InstrumentList): OptionsList => {
  // Converts instrument names provided by Soundfont into readable ones,
  // e.g., we don't want a display name like "acoustic_grand_piano."
  return list.map((instrument) => {
    return { value: instrument, label: instrument.replace(/_/gi, " ") }
  })
}

export const options = normalizeList(instruments as InstrumentList)