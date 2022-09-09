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

let peliculas=[
    {
        nombre:"Bestia",
        genero:"Accion",
        duracion:185,
        poster:"https://firebasestorage.googleapis.com/v0/b/cineca-e943f.appspot.com/o/bestia.jpg?alt=media&token=5fa623ee-0e64-4faf-94ef-452a2b6d2b83",
        sinopsis:"Cuenta la historia de Kya, una niña abandonada que se crió hasta la edad adulta en los peligrosos pantanos de Carolina del Norte. Durante años, los rumores sobre la",
        clasificacion:"+12",
        idioma:"En subtitulado",
        director:"Steven Spielberg",
        actores:["Bruce Willis","Johnny Depp","Jason Statham"]
    },
    {
        nombre:"Dragon ball z",
        genero:"Animacion",
        duracion:200,
        poster:"https://firebasestorage.googleapis.com/v0/b/cineca-e943f.appspot.com/o/dragonballz.jpg?alt=media&token=38373f54-731d-4e9b-a8ae-ff1cf8a70b23",
        sinopsis:"Cuenta la historia de Kya, una niña abandonada que se crió hasta la edad adulta en los peligrosos pantanos de Carolina del Norte. Durante años, los rumores sobre la",
        clasificacion:"General",
        idioma:"En subtitulado",
        director:"Steven Spielberg",
        actores:["Bruce Willis","Johnny Depp","Jason Statham"]
    },
    {
        nombre:"El demonio del espejo",
        genero:"Terror",
        duracion:140,
        poster:"https://firebasestorage.googleapis.com/v0/b/cineca-e943f.appspot.com/o/eldemonioenelespejo.jpg?alt=media&token=bf28a63c-31a5-4368-af4c-b95c3a27b38e",
        sinopsis:"Cuenta la historia de Kya, una niña abandonada que se crió hasta la edad adulta en los peligrosos pantanos de Carolina del Norte. Durante años, los rumores sobre laha",
        clasificacion:"+15",
        idioma:"En subtitulado",
        director:"Steven Spielberg",
        actores:["Bruce Willis","Johnny Depp","Jason Statham"]
    },
    {
        nombre:"Gemelo siniestro",
        genero:"Terror",
        duracion:205,
        poster:"https://firebasestorage.googleapis.com/v0/b/cineca-e943f.appspot.com/o/gemelosiniestro.jpg?alt=media&token=5fc52a15-fbfc-47b5-ba5c-7e1b1fdf4836",
        sinopsis:"Cuenta la historia de Kya, una niña abandonada que se crió hasta la edad adulta en los peligrosos pantanos de Carolina del Norte. Durante años, los rumores sobre la",
        clasificacion:"+18",
        idioma:"En subtitulado",
        director:"Steven Spielberg",
        actores:["Bruce Willis","Johnny Depp","Jason Statham"]
    },
    {
        nombre:"Hierve",
        genero:"Accion",
        duracion:210,
        poster:"https://firebasestorage.googleapis.com/v0/b/cineca-e943f.appspot.com/o/hierve.jpg?alt=media&token=93523ab0-1432-4be8-8f9b-5f93553b3416",
        sinopsis:"Cuenta la historia de Kya, una niña abandonada que se crió hasta la edad adulta en los peligrosos pantanos de Carolina del Norte. Durante años, los rumores sobre la",
        clasificacion:"+12",
        idioma:"En subtitulado",
        director:"Steven Spielberg",
        actores:["Bruce Willis","Johnny Depp","Jason Statham"]
    },
    {
        nombre:"Invitacion al infiertno",
        genero:"Terror",
        duracion:152,
        poster:"https://firebasestorage.googleapis.com/v0/b/cineca-e943f.appspot.com/o/invitacionalinfierno.jpg?alt=media&token=5110bde1-3ac1-4ee5-8dab-d507621041bd",
        sinopsis:"Cuenta la historia de Kya, una niña abandonada que se crió hasta la edad adulta en los peligrosos pantanos de Carolina del Norte. Durante años, los rumores sobre la",
        clasificacion:"+13",
        idioma:"En subtitulado",
        director:"Steven Spielberg",
        actores:["Bruce Willis","Johnny Depp","Jason Statham"]
    },
    {
        nombre:"Leopardo de las nieves",
        genero:"Ciencia ficcion",
        duracion:148,
        poster:"https://firebasestorage.googleapis.com/v0/b/cineca-e943f.appspot.com/o/leopardodenieves.jpg?alt=media&token=666a97b0-fb3b-4d94-b9c4-32b84e9bbcd8",
        sinopsis:"Cuenta la historia de Kya, una niña abandonada que se crió hasta la edad adulta en los peligrosos pantanos de Carolina del Norte. Durante años, los rumores sobre la",
        clasificacion:"General",
        idioma:"En subtitulado",
        director:"Steven Spielberg",
        actores:["Bruce Willis","Johnny Depp","Jason Statham"]
    },
    {
        nombre:"El perro samurai",
        genero:"Ciencia ficcion",
        duracion:230,
        poster:"https://firebasestorage.googleapis.com/v0/b/cineca-e943f.appspot.com/o/samurai.jpg?alt=media&token=a41a0615-b559-4d5d-94cd-ecb5170f4081",
        sinopsis:"Cuenta la historia de Kya, una niña abandonada que se crió hasta la edad adulta en los peligrosos pantanos de Carolina del Norte. Durante años, los rumores sobre la",
        clasificacion:"General",
        idioma:"En subtitulado",
        director:"Steven Spielberg",
        actores:["Bruce Willis","Johnny Depp","Jason Statham"]
    },
    {
        nombre:"Supermascotas",
        genero:"Animacion",
        duracion:215,
        poster:"https://firebasestorage.googleapis.com/v0/b/cineca-e943f.appspot.com/o/supermascotas.jpg?alt=media&token=51c3fbf6-f143-40dd-8fb3-40f0a9282f92",
        sinopsis:"Cuenta la historia de Kya, una niña abandonada que se crió hasta la edad adulta en los peligrosos pantanos de Carolina del Norte. Durante años, los rumores sobre la",
        clasificacion:"General",
        idioma:"En subtitulado",
        director:"Steven Spielberg",
        actores:["Bruce Willis","Johnny Depp","Jason Statham"]
    },
    {
        nombre:"Tren bala",
        genero:"Ciencia ficcion",
        duracion:149,
        poster:"https://firebasestorage.googleapis.com/v0/b/cineca-e943f.appspot.com/o/trenbala.jpg?alt=media&token=91e29996-2063-4202-b09b-ed4ba15066df",
        sinopsis:"Cuenta la historia de Kya, una niña abandonada que se crió hasta la edad adulta en los peligrosos pantanos de Carolina del Norte. Durante años, los rumores sobre la",
        clasificacion:"General",
        idioma:"En subtitulado",
        director:"Steven Spielberg",
        actores:["Bruce Willis","Johnny Depp","Jason Statham"]
    }
    
]
// se crea peliculas estreno
let peliculasestreno=[
    {
        nombre:"Apocalipsis zombie",
        genero:"Ciencia ficcion",
        duracion:149,
        poster:"https://firebasestorage.googleapis.com/v0/b/cineca-e943f.appspot.com/o/ApocalipsisZombie.png?alt=media&token=64ddb842-f251-4ba0-9821-9887ad093d50",
        sinopsis:"Cuenta la historia de Kya, una niña abandonada que se crió hasta la edad adulta en los peligrosos pantanos de Carolina del Norte. Durante años, los rumores sobre la",
        clasificacion:"General",
        idioma:"En subtitulado",
        director:"Steven Spielberg",
        actores:["Bruce Willis","Johnny Depp","Jason Statham"]
    },
    {
        nombre:"Caceria de brujas",
        genero:"Terror",
        duracion:149,
        poster:"https://firebasestorage.googleapis.com/v0/b/cineca-e943f.appspot.com/o/CaceriaDeBrujas.png?alt=media&token=0029fd90-7f8d-4666-9713-f7450bc8048b",
        sinopsis:"Cuenta la historia de Kya, una niña abandonada que se crió hasta la edad adulta en los peligrosos pantanos de Carolina del Norte. Durante años, los rumores sobre la",
        clasificacion:"General",
        idioma:"En subtitulado",
        director:"Steven Spielberg",
        actores:["Bruce Willis","Johnny Depp","Jason Statham"]
    },{
        nombre:"El arbol rojo",
        genero:"Ciencia ficcion",
        duracion:149,
        poster:"https://firebasestorage.googleapis.com/v0/b/cineca-e943f.appspot.com/o/trenbala.jpg?alt=media&token=91e29996-2063-4202-b09b-ed4ba15066df",
        sinopsis:"lCuenta la historia de Kya, una niña abandonada que se crió hasta la edad adulta en los peligrosos pantanos de Carolina del Norte. Durante años, los rumores sobre la",
        clasificacion:"General",
        idioma:"En subtitulado",
        director:"Steven Spielberg",
        actores:["Bruce Willis","Johnny Depp","Jason Statham"]
    },{
        nombre:"La chica salvaje",
        genero:"Ciencia ficcion",
        duracion:149,
        poster:"https://firebasestorage.googleapis.com/v0/b/cineca-e943f.appspot.com/o/ElArbolRojo.png?alt=media&token=1dc526b9-5df5-4e98-b046-f3c77bb5b76c",
        sinopsis:"Cuenta la historia de Kya, una niña abandonada que se crió hasta la edad adulta en los peligrosos pantanos de Carolina del Norte. Durante años, los rumores sobre la",
        clasificacion:"General",
        idioma:"En subtitulado",
        director:"Steven Spielberg",
        actores:["Bruce Willis","Johnny Depp","Jason Statham"]
    },{
        nombre:"Lo que arde",
        genero:"Ciencia ficcion",
        duracion:149,
        poster:"https://firebasestorage.googleapis.com/v0/b/cineca-e943f.appspot.com/o/LoQueArde.png?alt=media&token=b94f3de2-6e53-4d93-a060-b988bcd367dc",
        sinopsis:"Cuenta la historia de Kya, una niña abandonada que se crió hasta la edad adulta en los peligrosos pantanos de Carolina del Norte. Durante años, los rumores sobre la",
        clasificacion:"General",
        idioma:"En subtitulado",
        director:"Steven Spielberg",
        actores:["Bruce Willis","Johnny Depp","Jason Statham"]
    }
]

