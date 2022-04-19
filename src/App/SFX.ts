interface SFXInterface {
    src?: string
}

class SFX {
    rootUrl = 'http://localhost:8000/audio'
    sound: HTMLAudioElement

    constructor({ src }: SFXInterface) {
        this.sound = document.createElement('audio')
        this.sound.src = `${this.rootUrl}/${src}`
        this.sound.setAttribute('preload', 'auto')
        this.sound.setAttribute('controls', 'none')
        this.sound.style.display = 'none'
        document.body.appendChild(this.sound)
    }

    play() {
        this.sound.play()
    }

    stop() {
        this.sound.pause()
    }
}

export default SFX
