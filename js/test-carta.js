document.addEventListener("DOMContentLoaded", init)
function init(){
    console.log('DOM CARGADO')

    
    fetch('json/carta.json')
      .then(response => response.json())
      .then(data => {
        const elementosProductos = document.querySelectorAll('.producto');
  
        elementosProductos.forEach((elemento, index) => {
          const producto = data.carta[index];
  
          if (producto) {
            const nombreElemento = elemento.querySelector('.nombre');
            const descripcionElemento = elemento.querySelector('.desc');
            const precioElemento = elemento.querySelector('.prc');
            
  
            nombreElemento.textContent = producto.Nombre;
            descripcionElemento.textContent = `Descripción: ${producto.Descripción}`;
            precioElemento.textContent = `Precio: ${producto.Precio}`;
            
          }
        });
      })
      .catch(error => {
        console.error('Hubo un error al cargar el archivo JSON:', error);
      });
  }

  


