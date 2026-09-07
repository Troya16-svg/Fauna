// Lista de animales con nombre común + científico + foto + silueta
const animalsData = [
  { name: "Huillín", question: "¿sabes que anfibio está en estado crítico de extinción?", scientific: "(Lontra provocax)", photo: "Huillin.png", shape: "Huillin.png" },
  { name: "Sapo esmeralda de la selva", question: "¿Qué anfibio de color esmeralda corresponde a esta silueta?", scientific: "(Hylorina sylvatica)", photo: "RanaEsmeralda.png", shape: "RanaEsmeralda.png" },
  { name: "Churrete", question: "¿Qué ave se reconoce por esta silueta?", scientific: "(Cinclodes patagonicus)", photo: "Churrete.png", shape: "Churrete.png" },
  { name: "Abejorro chileno", question: "¿Qué insecto nativo corresponde a esta silueta?", scientific: "(Bombus dahlbomii)", photo: "Abejorro.png", shape: "Abejorro.png" },
  { name: "Garza blanca grande", question: "¿Qué ave zancuda aparece en esta silueta?", scientific: "(Ardea alba)", photo: "Garza.png", shape: "Garza.png" },
  { name: "Ranita de Darwin", question: "¿Qué pequeña rana corresponde a esta silueta?", scientific: "(Rhinoderma darwinii)", photo: "RanitaDeDarwin.png", shape: "RanitaDeDarwin.png" },
  { name: "Martín pescador", question: "¿Qué ave asociada a los ríos aparece aquí?", scientific: "(Megaceryle torquata)", photo: "MartinPescador.png", shape: "MartinPescador.png" },
  { name: "Chuncho", question: "¿Qué pequeña rapaz nocturna corresponde a esta silueta?", scientific: "(Glaucidium nana)", photo: "Chuncho.png", shape: "Chuncho.png" },
  { name: "Fío-fío", question: "¿Qué ave migratoria corresponde a esta silueta?", scientific: "(Elaenia albiceps)", photo: "FioFio.png", shape: "FioFio.png" },
  { name: "Coliguacho", question: "¿Qué insecto de alas transparentes aparece en esta silueta?", scientific: "(Osca lata)", photo: "Coliguacho.png", shape: "Coliguacho.png" },
  { name: "Rana moteada", question: "¿Qué rana moteada corresponde a esta silueta?", scientific: "(Batrachyla leptopus)", photo: "RanaMoteada.png", shape: "RanaMoteada.png" },
  { name: "Rana de hojarasca austral", question: "¿Qué anfibio del suelo del bosque aparece aquí?", scientific: "(Eupsophus calcaratus)", photo: "RanaDeHojarasca.png", shape: "RanaDeHojarasca.png" },
  { name: "Pilpilén", question: "¿Qué ave costera corresponde a esta silueta?", scientific: "(Haematopus palliatus)", photo: "Pilpilen.png", shape: "Pilpilen.png" },
  { name: "Pudú", question: "¿Qué pequeño ciervo nativo aparece en esta silueta?", scientific: "(Pudu puda)", photo: "Pudu.png", shape: "Pudu.png" },
  { name: "Chucao", question: "¿Qué ave del bosque lluvioso corresponde a esta silueta?", scientific: "(Scelorchilus rubecula)", photo: "Chucao.png", shape: "Chucao.png" },
  { name: "Zorro chilote", question: "¿Qué cánido endémico aparece en esta silueta?", scientific: "(Lycalopex fulvipes)", photo: "ZorroChilote.png", shape: "ZorroChilote.png" },
  { name: "Hadita del bosque", question: "¿Qué escarabajo nativo corresponde a esta silueta?", scientific: "(Sphictostethus gravesii)", photo: "HaditaDelBosque.png", shape: "HaditaDelBosque.png" },
  { name: "Sapito de antifaz", question: "¿Qué sapito con marcas faciales aparece aquí?", scientific: "(Batrachyla taeniata)", photo: "SapitoDeAntifaz.png", shape: "SapitoDeAntifaz.png" }
];

