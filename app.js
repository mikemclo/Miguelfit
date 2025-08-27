const plan = {
  lunes: {
    workout: "Pecho y Core (fuerza ligera, sin material): 4x flexiones, 3x fondos en banco, 3x plancha 30s",
    diet: "Desayuno alto en proteínas (tortilla + avena), comida pollo/arroz, cena pescado + verduras"
  },
  martes: {
    workout: "Bici 40 min ritmo medio",
    diet: "Más hidratos (pasta o arroz en la comida), proteína moderada, fruta extra"
  },
  miércoles: {
    workout: "Piernas + cardio corto: 3x sentadillas, 3x zancadas, 10 min trote",
    diet: "Proteína alta (huevos, pollo), algo de hidratos, verduras"
  },
  jueves: {
    workout: "Correr 5 km suave",
    diet: "Carga ligera de hidratos antes de correr, proteína ligera después (batido o yogur griego)"
  },
  viernes: {
    workout: "Fuerza superior (pecho/hombro/brazos): 4x flexiones abiertas, 3x pike push ups, 3x plancha lateral",
    diet: "Alta proteína (carne magra/pescado), hidratos medios, fruta"
  },
  sábado: {
    workout: "Bici larga 60 min",
    diet: "Mayor carga de hidratos (arroz, pasta), frutas, proteína"
  },
  domingo: {
    workout: "Descanso activo (paseo 30 min)",
    diet: "Equilibrada: proteína moderada, verduras, fruta"
  }
};

function getToday() {
  const days = ["domingo","lunes","martes","miércoles","jueves","viernes","sábado"];
  const today = days[new Date().getDay()];
  return today;
}

function showToday() {
  const today = getToday();
  document.getElementById("workout").innerText = plan[today].workout;
  document.getElementById("mealplan").innerText = plan[today].diet;
}

function showWeek() {
  const weekDiv = document.getElementById("weekplan");
  weekDiv.innerHTML = "";
  for (const [day, info] of Object.entries(plan)) {
    weekDiv.innerHTML += `<h3>${day}</h3><p><b>Entreno:</b> ${info.workout}</p><p><b>Dieta:</b> ${info.diet}</p>`;
  }
}

document.getElementById("weekly-btn").addEventListener("click", () => {
  document.getElementById("weekly").classList.toggle("hidden");
  showWeek();
});

showToday();