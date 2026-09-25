// Lista de animales con nombre común + científico + foto + silueta
const animalsData = [
  { name: "Huillín", question: "¿A qué especie se le conoce como gato de río?", scientific: "(Lontra provocax)", photo: "Huillin.png", shape: "Huillin.png" },
  { name: "Churrete", question: "¿Qué especie de ave es conocida por su activa digestión?", scientific: "(Cinclodes patagonicus)", photo: "Churrete.png", shape: "Churrete.png" },
  { name: "Abejorro chileno", question: "¿Qué especie de insecto se encuentra entre los abejorro más grandes del mundo?", scientific: "(Bombus dahlbomii)", photo: "Abejorro.png", shape: "Abejorro.png" },
  { name: "Garza grande", question: "¿Qué ave acuática está ampliamante distribuida en el mundo?", scientific: "(Ardea alba)", photo: "Garza.png", shape: "Garza.png" },
  { name: "Martín pescador", question: "¿Qué ave asociada a los ríos aparece aquí?", scientific: "(Megaceryle torquata)", photo: "MartinPescador.png", shape: "MartinPescador.png" },
  { name: "Chuncho", question: "¿Cuál es el búho más pequeño de Chile?", scientific: "(Glaucidium nana)", photo: "Chuncho.png", shape: "Chuncho.png" },
  { name: "Fío-fío", question: "¿Qué ave del bosque es conocida por migrar miles de kilómetros hasta la región amazónica?", scientific: "(Elaenia albiceps)", photo: "FioFio.png", shape: "FioFio.png" },
  { name: "Coliguacho", question: "¿Qué insecto volador se alimenta de sangre?", scientific: "(Osca lata)", photo: "Coliguacho.png", shape: "Coliguacho.png" },
  { name: "Pilpilén", question: "¿Qué ave habita todo tipo de costas aunque prefiere las playas de arena?", scientific: "(Haematopus palliatus)", photo: "Pilpilen.png", shape: "Pilpilen.png" },
  { name: "Pudú", question: "¿Cuál es el ciervo más pequeño de Chile?", scientific: "(Pudu puda)", photo: "Pudu.png", shape: "Pudu.png" },
  { name: "Chucao", question: "¿Qué ave del bosque prefiere correr y saltar por el suelo en lugar de volar?", scientific: "(Scelorchilus rubecula)", photo: "Chucao.png", shape: "Chucao.png" },
  { name: "Zorro chilote", question: "¿Cuál es el zorro más pequeño de Chile?", scientific: "(Lycalopex fulvipes)", photo: "ZorroChilote.png", shape: "ZorroChilote.png" },
  { name: "Hadita del bosque", question: "¿Qué insecto destaca por sus alas doradas con manchas oscuras que camina por el bosque?", scientific: "(Sphictostethus gravesii)", photo: "HaditaDelBosque.png", shape: "HaditaDelBosque.png" },

  // { name: "Sapito de antifaz", question: "¿Qué sapito con marcas faciales aparece aquí?", scientific: "(Batrachyla taeniata)", photo: "SapitoDeAntifaz.png", shape: "SapitoDeAntifaz.png" }
 // { name: "Ranita de Darwin", question: "¿Qué pequeña rana corresponde a esta silueta?", scientific: "(Rhinoderma darwinii)", photo: "RanitaDeDarwin.png", shape: "RanitaDeDarwin.png" },
 // { name: "Sapo esmeralda de la selva", question: "Piel suave. Extremidades muy largas y delgadas. Su color es verde esmeralda, con manchas cobrizas irregulares", scientific: "(Hylorina sylvatica)", photo: "RanaEsmeralda.png", shape: "RanaEsmeralda.png" },
 // { name: "Rana de hojarasca austral", question: "¿Qué anfibio del suelo del bosque aparece aquí?", scientific: "(Eupsophus calcaratus)", photo: "RanaDeHojarasca.png", shape: "RanaDeHojarasca.png" },

];

