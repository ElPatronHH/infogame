const listaJuegos = document.querySelector("#lista-juegos");
var select = document.getElementById("opcionesClasificaciones");

document.addEventListener("DOMContentLoaded", function () {
  let juegosArray = [];
  const leerJSONJuegos = () => {
    const url = "juegos.json";
    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((data) => {
        juegosArray = data;
        mostrarJuegos();
      })
      .catch((error) => {
        console.error("Error al cargar el archivo JSON:", error);
      });
  };
  leerJSONJuegos();
  function mostrarJuegos() {
    listaJuegos.innerHTML = "";
    let contador = 0;
    var clasificacion = select.value;
    console.log(clasificacion);
    juegosArray.forEach((juego, index) => {
      if (clasificacion == "all"){
        const juegoDiv = document.createElement("div");
        juegoDiv.className = "three columns";
        juegoDiv.innerHTML = `
                <div class="card">
                    <img src="${juego.imagen}">
                    <div class="info-card">
                        <h4>${juego.titulo}</h4>
                        <a href="./detallejuego.html?id=${juego.id}" class="button-primary button" data-id="${juego.id}.html">Aprender Más</a>
                    </div>
                </div>
            </div>
            `;
        if (contador % 4 === 0) {
          const rowDiv = document.createElement("div");
          rowDiv.className = "row";
          listaJuegos.appendChild(rowDiv);
        }
        listaJuegos.lastChild.appendChild(juegoDiv);
        contador++;
      }
      else if (juego.clasificacionID == clasificacion) {
        const juegoDiv = document.createElement("div");
        juegoDiv.className = "three columns";
        juegoDiv.innerHTML = `
                <div class="card">
                    <img src="${juego.imagen}">
                    <div class="info-card">
                        <h4>${juego.titulo}</h4>
                        <a href="./detallejuego.html?id=${juego.id}" class="button-primary button" data-id="${juego.id}.html">Aprender Más</a>
                    </div>
                </div>
            </div>
            `;
        if (contador % 4 === 0) {
          const rowDiv = document.createElement("div");
          rowDiv.className = "row";
          listaJuegos.appendChild(rowDiv);
        }
        listaJuegos.lastChild.appendChild(juegoDiv);
        contador++;
      }
    });
  }
  select.addEventListener("change", function () {
    mostrarJuegos();
  });
});
