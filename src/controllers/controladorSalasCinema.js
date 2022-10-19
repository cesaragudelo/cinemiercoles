import { pintarSillas } from '../helper/pintarSillas.js'

let pintarRojo=JSON.parse(localStorage.getItem("pintarRojo"))

if(pintarRojo==null){
    pintarRojo=[]
}



let asientos=[
    [{id:"a1",estado:0},{id:"b1",estado:0},{id:"c1",estado:0},{id:"d1",estado:0}],
    [{id:"a2",estado:0},{id:"b2",estado:0},{id:"c2",estado:0},{id:"d2",estado:0}],
    [{id:"a3",estado:0},{id:"b3",estado:0},{id:"c3",estado:0},{id:"d3",estado:0}]
]

asientos.forEach(function(hilera){
    hilera.forEach(function(asiento){
        for (let index = 0; index < pintarRojo.length; index++) {
           if(asiento.id==pintarRojo[index]){
               asiento.estado=2
           }
            
        }
    })
})

let sumar=0
//let pintarRojo=[]
let guardarsrc=[]


//VOY A PINTAR DESDE JS MI SALA DE CINE
let cinema=document.getElementById("salacinema")

//recorrer los asientos y aplicar traversin
pintarSillas(asientos, cinema)

//evento de click en la sala de cine
cinema.addEventListener("click", function(evento){
    if(evento.target.tagName=="IMG"){
        let idAsientoSeleccionado=evento.target.id
        console.log(idAsientoSeleccionado)
        
        asientos.forEach(function(hilera){

            hilera.forEach(function(asiento){
                if(asiento.id==idAsientoSeleccionado){
                      //encontre el asiento en donde el usuario se quiere sentar
                      if(asiento.estado==0){
                        asiento.estado=1
                        evento.target.src="../../assets/img/cinema-chair-verde.png"

                        sumar=sumar+1
                        pintarRojo.push(asiento.id)
                        guardarsrc.push(evento)
                       console.log(pintarRojo)
                       console.log(guardarsrc)

                    }else if(asiento.estado==1){
                        asiento.estado=0
                        evento.target.src="../../assets/img/cinema-chair.png"
                        for (let index = 0; index < pintarRojo.length; index++){
                            if(pintarRojo[index]==asiento.id){
                                pintarRojo.splice(index,1)
                                //guardarsrc.splice(index,1)
                                console.log(pintarRojo)
                            }
                        }
                        //------nuevo for comprobar guardarsrc
                        for (let i = 0; i < guardarsrc.length; i++) {
                            if(guardarsrc[i]==asiento.evento){
                                guardarsrc.splice(i,1)
                                console.log(guardarsrc)
                            }
                            
                        }
                        sumar=sumar-1
                    }

                }

            })
            
        })
       
    }
    
})


let reservar=document.getElementById("reservar")
reservar.addEventListener("click", function(evento){
//------------------------------------------------------------
    let  pagar=document.getElementById("pagar")

    let reserva=document.createElement("div")
    reserva.classList.add("col")

    let cantidad=document.createElement("h3")
        cantidad.textContent="Cantidad de sillas reservadas: "+sumar

    let ValorPagar=document.createElement("h3")
        ValorPagar.textContent="Valor a pagar: "+sumar*10000
    reserva.appendChild(cantidad)
    reserva.appendChild(ValorPagar)
    pagar.appendChild(reserva)
//--------------------------------------------------



  for (let index = 0; index < guardarsrc.length; index++) {
     guardarsrc[index].target.src="../../assets/img/cinema-chair-red.png"
     
     //console.log(guardarsrc[index])   
  }


   
  
    localStorage.setItem("pintarRojo",JSON.stringify(pintarRojo))
    //console.log(pintarRojo)
})
let reiniciar=document.getElementById("reiniciar")

reiniciar.addEventListener("click", function(evento){
    pintarRojo=[]
    localStorage.setItem("pintarRojo",JSON.stringify(pintarRojo))
})



