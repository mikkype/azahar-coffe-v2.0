document.addEventListener("DOMContentLoaded", init)

function init() {
    console.log('DOM cargado')
    //creamos una variable con el id
    var mostrar = document.getElementById('container-carta');
    var opciones = {
        method: 'POST'
    }
    //ruta donde se consume el json
    fetch('json/carta.json')
        .then(result => result.json())
        .then(test => {
            console.log(test)
            if (Array.isArray(test.carta)) {



                test.carta.forEach(elemento => {

                    mostrar.innerHTML += 
                            `
                            <p>${elemento.Nombre}</p>
                            <p>${elemento.Descripción}</p>
                            <p>${elemento.Precio}</p>
                            `;

                });
            }


        })
}
