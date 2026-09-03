// Lista de animales con nombre común + científico + foto + silueta
const animalsData = [
  { name: "Huillín", scientific: "(Lontra provocax)", photo: "Huillin.png", shape: "Huillin.png" },
  { name: "Sapo esmeralda de la selva", scientific: "(Hylorina sylvatica)", photo: "RanaEsmeralda.png", shape: "RanaEsmeralda.png" },
  { name: "Churrete", scientific: "(Cinclodes patagonicus)", photo: "Churrete.png", shape: "Churrete.png" },
  { name: "Abejorro chileno", scientific: "(Bombus dahlbomii)", photo: "Abejorro.png", shape: "Abejorro.png" },
  { name: "Garza blanca grande", scientific: "(Ardea alba)", photo: "Garza.png", shape: "Garza.png" },
  { name: "Ranita de Darwin", scientific: "(Rhinoderma darwinii)", photo: "RanitaDeDarwin.png", shape: "RanitaDeDarwin.png" },
  { name: "Martín pescador", scientific: "(Megaceryle torquata)", photo: "MartinPescador.png", shape: "MartinPescador.png" },
  { name: "Chuncho", scientific: "(Glaucidium nana)", photo: "Chuncho.png", shape: "Chuncho.png" },
  { name: "Fío-fío", scientific: "(Elaenia albiceps)", photo: "FioFio.png", shape: "FioFio.png" },
  { name: "Coliguacho", scientific: "(Osca lata)", photo: "Coliguacho.png", shape: "Coliguacho.png" },
  { name: "Rana moteada", scientific: "(Batrachyla leptopus)", photo: "RanaMoteada.png", shape: "RanaMoteada.png" },
  { name: "Rana de hojarasca austral", scientific: "(Eupsophus calcaratus)", photo: "RanaDeHojarasca.png", shape: "RanaDeHojarasca.png" },
  { name: "Pilpilén", scientific: "(Haematopus palliatus)", photo: "Pilpilen.png", shape: "Pilpilen.png" },
  { name: "Pudú", scientific: "(Pudu puda)", photo: "Pudu.png", shape: "Pudu.png" },
  { name: "Chucao", scientific: "(Scelorchilus rubecula)", photo: "Chucao.png", shape: "Chucao.png" },
  { name: "Zorro chilote", scientific: "(Lycalopex fulvipes)", photo: "ZorroChilote.png", shape: "ZorroChilote.png" },
  { name: "Hadita del bosque", scientific: "(Sphictostethus gravesii)", photo: "HaditaDelBosque.png", shape: "HaditaDelBosque.png" },
  { name: "Sapito de antifaz", scientific: "(Batrachyla taeniata)", photo: "SapitoDeAntifaz.png", shape: "SapitoDeAntifaz.png" }
];

let score = 0;
let current = 0;

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
      scientific: animal.scientific,
      silhouette,
      correct,
      options: [correct, ...distractors].sort(() => Math.random() - 0.5)
    };
  });
}

const animals = generateAnimals();

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
  const animal = animals[current];

  if (selected === animal.correct) {
    score++;

    document.getElementById("message").innerText = "¡Correcto!";
    document.getElementById("message").style.color = "#d1530f";

    document.getElementById("correct-img").src = animal.correct;

    document.getElementById("correct-name").innerText = animal.name;
    document.getElementById("correct-scientific").innerText = animal.scientific;

    document.getElementById("correct-img").classList.add("correct-zoom");

    document.getElementById("silhouette-card").style.display = "none";
    document.getElementById("options").style.display = "none";

    document.getElementById("correct-animal").classList.remove("hidden");

    document.getElementById("nextBtn").style.display = "inline-block";

  } else {
    document.getElementById("message").innerText = "¡Inténtalo de nuevo!";
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

  scoreText.innerText = `Tu puntuación: ${score} de ${total} (${percent}%)`;

  final.classList.remove("hidden");

  startConfetti();
}

// Reiniciar juego
document.getElementById("restartBtn").onclick = () => {
  current = 0;
  score = 0;

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
