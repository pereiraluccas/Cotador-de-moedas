const urlAPI = 'https://economia.awesomeapi.com.br/json/last/'


document.getElementById('botao').addEventListener('click', async()=>{
  const finalUrl = document.getElementById('valoresMoedas').value + '-BRL'
const chamado = `${urlAPI}${finalUrl}`
  const resposta = await fetch (chamado)
  const respostaFinal = await resposta.json()
  const moeda = Object.keys(respostaFinal)[0]; //
  const dados = respostaFinal[moeda];
  document.getElementById('dados-cotacao').innerHTML = `R$${dados.ask}`
  document.getElementById('dados-data-cotacao').innerHTML = dados.create_date
  document.getElementById('dados-max-dia').innerHTML = `RS${dados.high}`
  document.getElementById('dados-min-dia').innerHTML = `R$${dados.low}`
  document.getElementById('bandeira').innerHTML = `<img id="foto" src="imagens/${finalUrl}.png">`
  console.log(finalUrl)

})