setTimeout(() => {
  console.log(`Um segundo e meio se passaram desde que a página foi carregada`)
},1500)

const buttonInitCounter = document.querySelector('.button-init-counter')
const buttonStopCounter = document.querySelector('.button-stop-counter')
const pegarHum = document.querySelector('.counter-container')
contador = 0
let timer = null
buttonInitCounter.addEventListener('click',() => {
timer =   setInterval(() => {
  console.log(`< Cronômetro inciado`)
    contador++
    pegarHum.innerHTML = contador
  }, 1000)

})

buttonStopCounter.addEventListener('click',() => {
 clearInterval(timer)
 contador = 0
 pegarHum.innerHTML = 0
 console.log(`> Cronômetro parado com sucesso`)
})


