/// <reference types="react-scripts" />

type AudioContextType = typeof AudioContext
// This means our custom type AudioContextType is a type of window.AudioContext.
// We need it because AudioContext is not a type per se, but a constructor function.
// We define it as typeof AudioContext to make TS understand what type we want to declare.

interface Window extends Window {
  // We have to extend the standard window interface to gain access to webkitAudioContext because
  // in some browsers AudioContext is accessible via AudioContext, and some via webkitAudioContext.
  webkitAudioContext: AudioContextType
}

type SoundfontType = typeof Soundfont
// This will be useful when we create an adapter for Soundfont.