//RECORRIENDO UN ARREGLO EN JAVASCRIPT
let fila=document.getElementById("fila")

let filaDos=document.getElementById("filaDos")

peliculas.forEach(function(pelicula){
    
    //console.log(pelicula);
    //console.log(pelicula.nombre)
    //console.log(pelicula.genero)
    //console.log(pelicula.duracion)
    //console.log(pelicula.poster)
    //console.log(pelicula.sinopsis)
    //console.log(pelicula.clasificacion)
    //console.log(pelicula.idioma)
/*
    //TRAVERSING (CREAR ETIQUETAS DE HTML DESDE JS)
    let poster=document.createElement("img")
    poster.src=pelicula.poster
    let nombrePelicula=document.createElement("h2")
    nombrePelicula.textContent=pelicula.nombre
    //PADRES E HIJOS
    fila.appendChild(poster)
    fila.appendChild(nombrePelicula)
    */

    //TRAVERSING (CREAR ETIQUETAS DE HTML DESDE JS)

    //1. CREAMOS UNA COLUMNA PARA CADA PELICULA
    let columna=document.createElement("div")
    columna.classList.add("col")

    //2. creamos una terjeta para cada pelicula
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","h-100")

    //3. creamos una foto para cada pelicula
    let poster=document.createElement("img")
    poster.classList.add("card-img-top")
    poster.src=pelicula.poster

    // 4. crear nombre de la pelicula
    let nombre=document.createElement("h3")
    nombre.classList.add("card-title","text-center")
    nombre.textContent=pelicula.nombre
    // 4. creamos el genero de cada pelicula
    let genero=document.createElement("h4")
    genero.classList.add("text-start")
    genero.textContent="Genero: "+pelicula.genero

    //6. creamos el idioma de cada pelicula
    let idioma=document.createElement("h6")
    idioma.classList.add("fw-bold")
    idioma.textContent="Idioma: "+pelicula.idioma

    //7. creamos la sinopsis
    let sinopsis=document.createElement("p")
    //sinopsis.classList.add("d-none")
    sinopsis.textContent=pelicula.sinopsis

    //8. creamos director
    let director=document.createElement("h6")
    director.textContent="Director: "+pelicula.director

    //9.creamos actores
    let actores=document.createElement("h6")
    actores.textContent="Actores: "+pelicula.actores

    //PADRES E HIJOS
    tarjeta.appendChild(poster)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(genero)
    tarjeta.appendChild(idioma)
    tarjeta.appendChild(sinopsis)
    tarjeta.appendChild(director)
    tarjeta.appendChild(actores)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)

})

let filatres=document.getElementById("titulo")
let titulo1=document.createElement("h1")
titulo1.classList.add("text-center")
titulo1.textContent="Proximos estrenos"
filatres.appendChild(titulo1)


//------------------------------------------------------
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

//detectando seleccion de una pelicula
fila.addEventListener("click",function(){
    alert("esta seleccionando una pelicula")
})