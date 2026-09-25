// Lista de animales con nombre común + científico + foto + silueta
const animalsData = [
  { name: "Martín pescador", question: "¿Qué ave asociada a los ríos aparece aquí?", scientific: "(Megaceryle torquata)", photo: "MartinPescador.png", shape: "MartinPescador.png" },
  { name: "Garza grande", question: "¿Qué ave acuática está ampliamante distribuida en el mundo?", scientific: "(Ardea alba)", photo: "Garza.png", shape: "Garza.png" },
  { name: "Pilpilén", question: "¿Qué ave habita todo tipo de costas aunque prefiere las playas de arena?", scientific: "(Haematopus palliatus)", photo: "Pilpilen.png", shape: "Pilpilen.png" },
  { name: "Chucao", question: "¿Qué ave del bosque prefiere correr y saltar por el suelo en lugar de volar?", scientific: "(Scelorchilus rubecula)", photo: "Chucao.png", shape: "Chucao.png" },
  { name: "Chuncho", question: "¿Cuál es el búho más pequeño de Chile?", scientific: "(Glaucidium nana)", photo: "Chuncho.png", shape: "Chuncho.png" },
  { name: "Churrete", question: "¿Qué especie de ave es conocida por su activa digestión?", scientific: "(Cinclodes patagonicus)", photo: "Churrete.png", shape: "Churrete.png" },
  { name: "Fío-fío", question: "¿Qué ave del bosque es conocida por migrar miles de kilómetros hasta la región amazónica?", scientific: "(Elaenia albiceps)", photo: "FioFio.png", shape: "FioFio.png" },
  { name: "Chorlo chileno", question: "¿Qué ave playera migratoria cambia su plumaje nupcial a un plumaje invernal?", scientific: "(Zonibyx modestus)", photo: "Chorlo chileno.png", shape: "Chorlo chileno.png" },
  { name: "Gaviota cáhuil", question: "¿Qué gaviota migratoria cambia su característico capuchón negro en la época reproductiva que luego se vuelve completamente blanco en el invierno?", scientific: "(Chroicocephalus maculipennis)", photo: "Gaviota cáhuil.png", shape: "Gaviota cáhuil.png" },
  // { name: "Cormorán yeco", question: "¿Qué ave acuática y buceadora es común verlas con las alas completamente abiertas para secarlas al sol o al viento?", scientific: "(Nannopterum brasilianum)", photo: "Cormorán yeco.png", shape: "Cormorán yeco.png" },
  { name: "Abejorro chileno", question: "¿Qué especie de insecto se encuentra entre los abejorro más grandes del mundo?", scientific: "(Bombus dahlbomii)", photo: "Abejorro.png", shape: "Abejorro.png" },
  { name: "Tábano o coliguacho", question: "¿Qué insecto volador se alimenta de sangre?", scientific: "(Osca lata)", photo: "Tábano o coliguacho.png", shape: "Tábano o coliguacho.png" },
  { name: "Hadita del bosque", question: "¿Qué insecto destaca por sus alas doradas con manchas oscuras que camina por el bosque?", scientific: "(Sphictostethus gravesii)", photo: "HaditaDelBosque.png", shape: "HaditaDelBosque.png" },
  { name: "Peorro", question: "¿Qué insecto al sentirse bajo amenaza expulsa un líquido de olor nauseabundo?", scientific: "(Ceroglossus magellanicus)", photo: "Peorro.png", shape: "Peorro.png" },
  { name: "Grillo rojo chileno", question: "¿Qué insecto es similar a un grillo pero de aspecto compacto, robusto, de color rojo oscuro, que tiene espinas en sus patas posteriores y su mordedura es bastante dolorosa si se le manipula de forma incorrecta?", scientific: "(Cratomelus armatus)", photo: "Grillo rojo chileno.png", shape: "Grillo rojo chileno.png" },
  { name: "Ciervo volante", question: "¿Qué insecto presenta mandíbulas gigantescas en forma de asta de ciervo?", scientific: "(Chiasognathus grantii)", photo: "Ciervo volante.png", shape: "Ciervo volante.png" },
  { name: "Libélula o matapiojo azul", question: "¿Qué insecto volador es carnívoro y se desplaza a sectores secos y lejanos a su origen acuático?", scientific: "(Rhionaeschna diffinis)", photo: "Libélula o matapiojo azul.png", shape: "Libélula o matapiojo azul.png" },
  { name: "Burrito o caballito de palo", question: "¿Qué escarabajo no volador posee un exoesquelo negro, robusto y duro, y además contiene un hocico o trompa prominente para alimentarse de vegetación?", scientific: "(Rhyephenes humeralis)", photo: "Burrito o caballito de palo.png", shape: "Burrito o caballito de palo.png" },
  { name: "Avispa azul", question: "¿Qué tipo de avispa de tonalidades oscuras y metalizadas presenta un tipo de 'aguijón' o 'cola larga' que en realidad es un ovopositor alargado?", scientific: "(Dotocryptus bellicosus)", photo: "Avispa azul.png", shape: "Avispa azul.png" },
  { name: "Típula", question: "¿¿Qué insecto volador tiene apariencia de zancudo pero en realidad son inofensivos y se alimentan de néctar?", scientific: "(Tipula sp.)", photo: "Típula.png", shape: "Típula.png" },
  { name: "Zorro chilote", question: "¿Cuál es el zorro más pequeño de Chile?", scientific: "(Lycalopex fulvipes)", photo: "ZorroChilote.png", shape: "ZorroChilote.png" },
  { name: "Pudú", question: "¿Cuál es el ciervo más pequeño de Chile?", scientific: "(Pudu puda)", photo: "Pudu.png", shape: "Pudu.png" },
  { name: "Huillín", question: "¿A qué especie se le conoce como gato de río?", scientific: "(Lontra provocax)", photo: "Huillin.png", shape: "Huillin.png" },
  { name: "Monito del monte", question: "¿Cómo se llama el pequeño marsupial que sobrevive a los meses fríos acumulando reservas de grasa en su cola prensil?", scientific: "(Dromiciops gliroides)", photo: "Monito del monte.png", shape: "Monito del monte" },
  // { name: "Chungungo", question: "¿Qué mamífero marino es una de las nutrias más pequeñas del mundo y vive principalmente en costas rocosas?", scientific: "(Lontra felina)", photo: "Chungungo.png", shape: "Chungungo" },
  // { name: "Quique", question: "¿Qué mustélido carnívoro se caracteriza por su mecanismo de defensa fétido?", scientific: "(Galictis cuja)", photo: "Quique.png", shape: "Quique" },
  { name: "Güiña", question: "¿Cuál es el felino silvestre más pequeño de Sudamérica?", scientific: "(Leopardus guigna)", photo: "Güiña.png", shape: "Güiña" },
  { name: "Comadrejita trompuda", question: "¿Qué pequeño marsupial de conducta fosorial se reconoce fácilmente por su hocico largo y puntiagudo, parecido a una pequeña trompa?", scientific: "(Rhyncholestes raphanurus)", photo: "Comadrejita trompuda.png", shape: "Comadrejita trompuda" },
  // { name: "Ratón oliváceo", question: "¿Qué pequeño roedor tiene un pelaje de tonalidad olivácea y es común en distintos ambientes de Chile?", scientific: "(Abrothrix olivaceus)", photo: "Ratón oliváceo.png", shape: "Ratón oliváceo" },
  { name: "Coipo", question: "¿Cuál es el roedor más grande que habita en Chile y está adaptado a la vida en el agua?", scientific: "(Myocastor coypus)", photo: "Coipo.png", shape: "Coipo" },
  
];

