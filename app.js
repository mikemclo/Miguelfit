// ⚡ Lógica de MiguelFIT

document.addEventListener("DOMContentLoaded", () => {
  const saludo = document.getElementById("saludo");
  const boton = document.getElementById("boton");

  if (saludo && boton) {
    boton.addEventListener("click", () => {
      const hora = new Date().getHours();
      let mensaje = "";

      if (hora < 12) {
        mensaje = "¡Buenos días, MiguelFIT! 💪🌞";
      } else if (hora < 20) {
        mensaje = "¡Buenas tardes, MiguelFIT! 🔥";
      } else {
        mensaje = "¡Buenas noches, MiguelFIT! 🌙";
      }

      saludo.textContent = mensaje;
    });
  }
});