const animalDescriptions = {
  "Huillín": "Nutria de río que habita ambientes acuáticos de Chile y Argentina. Es una especie en peligro de extinción.",
  "Sapo esmeralda de la selva": "Rana arborícola de color verde brillante que vive entre la vegetación húmeda de los bosques del sur de Chile.",
  "Churrete": "Ave de orillas de ríos y esteros que busca pequeños invertebrados entre las piedras y cerca del agua.",
  "Abejorro chileno": "Abejorro nativo de gran tamaño y coloración rojiza. Es un polinizador importante de la flora del bosque templado.",
  "Garza blanca grande": "Ave zancuda de plumaje blanco que caza peces y otros animales pequeños en aguas poco profundas.",
  "Ranita de Darwin": "Pequeña rana del bosque nativo. El macho protege a sus crías transportándolas dentro de su saco vocal.",
  "Martín pescador": "Ave de colores intensos que se alimenta principalmente de peces, capturándolos mediante rápidos vuelos sobre el agua.",
  "Chuncho": "Pequeña rapaz activa de día y de noche, que caza insectos, aves pequeñas y roedores.",
  "Fío-fío": "Ave pequeña y migratoria que llega al sur de Chile durante la primavera para alimentarse y reproducirse.",
  "Coliguacho": "Tábano de gran tamaño y alas transparentes, frecuente en zonas boscosas y húmedas durante los meses cálidos.",
  "Rana moteada": "Anfibio pequeño de piel moteada que vive entre la hojarasca y la vegetación húmeda del bosque austral.",
  "Rana de hojarasca austral": "Rana terrestre que se refugia bajo hojas y troncos húmedos. Su canto se escucha en los bosques del sur.",
  "Pilpilén": "Ave costera de pico largo y fuerte, adaptado para abrir moluscos y buscar alimento en playas y estuarios.",
  "Pudú": "El ciervo más pequeño de Chile. Vive en bosques densos y se alimenta de hojas, brotes y frutos.",
  "Chucao": "Ave terrestre de colores intensos y canto característico, asociada a los bosques húmedos del sur.",
  "Zorro chilote": "Cánido endémico de los bosques templados de Chiloé y Nahuelbuta. Es uno de los mamíferos más amenazados de Chile.",
  "Hadita del bosque": "Escarabajo nativo de los bosques del sur, donde participa en el ciclo natural de la materia orgánica del suelo.",
  "Sapito de antifaz": "Pequeño anfibio de bosque que recibe su nombre por las manchas oscuras alrededor de sus ojos."
};

let score = 0;
let errors = 0;
let current = 0;
let answerLocked = false;

const welcomeScreen = document.getElementById("welcome-screen");
const gameScreen = document.getElementById("game-screen");
const photoModal = document.getElementById("photo-modal");
const zoomedPhoto = document.getElementById("zoomed-photo");
const photoHelp = document.getElementById("photo-help");
const photoViewport = document.getElementById("photo-viewport");
let photoZoom = 1;
let photoOffsetX = 0;
let photoOffsetY = 0;
let dragStartX = 0;
let dragStartY = 0;

function updatePhotoTransform() {
  zoomedPhoto.style.transform = `translate(${photoOffsetX}px, ${photoOffsetY}px) scale(${photoZoom})`;
}

function resetPhotoZoom() {
  photoZoom = 1;
  photoOffsetX = 0;
  photoOffsetY = 0;
  updatePhotoTransform();
}

function changePhotoZoom(amount) {
  photoZoom = Math.min(5, Math.max(1, photoZoom + amount));
  updatePhotoTransform();
}

function closePhotoZoom() {
  photoModal.classList.add("hidden");
}

document.getElementById("correct-photo-btn").onclick = () => {
  zoomedPhoto.src = document.getElementById("correct-img").src;
  zoomedPhoto.alt = document.getElementById("correct-img").alt;
  resetPhotoZoom();
  photoModal.classList.remove("hidden");
  document.getElementById("close-photo-btn").focus();
};

document.getElementById("close-photo-btn").onclick = closePhotoZoom;

photoModal.onclick = event => {
  if (event.target === photoModal) closePhotoZoom();
};

document.getElementById("zoom-in-btn").onclick = () => changePhotoZoom(0.5);
document.getElementById("zoom-out-btn").onclick = () => changePhotoZoom(-0.5);
document.getElementById("reset-zoom-btn").onclick = resetPhotoZoom;

photoViewport.addEventListener("wheel", event => {
  event.preventDefault();
  changePhotoZoom(event.deltaY < 0 ? 0.25 : -0.25);
}, { passive: false });

photoViewport.addEventListener("pointerdown", event => {
  photoViewport.setPointerCapture(event.pointerId);
  dragStartX = event.clientX - photoOffsetX;
  dragStartY = event.clientY - photoOffsetY;
});

photoViewport.addEventListener("pointermove", event => {
  if (!photoViewport.hasPointerCapture(event.pointerId)) return;
  photoOffsetX = event.clientX - dragStartX;
  photoOffsetY = event.clientY - dragStartY;
  updatePhotoTransform();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closePhotoZoom();
});

document.getElementById("startBtn").onclick = () => {
  welcomeScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
  loadAnimal();
};

// Genera animales con distractores
function generateAnimals() {
  return animalsData.map(animal => {
    const silhouette = `siluetas/${animal.shape}`;
    const correct = `fotos/${animal.photo}`;

    const distractors = animalsData
      .filter(a => a.name !== animal.name)
      .sort(() => Math.random() - 0.5)
      .slice(0, 4)
      .map(a => `fotos/${a.photo}`);

    return {
      name: animal.name,
      question: animal.question,
      scientific: animal.scientific,
      silhouette,
      correct,
      options: [correct, ...distractors].sort(() => Math.random() - 0.5)
    };
  });
}

let animals = generateAnimals().sort(() => Math.random() - 0.5);

