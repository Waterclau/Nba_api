let lista = [];


let jugadores = async () =>{
    let peticion = await fetch("https://www.balldontlie.io/api/v1/players",{ //await para esperar a que se resuelva
        method: "GET",
    });//fetch toma 2 argu;mentos, la url y el verbo

    console.log(peticion);
    let lista = [];


    console.log("Ok");
    let datos = await  peticion.json(); //json transforma json a objeto de javascript
    console.log(datos.data);
    for(var i = 0; i < 24; i++ ){
        lista.push(datos.data[i].first_name);
        lista.push(datos.data[i].last_name);
        lista.push(datos.data[i].team.full_name);
    }
    console.log(lista);
    let btnGet = document.querySelector('#btn-get');
    let inputGet = document.querySelector('#input-get');
    let result = document.querySelector('#result');
    let nombre;
    let name = toString(nombre);
    console.log(name);
    console.log(typeof(lista['0']));
    console.log(typeof(nombre));
    let names  = [];
    for(var i = 0; i < 24; i++ ){
        names.push(datos.data[i].first_name);
    }
   
    btnGet.addEventListener('click', () =>{
        nombre = result.innerText;
        let jugador = [];
        for(var i = 0; i < 24; i++ ){
           if (name == names[i]){
               console.log("bien");
               jugador.push(lista[i]);
               jugador.push(lista[i+1]);
               jugador.push(lista[i+2]);
               result.innerText = "Nombre: " +jugador['0']+ " |Apellido: " +jugador['1']+ " |Equipo: " +jugador['2'];
               
           }
           else{
            result.innerText = "El nombre introducido no corresponde a ningun jugador en la api. Por favor, inténtelo de nuevo.";
           }
        }
    });
    
}






jugadores();