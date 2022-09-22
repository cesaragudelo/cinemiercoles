/*
//Declarando arreglos en js
//un areglo es una variable especial
//que me permiten multiples datos
//en una sola variable

let numeros=[5,8,12,10];
console.log(numeros);

let nombres=Array("juan","sara","carlos","laura");
console.log(nombres[2]);
// UN OBJETO ES UNA VARIABLE ESPECIAL QUE PERMITE QWUE YO ALMACENE 
//MULTIPLES DATOS EN UNA VARIABLE
//USO DE OBJETO

let persona={
    nombre:"juan",
    profesion:"ingeniero",
    edad:"33",
    hinchaDelMejor:true,
    materiasDictadas:["web2","avanzada","nuevas tecnologias"],
    equiposFavoritos:["nacional","liverpool"],
    comida:{
        nombnre:"bandeja paisa",
        precio:32000
    }
}
console.log(persona.materiasDictadas[1]);
console.log(persona.equiposFavoritos[1]);
console.log(persona.comida.precio);
*/

import {peliculas} from '../helper/baseDatos.js'
// se crea peliculas estreno
import {peliculasestreno} from '../helper/baseDatosNuevas.js'
//RECORRIENDO UN ARREGLO EN JAVASCRIPT

import {pintarPeliculas} from '../helper/pintarPeliculas.js'

//let fila=document.getElementById("fila")

let filaDos=document.getElementById("filaDos")

//llamo a la funcion pintar peliculas
pintarPeliculas(peliculas)


/*
let filatres=document.getElementById("titulo")
let titulo1=document.createElement("h1")
titulo1.classList.add("text-center")
titulo1.textContent="Proximos estrenos"
filatres.appendChild(titulo1)



peliculasestreno.forEach(function(estreno){

    let columna=document.createElement("div")
    columna.classList.add("col")

    //2. creamos una terjeta para cada pelicula
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","h-100")  
    
     //3. creamos una foto para cada pelicula
     let poster=document.createElement("img")
     poster.classList.add("card-img-top")
     poster.src=estreno.poster

     // 4. crear nombre de la pelicula
    let nombre=document.createElement("h3")
    nombre.classList.add("card-title","text-center")
    nombre.textContent=estreno.nombre

     // 4. creamos el genero de cada pelicula
     let genero=document.createElement("h4")
     genero.classList.add("text-start")
     genero.textContent="Genero: "+estreno.genero
 
     //6. creamos el idioma de cada pelicula
     let idioma=document.createElement("h6")
     idioma.classList.add("fw-bold")
     idioma.textContent="Idioma: "+estreno.idioma
 
     //7. creamos la sinopsis
     let sinopsis=document.createElement("p")
     //sinopsis.classList.add("d-none")
     sinopsis.textContent=estreno.sinopsis
 
     //8. creamos director
     let director=document.createElement("h6")
     director.textContent="Director: "+estreno.director
 
     //9.creamos actores
     let actores=document.createElement("h6")
     actores.textContent="Actores: "+estreno.actores


     //padres e hijos
     tarjeta.appendChild(poster)
     tarjeta.appendChild(nombre)
     tarjeta.appendChild(genero)
    tarjeta.appendChild(idioma)
    tarjeta.appendChild(sinopsis)
    tarjeta.appendChild(director)
    tarjeta.appendChild(actores)
     columna.appendChild(tarjeta)
     filaDos.appendChild(columna)
})
*/

//------------------------------------------------------


//detectando seleccion de una pelicula

let peliculaSeleccionada={}
fila.addEventListener("click",function(evento){

   console.log(evento.target.parentElement)
  peliculaSeleccionada.poster=evento.target.parentElement.querySelector('img').src //poster
   peliculaSeleccionada.nombre=evento.target.parentElement.querySelector('h2').textContent //nombre
   peliculaSeleccionada.genero=evento.target.parentElement.querySelector('h3').textContent //genero
   peliculaSeleccionada.idioma=evento.target.parentElement.querySelector('h4').textContent //idioma
   peliculaSeleccionada.sinopsis=evento.target.parentElement.querySelector('.sinopsis').textContent //sinopsis
   peliculaSeleccionada.director=evento.target.parentElement.querySelector('.director').textContent //director
   peliculaSeleccionada.actores=evento.target.parentElement.querySelector('h6').textContent //actores

   console.log(peliculaSeleccionada)

   //LLAMANDO A LA MEMORIA DEL NAVEGADOR

   localStorage.setItem("peliculaSeleccionada",JSON.stringify(peliculaSeleccionada)) //java script object notation json

   //REDIRECCIONA A OTRA VISTA
   window.location.href="./src/views/ampliarInfoPelicula.html"
})


