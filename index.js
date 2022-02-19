const btn = document.querySelector(`.switch-btn`)
const video = document.querySelector(`.video-container`)
const audio = document.querySelector(`.audio-container`)

btn.addEventListener(`click`, function() {
    if (!btn.classList.contains(`slide`)) {
        btn.classList.add(`slide`)
        video.play()
        audio.play()
    } else {
        btn.classList.remove(`slide`)
        video.pause()
        audio.pause()
    }
})

const preloader = document.querySelector(`.preloader`)

window.addEventListener(`load`, function() {
    preloader.classList.add(`hide-preloader`)
})