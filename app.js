/* Tabs */
document.querySelectorAll(".tab").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    document.querySelectorAll(".tab").forEach(b=>b.classList.remove("active"));
    document.querySelectorAll(".tabpanel").forEach(p=>p.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});

/* Semana (placeholder rápido; luego añadimos resto de días) */
const weekplan = [
  {dia:"Lunes", tipo:"Fuerza (Pecho + Core)", dieta:"Avena+Huevos+Pan · Pollo+Arroz+Ensalada · Yogur+Frutos secos · Merluza+Patata+Verduras"},
  {dia:"Martes", tipo:"Correr 25–30' + 3×100 m", dieta:"Más hidratos (pasta/arroz) y proteína moderada"},
  {dia:"Miércoles", tipo:"Fuerza (Pierna + Core)", dieta:"Prote alta + hidratos medios"},
  {dia:"Jueves", tipo:"Bici 40–60' Z2", dieta:"Carbos medios + proteína"},
  {dia:"Viernes", tipo:"Fuerza Superior (foco pecho)", dieta:"Prote alta + hidratos medios"},
  {dia:"Sábado", tipo:"Bici 60' con bloques", dieta:"Más hidratos (pre/durante/post)"},
  {dia:"Domingo", tipo:"Descanso activo 30'", dieta:"Ligera, verduras y proteína magra"}
];

const wp = document.getElementById("weekplan");
if (wp) {
  wp.innerHTML = weekplan.map(d=>`
    <div class="meal">
      <div class="meal-body">
        <h3>${d.dia} — <span class="badge">${d.tipo}</span></h3>
        <p>${d.dieta}</p>
      </div>
    </div>
  `).join("");
}

/* Modales de ejercicios */
document.querySelectorAll(".exercise").forEach(card=>{
  card.addEventListener("click", ()=>{
    const id = card.getAttribute("data-modal");
    document.getElementById(id).classList.add("open");
  });
});
document.querySelectorAll("[data-close]").forEach(btn=>{
  btn.addEventListener("click", ()=> btn.closest(".modal").classList.remove("open"));
});
document.addEventListener("keydown", (e)=>{
  if(e.key==="Escape") document.querySelectorAll(".modal.open").forEach(m=>m.classList.remove("open"));
});
document.addEventListener("click", (e)=>{
  if(e.target.classList.contains("modal")) e.target.classList.remove("open");
});