// Barra de progreso
function updateProgress() {
  const total = animals.length;
  const progress = ((current + 1) / total) * 100;
  document.getElementById("progress-bar").style.width = progress + "%";
}

// Ocultar UI del juego
function hideGameUI() {
  document.querySelector(".game-eyebrow").classList.add("hidden");
  document.getElementById("Title").classList.add("hidden");
  document.getElementById("question").classList.add("hidden");
  document.getElementById("silhouette-card").style.display = "none";
  document.getElementById("options").style.display = "none";
  document.getElementById("message").style.display = "none";
  document.getElementById("correct-animal").classList.add("hidden");
  document.getElementById("nextBtn").style.display = "none";
  document.getElementById("progress-container").style.display = "none";
}

// Mostrar UI del juego
function showGameUI() {
  document.querySelector(".game-eyebrow").classList.remove("hidden");
  document.getElementById("Title").classList.remove("hidden");
  document.getElementById("question").classList.remove("hidden");
  document.getElementById("silhouette-card").style.display = "flex";
  document.getElementById("options").style.display = "flex";
  document.getElementById("message").style.display = "block";
  document.getElementById("progress-container").style.display = "block";
}

// Cargar animal
function loadAnimal() {
  if (current >= animals.length) {
    showFinalScreen();
    return;
  }

  const animal = animals[current];
  answerLocked = false;
  closePhotoZoom();

  document.getElementById("question").innerText = animal.question;

  document.getElementById("correct-animal").classList.add("hidden");
  document.getElementById("correct-img").classList.remove("correct-zoom");
  document.getElementById("correct-scientific").innerText = "";

  document.getElementById("silhouette-card").style.display = "flex";
  document.getElementById("options").style.display = "flex";

  document.getElementById("silhouette").src = animal.silhouette;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  animal.options.forEach(option => {
    const div = document.createElement("div");
    div.classList.add("option");

    const img = document.createElement("img");
    img.src = option;

    img.onclick = () => checkAnswer(option);

    div.appendChild(img);
    optionsDiv.appendChild(div);
  });

  document.getElementById("message").innerText = "";
  document.getElementById("nextBtn").style.display = "none";

  updateProgress();
}

// Verificar respuesta
function checkAnswer(selected) {
  if (answerLocked) return;

  const animal = animals[current];
  answerLocked = true;

  if (selected === animal.correct) {
    score++;

    document.getElementById("message").innerText = "¡Correcto!";
    document.getElementById("message").style.color = "#096c00";

    document.getElementById("correct-img").src = animal.correct;

    document.getElementById("correct-name").innerText = animal.name;
    document.getElementById("correct-scientific").innerText = animal.scientific;
    photoHelp.innerText = animalDescriptions[animal.name];

    document.getElementById("correct-img").classList.add("correct-zoom");

    document.getElementById("silhouette-card").style.display = "none";
    document.getElementById("options").style.display = "none";

    document.getElementById("correct-animal").classList.remove("hidden");

    document.getElementById("nextBtn").style.display = "inline-block";

  } else {
    errors++;
    document.getElementById("message").innerText = "Incorrecto!";
    document.getElementById("message").style.color = "#f70808a1";

    setTimeout(() => {
      current++;
      loadAnimal();
    }, 700);
  }
}

// Botón siguiente
document.getElementById("nextBtn").onclick = () => {
  current++;
  loadAnimal();
};

// Pantalla final
function showFinalScreen() {
  hideGameUI();

  const final = document.getElementById("final-screen");
  const scoreText = document.getElementById("final-score");

  const total = animals.length;
  const percent = Math.round((score / total) * 100);

  scoreText.innerText = `Tu puntuación:\n${score} de ${total} (${percent}%) - Errores: ${errors}`;

  final.classList.remove("hidden");

  startConfetti();
}

// Reiniciar juego
document.getElementById("restartBtn").onclick = () => {
  current = 0;
  score = 0;
  errors = 0;
  answerLocked = false;
  animals = generateAnimals().sort(() => Math.random() - 0.5);

  document.getElementById("final-screen").classList.add("hidden");
  document.getElementById("confetti-canvas").style.display = "none";

  showGameUI();

  document.getElementById("message").innerText = "";
  document.getElementById("progress-bar").style.width = "0%";
  document.getElementById("nextBtn").style.display = "none";

  loadAnimal();
};

/* CONFETI */
function startConfetti() {
  const canvas = document.getElementById("confetti-canvas");
  canvas.style.display = "block";

  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const confetti = [];

  for (let i = 0; i < 150; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: Math.random() * 6 + 2,
      d: Math.random() * 2 + 1,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    confetti.forEach(c => {
      ctx.beginPath();
      ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
      ctx.fillStyle = c.color;
      ctx.fill();

      c.y += c.d;
      if (c.y > canvas.height) c.y = -10;
    });

    requestAnimationFrame(draw);
  }

  draw();
}

// La partida comienza desde la pantalla de bienvenida.
