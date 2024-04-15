let chave = "57880de0f2a40805a0a87acad6a2a248"

function colocarNaTela(dados) {
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    /* Math.floor -> ferramenta para arredondar o número */
    document.querySelector('.icone').src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
}

async function buscarCidade(cidade) {

    let dados = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cidade + '&appid=57880de0f2a40805a0a87acad6a2a248&units=metric',).then((resposta) => resposta.json())
    /* await -> espere / fetch -> ferramenta do JS para acessar servidores*/
    /* then -> então / JSON -> JavaScript Object Notation (o formato que o JS entende)*/
    colocarNaTela(dados)
}

function cliqueiNoBotao() {
    let cidade = document.querySelector('.input-cidade').value

    buscarCidade(cidade)
}

document.querySelector('.input-cidade').addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Evita que o formulário seja enviado
        document.querySelector('button').click(); // Simula o clique no botão de busca
    }
});

