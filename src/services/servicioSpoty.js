//CONSUMIR DATOS DEL API DE SPOTIFY

//1. URI=URL+EP

const URI="https://api.spotify.com/v1/artists/7hJcb9fa4alzcOq3EaNPoG/top-tracks?market=US"

//2. TOKEN

const TOKEN="Bearer BQDNr8-miiEWB75gEgJZhNLdC2jK8C0miylkAoyfQcTg3Gf5FsRu8Xo6yXzsxIwpHoYQGCJlLIcNr1wXEp4hkMJf_rHPo883epm7mbEtQVvTnFN8Y-p02PuxT9jkyvivprOPT--vi-m_dXEjM_zt9TSovEmo9Xwn7TSnJcKqM0jSHSWczpXP4vaFxmQb6lxRUz0"

//3. PETICION

const PETICION={
    method:"GET",
    headers:{Authorization:TOKEN},
    
}

let fila=document.getElementById("fila")

//4. USAMOS LA PROMESA (FETCH) PARA CONSUMIR EL API
fetch(URI,PETICION)
.then(function(respuesta){
    return respuesta.json()

})
.then(function(respuesta){
    let canciones=respuesta.tracks
    canciones.forEach(function(cancion){
        console.log(cancion.name)
        console.log(cancion.preview_url)
        let columna=document.createElement("div")
        columna.classList.add("col")

        let targeta=document.createElement("div")
        targeta.classList.add("card","h-100")

        let audio=document.createElement("audio")
        audio.setAttribute("controls","controls")
        audio.src=cancion.preview_url

        let nombre=document.createElement("h1")
        nombre.classList.add("text-center")
        nombre.textContent=cancion.name


        //padres e hijos
        targeta.appendChild(nombre)
        targeta.appendChild(audio)
        columna.appendChild(targeta)
        fila.appendChild(columna)

    })

})
.catch(function(error){
    console.log(error)
})