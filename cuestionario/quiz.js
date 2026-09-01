const QUESTION_BANK = [
  // ── Clase 01: tipos de IA, API/Webhook/MCP, API de Claude, instrucciones, conectores ──
  {
    q: "¿Cuáles son los tres tipos de IA que separa la Clase 01?",
    options: ["Generativa, conversacional y agéntica", "Generativa, predictiva y visual", "Conversacional, agéntica y cuántica", "Generativa, agéntica y neuronal"],
    correct: 0,
    explain: "Generativa (crea contenido), conversacional (entiende y razona con vos) y agéntica (usa herramientas para completar tareas sola)."
  },
  {
    q: "¿Qué es un Webhook?",
    options: ["Un contrato fijo de endpoints que vos llamás cuando querés", "Una puerta abierta que espera un evento y te avisa apenas pasa", "Un estándar para que un modelo elija herramientas solo", "Un lenguaje de programación para automatizaciones"],
    correct: 1,
    explain: "El Webhook no lo llamás vos: el sistema de origen empuja el aviso apenas ocurre el evento."
  },
  {
    q: "¿Qué es una API, en el sentido que la explica el taller?",
    options: ["Un estándar para que la IA elija herramientas sola", "Una puerta que espera eventos", "Un contrato fijo: llamás a una URL concreta y sabés de antemano qué vas a recibir", "Un archivo de configuración de Claude"],
    correct: 2,
    explain: "La API es un mensajero universal con reglas fijas: vos preguntás, ella responde."
  },
  {
    q: "¿Qué es MCP (Model Context Protocol)?",
    options: ["Un lenguaje para programar automatizaciones", "Un estándar para que el modelo descubra herramientas en el momento y decida cuál usar", "El nombre técnico de un Webhook", "Un tipo de API más rápida"],
    correct: 1,
    explain: "Con MCP nadie programa la integración a mano para cada tarea puntual: el modelo ve qué tiene disponible y elige."
  },
  {
    q: "En una conexión MCP, ¿quién decide qué herramienta usar?",
    options: ["Una persona developer, de antemano", "El sistema de origen del evento", "El modelo, en medio de la conversación", "Se elige al azar"],
    correct: 2,
    explain: "Esa es la diferencia clave frente a API y Webhook: la decisión la toma el modelo en el momento, no alguien programándolo antes."
  },
  {
    q: "¿Para qué sirven las instrucciones personalizadas en Claude?",
    options: ["Para cambiar el modelo que usás", "Para no repetir tu tono, idioma y contexto en cada chat nuevo", "Para conectar Claude a internet", "Para que Claude responda más rápido"],
    correct: 1,
    explain: "Es un perfil que Claude lee antes de cada conversación: dejás de explicar quién sos y cómo te gusta trabajar cada vez."
  },
  {
    q: "¿Qué conector le da a Claude un navegador de verdad para abrir páginas y hacer clic?",
    options: ["HubSpot", "Google Drive", "Chrome", "Notion"],
    correct: 2,
    explain: "Chrome le da a Claude un navegador real, con tu confirmación en cada paso sensible."
  },
  {
    q: "En el ejemplo de armar una mini-app con la API de Claude, ¿qué pasa cuando alguien envía el formulario de feedback?",
    options: ["Se guarda el texto sin procesar", "La app manda ese texto a la API de Claude con una instrucción clara", "Se abre un chat nuevo automáticamente", "Se genera un Webhook"],
    correct: 1,
    explain: "Ese es el patrón: tu app llama a la API de Claude con algo como 'resumí este feedback en 3 puntos y decime el sentimiento general'."
  },

  // ── Clase 02: los 4 Claude, modelos, iterar/delegar, contexto y tokens, skills, proyectos, conexiones ──
  {
    q: "¿Cuál de los 4 Claude es agéntico y trabaja sobre archivos y proyectos reales?",
    options: ["Claude Chat", "Claude Code", "Claude Design", "Claude Cowork"],
    correct: 1,
    explain: "Claude Code crea, edita y prueba directamente sobre archivos reales; es lo que se usó para armar esta misma web."
  },
  {
    q: "¿Qué modelo es 'el equilibrio, el default' entre velocidad y capacidad?",
    options: ["Haiku", "Opus", "Sonnet", "Fable"],
    correct: 2,
    explain: "Sonnet es el default en la mayoría de los planes y en Claude Code: sirve para la gran mayoría de tareas del día a día."
  },
  {
    q: "¿Qué modelo es el más rápido y económico, ideal para tareas simples y de mucho volumen?",
    options: ["Opus", "Haiku", "Sonnet", "Fable"],
    correct: 1,
    explain: "Haiku consume pocos tokens y responde casi al instante: bueno para clasificar, extraer datos o volumen alto."
  },
  {
    q: "¿Qué modelo conviene para razonamiento profundo y problemas de varios pasos?",
    options: ["Haiku", "Fable", "Sonnet", "Opus"],
    correct: 3,
    explain: "Opus piensa más a fondo y consume más tokens: se reserva para lo que realmente lo necesita."
  },
  {
    q: "¿Cuándo conviene delegarle una tarea a un agente en vez de iterar vos mismo?",
    options: ["Cuando el resultado final todavía no está claro", "Cuando la tarea es larga, repetitiva o tiene pasos claros", "Cuando es algo puntual y corto", "Nunca, siempre conviene iterar"],
    correct: 1,
    explain: "Delegar libera tu tiempo en tareas largas o bien definidas. Iterar vos mismo conviene cuando el enfoque todavía no está claro."
  },
  {
    q: "¿Qué es un token, en el sentido que lo explica la Clase 02?",
    options: ["Una habilidad reutilizable de Claude", "La unidad en la que Claude lee y piensa (pedacitos de palabras)", "Un tipo de conector", "Una instrucción personalizada"],
    correct: 1,
    explain: "No son palabras enteras, son pedacitos de palabras. Toda conversación tiene un límite de tokens, como una hoja de tamaño fijo."
  },
  {
    q: "¿Qué hace pedirle a Claude 'ELI5' sobre algo?",
    options: ["Le pide un resumen cortito (TL;DR)", "Le pide que lo explique como si tuvieras 5 años, bajando el nivel técnico al mínimo", "Le pide un análisis FODA", "Le pide que critique tu trabajo"],
    correct: 1,
    explain: "ELI5 (Explain Like I'm 5) sirve para entender algo nuevo rápido o preparar una explicación simple para el equipo."
  },
  {
    q: "¿Qué es una Skill en Claude?",
    options: ["Un modelo más rápido que Sonnet", "Una conexión a una app externa", "Un paquete de instrucciones y archivos que le enseña a Claude algo específico, y se activa sola", "Un tipo de Proyecto"],
    correct: 2,
    explain: "Claude lee la descripción de la skill y la activa sola cuando la tarea encaja, sin que tengas que explicar nada."
  },
  {
    q: "¿Qué diferencia principal tiene un Proyecto frente a un chat suelto?",
    options: ["El Proyecto mantiene contexto persistente y archivos en todos sus chats", "El Proyecto es más rápido para responder", "El Proyecto usa un modelo distinto", "El Proyecto no permite subir archivos"],
    correct: 0,
    explain: "Un Proyecto es una carpeta de chats que comparten el mismo contexto: instrucciones, archivos de referencia y conocimiento."
  },
  {
    q: "¿Sobre qué estándar funcionan las Conexiones de Claude (Figma, Slack, Drive, etc.)?",
    options: ["HTTP simple", "MCP", "Webhooks exclusivamente", "Un lenguaje propio de cada app"],
    correct: 1,
    explain: "Las conexiones son servidores MCP ya armados que autorizás una vez desde tu cuenta."
  },

  // ── Clase 03: IA generativa, historia, prompts, Google Labs, AI Studio, usos cruzados, caso real ──
  {
    q: "Según la línea de tiempo de la Clase 03, ¿qué pasó en 2022?",
    options: ["Aparecen las primeras GANs", "El quiebre masivo: ChatGPT, Midjourney y Stable Diffusion salen casi al mismo tiempo", "Se lanza Google Flow", "Aparece Claude Fable"],
    correct: 1,
    explain: "2022 es cuando la IA generativa deja de ser un experimento de laboratorio y se vuelve masiva."
  },
  {
    q: "¿Qué modelo de Google genera y edita imágenes a partir de texto y referencias?",
    options: ["Veo", "Nano Banana", "Stitch", "Flow Music"],
    correct: 1,
    explain: "Nano Banana es el modelo de imagen de Gemini; Nano Banana Pro sube la fidelidad para escenas complejas."
  },
  {
    q: "¿Qué modelo anima una imagen (como primer frame) para convertirla en video?",
    options: ["Nano Banana", "Pomelli", "Veo", "AI Studio"],
    correct: 2,
    explain: "Veo vive dentro de Google Flow y anima esa imagen inicial con audio sincronizado."
  },
  {
    q: "¿Qué es Google AI Studio, a diferencia de Google Labs?",
    options: ["Otra herramienta de creación de contenido ya armada", "El lugar para probar los modelos de Gemini directamente y sacar una API key para tu propia app", "Un modelo de video", "Una skill de Claude"],
    correct: 1,
    explain: "Labs son herramientas ya armadas para crear contenido; AI Studio es para developers, el mismo concepto que vimos con la API de Claude."
  },
  {
    q: "En el caso real de foto de producto → video, ¿por qué se ancla primero una imagen fiel antes de animar?",
    options: ["Porque es más barato", "Porque generar el video directo desde un prompt de texto suele perder el producto real", "Porque Veo no acepta texto", "Porque así se automatiza con Webhooks"],
    correct: 1,
    explain: "Anclar una imagen fiel primero (con ChatGPT o Nano Banana) y recién ahí animarla es lo que mantiene el producto reconocible."
  },
  {
    q: "¿Qué hace Pomelli, dentro de Google Labs?",
    options: ["Anima imágenes en video", "Compone canciones originales", "Genera contenido de marketing on-brand y escalable a partir de tu identidad de marca", "Convierte una idea en pantallas de interfaz"],
    correct: 2,
    explain: "Pomelli arma variaciones de contenido de marketing para conectar con tu audiencia más rápido."
  },
  {
    q: "En los 'usos cruzados' de la Clase 03, ¿qué combinación lleva una imagen genérica a una de alta fidelidad?",
    options: ["ChatGPT arma la composición y Nano Banana Pro sube el detalle", "Suno genera la imagen final", "Flow Music anima la escena", "Stitch mejora la resolución"],
    correct: 0,
    explain: "ChatGPT resuelve rápido la composición; Nano Banana Pro sube la fidelidad y el detalle de esa escena."
  },

  // ── Clase 04: hosting, dominio, Vercel, riesgos ──
  {
    q: "¿Cuál de las formas de usar una app es la que 'Claude hostea por vos', sin elegir hosting ni configurar nada?",
    options: ["Local", "Artifact / preview de Claude", "Hosteada en Vercel", "Hosteada en un servidor propio"],
    correct: 1,
    explain: "Un Artifact te da una URL al toque, sin config, pero no controlás el dominio ni el hosting real por detrás."
  },
  {
    q: "¿Qué es un dominio?",
    options: ["El servidor que corre tu app las 24 horas", "La dirección fácil de recordar que apunta a tu host", "Un tipo de API", "El lenguaje que usa Vercel"],
    correct: 1,
    explain: "El dominio es la 'dirección postal' (kidscorp.digital) que apunta a la 'casa' donde vive tu app: el host."
  },
  {
    q: "¿Qué es un host (hosting)?",
    options: ["La dirección fácil de recordar de tu app", "El servidor que corre tu app las 24 horas y la entrega a quien la pida", "Un dominio gratuito", "Una API key"],
    correct: 1,
    explain: "Sin host, tu app solo existe mientras tu compu esté prendida y conectada a internet."
  },
  {
    q: "¿Cuál es el riesgo concreto de dejar una API key escrita en el código del frontend?",
    options: ["La app se pone más lenta", "Cualquiera que abra 'Ver código fuente' la puede copiar y usarla a tu costa", "El dominio deja de funcionar", "Vercel bloquea el deploy"],
    correct: 1,
    explain: "Las keys van del lado del servidor; si tu app necesita una API paga, un backend intermedio la llama por vos, nunca el navegador directo."
  },
  {
    q: "Según la Clase 04, ¿qué servicios se mencionan como opciones gratuitas para publicar un proyecto?",
    options: ["Vercel, Netlify, GitHub Pages y Railway", "Solo AWS", "Solo Google Cloud", "Figma y Notion"],
    correct: 0,
    explain: "Todas tienen un plan gratuito que alcanza para un proyecto interno o un prototipo."
  },
  {
    q: "¿Qué recomienda el taller para datos sensibles (contraseñas, claves) en un proyecto que vas a publicar?",
    options: ["Pegarlos directo en el código para que funcione más rápido", "Usar variables de entorno y nunca subirlas al repositorio", "Subirlos a un repo público para que el equipo los vea", "Guardarlos en el frontend, cifrados"],
    correct: 1,
    explain: "La regla que resuelve casi todo: nada sensible vive en el código que le llega al navegador del usuario."
  },

  // ── Clase 05: qué es un design system, capas de tokens, componentes, Figma, cómo lo lee Claude ──
  {
    q: "¿Cuál es la diferencia clave entre una guía de marca en PDF y un design system?",
    options: ["Un PDF es más lindo visualmente", "El design system está en un formato que también puede leer una herramienta, no solo una persona", "El PDF se actualiza solo", "No hay ninguna diferencia real"],
    correct: 1,
    explain: "El PDF es estático y solo lo lee una persona; el design system vive en un formato que también leen herramientas como Claude, así se actualiza en un solo lugar y se aplica solo."
  },
  {
    q: "Según la Clase 05, ¿cuáles son las 3 capas de tokens, en orden?",
    options: ["Primitivo → semántico → de componente", "Semántico → primitivo → de componente", "De componente → semántico → primitivo", "Primitivo → de componente → semántico"],
    correct: 0,
    explain: "Primitivo (el valor crudo, ej. #9414FA), semántico (el nombre con sentido, ej. color primario) y de componente (aplicado a una pieza puntual, ej. el fondo de un botón)."
  },
  {
    q: "¿Por qué conviene organizar los tokens en capas en vez de un solo nivel?",
    options: ["Porque así se ve más profesional", "Porque si cambia el color primitivo, se propaga solo a todo lo que lo use sin buscar botón por botón", "Porque Figma lo exige", "Porque así pesa menos el archivo"],
    correct: 1,
    explain: "Cambiar el primitivo una sola vez actualiza automáticamente todo lo que dependa de ese semántico y esos componentes."
  },
  {
    q: "En Figma, ¿dónde viven los tokens primitivos y semánticos como valores reales?",
    options: ["En comentarios del archivo", "En variables", "En el nombre del archivo", "En un plugin externo"],
    correct: 1,
    explain: "Las variables de Figma son los tokens reales (color, número, string); un cambio ahí se propaga a todo el archivo."
  },
  {
    q: "¿Qué dos piezas trabajan juntas para que Claude Design lea la marca de Kidscorp sin que se lo expliquen cada vez?",
    options: ["Un PDF y un mail de instrucciones", "El skill kidscorp-design-system y una conexión directa a Figma", "Un plugin de terceros y una API key", "Una captura de pantalla y un prompt largo"],
    correct: 1,
    explain: "El skill trae las reglas de marca y voz; la conexión a Figma le da acceso en tiempo real a los tokens y componentes reales."
  },

  // ── Clase 06: para quién sirve, flujo típico, caso práctico, consistencia, iterar ──
  {
    q: "Según la Clase 06, ¿para quién sirve especialmente generar proyectos con Claude Design?",
    options: ["Solo para diseñadores con experiencia en Figma", "Para cualquier equipo (sales, marketing, growth) aunque no sepan de diseño", "Solo para el equipo de desarrollo", "Solo para presentaciones internas de RRHH"],
    correct: 1,
    explain: "La Clase 06 está pensada para que cualquier equipo arme piezas reales sin saber de diseño, aplicando la marca automáticamente."
  },
  {
    q: "En el flujo típico de la Clase 06, ¿qué pasa justo después de contarle el objetivo a Claude?",
    options: ["Se exporta directo a PDF", "Claude arma la pieza aplicando los tokens y componentes del design system", "Hay que abrir Figma manualmente", "Se pide autorización a un administrador"],
    correct: 1,
    explain: "Claude aplica solo los tokens y componentes del design system de la Clase 05, sin que le digas el color o la tipografía."
  },
  {
    q: "¿Por qué un pedido detallado (con cantidad de slides, estructura y audiencia) rinde mejor que uno vago como 'Hacéme una presentación de la campaña'?",
    options: ["Porque es más corto", "Porque define estructura y audiencia, dejando menos a la interpretación", "Porque menciona la palabra 'campaña' dos veces", "Porque no rinde mejor, da igual"],
    correct: 1,
    explain: "Cuanto más específico el objetivo (estructura, contenido, audiencia y tono), mejor sale el resultado sin necesidad de ida y vuelta."
  },
  {
    q: "Si una slide del deck no comparte el estilo del resto, ¿qué recomienda la Clase 06 para corregirlo sin rehacer el contenido?",
    options: ["Borrar esa slide y no usarla", "Pedirle a Claude que 'unifique el estilo con el resto del deck'", "Empezar el deck de nuevo desde cero", "Abrir Figma para ajustarla a mano"],
    correct: 1,
    explain: "Como todas las slides comparten el mismo sistema de tokens y componentes, alcanza con pedirle que unifique el estilo sin tocar el contenido."
  },
];

