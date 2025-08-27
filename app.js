/* ============
   MIGUELFIT – Plan semanal con dieta en gramos
   Perfil: 80 kg, 188 cm, objetivo volumen (novato en fuerza).
   Días fuerza/bici larga 2900–3100 kcal; cardio/descanso 2500–2700 kcal.
   Proteína objetivo ~160 g/día.
   ============ */

const DAYS = ["domingo","lunes","martes","miércoles","jueves","viernes","sábado"];

const plan = {
  lunes: {
    tipo: "Fuerza – Pecho + Core",
    workout: [
      "Calentamiento 8' (movilidad hombros, rotaciones, jumping jacks)",
      "Flexiones inclinadas en mesa/silla: 4×10–12",
      "Flexiones normales (rodillas si hace falta): 3×8–10",
      "Fondos entre sillas (si cómodos) o flexión diamante: 3×6–8",
      "Plancha frontal: 3×30–40 s",
      "Estiramientos 5'"
    ],
    dieta: fuerza()
  },
  martes: {
    tipo: "Cardio – Correr suave 25–30'",
    workout: [
      "Calentamiento 5'",
      "Correr 25–30' Z2 (hablando cómodo)",
      "3 progresivos de 100 m",
      "Estirar 5'"
    ],
    dieta: cardio()
  },
  miércoles: {
    tipo: "Fuerza – Piernas + Core",
    workout: [
      "Calentamiento 8'",
      "Sentadillas al aire: 4×12",
      "Zancadas alternas: 3×10/10",
      "Hip thrust a una pierna en sofá: 3×10/10",
      "Plancha lateral: 3×25 s por lado",
      "Estiramientos 5'"
    ],
    dieta: fuerza()
  },
  jueves: {
    tipo: "Cardio – Bici 40–60' medio",
    workout: [
      "Rodar 40–60' Z2",
      "Últimos 10' cadencia alta (90–95 rpm) suave",
      "Estirar 5'"
    ],
    dieta: cardio()
  },
  viernes: {
    tipo: "Fuerza – Superior (pecho/hombro/brazos)",
    workout: [
      "Calentamiento 8'",
      "Flexiones abiertas: 4×8–10",
      "Pike push-ups (hombros): 3×6–8",
      "Remo invertido bajo mesa (si seguro) o toalla isométrica: 3×8–10",
      "Plancha + toques de hombro: 3×20 toques",
      "Estiramientos 5'"
    ],
    dieta: fuerza()
  },
  sábado: {
    tipo: "Bici larga 60' – Ritmo conversacional",
    workout: [
      "Rodar 60' Z2",
      "3×3' algo más alegres con 2' suaves",
      "Estirar 5'"
    ],
    dieta: biciLarga()
  },
  domingo: {
    tipo: "Descanso activo 30' paseo",
    workout: [
      "Moverte suave 30'",
      "Movilidad general 10'"
    ],
    dieta: descanso()
  }
};

/* ===== Dietas con alimentos pesados en gramos =====
   Pensadas con comida normal (sin suplementos).
   Usa báscula. Peso en crudo salvo que se indique (patata cocida).
*/

function fuerza() {
  return [
    { nombre: "Desayuno", items: [
      "Avena 80 g",
      "Leche semidesnatada 300 ml",
      "Plátano 120 g",
      "Crema de cacahuete 15 g"
    ]},
    { nombre: "Media mañana", items: [
      "Yogur griego natural 200 g",
      "Nueces 20 g",
      "Miel 10 g"
    ]},
    { nombre: "Comida", items: [
      "Arroz (en crudo) 120 g  → cocido ~360 g",
      "Pechuga de pollo 180 g",
      "Verduras salteadas 200 g",
      "Aceite de oliva 10 g (1 cda)"
    ]},
    { nombre: "Pre-entreno", items: [
      "Pan 100 g",
      "Pavo/jamón cocido 80 g"
    ]},
    { nombre: "Post-entreno", items: [
      "Leche 300 ml",
      "Plátano 120 g",
      "Yogur natural 125 g"
    ]},
    { nombre: "Cena", items: [
      "Patata cocida/horno 400 g",
      "Salmón 150 g (o merluza 200 g)",
      "Ensalada 200 g",
      "Aceite de oliva 10 g"
    ]}
  ];
}