const animalDescriptions = {
  "Martín pescador": "El martín pescador es de color gris azulado en la cabeza, dorso y alas. Se alimenta en cursos de agua de todo tipo, corrientes o estancadas",
  "Garza grande": "Habita en todos los continentes, excepto en la Antártica. Destaca por su plumaje completamente blanco y su gran tamaño",
  "Pilpilén": "Se distribuye desde Arica hasta Chiloé, y en menor número hasta Magallanes. Se alimenta de invertebrados marinos como almejas, choros, lapas y cangrejos",
  "Chucao": "Sus vuelos son sumamente cortos y bajos, utilizándolos solo para escapar de algún peligro",
  "Chuncho": "Esta ave es de hábitos diurnos y nocturnos, se alimenta de insectos, reptiles, roedores e incluso animales más grandes ",
  "Churrete": "Sus deposiciones son muy líquidas y frecuentes debido a su rápido metabolismo, dejando rastros al defecar continuamente",
  "Fío-fío": "Al finalizar el verano emprende un viaje de miles de kilómetros hacia el norte, llegando a Perú, Brasil e incluso Colombia",
  "Chorlo chileno": "El chorlo chileno nidifica en la Patagonia y Tierra del Fuego, y durante los meses de invierno migra miles de kilómetros hacia el norte de Chile, transformando su coloración de pecho anaranjado y banda negra, a un tono más parduzco y gris en el proceso.",
  "Gaviota cáhuil": "La gaviota caáhuil durante el verano nidifica en humedales australes del centro sur de Chile y Argentina, y en invierno migra hacia el norte mudando su plumaje para lucir una cabeza blanca con un parche negro en la zona auricular.",
  "Cormorán yeco": "El cormorán yeco se distribuye tanto en la costa marina como en ríos y lagos interiores. Se alimenta buceando, lo que provoca que su plumaje se empape de agua, por esta razón es común verlo posado con las alas abiertas para secarlas.",
  "Abejorro chileno": "La reina del abejorro chileno es considerada uno de los insectos más grandes del mundo, pueden alcanzar hasta 3 cm de longitud. Se encuentra en peligro de extinción, por la presencia de especies exóticas y la destrucción de su hábitat.",
  "Tábano o coliguacho": "Las hembras de coliguacho son hematófagas, consumen sangre de mamíferos (ej: humanos, vacas, caballos) para obtener proteínas que permiten el desarrollo de sus huevos.",
  "Hadita del bosque": "Presenta colores brillantes, cubierto de un vello dorado. Las alas de las hembras son pequeñas por lo cual no pueden volar.",
  "Peorro": "Su mecanismo de defensa en la expulsión de un líquido maloliente e irritante desde sus glándulas perianales para ahuyentar a los depredadores.",
  "Grillo rojo chileno": "El grillo rojo a pesar de su nombre no pertenece a la familia Gryllidae, si no a la famila Anostostomatidae, siendo considerado un auténtico fósil viviente. Es uno de los ortópteros más grandes y fuertes en su área de distribución.",
  "Ciervo volante": "Los machos tienen mandíbulas de mayor tamaño en comparación con las hembras.",
  "Libélula o matapiojo azul": "El matapiojos azul es común de observar en ambientes secos y lejanos del agua. Posee ojos grandes para buscar su alimento (otros insectos). La forma larvaria se desarrolla en aguas lénticas y lagunas, y emerge hacia una vida aérea como adulto.",
  "Burrito o caballito de palo": "El burrito es un coleóptero que se aferra fuertemente sobre la madera o corteza de los árboles. Este insecto es fitófago (herbívoro) y los adultos consumen principalmente brotes y hojas.",
  "Avispa azul": "La avispa azul es una especie de avispa parasitoide nativa. Lo que parece un aguijón peligroso en realidad es un ovopositor alargado, las hembras lo utiizan para poner huevos y no para picar.",
  "Típula": "Las típulas son insectos inofensivos de patas largas y cuerpo grande que habitan zonas húmedas. Tienen un aparato bucal para consumir precisamente néctar.",
  "Zorro chilote": "El zorro de Chiloé es un cánido endémico de Chile y es considerado mundialmente uno de los mamíferos en mayor peligro de extinción.",
  "Pudú": "Es el segundo más pequeño del mundo, alcanzando una altura de 30 a 40 cm.",
  "Huillín": "Es conocido por su agilidad para desplazarse a través de los cuerpos de agua del sur de Chile.",
  "Monito del monte": "El monito del monte es un pequeño marsupial arborícola que habita los bosques templados del sur de Chile y Argentina. Durante los meses más fríos entra en un profundo estado de letargo o hibernación para sobrevivir.",
  "Chungungo": "El chungungo es una pequeña nutria marina que habita principalmente en litorales rocosos expuestos. Posee patas con membranas interdigitales y se alimenta preferentemente de crustáceos, peces y moluscos.",
  "Quique": "El quique tiene un cuerpo alargado y cola corta, se distingue especialmente por una franja blanca que atraviesa su cabeza hasta el cuello. Posee glándulas cerca del ano que secretan un líquido de olor muy fuerte, de forma similar a los zorrillos.",
  "Güiña": "La güiña es el felino más pequeño de Sudamérica. Pesa aproximadamente entre 1,8 y 2,5 kg, tiene pelaje café con pequeñas manchas y una cola corta y gruesa. También existen ejemplares melánicos.",
  "Comadrejita trompuda": "La comadrejita trompuda es un pequeño marsupial de pelaje café oscuro, gris o casi negro. Su característica más llamativa es el hocico largo, estrecho y puntiagudo, semejante a una pequeña trompa.",
  "Ratón oliváceo": "El ratón oliváceo es un pequeño roedor nativo de Chile, reconocible por su coloración pardo-olivácea. Es una especie de amplia distribución y puede encontrarse en diversos ambientes, donde se alimenta de semillas, frutos e invertebrados.",
  "Coipo": "El coipo vive en ríos, lagos, esteros y humedales. Posee patas traseras con membranas interdigitales y una cola larga y cilíndrica que facilitan la natación .",

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
  "Hadita del bosque": "Insectos",
  "Chorlo chileno": "Aves",
  "Gaviota cáhuil": "Aves",
  "Peorro": "Insectos",
  "Grillo rojo chileno": "Insectos",
  "Ciervo volante": "Insectos",
  "Libélula o matapiojo azul": "Insectos",
  "Burrito o caballito de palo": "Insectos",
  "Avispa azul": "Insectos",
  "Típula": "Insectos",
  "Tábano o coliguacho": "Insectos",
  "Monito del monte": "Mamiferos",
  "Güiña": "Mamiferos",
  "Comadrejita trompuda": "Mamiferos",
  "Coipo": "Mamiferos"
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
  "Hadita del bosque": "Hadita del bosque.png",
  "Chorlo chileno": "Chorlo-chileno.png",
  "Gaviota cáhuil": "Gaviota cáhuil.png",
  "Peorro": "Peorro.png",
  "Grillo rojo chileno": "Grillo rojo chileno.png",
  "Ciervo volante": "Ciervo volante.png",
  "Libélula o matapiojo azul": "Libélula o matapiojo azul.png",
  "Burrito o caballito de palo": "Burrito o caballito-de-palo.png",
  "Avispa azul": "Avispa azul.png",
  "Típula": "Típula.png",
  "Tábano o coliguacho": "Tábano o coliguacho.png",
  "Monito del monte": "Monito del monte.png",
  "Güiña": "Güiña.png",
  "Comadrejita trompuda": "Comadrejita trompuda.png",
  "Coipo": "Coipo.png"
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
  "Hadita del bosque": "Hadita del bosque.png",
  "Chorlo chileno": "Chorlo chileno.png",
  "Gaviota cáhuil": "Gaviota Cahuil.png",
  "Peorro": "Peorro.png",
  "Grillo rojo chileno": "Grillo rojo chileno.png",
  "Ciervo volante": "Ciervo volante.png",
  "Libélula o matapiojo azul": "Libélula o matapiojo azul.png",
  "Burrito o caballito de palo": "Burrito.png",
  "Avispa azul": "Avispa azul.png",
  "Típula": "Típula.png",
  "Tábano o coliguacho": "Tábano o coliguacho.png",
  "Monito del monte": "Monito del monte.png",
  "Güiña": "Güiña.png",
  "Comadrejita trompuda": "Comadrejita trompuda.png",
  "Coipo": "Coipo.png"
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
    photoHelp.innerHTML = "";

    const commonName = document.createElement("strong");
    commonName.textContent = animal.name;

    const scientificName = document.createElement("em");
    scientificName.textContent = ` ${animal.scientific}`;

    const description = document.createElement("span");
    description.className = "photo-description";
    description.textContent = animalDescriptions[animal.name] || "";

    photoHelp.append(commonName, document.createElement("br"));
    photoHelp.append(scientificName, description);

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
