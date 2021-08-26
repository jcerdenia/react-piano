import { InstrumentContextProvider } from "../../state/Instrument/Provider"
import { InstrumentSelector } from "../InstrumentSelector"
import { KeyboardWithInstrument } from "../Keyboard"

export const Playground = () => {
  // Here we wrap our components with InstrumentContextProvider
  // to provide access to InstrumentContext.
  return (
    <InstrumentContextProvider>
      <div className="playground">
        <KeyboardWithInstrument />
        <InstrumentSelector />
      </div>
    </InstrumentContextProvider>
  )
}