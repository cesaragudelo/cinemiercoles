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
        sinopsis:"loremuhdasidashdjhasdjkha",
        clasificacion:"+12",
        idioma:"En subtitulado"
    },
    {
        nombre:"Dragon ball z",
        genero:"Animacion",
        duracion:200,
        poster:"https://firebasestorage.googleapis.com/v0/b/cineca-e943f.appspot.com/o/dragonballz.jpg?alt=media&token=38373f54-731d-4e9b-a8ae-ff1cf8a70b23",
        sinopsis:"loremuhdasidashdjhasdjkha",
        clasificacion:"General",
        idioma:"En subtitulado"
    },
    {
        nombre:"El demonio del espejo",
        genero:"Terror",
        duracion:140,
        poster:"https://firebasestorage.googleapis.com/v0/b/cineca-e943f.appspot.com/o/eldemonioenelespejo.jpg?alt=media&token=bf28a63c-31a5-4368-af4c-b95c3a27b38e",
        sinopsis:"loremuhdasidashdjhasdjkha",
        clasificacion:"+15",
        idioma:"En subtitulado"
    },
    {
        nombre:"Gemelo siniestro",
        genero:"Terror",
        duracion:205,
        poster:"https://firebasestorage.googleapis.com/v0/b/cineca-e943f.appspot.com/o/gemelosiniestro.jpg?alt=media&token=5fc52a15-fbfc-47b5-ba5c-7e1b1fdf4836",
        sinopsis:"loremuhdasidashdjhasdjkha",
        clasificacion:"+18",
        idioma:"En subtitulado"
    },
    {
        nombre:"Hierve",
        genero:"Accion",
        duracion:210,
        poster:"https://firebasestorage.googleapis.com/v0/b/cineca-e943f.appspot.com/o/hierve.jpg?alt=media&token=93523ab0-1432-4be8-8f9b-5f93553b3416",
        sinopsis:"loremuhdasidashdjhasdjkha",
        clasificacion:"+12",
        idioma:"En subtitulado"
    },
    {
        nombre:"Invitacion al infiertno",
        genero:"Terror",
        duracion:152,
        poster:"https://firebasestorage.googleapis.com/v0/b/cineca-e943f.appspot.com/o/invitacionalinfierno.jpg?alt=media&token=5110bde1-3ac1-4ee5-8dab-d507621041bd",
        sinopsis:"loremuhdasidashdjhasdjkha",
        clasificacion:"+13",
        idioma:"En subtitulado"
    },
    {
        nombre:"Leopardo de las nieves",
        genero:"Ciencia ficcion",
        duracion:148,
        poster:"https://firebasestorage.googleapis.com/v0/b/cineca-e943f.appspot.com/o/leopardodenieves.jpg?alt=media&token=666a97b0-fb3b-4d94-b9c4-32b84e9bbcd8",
        sinopsis:"loremuhdasidashdjhasdjkha",
        clasificacion:"General",
        idioma:"En subtitulado"
    },
    {
        nombre:"El perro samurai",
        genero:"Ciencia ficcion",
        duracion:230,
        poster:"https://firebasestorage.googleapis.com/v0/b/cineca-e943f.appspot.com/o/samurai.jpg?alt=media&token=a41a0615-b559-4d5d-94cd-ecb5170f4081",
        sinopsis:"loremuhdasidashdjhasdjkha",
        clasificacion:"General",
        idioma:"En subtitulado"
    },
    {
        nombre:"Supermascotas",
        genero:"Animacion",
        duracion:215,
        poster:"https://firebasestorage.googleapis.com/v0/b/cineca-e943f.appspot.com/o/supermascotas.jpg?alt=media&token=51c3fbf6-f143-40dd-8fb3-40f0a9282f92",
        sinopsis:"loremuhdasidashdjhasdjkha",
        clasificacion:"General",
        idioma:"En subtitulado"
    },
    {
        nombre:"Tren bala",
        genero:"Ciencia ficcion",
        duracion:149,
        poster:"https://firebasestorage.googleapis.com/v0/b/cineca-e943f.appspot.com/o/trenbala.jpg?alt=media&token=91e29996-2063-4202-b09b-ed4ba15066df",
        sinopsis:"loremuhdasidashdjhasdjkha",
        clasificacion:"General",
        idioma:"En subtitulado"
    }
    
]

//RECORRIENDO UN ARREGLO EN JAVASCRIPT
peliculas.forEach(function(pelicula){
    //console.log(pelicula);
    console.log(pelicula.nombre)
    console.log(pelicula.genero)
    console.log(pelicula.duracion)
    console.log(pelicula.poster)
    console.log(pelicula.sinopsis)
    console.log(pelicula.clasificacion)
    console.log(pelicula.idioma)
})