import { pintarSillas } from '../helper/pintarSillas.js'


let asientos=[
    [{id:"a1",estado:2},{id:"b1",estado:2},{id:"c1",estado:0},{id:"d1",estado:0}],
    [{id:"a2",estado:0},{id:"b2",estado:0},{id:"c2",estado:0},{id:"d2",estado:0}],
    [{id:"a3",estado:0},{id:"b3",estado:0},{id:"c2",estado:0},{id:"d2",estado:0}]
]

//VOY A PINTAR DESDE JS MI SALA DE CINE
let cinema=document.getElementById("salacinema")

//recorrer los asientos y aplicar traversin
pintarSillas(asientos, cinema)

//evento de click en la sala de cine
cinema.addEventListener("click", function(evento){
    if(evento.target.tagName=="IMG"){
        let idAsientoSeleccionado=evento.target.id
        
        asientos.forEach(function(hilera){

            hilera.forEach(function(asiento){
                if(asiento.id==idAsientoSeleccionado){
                      //encontre el asiento en donde el usuario se quiere sentar
                      if(asiento.estado==0){
                        asiento.estado=1
                        evento.target.src="../../assets/img/cinema-chair-verde.png"
                    }else if(asiento.estado==1){
                        asiento.estado=0
                        evento.target.src="../../assets/img/cinema-chair.png"
                    }

                }

            })
        })
    }
})