function cardio() {
  return [
    { nombre: "Desayuno", items: [
      "Avena 60 g",
      "Leche 250 ml",
      "Fresa o arándanos 100 g"
    ]},
    { nombre: "Media mañana", items: [
      "Pan 80 g",
      "Queso fresco batido 200 g",
      "Miel 10 g"
    ]},
    { nombre: "Comida", items: [
      "Pasta integral (en crudo) 100 g",
      "Atún al natural escurrido 160 g",
      "Tomate/verduras 200 g",
      "Aceite de oliva 10 g"
    ]},
    { nombre: "Merienda", items: [
      "Fruta 150 g",
      "Frutos secos 20 g"
    ]},
    { nombre: "Cena", items: [
      "Arroz (en crudo) 70 g",
      "Pechuga de pollo 160 g",
      "Verduras 250 g",
      "Aceite de oliva 10 g"
    ]}
  ];
}

function biciLarga() {
  return [
    { nombre: "Desayuno", items: [
      "Avena 80 g con leche 300 ml",
      "Plátano 120 g",
      "Miel 10 g"
    ]},
    { nombre: "Antes de salir (30–60')", items: [
      "Pan 60 g + mermelada 20 g"
    ]},
    { nombre: "Durante (si >60')", items: [
      "Agua + pizca sal",
      "1 pieza de fruta 120–150 g o barrita ~30 g"
    ]},
    { nombre: "Comida", items: [
      "Arroz (en crudo) 120 g",
      "Pavo o pollo 180 g",
      "Verduras 200 g",
      "Aceite de oliva 10 g"
    ]},
    { nombre: "Merienda", items: [
      "Yogur griego 200 g + miel 10 g"
    ]},
    { nombre: "Cena", items: [
      "Patata cocida/horno 350 g",
      "Huevos 3 ud (≈ 170 g)",
      "Ensalada 200 g",
      "Aceite de oliva 10 g"
    ]}
  ];
}

function descanso() {
  return [
    { nombre: "Desayuno", items: [
      "Avena 50 g + leche 250 ml",
      "Fruta 150 g"
    ]},
    { nombre: "Media mañana", items: [
      "Queso fresco batido 200 g",
      "Nueces 15 g"
    ]},
    { nombre: "Comida", items: [
      "Arroz (en crudo) 70 g",
      "Ternera magra o pollo 180 g",
      "Verduras 250 g",
      "Aceite de oliva 10 g"
    ]},
    { nombre: "Merienda", items: [
      "Pan 60 g + pavo 60 g"
    ]},
    { nombre: "Cena", items: [
      "Verdura cocida 300 g",
      "Merluza 200 g (o huevos 3 ud)",
      "Aceite de oliva 10 g"
    ]}
  ];
}

/* ===== Render ===== */
function getTodayKey(){
  const today = new Date();
  return DAYS[today.getDay()];
}

function renderHoy(){
  const key = getTodayKey();
  const todayName = key.charAt(0).toUpperCase()+key.slice(1);
  document.getElementById("hoy-dia").textContent = todayName;

  const p = plan[key];
  // Entreno
  const wDiv = document.getElementById("workout");
  wDiv.innerHTML = `
    <div class="day">
      <p><strong>${p.tipo}</strong></p>
      <ul class="list">${p.workout.map(i=>`<li>${i}</li>`).join("")}</ul>
    </div>
  `;

  // Dieta
  const mDiv = document.getElementById("mealplan");
  mDiv.innerHTML = p.dieta.map(meal => `
    <div class="meal">
      <h3>${meal.nombre}</h3>
      <ul>${meal.items.map(x=>`<li>${x}</li>`).join("")}</ul>
    </div>
  `).join("");
}

function renderSemana(){
  const container = document.getElementById("weekplan");
  container.innerHTML = "";
  for(const [dia, data] of Object.entries(plan)){
    const name = dia.charAt(0).toUpperCase()+dia.slice(1);
    const bloque = document.createElement("div");
    bloque.className = "day";
    bloque.innerHTML = `
      <h3>${name} <span class="badge">${data.tipo}</span></h3>
      <p><strong>Entreno</strong></p>
      <ul class="list">${data.workout.map(i=>`<li>${i}</li>`).join("")}</ul>
      <p><strong>Dieta (gramos)</strong></p>
      ${data.dieta.map(m=>`
        <div class="meal">
          <h4>${m.nombre}</h4>
          <ul>${m.items.map(x=>`<li>${x}</li>`).join("")}</ul>
        </div>
      `).join("")}
    `;
    container.appendChild(bloque);
  }
}

/* Tabs */
document.querySelectorAll(".tab").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    document.querySelectorAll(".tab").forEach(b=>b.classList.remove("active"));
    document.querySelectorAll(".tabpanel").forEach(p=>p.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});

/* Init */
renderHoy();
renderSemana();