const animalDescriptions = {
  "Huillín": "Es conocido por su agilidad para desplazarse a través de los cuerpos de agua del sur de Chile",
  "Churrete": "Sus deposiciones son muy líquidas y frecuentes debido a su rápido metabolismo, dejando rastros al defecar continuamente",
  "Abejorro chileno": "La reina del abejorro chileno es considerada uno de los insectos más grandes del mundo, pueden alcanzar hasta 3 cm de longitud. Se encuentra en peligro de extinción, por la presencia de especies exóticas y la destrucción de hábitat",
  "Garza grande": "Habita en todos los continentes, excepto en la Antártica. Destaca por su plumaje completamente blanco y su gran tamaño",
  "Martín pescador": "El martín pescador es de color gris azulado en la cabeza, dorso y alas. Se alimenta en cursos de agua de todo tipo, corrientes o estancadas",
  "Chuncho": "Esta ave es de hábitos diurnos y nocturnos, se alimenta de insectos, reptiles, roedores e incluso animales más grandes ",
  "Fío-fío": "Al finalizar el verano emprende un viaje de miles de kilómetros hacia el norte, llegando a Perú, Brasil e incluso Colombia",
  "Coliguacho": "Las hembras de coliguacho son hematófagas, consumen sangre de mamíferos (humanos, vacas, caballos) para obtener proteínas que permiten el desarrollo de sus huevos",
  "Pilpilén": "Se distribuye desde Arica hasta Chiloé, y en menor número hasta Magallanes. Se alimenta de invertebrados marinos como almejas, choros, lapas y cangrejos",
  "Pudú": "Es el segundo más pequeño del mundo, alcanzando una altura de 30 a 40 cm",
  "Chucao": "Sus vuelos son sumamente cortos y bajos, utilizándolos solo para escapar de algún peligro",
  "Zorro chilote": "Es un cánido endémico de Chile y es considerado mundialmente uno de los mamíferos en mayor peligro de extinción",
  "Hadita del bosque": "Presenta colores brillantes, cubierto de un vello dorado. Las hembras poseen pequeñas alas que les impiden volar",

  //"Sapito de antifaz": "Pequeño anfibio de bosque que recibe su nombre por las manchas oscuras alrededor de sus ojos."
  //"Sapo esmeralda de la selva": "Tamaño grande. Habita ambientes frecuentemente anegados con presencia de helechos y juncos",
  //"Rana moteada": "Anfibio pequeño de piel moteada que vive entre la hojarasca y la vegetación húmeda del bosque austral.",
  //"Rana de hojarasca austral": "Rana terrestre que se refugia bajo hojas y troncos húmedos. Su canto se escucha en los bosques del sur.",
  //"Ranita de Darwin": "Pequeña rana del bosque nativo. El macho protege a sus crías transportándolas dentro de su saco vocal.",
};

const animalCategories = {
  "Huillín": "Mamiferos",
  "Churrete": "Aves",
  "Abejorro chileno": "Insectos",
  "Garza grande": "Aves",
  "Martín pescador": "Aves",
  "Chuncho": "Aves",
  "Fío-fío": "Aves",
  "Coliguacho": "Insectos",
  "Pilpilén": "Aves",
  "Pudú": "Mamiferos",
  "Chucao": "Aves",
  "Zorro chilote": "Mamiferos",
  "Hadita del bosque": "Insectos"
};

const categoryOptions = {
  Aves: [
    "Chorlo-chileno.png", "Chucao.png", "Chuncho.png", "Churrete.png",
    "Fío-Fío.png", "Garza grande.png", "Gaviota cáhuil.png",
    "Martín pescador.png", "Pilpilén.png"
  ],
  Insectos: [
    "Abejorro chileno.png", "Avispa azul.png", "Burrito o caballito-de-palo.png",
    "Ciervo volante.png", "Grillo rojo chileno.png", "Hadita del bosque.png",
    "Libélula o matapiojo azul.png", "Peorro.png", "Tábano o coliguacho.png",
    "Típula.png"
  ],
  Mamiferos: [
    "Comadrejita trompuda.png", "Güiña.png", "Huillin.png", "Monito del monte.png",
    "Pudu.png", "Zorro chilote.png"
  ]
};

const animalOptionPhotos = {
  "Huillín": "Huillin.png",
  "Churrete": "Churrete.png",
  "Abejorro chileno": "Abejorro chileno.png",
  "Garza grande": "Garza grande.png",
  "Martín pescador": "Martín pescador.png",
  "Chuncho": "Chuncho.png",
  "Fío-fío": "Fío-Fío.png",
  "Coliguacho": "Tábano o coliguacho.png",
  "Pilpilén": "Pilpilén.png",
  "Pudú": "Pudu.png",
  "Chucao": "Chucao.png",
  "Zorro chilote": "Zorro chilote.png",
  "Hadita del bosque": "Hadita del bosque.png"
};

