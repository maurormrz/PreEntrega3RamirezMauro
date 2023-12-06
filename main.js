document.addEventListener("DOMContentLoaded", function () {
    const pagina1 = document.getElementById("pagina1");
    const pagina2 = document.getElementById("pagina2");
    const pagina3 = document.getElementById("pagina3");
    const pagina4 = document.getElementById("pagina4");
    const pagina5 = document.getElementById("pagina5");
    const pagina6 = document.getElementById("pagina6");
  
    let nombre, apellido, tvsSeleccionadas = [], total;
  
    function ocultarTodasLasPaginas() {
      pagina1.style.display = "none";
      pagina2.style.display = "none";
      pagina3.style.display = "none";
      pagina4.style.display = "none";
      pagina5.style.display = "none";
      pagina6.style.display = "none";
    }
  
    ocultarTodasLasPaginas();
    pagina1.style.display = "block";
  
    document.getElementById("ingreso").addEventListener("click", function () {
      nombre = document.getElementById("nombre").value;
      apellido = document.getElementById("apellido").value;
  
      if (nombre.trim() !== "" && apellido.trim() !== "") {
        document.getElementById("nombreMostrado").textContent = nombre;
        document.getElementById("apellidoMostrado").textContent = apellido;
        ocultarTodasLasPaginas();
        pagina2.style.display = "block";
      } else {
        ocultarTodasLasPaginas();
        pagina6.style.display = "block";
      }
    });
  
    document.getElementById("tvPlasma").addEventListener("click", function () {
      tvsSeleccionadas.push({ tipo: "Plasma", precio: 30000 });
  
      total = tvsSeleccionadas.reduce((sum, tv) => sum + tv.precio, 0);
  
      ocultarTodasLasPaginas();
      pagina3.style.display = "block";
    });
  
    document.getElementById("tvLCD").addEventListener("click", function () {
      tvsSeleccionadas.push({ tipo: "LCD", precio: 60000 });
  
      total = tvsSeleccionadas.reduce((sum, tv) => sum + tv.precio, 0);
  
      ocultarTodasLasPaginas();
      pagina3.style.display = "block";
    });
  
    document.getElementById("tvLED").addEventListener("click", function () {
      tvsSeleccionadas.push({ tipo: "LED", precio: 140000 });
  
      total = tvsSeleccionadas.reduce((sum, tv) => sum + tv.precio, 0);
  
      ocultarTodasLasPaginas();
      pagina3.style.display = "block";
    });
  
    document.getElementById("si").addEventListener("click", function () {
      ocultarTodasLasPaginas();
      pagina2.style.display = "block";
    });
  
    document.getElementById("no").addEventListener("click", function () {
      document.getElementById("numTvsSeleccionadasPagina4").textContent = tvsSeleccionadas.length;
      document.getElementById("totalPagarPagina4").textContent = Math.round(total);
  
      ocultarTodasLasPaginas();
      pagina4.style.display = "block";
    });
  
    document.getElementById("1pago").addEventListener("click", function () {
      document.getElementById("totalPagarCuotasPagina5").textContent = Math.round(total);
      document.getElementById("numCuotasPagina5").textContent = "en un solo pago";
        ocultarTodasLasPaginas();
      pagina5.style.display = "block";
    });
  
    document.getElementById("6cuotas").addEventListener("click", function () {
      document.getElementById("totalPagarCuotasPagina5").textContent = Math.round(total / 6);
      document.getElementById("numCuotasPagina5").textContent = "en 6 cuotas";
      ocultarTodasLasPaginas();
      pagina5.style.display = "block";
    });
  
    document.getElementById("12cuotas").addEventListener("click", function () {
      document.getElementById("totalPagarCuotasPagina5").textContent = Math.round(total / 12);
      document.getElementById("numCuotasPagina5").textContent = "en 12 cuotas";
      ocultarTodasLasPaginas();
      pagina5.style.display = "block";
    });
  });