function shuffle(arr) {
  const copy = arr.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

document.addEventListener('DOMContentLoaded', () => {
  const TOTAL_QUESTIONS = 10;
  const LETTERS = ['A', 'B', 'C', 'D'];

  const startScreen = document.getElementById('quizStart');
  const playScreen = document.getElementById('quizPlay');
  const resultsScreen = document.getElementById('quizResults');

  const startBtn = document.getElementById('startBtn');
  const restartBtn = document.getElementById('restartBtn');
  const nextBtn = document.getElementById('nextBtn');

  const qCounter = document.getElementById('qCounter');
  const qScoreLive = document.getElementById('qScoreLive');
  const barFill = document.getElementById('barFill');
  const qText = document.getElementById('qText');
  const optionsWrap = document.getElementById('optionsWrap');
  const explainBox = document.getElementById('explainBox');

  const scoreNum = document.getElementById('scoreNum');
  const tierTitle = document.getElementById('tierTitle');
  const tierMsg = document.getElementById('tierMsg');

  let questions = [];
  let current = 0;
  let score = 0;
  let answered = false;

  function startQuiz() {
    questions = shuffle(QUESTION_BANK).slice(0, TOTAL_QUESTIONS);
    current = 0;
    score = 0;
    startScreen.classList.add('hidden');
    resultsScreen.classList.add('hidden');
    playScreen.classList.remove('hidden');
    renderQuestion();
  }

  function renderQuestion() {
    answered = false;
    const item = questions[current];
    qCounter.textContent = `Pregunta ${current + 1} de ${questions.length}`;
    qScoreLive.textContent = `Puntaje: ${score}`;
    barFill.style.width = `${(current / questions.length) * 100}%`;
    qText.textContent = item.q;
    explainBox.classList.remove('show');
    explainBox.textContent = '';
    nextBtn.classList.remove('show');
    optionsWrap.innerHTML = '';

    item.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'quiz-opt';
      btn.innerHTML = `<span class="letter">${LETTERS[i]}</span><span>${opt}</span>`;
      btn.addEventListener('click', () => selectOption(i));
      optionsWrap.appendChild(btn);
    });
  }

  function selectOption(i) {
    if (answered) return;
    answered = true;
    const item = questions[current];
    const allBtns = optionsWrap.querySelectorAll('.quiz-opt');
    allBtns.forEach((b, idx) => {
      b.disabled = true;
      if (idx === item.correct) b.classList.add('correct');
      else if (idx === i) b.classList.add('wrong');
    });
    if (i === item.correct) {
      score++;
      qScoreLive.textContent = `Puntaje: ${score}`;
    }
    if (item.explain) {
      explainBox.textContent = item.explain;
      explainBox.classList.add('show');
    }
    nextBtn.classList.add('show');
    nextBtn.textContent = current === questions.length - 1 ? 'Ver resultado' : 'Siguiente';
  }

  function nextQuestion() {
    current++;
    if (current >= questions.length) {
      showResults();
    } else {
      renderQuestion();
    }
  }

  function showResults() {
    playScreen.classList.add('hidden');
    resultsScreen.classList.remove('hidden');
    scoreNum.textContent = `${score}/${questions.length}`;
    const ratio = score / questions.length;
    let tier, msg;
    if (score === questions.length) {
      tier = '¡Nota perfecta!';
      msg = 'Te quedó todo. El taller no tiene secretos para vos.';
    } else if (ratio >= 0.8) {
      tier = 'Muy bien';
      msg = 'Te quedó la gran mayoría. Un repaso rápido de lo que falló y lo tenés redondo.';
    } else if (ratio >= 0.5) {
      tier = 'Vas bien';
      msg = 'Base sólida, pero conviene repasar alguna clase antes de dar por cerrado el tema.';
    } else {
      tier = 'Para repasar';
      msg = 'Dale una vuelta más a las clases del taller y volvé a intentarlo cuando quieras.';
    }
    tierTitle.textContent = tier;
    tierMsg.textContent = msg;
  }

  startBtn.addEventListener('click', startQuiz);
  restartBtn.addEventListener('click', startQuiz);
  nextBtn.addEventListener('click', nextQuestion);

  // scroll progress bar + header lift (consistent with the rest of the site)
  const progressBar = document.querySelector('.scroll-progress');
  const topper = document.querySelector('.topper');
  const onScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    if (progressBar) progressBar.style.width = pct + '%';
    if (topper) topper.classList.toggle('scrolled', scrollTop > 8);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
});
