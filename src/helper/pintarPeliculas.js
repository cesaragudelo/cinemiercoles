export function pintarPeliculas(peliculas){
    let fila=document.getElementById("fila")
    
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
        let nombre=document.createElement("h2")
        nombre.classList.add("card-title","text-center")
        nombre.textContent=pelicula.nombre
        // 4. creamos el genero de cada pelicula
        let genero=document.createElement("h3")
        genero.classList.add("text-start")
        genero.textContent="Genero: "+pelicula.genero
    
        //6. creamos el idioma de cada pelicula
        let idioma=document.createElement("h4")
        idioma.classList.add("fw-bold")
        idioma.textContent="Idioma: "+pelicula.idioma
    
        //7. creamos la sinopsis
        let sinopsis=document.createElement("p")
        //sinopsis.classList.add("d-none")
        sinopsis.textContent=pelicula.sinopsis
    
        //8. creamos director
        let director=document.createElement("h5")
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
}