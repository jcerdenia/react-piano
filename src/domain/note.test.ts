import { notes, generateNotes, fromMidi } from "./note"

describe("Notes", () => {
  it("should contain 24 notes", () => {
    expect(notes).toHaveLength(24)
  })

  describe("Note generator", () => {
    it("should generate 24 notes", () => {
      expect(generateNotes()).toEqual(notes)
    })
  })

  describe("MIDI to Note converter", () => {
    it("should return a note object", () => {
      const note = fromMidi(60)
      expect(note).toHaveProperty("octave")
      expect(note).toHaveProperty("pitch")
      expect(note).toHaveProperty("index")
      expect(note).toHaveProperty("type")
      expect(note).toHaveProperty("midi")
    })
  })
})