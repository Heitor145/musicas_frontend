const urlBackend = "http://localhost:3000"
const listaMusicas = document.getElementById("listaMusicas")

async function buscarMusica() {
    const resposta = await fetch(urlBackend)
    const musicas = await resposta.json()

    musicas.forEach((musica) => { 
        listaMusicas.innerHTML += `
            <article class="musica">
                <h2>${musica.titulo}</h2>
                    <p class="artista">${musica.artista}</p>
                    <p class="detalhes">${musica.genero}</p>
                    <div class="acoes">
                        <a class="editar" href="editar.html?id=${musica.id}">Editar</a>
                        <button class="apagar">Apagar</button>
                    </div>
            </article>  
        `       
    })
}

buscarMusica()