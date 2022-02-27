
let jugadores = async () =>{
    let peticion = await fetch("https://www.balldontlie.io/api/v1/players",{ //await para esperar a que se resuelva
        method: "GET",
    });//fetch toma 2 argu;mentos, la url y el verbo

    console.log(peticion);

    let lista = [];
    console.log("Ok");
    let datos = await peticion.json(); //json transforma json a objeto de javascript
    console.log(datos.data);
    for(var i = 0; i < 24; i++ ){
        lista.push(datos.data[i].first_name);
        lista.push(datos.data[i].last_name);
        lista.push(datos.data[i].team.full_name);

    }



    function buildTable(dat){
        var table = document.getElementById('tablaTeams');

        for(var i = 0; i < dat.length; i = i+3 ){
            var row = `
                <tr>
                    <td> ${dat[i]}<td>
                    <td> ${dat[i+1]}<td>
                    <td> ${dat[i+2]}<td>
                </tr>
            `
            table.innerHTML += row;

        };
    };
    buildTable(lista);

};


jugadores();

