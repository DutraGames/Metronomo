let bpm = document.getElementById('bpm')
let h1 = document.querySelector('h1')
let currentbpm = 100
let play = document.getElementById('play')
let audio = document.querySelector('audio')
let isPlay = false
let timer = null


function tick (){
  audio.currentTime = 0
  audio.play()
}

bpm.addEventListener('change', function() {
  h1.innerHTML = this.value + 'bpm'
  currentbpm = parseInt(this.value)
  if (isPlay){
    clearInterval(timer)
    timer = setInterval(tick, (60*1000)/currentbpm)
  }
})

play.addEventListener('click', function() {
  if(isPlay){
    play.innerHTML = 'Play'
    clearInterval(timer)
  }else{
    play.innerHTML = 'Stop'
    tick()
    timer = setInterval(tick, (60*1000)/currentbpm)
  }
  isPlay = !isPlay
})