//PREGUNTANDO POR UN DATO QUE ESTA ALMACENADO EN MEMORIA

//let reseptora=localStorage.getItem("peliculaSeleccionada")

let datosPeliculaSeleccionada=JSON.parse(localStorage.getItem("peliculaSeleccionada"))

console.log(datosPeliculaSeleccionada)

let poster=datosPeliculaSeleccionada.poster
let nombre=datosPeliculaSeleccionada.nombre
let genero=datosPeliculaSeleccionada.genero
let idioma= datosPeliculaSeleccionada.idioma
let sinopsis=datosPeliculaSeleccionada.sinopsis
let actores=datosPeliculaSeleccionada.actores
let director=datosPeliculaSeleccionada.director

// CARGANDO DATOS
let foto=document.getElementById("foto")
foto.src=poster
let nom=document.getElementById("titulo")
nom.textContent=nombre

let generoPelicula=document.getElementById("genero")
generoPelicula.textContent=genero

let idiomaPeliculas=document.getElementById("idioma")
idiomaPeliculas.textContent= idioma

let sinopsisPelicula=document.getElementById("sinopsis")
sinopsisPelicula.textContent= sinopsis

let directorPelicula=document.getElementById("director")
directorPelicula.textContent= director

let actoresPelicula=document.getElementById("actores")
actoresPelicula.textContent=actores