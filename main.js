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

let score = 0;
let errors = 0;
let current = 0;
let answerLocked = false;

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
  document.getElementById("silhouette-card").style.display = "none";
  document.getElementById("options").style.display = "none";
  document.getElementById("message").style.display = "none";
  document.getElementById("nextBtn").style.display = "none";
  document.getElementById("progress-container").style.display = "none";
}

// Mostrar UI del juego
function showGameUI() {
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
    document.getElementById("message").style.color = "#007e2e";

    document.getElementById("correct-img").src = animal.correct;

    document.getElementById("correct-name").innerText = animal.name;
    document.getElementById("correct-scientific").innerText = animal.scientific;

    document.getElementById("correct-img").classList.add("correct-zoom");

    document.getElementById("silhouette-card").style.display = "none";
    document.getElementById("options").style.display = "none";

    document.getElementById("correct-animal").classList.remove("hidden");

    document.getElementById("nextBtn").style.display = "inline-block";

  } else {
    errors++;
    document.getElementById("message").innerText = "Incorrecto!";
    document.getElementById("message").style.color = "#b20202a1";

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

  scoreText.innerText = `Tu puntuación: ${score} de ${total} (${percent}%) - Errores: ${errors}`;

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

// Iniciar juego
loadAnimal();