const animalFullPhotos = {
  "Huillín": "Huillín.png",
  "Churrete": "Churrete.png",
  "Abejorro chileno": "Abejorro chileno.png",
  "Garza grande": "Garza grande.png",
  "Martín pescador": "Martín pescador.png",
  "Chuncho": "Chuncho.png",
  "Fío-fío": "Fío-Fío.png",
  "Coliguacho": "Tábano o coliguacho.png",
  "Pilpilén": "Pilpilén.png",
  "Pudú": "Pudú.png",
  "Chucao": "Chucao.png",
  "Zorro chilote": "Zorro chilote.png",
  "Hadita del bosque": "Hadita del bosque.png"
};

let score = 0;
let errors = 0;
let current = 0;
let answerLocked = false;
const MAX_ANIMALS_PER_GAME = 10;

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
let photoPointerStartX = 0;
let photoPointerStartY = 0;
let photoWasDragged = false;
const photoPanSpeed = 1;

function updatePhotoTransform() {
  zoomedPhoto.style.transform = `translate(${photoOffsetX}px, ${photoOffsetY}px) scale(${photoZoom})`;
  photoViewport.classList.toggle("is-zoomed", photoZoom > 1);
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

function zoomPhotoAtPoint(event) {
  if (photoWasDragged) {
    photoWasDragged = false;
    return;
  }

  const viewportRect = photoViewport.getBoundingClientRect();
  const centerX = viewportRect.width / 2;
  const centerY = viewportRect.height / 2;
  const clickX = event.clientX - viewportRect.left;
  const clickY = event.clientY - viewportRect.top;
  const imageX = (clickX - centerX - photoOffsetX) / photoZoom;
  const imageY = (clickY - centerY - photoOffsetY) / photoZoom;
  const nextZoom = Math.min(5, photoZoom + 0.75);

  photoOffsetX = clickX - centerX - imageX * nextZoom;
  photoOffsetY = clickY - centerY - imageY * nextZoom;
  photoZoom = nextZoom;
  updatePhotoTransform();
}

function closePhotoZoom() {
  photoModal.classList.add("hidden");
}

document.getElementById("correct-photo-btn").onclick = () => {
  const correctImage = document.getElementById("correct-img");
  zoomedPhoto.src = correctImage.dataset.fullSrc || correctImage.src;
  zoomedPhoto.alt = correctImage.alt;
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

photoViewport.addEventListener("click", zoomPhotoAtPoint);

photoViewport.addEventListener("pointerdown", event => {
  photoViewport.setPointerCapture(event.pointerId);
  photoPointerStartX = event.clientX;
  photoPointerStartY = event.clientY;
  photoWasDragged = false;
  dragStartX = event.clientX - photoOffsetX;
  dragStartY = event.clientY - photoOffsetY;
});

photoViewport.addEventListener("pointermove", event => {
  if (!photoViewport.hasPointerCapture(event.pointerId)) return;
  if (Math.abs(event.clientX - photoPointerStartX) > 4 ||
      Math.abs(event.clientY - photoPointerStartY) > 4) {
    photoWasDragged = true;
  }
  photoOffsetX = (event.clientX - photoPointerStartX) * photoPanSpeed +
    (photoPointerStartX - dragStartX);
  photoOffsetY = (event.clientY - photoPointerStartY) * photoPanSpeed +
    (photoPointerStartY - dragStartY);
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
  return animalsData
    .sort(() => Math.random() - 0.5)
    .slice(0, MAX_ANIMALS_PER_GAME)
    .map(animal => {
    const category = animalCategories[animal.name];
    const optionPhoto = animalOptionPhotos[animal.name];
    const silhouette = `siluetas/${category}/${optionPhoto}`;
    const correct = `fotos/${category}/${optionPhoto}`;
    const fullPhoto = animalFullPhotos[animal.name]
      ? `FotosFull/${category}/${animalFullPhotos[animal.name]}`
      : correct;

    const distractors = categoryOptions[category]
      .filter(photo => photo !== optionPhoto)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map(photo => `fotos/${category}/${photo}`);

    return {
      name: animal.name,
      question: animal.question,
      scientific: animal.scientific,
      silhouette,
      correct,
      fullPhoto,
      options: [correct, ...distractors].sort(() => Math.random() - 0.5)
    };
    });
}

let animals = generateAnimals();

// Barra de progreso
function updateProgress() {
  const total = animals.length;
  const progress = (current + 0.25) / total * 100;
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
  document.getElementById("message").classList.remove("feedback-incorrect");

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
    document.getElementById("correct-img").dataset.fullSrc = animal.fullPhoto;

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
    document.getElementById("message").classList.add("feedback-incorrect");

    document.getElementById("silhouette-card").style.display = "none";
    document.getElementById("options").style.display = "none";

    setTimeout(() => {
      current++;
      loadAnimal();
    }, 1500);
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
  animals = generateAnimals();

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
