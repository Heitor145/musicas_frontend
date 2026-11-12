const urlBackend = "http://localhost:3000"

const inputTitulo = document.getElementById("titulo")
const inputArtista = document.getElementById("artista")
const inputGenero = document.getElementById("genero")
const inputAno = document.getElementById("ano")
const inputDuracao = document.getElementById("duracao")

const botaoCadastrar = document.getElementById("Click", cadastrar)

async function cadastrarMusica() {
    if(inputTitulo.value === "" || inputArtista === "" || inputGenero === "" || inputAno === "" || inputDuracao === "") {
        alert("precisa preencher tudo")
        return
    }

    const musica = {
        titulo: inputTitulo.value,
        artista: inputArtista.value,
        genero: inputGenero.value,
        ano: inputAno.value,
        duracao: inputDuracao.value
    }

    const resposta = await fetch(`${urlBackend}/cadastrar`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(musica)
    })

    const respostaTransformada = await resposta.json()

    alert(respostaTransformada.mensagem)

    window.location.href = "index.html"
}