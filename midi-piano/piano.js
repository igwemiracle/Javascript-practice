const audioContext = new AudioContext()

const NOTE_DETAILS = [
    { note: "C", key: "Z", frequency: 261.626, active: false },
    { note: "Db", key: "S", frequency: 277.183, active: false },
    { note: "D", key: "X", frequency: 293.665, active: false },
    { note: "Eb", key: "D", frequency: 311.127, active: false },
    { note: "E", key: "C", frequency: 329.628, active: false },
    { note: "F", key: "V", frequency: 349.228, active: false },
    { note: "Gb", key: "G", frequency: 369.994, active: false },
    { note: "G", key: "B", frequency: 391.995, active: false },
    { note: "Ab", key: "H", frequency: 415.305, active: false },
    { note: "A", key: "N", frequency: 440, active: false },
    { note: "Bb", key: "J", frequency: 466.164, active: false },
    { note: "B", key: "M", frequency: 493.883, active: false },
]


/**
 * When a key is pressed on the keyboard, we aim to play the associated musical
 * node.Holding down the key should continuously play the node, stopping only
 *  when the key is released.
 */
document.addEventListener('keydown', e => {
    if (e.repeat) return //It prevents multiple events from occurring when the key is pressed.
    const keyboardKey = e.code
    const noteDetail = getNoteDetail(keyboardKey)

    if (noteDetail == null) return
    noteDetail.active = true
    playNotes()
})

// How to figure out a way to stop playing the note when the key is released
document.addEventListener("keyup", e => {
    const keyboardKey = e.code
    const noteDetail = getNoteDetail(keyboardKey)

    if (noteDetail == null) return

    noteDetail.active = false
    playNotes()
})

//This gets the specific musical note played based on the pressed key.
function getNoteDetail(keyboardKey) {
    return NOTE_DETAILS.find(n => `Key${n.key}` === keyboardKey)
}

function playNotes() {
    NOTE_DETAILS.forEach(n => {
        const keyElement = document.querySelector(`[data-note="${n.note}"]`)
        keyElement.classList.toggle("active", n.active)
        if (n.oscillator != null) {
            n.oscillator.stop()
            n.oscillator.disconnect()
        }
    })

    const activeNotes = NOTE_DETAILS.filter(n => n.active)
    const gain = 1 / activeNotes.length
    activeNotes.forEach(n => {
        startNote(n, gain)
    })
}


//This function takes care of the ability of the notes to produce noise.
function startNote(noteDetail, gain) {
    const gainNode = audioContext.createGain()
    gainNode.gain.value = gain
    const oscillator = audioContext.createOscillator()
    oscillator.frequency.value = noteDetail.frequency
    oscillator.type = "sine"
    oscillator.connect(gainNode).connect(audioContext.destination)
    oscillator.start()
    noteDetail.oscillator = oscillator
}