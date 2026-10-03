
(() => {
"use strict";
const DATA=[{"id":"nature","icon":"🌿","name":{"en":"Nature","es":"Naturaleza"},"terms":[{"en":"ROOT","es":"RAÍZ","def_en":"The part of a plant that anchors it and absorbs water and minerals.","def_es":"La parte de una planta que la fija al suelo y absorbe agua y minerales.","kind":"normal"},{"en":"POLLEN","es":"POLEN","def_en":"Fine grains produced by flowers that carry reproductive cells.","def_es":"Granos finos producidos por las flores que transportan células reproductivas.","kind":"normal"},{"en":"MOSS","es":"MUSGO","def_en":"A small non-flowering plant that often grows in damp places.","def_es":"Una pequeña planta sin flores que suele crecer en lugares húmedos.","kind":"normal"},{"en":"CANOPY","es":"DOSEL","def_en":"The upper layer of branches and leaves formed by trees in a forest.","def_es":"La capa superior de ramas y hojas formada por los árboles de un bosque.","kind":"normal"},{"en":"SEED","es":"SEMILLA","def_en":"A plant embryo with stored food, protected by a seed coat.","def_es":"Un embrión vegetal con alimento almacenado, protegido por una cubierta.","kind":"normal"},{"en":"NECTAR","es":"NÉCTAR","def_en":"A sugary liquid made by flowers that attracts pollinators.","def_es":"Un líquido azucarado producido por flores que atrae polinizadores.","kind":"normal"},{"en":"FERN","es":"HELECHO","def_en":"A vascular plant that reproduces with spores instead of seeds.","def_es":"Una planta vascular que se reproduce mediante esporas en vez de semillas.","kind":"normal"},{"en":"BIOME","es":"BIOMA","def_en":"A large ecological region defined by climate and characteristic life.","def_es":"Una gran región ecológica definida por su clima y formas de vida características.","kind":"normal"},{"en":"ECOSYSTEM","es":"ECOSISTEMA","def_en":"A community of organisms interacting with each other and their environment.","def_es":"Una comunidad de organismos que interactúan entre sí y con su ambiente.","kind":"hard"},{"en":"CHLOROPHYLL","es":"CLOROFILA","def_en":"The green pigment that helps plants absorb light for photosynthesis.","def_es":"El pigmento verde que ayuda a las plantas a absorber luz para la fotosíntesis.","kind":"hard"},{"en":"LICHEN","es":"LIQUEN","def_en":"A partnership between a fungus and a photosynthetic organism.","def_es":"Una asociación entre un hongo y un organismo fotosintético.","kind":"secret"},{"en":"PHOTOSYNTHESIS","es":"FOTOSÍNTESIS","def_en":"The process plants use to turn light energy, water and carbon dioxide into sugars.","def_es":"El proceso con el que las plantas convierten luz, agua y dióxido de carbono en azúcares.","kind":"secret"}]},{"id":"space","icon":"🌙","name":{"en":"Space","es":"Espacio"},"terms":[{"en":"PLANET","es":"PLANETA","def_en":"A large body that orbits a star and is rounded by its own gravity.","def_es":"Un cuerpo grande que orbita una estrella y se redondea por su propia gravedad.","kind":"normal"},{"en":"ORBIT","es":"ÓRBITA","def_en":"The curved path one object follows around another because of gravity.","def_es":"La trayectoria curva que sigue un objeto alrededor de otro debido a la gravedad.","kind":"normal"},{"en":"COMET","es":"COMETA","def_en":"An icy body that can develop a glowing coma and tail near the Sun.","def_es":"Un cuerpo helado que puede formar una coma brillante y una cola cerca del Sol.","kind":"normal"},{"en":"NEBULA","es":"NEBULOSA","def_en":"A vast cloud of gas and dust in space.","def_es":"Una enorme nube de gas y polvo en el espacio.","kind":"normal"},{"en":"GALAXY","es":"GALAXIA","def_en":"A gravitationally bound system of stars, gas, dust and dark matter.","def_es":"Un sistema unido por gravedad formado por estrellas, gas, polvo y materia oscura.","kind":"normal"},{"en":"ASTEROID","es":"ASTEROIDE","def_en":"A rocky or metallic object smaller than a planet that orbits the Sun.","def_es":"Un objeto rocoso o metálico menor que un planeta que orbita el Sol.","kind":"normal"},{"en":"ECLIPSE","es":"ECLIPSE","def_en":"An event where one celestial body moves into the shadow of another.","def_es":"Un evento en el que un cuerpo celeste entra en la sombra de otro.","kind":"normal"},{"en":"GRAVITY","es":"GRAVEDAD","def_en":"The attraction between objects with mass.","def_es":"La atracción entre objetos que tienen masa.","kind":"normal"},{"en":"SATELLITE","es":"SATÉLITE","def_en":"An object that orbits a larger body; it may be natural or artificial.","def_es":"Un objeto que orbita un cuerpo mayor; puede ser natural o artificial.","kind":"hard"},{"en":"LIGHTYEAR","es":"AÑO LUZ","def_en":"A unit of distance equal to how far light travels in one year.","def_es":"Una unidad de distancia equivalente a lo que recorre la luz en un año.","kind":"hard"},{"en":"QUASAR","es":"CUÁSAR","def_en":"An extremely bright galactic nucleus powered by matter falling toward a supermassive black hole.","def_es":"Un núcleo galáctico extremadamente brillante alimentado por materia que cae hacia un agujero negro supermasivo.","kind":"secret"},{"en":"AURORA","es":"AURORA","def_en":"Colored light in the sky caused when charged particles interact with a planet's atmosphere.","def_es":"Luz de colores en el cielo causada por partículas cargadas al interactuar con la atmósfera de un planeta.","kind":"secret"}]},{"id":"animals","icon":"🦉","name":{"en":"Animals","es":"Animales"},"terms":[{"en":"MAMMAL","es":"MAMÍFERO","def_en":"A vertebrate animal whose females produce milk for their young.","def_es":"Un vertebrado cuyas hembras producen leche para alimentar a sus crías.","kind":"normal"},{"en":"REPTILE","es":"REPTIL","def_en":"A vertebrate with scales that usually relies on external heat to regulate body temperature.","def_es":"Un vertebrado con escamas que suele depender del calor externo para regular su temperatura.","kind":"normal"},{"en":"AMPHIBIAN","es":"ANFIBIO","def_en":"A vertebrate whose life cycle commonly includes both aquatic and terrestrial stages.","def_es":"Un vertebrado cuyo ciclo de vida suele incluir etapas acuáticas y terrestres.","kind":"normal"},{"en":"INSECT","es":"INSECTO","def_en":"An arthropod with six legs and a body divided into three main sections.","def_es":"Un artrópodo con seis patas y el cuerpo dividido en tres secciones principales.","kind":"normal"},{"en":"PREDATOR","es":"DEPREDADOR","def_en":"An animal that hunts and eats other animals.","def_es":"Un animal que caza y se alimenta de otros animales.","kind":"normal"},{"en":"HERBIVORE","es":"HERBÍVORO","def_en":"An animal adapted to eating mainly plant material.","def_es":"Un animal adaptado a alimentarse principalmente de plantas.","kind":"normal"},{"en":"NOCTURNAL","es":"NOCTURNO","def_en":"Active mainly during the night.","def_es":"Activo principalmente durante la noche.","kind":"normal"},{"en":"MIGRATION","es":"MIGRACIÓN","def_en":"Regular movement from one region to another, often for food or reproduction.","def_es":"Movimiento regular de una región a otra, a menudo por alimento o reproducción.","kind":"normal"},{"en":"CAMOUFLAGE","es":"CAMUFLAJE","def_en":"Traits that help an organism blend into its surroundings.","def_es":"Rasgos que ayudan a un organismo a confundirse con su entorno.","kind":"hard"},{"en":"POLLINATOR","es":"POLINIZADOR","def_en":"An animal that moves pollen between flowers and helps plants reproduce.","def_es":"Un animal que transporta polen entre flores y ayuda a las plantas a reproducirse.","kind":"hard"},{"en":"HIBERNATE","es":"HIBERNAR","def_en":"To enter a state of greatly reduced activity and metabolism during cold periods.","def_es":"Entrar en un estado de actividad y metabolismo muy reducidos durante épocas frías.","kind":"secret"},{"en":"ECHOLOCATION","es":"ECOLOCALIZACIÓN","def_en":"Finding objects by emitting sound and interpreting the returning echoes.","def_es":"Localizar objetos emitiendo sonidos e interpretando sus ecos de retorno.","kind":"secret"}]},{"id":"ocean","icon":"🐚","name":{"en":"Ocean Life","es":"Vida Oceánica"},"terms":[{"en":"CORAL","es":"CORAL","def_en":"A marine animal that can build hard skeletons and form reefs in colonies.","def_es":"Un animal marino que puede construir esqueletos duros y formar arrecifes en colonias.","kind":"normal"},{"en":"TIDE","es":"MAREA","def_en":"The regular rise and fall of sea level caused mainly by the Moon's gravity.","def_es":"La subida y bajada regular del nivel del mar causada principalmente por la gravedad de la Luna.","kind":"normal"},{"en":"REEF","es":"ARRECIFE","def_en":"A ridge of rock, sand or coral near the ocean surface.","def_es":"Una cresta de roca, arena o coral cercana a la superficie del océano.","kind":"normal"},{"en":"PLANKTON","es":"PLANCTON","def_en":"Small drifting organisms carried largely by currents.","def_es":"Pequeños organismos a la deriva transportados principalmente por las corrientes.","kind":"normal"},{"en":"CURRENT","es":"CORRIENTE","def_en":"A continuous movement of ocean water in a particular direction.","def_es":"Un movimiento continuo del agua oceánica en una dirección determinada.","kind":"normal"},{"en":"SALINITY","es":"SALINIDAD","def_en":"The concentration of dissolved salts in water.","def_es":"La concentración de sales disueltas en el agua.","kind":"normal"},{"en":"TRENCH","es":"FOSA","def_en":"A long, deep depression in the ocean floor.","def_es":"Una depresión larga y profunda en el fondo oceánico.","kind":"normal"},{"en":"MANGROVE","es":"MANGLAR","def_en":"A salt-tolerant coastal forest that protects shorelines and shelters wildlife.","def_es":"Un bosque costero tolerante a la sal que protege costas y alberga fauna.","kind":"normal"},{"en":"ESTUARY","es":"ESTUARIO","def_en":"A coastal area where fresh river water mixes with seawater.","def_es":"Una zona costera donde el agua dulce de los ríos se mezcla con agua de mar.","kind":"hard"},{"en":"UPWELLING","es":"AFLORAMIENTO","def_en":"The rise of cold, nutrient-rich deep water toward the surface.","def_es":"El ascenso de agua profunda, fría y rica en nutrientes hacia la superficie.","kind":"hard"},{"en":"ABYSS","es":"ABISMO","def_en":"The very deep part of the ocean, far below sunlight.","def_es":"La parte muy profunda del océano, mucho más allá de la luz solar.","kind":"secret"},{"en":"SEAMOUNT","es":"MONTE SUBMARINO","def_en":"An underwater mountain rising from the seafloor without reaching the surface.","def_es":"Una montaña submarina que se eleva desde el fondo sin alcanzar la superficie.","kind":"secret"}]},{"id":"science","icon":"🔬","name":{"en":"Science","es":"Ciencia"},"terms":[{"en":"ATOM","es":"ÁTOMO","def_en":"The smallest unit of an element that retains that element's chemical identity.","def_es":"La unidad más pequeña de un elemento que conserva su identidad química.","kind":"normal"},{"en":"MOLECULE","es":"MOLÉCULA","def_en":"Two or more atoms chemically bonded together.","def_es":"Dos o más átomos unidos mediante enlaces químicos.","kind":"normal"},{"en":"ENERGY","es":"ENERGÍA","def_en":"The capacity to do work or cause change.","def_es":"La capacidad de realizar trabajo o producir cambios.","kind":"normal"},{"en":"MATTER","es":"MATERIA","def_en":"Anything that has mass and occupies space.","def_es":"Todo aquello que tiene masa y ocupa espacio.","kind":"normal"},{"en":"FORCE","es":"FUERZA","def_en":"A push or pull that can change an object's motion.","def_es":"Un empuje o tirón que puede cambiar el movimiento de un objeto.","kind":"normal"},{"en":"DENSITY","es":"DENSIDAD","def_en":"Mass divided by volume; it describes how concentrated matter is.","def_es":"Masa dividida entre volumen; describe qué tan concentrada está la materia.","kind":"normal"},{"en":"ACID","es":"ÁCIDO","def_en":"A substance that can donate hydrogen ions in many chemical reactions.","def_es":"Una sustancia que puede donar iones de hidrógeno en muchas reacciones químicas.","kind":"normal"},{"en":"CELL","es":"CÉLULA","def_en":"The basic structural and functional unit of living organisms.","def_es":"La unidad estructural y funcional básica de los seres vivos.","kind":"normal"},{"en":"GENOME","es":"GENOMA","def_en":"The complete set of genetic material in an organism.","def_es":"El conjunto completo de material genético de un organismo.","kind":"hard"},{"en":"CATALYST","es":"CATALIZADOR","def_en":"A substance that speeds up a chemical reaction without being consumed by it.","def_es":"Una sustancia que acelera una reacción química sin consumirse en ella.","kind":"hard"},{"en":"ISOTOPE","es":"ISÓTOPO","def_en":"A form of an element with the same number of protons but a different number of neutrons.","def_es":"Una forma de un elemento con igual número de protones pero diferente número de neutrones.","kind":"secret"},{"en":"ENTROPY","es":"ENTROPÍA","def_en":"A measure related to the number of possible microscopic arrangements in a system.","def_es":"Una medida relacionada con la cantidad de configuraciones microscópicas posibles de un sistema.","kind":"secret"}]},{"id":"geography","icon":"🗺️","name":{"en":"Geography","es":"Geografía"},"terms":[{"en":"EQUATOR","es":"ECUADOR","def_en":"The imaginary line around Earth halfway between the North and South Poles.","def_es":"La línea imaginaria que rodea la Tierra a mitad de camino entre los polos Norte y Sur.","kind":"normal"},{"en":"CONTINENT","es":"CONTINENTE","def_en":"One of Earth's major continuous land regions.","def_es":"Una de las grandes regiones continuas de tierra del planeta.","kind":"normal"},{"en":"ISLAND","es":"ISLA","def_en":"Land completely surrounded by water.","def_es":"Tierra completamente rodeada de agua.","kind":"normal"},{"en":"PENINSULA","es":"PENÍNSULA","def_en":"Land almost surrounded by water but connected to a larger landmass.","def_es":"Tierra casi rodeada por agua pero conectada a una masa terrestre mayor.","kind":"normal"},{"en":"DELTA","es":"DELTA","def_en":"Land built from sediment where a river divides near its mouth.","def_es":"Tierra formada por sedimentos donde un río se divide cerca de su desembocadura.","kind":"normal"},{"en":"VALLEY","es":"VALLE","def_en":"A low area between hills or mountains, often containing a river.","def_es":"Una zona baja entre colinas o montañas, a menudo recorrida por un río.","kind":"normal"},{"en":"PLATEAU","es":"MESETA","def_en":"An elevated area of relatively flat land.","def_es":"Una zona elevada de terreno relativamente plano.","kind":"normal"},{"en":"GLACIER","es":"GLACIAR","def_en":"A large mass of ice that moves slowly over land.","def_es":"Una gran masa de hielo que se desplaza lentamente sobre tierra.","kind":"normal"},{"en":"LATITUDE","es":"LATITUD","def_en":"Angular distance north or south of the equator.","def_es":"Distancia angular al norte o al sur del ecuador.","kind":"hard"},{"en":"LONGITUDE","es":"LONGITUD","def_en":"Angular distance east or west of the prime meridian.","def_es":"Distancia angular al este o al oeste del meridiano de Greenwich.","kind":"hard"},{"en":"ARCHIPELAGO","es":"ARCHIPIÉLAGO","def_en":"A group or chain of islands.","def_es":"Un grupo o cadena de islas.","kind":"secret"},{"en":"WATERSHED","es":"CUENCA","def_en":"An area of land where water drains toward the same river, lake or sea.","def_es":"Una zona de tierra donde el agua drena hacia el mismo río, lago o mar.","kind":"secret"}]},{"id":"technology","icon":"💻","name":{"en":"Technology","es":"Tecnología"},"terms":[{"en":"ALGORITHM","es":"ALGORITMO","def_en":"A finite sequence of steps used to solve a problem or perform a task.","def_es":"Una secuencia finita de pasos para resolver un problema o realizar una tarea.","kind":"normal"},{"en":"SENSOR","es":"SENSOR","def_en":"A device that detects a physical quantity and converts it into usable information.","def_es":"Un dispositivo que detecta una magnitud física y la convierte en información utilizable.","kind":"normal"},{"en":"NETWORK","es":"RED","def_en":"A set of connected devices that can exchange information.","def_es":"Un conjunto de dispositivos conectados que pueden intercambiar información.","kind":"normal"},{"en":"BINARY","es":"BINARIO","def_en":"A number system based on two digits, usually 0 and 1.","def_es":"Un sistema numérico basado en dos dígitos, normalmente 0 y 1.","kind":"normal"},{"en":"ROBOT","es":"ROBOT","def_en":"A programmable machine that can perform physical tasks.","def_es":"Una máquina programable que puede realizar tareas físicas.","kind":"normal"},{"en":"SERVER","es":"SERVIDOR","def_en":"A computer or program that provides resources or services to other computers.","def_es":"Una computadora o programa que ofrece recursos o servicios a otros equipos.","kind":"normal"},{"en":"PIXEL","es":"PÍXEL","def_en":"The smallest addressable picture element in a digital image or display.","def_es":"El elemento de imagen direccionable más pequeño de una pantalla o imagen digital.","kind":"normal"},{"en":"DATABASE","es":"BASE DE DATOS","def_en":"An organized collection of information designed for efficient access and management.","def_es":"Una colección organizada de información diseñada para consultarse y administrarse eficientemente.","kind":"normal"},{"en":"PROCESSOR","es":"PROCESADOR","def_en":"The component that executes instructions and performs calculations in a computer.","def_es":"El componente que ejecuta instrucciones y realiza cálculos en una computadora.","kind":"hard"},{"en":"ENCRYPTION","es":"CIFRADO","def_en":"The transformation of data so only authorized parties can read it.","def_es":"La transformación de datos para que solo las partes autorizadas puedan leerlos.","kind":"hard"},{"en":"LATENCY","es":"LATENCIA","def_en":"The delay between an action or request and the resulting response.","def_es":"El retraso entre una acción o solicitud y la respuesta resultante.","kind":"secret"},{"en":"PROTOCOL","es":"PROTOCOLO","def_en":"A set of agreed rules that systems use to communicate.","def_es":"Un conjunto de reglas acordadas que los sistemas utilizan para comunicarse.","kind":"secret"}]},{"id":"arts","icon":"🎨","name":{"en":"Arts & Music","es":"Arte y Música"},"terms":[{"en":"CANVAS","es":"LIENZO","def_en":"A durable surface commonly used for painting.","def_es":"Una superficie resistente utilizada comúnmente para pintar.","kind":"normal"},{"en":"PIGMENT","es":"PIGMENTO","def_en":"A substance that gives color by absorbing and reflecting different wavelengths of light.","def_es":"Una sustancia que da color al absorber y reflejar distintas longitudes de onda de luz.","kind":"normal"},{"en":"SCULPTURE","es":"ESCULTURA","def_en":"Three-dimensional art created by shaping, carving, assembling or modeling materials.","def_es":"Arte tridimensional creado al tallar, modelar o ensamblar materiales.","kind":"normal"},{"en":"RHYTHM","es":"RITMO","def_en":"The pattern of sounds and silences through time.","def_es":"El patrón de sonidos y silencios a lo largo del tiempo.","kind":"normal"},{"en":"MELODY","es":"MELODÍA","def_en":"A sequence of musical notes perceived as a coherent musical line.","def_es":"Una secuencia de notas percibida como una línea musical coherente.","kind":"normal"},{"en":"HARMONY","es":"ARMONÍA","def_en":"The combination of notes sounded together to support musical structure.","def_es":"La combinación de notas que suenan juntas para apoyar la estructura musical.","kind":"normal"},{"en":"PORTRAIT","es":"RETRATO","def_en":"An artistic representation focused on a person or group.","def_es":"Una representación artística centrada en una persona o grupo.","kind":"normal"},{"en":"MOSAIC","es":"MOSAICO","def_en":"An image made by arranging many small pieces of colored material.","def_es":"Una imagen creada al organizar muchas pequeñas piezas de material coloreado.","kind":"normal"},{"en":"PERSPECTIVE","es":"PERSPECTIVA","def_en":"A method for representing depth and spatial relationships on a flat surface.","def_es":"Un método para representar profundidad y relaciones espaciales en una superficie plana.","kind":"hard"},{"en":"TEXTURE","es":"TEXTURA","def_en":"The visual or physical surface quality of an artwork.","def_es":"La cualidad visual o física de la superficie de una obra.","kind":"hard"},{"en":"IMPROVISE","es":"IMPROVISAR","def_en":"To create or perform spontaneously rather than following a fully fixed plan.","def_es":"Crear o interpretar de forma espontánea en lugar de seguir un plan totalmente fijado.","kind":"secret"},{"en":"SYMMETRY","es":"SIMETRÍA","def_en":"Balanced correspondence of parts around an axis, center or plane.","def_es":"Correspondencia equilibrada de partes alrededor de un eje, centro o plano.","kind":"secret"}]},{"id":"body","icon":"🫀","name":{"en":"Human Body","es":"Cuerpo Humano"},"terms":[{"en":"HEART","es":"CORAZÓN","def_en":"A muscular organ that pumps blood through the circulatory system.","def_es":"Un órgano muscular que bombea sangre a través del sistema circulatorio.","kind":"normal"},{"en":"LUNG","es":"PULMÓN","def_en":"An organ where gases are exchanged between air and blood.","def_es":"Un órgano donde se intercambian gases entre el aire y la sangre.","kind":"normal"},{"en":"BRAIN","es":"CEREBRO","def_en":"The organ that processes information and coordinates many body functions.","def_es":"El órgano que procesa información y coordina muchas funciones corporales.","kind":"normal"},{"en":"NEURON","es":"NEURONA","def_en":"A specialized cell that transmits electrical and chemical signals in the nervous system.","def_es":"Una célula especializada que transmite señales eléctricas y químicas en el sistema nervioso.","kind":"normal"},{"en":"MUSCLE","es":"MÚSCULO","def_en":"Tissue that can contract to create force and movement.","def_es":"Tejido que puede contraerse para generar fuerza y movimiento.","kind":"normal"},{"en":"SKELETON","es":"ESQUELETO","def_en":"The framework of bones that supports and protects the body.","def_es":"La estructura de huesos que sostiene y protege el cuerpo.","kind":"normal"},{"en":"ARTERY","es":"ARTERIA","def_en":"A blood vessel that carries blood away from the heart.","def_es":"Un vaso sanguíneo que transporta sangre desde el corazón hacia el cuerpo.","kind":"normal"},{"en":"RETINA","es":"RETINA","def_en":"Light-sensitive tissue at the back of the eye that converts light into neural signals.","def_es":"Tejido sensible a la luz en el fondo del ojo que convierte la luz en señales nerviosas.","kind":"normal"},{"en":"DIGESTION","es":"DIGESTIÓN","def_en":"The breakdown of food into substances the body can absorb and use.","def_es":"La descomposición de los alimentos en sustancias que el cuerpo puede absorber y utilizar.","kind":"hard"},{"en":"IMMUNE","es":"INMUNE","def_en":"Relating to the body's defenses against pathogens and harmful substances.","def_es":"Relacionado con las defensas del cuerpo contra patógenos y sustancias dañinas.","kind":"hard"},{"en":"HOMEOSTASIS","es":"HOMEOSTASIS","def_en":"The regulation of internal conditions to keep the body relatively stable.","def_es":"La regulación de condiciones internas para mantener el cuerpo relativamente estable.","kind":"secret"},{"en":"TENDON","es":"TENDÓN","def_en":"Strong connective tissue that usually attaches muscle to bone.","def_es":"Tejido conectivo resistente que normalmente une músculo con hueso.","kind":"secret"}]},{"id":"weather","icon":"🌦️","name":{"en":"Weather","es":"Clima y Tiempo"},"terms":[{"en":"CLOUD","es":"NUBE","def_en":"Visible droplets of water or ice crystals suspended in the atmosphere.","def_es":"Gotas visibles de agua o cristales de hielo suspendidos en la atmósfera.","kind":"normal"},{"en":"RAIN","es":"LLUVIA","def_en":"Liquid water droplets falling from clouds to the ground.","def_es":"Gotas de agua líquida que caen de las nubes al suelo.","kind":"normal"},{"en":"THUNDER","es":"TRUENO","def_en":"The sound produced when air rapidly expands after being heated by lightning.","def_es":"El sonido producido cuando el aire se expande rápidamente tras calentarse por un relámpago.","kind":"normal"},{"en":"BREEZE","es":"BRISA","def_en":"A gentle wind.","def_es":"Un viento suave.","kind":"normal"},{"en":"HUMIDITY","es":"HUMEDAD","def_en":"The amount of water vapor present in the air.","def_es":"La cantidad de vapor de agua presente en el aire.","kind":"normal"},{"en":"CLIMATE","es":"CLIMA","def_en":"The long-term pattern of weather conditions in a region.","def_es":"El patrón de condiciones meteorológicas a largo plazo de una región.","kind":"normal"},{"en":"FROST","es":"HELADA","def_en":"Ice crystals that form on surfaces when water vapor freezes.","def_es":"Cristales de hielo que se forman en superficies cuando el vapor de agua se congela.","kind":"normal"},{"en":"HAIL","es":"GRANIZO","def_en":"Balls or lumps of ice that fall from strong storm clouds.","def_es":"Bolas o trozos de hielo que caen de nubes de tormenta intensas.","kind":"normal"},{"en":"PRESSURE","es":"PRESIÓN","def_en":"The force exerted by the weight of the atmosphere over an area.","def_es":"La fuerza ejercida por el peso de la atmósfera sobre una superficie.","kind":"hard"},{"en":"FORECAST","es":"PRONÓSTICO","def_en":"A scientific prediction of future atmospheric conditions.","def_es":"Una predicción científica de las condiciones atmosféricas futuras.","kind":"hard"},{"en":"CUMULONIMBUS","es":"CUMULONIMBO","def_en":"A tall storm cloud capable of producing heavy rain, lightning and sometimes hail.","def_es":"Una nube de tormenta alta capaz de producir lluvia intensa, relámpagos y a veces granizo.","kind":"secret"},{"en":"JETSTREAM","es":"CORRIENTE EN CHORRO","def_en":"A narrow band of very fast winds high in the atmosphere.","def_es":"Una franja estrecha de vientos muy rápidos en las capas altas de la atmósfera.","kind":"secret"}]}];
const $=id=>document.getElementById(id);
const I={
 en:{
  brand:"Cozy Word Garden",level:"Level",stars:"Stars",keys:"Keys",coins:"Coins",knowledge:"Knowledge",streak:"Streak",
  over:"TODAY'S LITTLE LESSON",board:"Find the words and learn as you go",tip:"Drag in a straight line across letters.",
  words:"Word List",helpers:"Golden Key Helpers",spark:"Spark",sparkText:"Show a starting letter",compass:"Compass",compassText:"Reveal a word direction",lantern:"Lantern",lanternText:"Reveal one full word",
  secret:"Secret Discovery",secretText:"An unlisted educational word is hidden on every board.",learnEmpty:"Every word teaches something",learnEmptyText:"Find a word to reveal a short definition or fact.",
  music:"NOW PLAYING",shelf:"YOUR READING NOOK",shelfTitle:"Rewards that stay with you",complete:"LEVEL COMPLETE",completeTitle:"A few more things learned.",
  rewardStars:"Stars",rewardCoins:"Coins",rewardKeys:"Keys",rewardKnowledge:"Knowledge",glossary:"What you learned",next:"Next Level",
  pause:"Tea time?",pauseText:"The page will stay open for you.",resume:"Resume",restart:"Restart Level",exitRun:"Exit Run",
  start:"Start",reset:"Reset saved progress",intro:"A calm infinite word search with real things to learn. The room stays cozy; the vocabulary goes far beyond cozy words.",
  f1a:"Educational Themes",f1b:"Nature, science, space, technology and more.",f2a:"Hidden Rewards",f2b:"Hard and secret words earn Golden Keys.",f3a:"Coffee Jazz Soundtrack",f3b:"One slow original coffee-jazz loop while you play.",
  noKeys:"You need more Golden Keys.",normalFound:"Word found · knowledge added.",hardFound:"Hard word! +1 Golden Key 🔑",secretFound:"Secret word! +1 Golden Key 🔑",already:"You already found that word.",miss:"Not one of this lesson's words.",
  dirs:["east","south-east","south","south-west","west","north-west","north","north-east"],direction:"Look {dir} for {word}.",perfect:"✨ Perfect lesson bonus: +1 Golden Key",mixed:"Mixed Review",lesson:"Level",unlock:"New reading-nook reward: {item}",secretMask:"Secret {a}/{b}",
  diff:["COZY","CURIOUS","BRIGHT","DEEP","SCHOLAR","MASTER"],mixedName:"Mixed Review"
 },
 es:{
  brand:"Jardín de Palabras",level:"Nivel",stars:"Estrellas",keys:"Llaves",coins:"Monedas",knowledge:"Conocimiento",streak:"Racha",
  over:"TEMA DE HOY",board:"",tip:"Arrastra en línea recta sobre las letras.",
  words:"Lista de Palabras",helpers:"Ayudas con Llaves Doradas",spark:"Chispa",sparkText:"Muestra una letra inicial",compass:"Brújula",compassText:"Revela la dirección",lantern:"Linterna",lanternText:"Revela una palabra completa",
  secret:"Descubrimiento Secreto",secretText:"Hay una palabra educativa no listada escondida en cada tablero.",learnEmpty:"Cada palabra enseña algo",learnEmptyText:"Encuentra una palabra para revelar una definición o dato breve.",
  music:"REPRODUCIENDO",shelf:"TU RINCÓN DE LECTURA",shelfTitle:"Recompensas que conservas",complete:"NIVEL COMPLETADO",completeTitle:"Aprendiste algunas cosas más.",
  rewardStars:"Estrellas",rewardCoins:"Monedas",rewardKeys:"Llaves",rewardKnowledge:"Conocimiento",glossary:"Lo que aprendiste",next:"Siguiente Nivel",
  pause:"¿Hora del té?",pauseText:"La página se quedará abierta para ti.",resume:"Continuar",restart:"Reiniciar Nivel",exitRun:"Salir de la Partida",
  start:"Comenzar",reset:"Borrar progreso guardado",intro:"Una sopa de letras infinita y tranquila con cosas reales que aprender. El ambiente es acogedor; el vocabulario va mucho más allá.",
  f1a:"Temas Educativos",f1b:"Naturaleza, ciencia, espacio, tecnología y más.",f2a:"Recompensas Ocultas",f2b:"Las palabras difíciles y secretas dan Llaves Doradas.",f3a:"Jazz de Cafetería",f3b:"Una pista original de jazz lento mientras juegas.",
  noKeys:"Necesitas más Llaves Doradas.",normalFound:"Palabra encontrada · conocimiento añadido.",hardFound:"¡Palabra difícil! +1 Llave Dorada 🔑",secretFound:"¡Palabra secreta! +1 Llave Dorada 🔑",already:"Ya encontraste esa palabra.",miss:"No es una palabra de este nivel.",
  dirs:["este","sureste","sur","suroeste","oeste","noroeste","norte","noreste"],direction:"Busca hacia {dir}: {word}.",perfect:"✨ Bono de lección perfecta: +1 Llave Dorada",mixed:"Repaso Mixto",lesson:"Nivel",unlock:"Nueva recompensa para el rincón: {item}",secretMask:"Secreto {a}/{b}",
  diff:["COZY","CURIOSO","BRILLANTE","PROFUNDO","ERUDITO","MAESTRO"],mixedName:"Repaso Mixto"
 }
};
const COLLECT=[
 {req:25,icon:"🪴",en:"Desk Fern",es:"Helecho de Escritorio"},{req:60,icon:"☕",en:"Favorite Mug",es:"Taza Favorita"},
 {req:110,icon:"🕯️",en:"Amber Candle",es:"Vela Ámbar"},{req:180,icon:"📚",en:"Book Stack",es:"Pila de Libros"},
 {req:260,icon:"🧸",en:"Reading Bear",es:"Osito Lector"},{req:360,icon:"🏮",en:"Lantern",es:"Linterna"},
 {req:500,icon:"🌙",en:"Moon Pillow",es:"Almohada Lunar"},{req:700,icon:"🫖",en:"Tea Set",es:"Juego de Té"},
 {req:950,icon:"🐈",en:"Library Cat",es:"Gato de Biblioteca"},{req:1250,icon:"🌻",en:"Sunflower Pot",es:"Maceta de Girasol"},
 {req:1600,icon:"🪟",en:"Rain Window",es:"Ventana de Lluvia"},{req:2200,icon:"✨",en:"Starlit Nook",es:"Rincón Estrellado"}
];
const DIRS=[{r:0,c:1},{r:1,c:1},{r:1,c:0},{r:1,c:-1},{r:0,c:-1},{r:-1,c:-1},{r:-1,c:0},{r:-1,c:1}];
const FILL={en:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",es:"ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"};
const TRACKS=[{name:"Piano & Guitar",file:"assets/audio/piano-guitar-balanced.mp3"}];
let saved={};try{saved=JSON.parse(localStorage.getItem("cozyWordGardenV3")||"{}")}catch{}
let lang=saved.lang||"en",level=Math.max(1,saved.level||1),stars=saved.stars||0,coins=saved.coins||0,keys=saved.keys||0,knowledge=saved.knowledge||0,streak=saved.streak||0;
let musicOn=saved.musicOn!==false,sfxOn=saved.sfxOn!==false,trackIndex=0;
let size=8,grid=[],targets=[],secretTargets=[],placements=[],secretPlacements=[],found=new Set(),foundSecrets=new Set(),lessonFound=[];
let selecting=false,startCell=null,preview=[],active=false,paused=false,hintsUsed=0,misses=0,keysEarned=0,knowledgeEarned=0,currentCategory=null,isMixed=false;
let audioCtx=null,lastPreviewLen=0;
const music=$("musicPlayer");

const t=k=>I[lang][k];
const fmt=(s,o)=>s.replace(/\{(\w+)\}/g,(_,k)=>o[k]??"");
const norm=s=>s.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^A-ZÑ]/g,"");
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const rand=a=>a[Math.floor(Math.random()*a.length)];
function pick(arr,n){let a=[...arr],o=[];while(a.length&&o.length<n)o.push(a.splice(Math.floor(Math.random()*a.length),1)[0]);return o}
function save(){localStorage.setItem("cozyWordGardenV3",JSON.stringify({lang,level,stars,coins,keys,knowledge,streak,musicOn,sfxOn,trackIndex}))}
function termView(term){return {word:norm(term[lang]),display:term[lang].toUpperCase(),def:term["def_"+lang],kind:term.kind,raw:term}}
function difficulty(){return clamp(Math.floor((level-1)/10),0,5)}
function params(){return {size:clamp(8+Math.floor((level-1)/4),8,14),count:clamp(6+Math.floor((level-1)/4),6,10),secret:level<8?1:2,reverse:level>=4,diag:level>=2}}
function categoryForLevel(){isMixed=level%10===0;if(isMixed)return null;return DATA[(level-1)%DATA.length]}

function applyLanguage(){
 document.documentElement.lang=lang;
 const map={brandTitle:"brand",levelLabel:"level",starsLabel:"stars",keysLabel:"keys",coinsLabel:"coins",knowledgeLabel:"knowledge",streakLabel:"streak",themeOverline:"over",boardTip:"tip",wordsTitle:"words",helpersTitle:"helpers",sparkTitle:"spark",sparkText:"sparkText",compassTitle:"compass",compassText:"compassText",lanternTitle:"lantern",lanternText:"lanternText",secretTitle:"secret",secretText:"secretText",learnEmptyTitle:"learnEmpty",learnEmptyText:"learnEmptyText",musicLabel:"music",shelfEyebrow:"shelf",shelfTitle:"shelfTitle",completeEyebrow:"complete",completeTitle:"completeTitle",rewardStarsLabel:"rewardStars",rewardCoinsLabel:"rewardCoins",rewardKeysLabel:"rewardKeys",rewardKnowledgeLabel:"rewardKnowledge",glossaryTitle:"glossary",nextBtn:"next",pauseTitle:"pause",pauseText:"pauseText",resumeBtn:"resume",restartBtn:"restart",exitRunBtn:"exitRun",startBtn:"start",resetBtn:"reset",introText:"intro",feature1a:"f1a",feature1b:"f1b",feature2a:"f2a",feature2b:"f2b",feature3a:"f3a",feature3b:"f3b"};
 for(const [id,key] of Object.entries(map))if($(id))$(id).textContent=t(key);
 $("musicBtn").textContent=musicOn?"♫":"×";$("sfxBtn").textContent=sfxOn?"✦":"·";
 updateThemeLabels();
}
function updateThemeLabels(){
 let icon="📚",name=t("mixedName");
 if(currentCategory){icon=currentCategory.icon;name=currentCategory.name[lang]}
 $("themeIcon").textContent=icon;$("themeName").textContent=name;
 $("chapterText").textContent=`${name} · ${t("lesson")} ${level}`;
 $("app").dataset.scene=currentCategory?currentCategory.id:"nature";
}
function buildLesson(){
 const p=params();size=p.size;currentCategory=categoryForLevel();
 let pool=[];
 if(isMixed){
   for(const c of DATA)for(const term of c.terms.filter(x=>x.kind!=="secret"))pool.push({...term,_cat:c});
 } else {
   pool=currentCategory.terms.filter(x=>x.kind!=="secret").map(term=>({...term,_cat:currentCategory}));
 }
 let usable=pool.map(x=>({...termView(x),cat:x._cat})).filter(x=>x.word.length>=2&&x.word.length<=size);
 let hard=usable.filter(x=>x.kind==="hard"), normal=usable.filter(x=>x.kind!=="hard");
 let hardCount=clamp(Math.floor(level/6),0,2);
 targets=[...pick(hard,Math.min(hardCount,hard.length)),...pick(normal,Math.max(0,p.count-Math.min(hardCount,hard.length)))];
 if(targets.length<p.count)targets.push(...pick(usable.filter(x=>!targets.includes(x)),p.count-targets.length));
 const secretPool=(isMixed?DATA.flatMap(c=>c.terms.filter(x=>x.kind==="secret").map(term=>({...term,_cat:c}))):currentCategory.terms.filter(x=>x.kind==="secret").map(term=>({...term,_cat:currentCategory})))
   .map(x=>({...termView(x),cat:x._cat})).filter(x=>x.word.length<=size&&x.word.length>=3);
 secretTargets=pick(secretPool,Math.min(p.secret,secretPool.length));
 found.clear();foundSecrets.clear();lessonFound=[];hintsUsed=0;misses=0;keysEarned=0;knowledgeEarned=0;
 generateGrid(p);active=true;paused=false;renderAll();maybeSwitchMusic();
}
function dirsFor(p){let d=[DIRS[0],DIRS[2]];if(p.diag)d.push(DIRS[1],DIRS[3]);if(p.reverse)d=DIRS.slice();return d}
function placeWord(word,dirs,attempts=220){
 for(let a=0;a<attempts;a++){let d=rand(dirs),r=Math.floor(Math.random()*size),c=Math.floor(Math.random()*size),er=r+d.r*(word.length-1),ec=c+d.c*(word.length-1);if(er<0||ec<0||er>=size||ec>=size)continue;
  let ok=true,overlap=0,cells=[];for(let i=0;i<word.length;i++){let rr=r+d.r*i,cc=c+d.c*i,existing=grid[rr][cc];if(existing&&existing!==word[i]){ok=false;break}if(existing===word[i])overlap++;cells.push({r:rr,c:cc})}
  if(ok&&overlap<=Math.ceil(word.length*.55)){for(let i=0;i<word.length;i++)grid[r+d.r*i][c+d.c*i]=word[i];return {word,start:{r,c},end:{r:er,c:ec},dir:d,cells}}
 }return null
}
function generateGrid(p){
 let attempts=0,ok=false;
 while(!ok&&attempts++<40){grid=Array.from({length:size},()=>Array(size).fill(""));placements=[];secretPlacements=[];ok=true;
  for(const x of [...targets].sort((a,b)=>b.word.length-a.word.length)){const z=placeWord(x.word,dirsFor(p));if(!z){ok=false;break}placements.push({...z,target:x})}
  if(!ok)continue;
  for(const x of secretTargets){const z=placeWord(x.word,DIRS,300);if(z)secretPlacements.push({...z,target:x})}
  if(secretTargets.length&&!secretPlacements.length)ok=false;
 }
 const letters=FILL[lang];for(let r=0;r<size;r++)for(let c=0;c<size;c++)if(!grid[r][c])grid[r][c]=letters[Math.floor(Math.random()*letters.length)]
}
function renderAll(){
 applyLanguage();updateStats();renderBoard();renderWords();renderSecretStatus();renderCollection();updateHelpers();$("difficultyBadge").textContent=t("diff")[difficulty()];showLearn(null)
}
function updateStats(){
 $("levelStat").textContent=level;$("starsStat").textContent=stars;$("keysStat").textContent=keys+" 🔑";$("coinsStat").textContent=coins;$("knowledgeStat").textContent=knowledge;$("streakStat").textContent=streak;
 $("progressText").textContent=`${found.size} / ${targets.length}`;$("progressBar").style.width=(targets.length?found.size/targets.length*100:0)+"%"
}
function renderBoard(){
 const b=$("board");b.innerHTML="";b.style.gridTemplateColumns=`repeat(${size},1fr)`;for(let r=0;r<size;r++)for(let c=0;c<size;c++){let e=document.createElement("div");e.className="cell";e.textContent=grid[r][c];e.dataset.r=r;e.dataset.c=c;e.setAttribute("role","gridcell");b.appendChild(e)}markFound();requestAnimationFrame(resizeCanvas)
}
function cell(r,c){return $("board").querySelector(`[data-r="${r}"][data-c="${c}"]`)}
function markFound(){placements.forEach(p=>{if(found.has(p.word))p.cells.forEach(x=>cell(x.r,x.c)?.classList.add("found"))});secretPlacements.forEach(p=>{if(foundSecrets.has(p.word))p.cells.forEach(x=>cell(x.r,x.c)?.classList.add("secret"))})}
function renderWords(){
 const w=$("wordList");w.innerHTML="";targets.forEach(x=>{let e=document.createElement("div");e.className="word-chip "+(x.kind==="hard"?"hard ":"")+(found.has(x.word)?"found":"");e.dataset.word=x.word;e.textContent=x.display;w.appendChild(e)})
}
function renderSecretStatus(){$("secretStatus").textContent=secretPlacements.length?fmt(t("secretMask"),{a:foundSecrets.size,b:secretPlacements.length}):"—"}
function renderCollection(){const c=$("collection");c.innerHTML="";COLLECT.forEach(x=>{let e=document.createElement("div");e.className="collectible "+(knowledge>=x.req?"on":"");e.textContent=x.icon;e.dataset.req=x.req;e.title=(lang==="en"?x.en:x.es)+` · ${x.req} ${t("knowledge")}`;c.appendChild(e)})}
function updateHelpers(){$("sparkBtn").disabled=keys<1||found.size>=targets.length;$("compassBtn").disabled=keys<1||found.size>=targets.length;$("lanternBtn").disabled=keys<2||found.size>=targets.length}
function showLearn(target,reward=1){
 $("learnEmpty").hidden=!!target;$("learnContent").hidden=!target;if(!target)return;
 $("learnIcon").textContent=target.cat.icon;$("learnCategory").textContent=target.cat.name[lang].toUpperCase();$("learnWord").textContent=target.display;$("learnDefinition").textContent=target.def;$("learnReward").textContent="+"+reward+" 📖"
}
function resizeCanvas(){const cv=$("selectionCanvas"),rect=$("boardWrap").getBoundingClientRect(),d=Math.min(devicePixelRatio||1,2);cv.width=rect.width*d;cv.height=rect.height*d;cv.style.width=rect.width+"px";cv.style.height=rect.height+"px";cv.getContext("2d").setTransform(d,0,0,d,0,0)}addEventListener("resize",resizeCanvas,{passive:true});
function eventCell(e){const el=document.elementFromPoint(e.clientX,e.clientY)?.closest(".cell");return el&&$("board").contains(el)?{r:+el.dataset.r,c:+el.dataset.c}:null}
function straightPath(a,b){let dr=b.r-a.r,dc=b.c-a.c,ar=Math.abs(dr),ac=Math.abs(dc);if(!(dr===0||dc===0||ar===ac))return[];let n=Math.max(ar,ac),sr=dr===0?0:dr>0?1:-1,sc=dc===0?0:dc>0?1:-1;return Array.from({length:n+1},(_,i)=>({r:a.r+sr*i,c:a.c+sc*i}))}
function clearPreview(resetLen=true){preview.forEach(x=>cell(x.r,x.c)?.classList.remove("preview"));preview=[];if(resetLen)lastPreviewLen=0;const cv=$("selectionCanvas");cv.getContext("2d").clearRect(0,0,cv.width,cv.height)}
function previewPath(p){
 const oldLen=lastPreviewLen;
 clearPreview(false);
 preview=p;
 p.forEach(x=>cell(x.r,x.c)?.classList.add("preview"));
 if(p.length>oldLen){
   for(let i=oldLen+1;i<=p.length;i++)setTimeout(()=>sfx("tick",i),Math.min(45,(i-oldLen-1)*18));
 }else if(p.length<oldLen){
   sfx("untick",p.length);
 }
 lastPreviewLen=p.length;
 if(p.length<2)return;
 const wr=$("boardWrap").getBoundingClientRect(),a=cell(p[0].r,p[0].c).getBoundingClientRect(),b=cell(p.at(-1).r,p.at(-1).c).getBoundingClientRect(),cv=$("selectionCanvas"),ctx=cv.getContext("2d"),d=Math.min(devicePixelRatio||1,2);
 let x1=a.left+a.width/2-wr.left,y1=a.top+a.height/2-wr.top,x2=b.left+b.width/2-wr.left,y2=b.top+b.height/2-wr.top;ctx.save();ctx.setTransform(d,0,0,d,0,0);ctx.strokeStyle="rgba(213,164,73,.48)";ctx.lineWidth=Math.max(8,a.width*.43);ctx.lineCap="round";ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.stroke();ctx.restore()
}
$("boardWrap").addEventListener("pointerdown",e=>{if(paused||!active)return;let q=eventCell(e);if(!q)return;selecting=true;startCell=q;$("boardWrap").setPointerCapture?.(e.pointerId);previewPath([q]);e.preventDefault()});
$("boardWrap").addEventListener("pointermove",e=>{if(!selecting)return;let q=eventCell(e);if(!q)return;let p=straightPath(startCell,q);if(p.length)previewPath(p);e.preventDefault()});
$("boardWrap").addEventListener("pointerup",e=>{if(!selecting)return;selecting=false;let q=eventCell(e)||preview.at(-1),p=q?straightPath(startCell,q):preview;if(p.length>=2)evaluate(p);clearPreview();startCell=null;e.preventDefault()});
$("boardWrap").addEventListener("pointercancel",()=>{selecting=false;clearPreview()});
function pathWord(p){return p.map(x=>grid[x.r][x.c]).join("")}
function evaluate(path){
 const word=pathWord(path),rev=[...word].reverse().join("");
 const p=placements.find(x=>x.word===word||x.word===rev),sp=secretPlacements.find(x=>x.word===word||x.word===rev);
 if(p){
   if(found.has(p.word)){toast(t("already"));sfx("soft");return}
   found.add(p.word);streak++;let reward=1+(p.target.kind==="hard"?2:0);knowledge+=reward;knowledgeEarned+=reward;coins+=6+Math.min(12,p.word.length);lessonFound.push(p.target);
   if(p.target.kind==="hard"){keys++;keysEarned++;toast(t("hardFound"));sfx("key");sparkles(true,14)}else{toast(t("normalFound"));sfx("found",p.word.length);sparkles(false,7)}
   showLearn(p.target,reward);markFound();renderWords();updateStats();renderCollection();updateHelpers();save();if(found.size===targets.length)setTimeout(completeLevel,700);return
 }
 if(sp){
   if(foundSecrets.has(sp.word)){toast(t("already"));sfx("soft");return}
   foundSecrets.add(sp.word);keys++;keysEarned++;knowledge+=3;knowledgeEarned+=3;coins+=18;streak+=2;lessonFound.push(sp.target);showLearn(sp.target,3);toast(t("secretFound")+" · "+sp.target.display);sfx("secret");sparkles(true,20);markFound();renderSecretStatus();updateStats();renderCollection();updateHelpers();save();return
 }
 misses++;streak=0;updateStats();toast(t("miss"));sfx("miss")
}
function useKey(cost){if(keys<cost){toast(t("noKeys"));sfx("miss");return false}keys-=cost;hintsUsed++;updateStats();updateHelpers();save();return true}
function remaining(){return placements.filter(p=>!found.has(p.word))}
$("sparkBtn").addEventListener("click",()=>{if(!useKey(1))return;let p=rand(remaining());if(!p)return;let el=cell(p.start.r,p.start.c);el?.classList.add("hint");setTimeout(()=>el?.classList.remove("hint"),3200);toast(`${t("spark")}: ${p.target.display[0]}…`);sfx("hint")});
$("compassBtn").addEventListener("click",()=>{if(!useKey(1))return;let p=rand(remaining());if(!p)return;let idx=DIRS.findIndex(d=>d.r===p.dir.r&&d.c===p.dir.c),chip=$("wordList").querySelector(`[data-word="${p.word}"]`);chip?.classList.add("direction");setTimeout(()=>chip?.classList.remove("direction"),3500);toast(fmt(t("direction"),{dir:t("dirs")[idx],word:p.target.display}));sfx("hint")});
$("lanternBtn").addEventListener("click",()=>{if(!useKey(2))return;let p=rand(remaining());if(!p)return;found.add(p.word);lessonFound.push(p.target);knowledge++;knowledgeEarned++;coins+=3;showLearn(p.target,1);p.cells.forEach(x=>cell(x.r,x.c)?.classList.add("found"));renderWords();updateStats();renderCollection();updateHelpers();toast(`${t("lantern")}: ${p.target.display}`);sfx("lantern");save();if(found.size===targets.length)setTimeout(completeLevel,650)});

function completeLevel(){
 active=false;const perfect=hintsUsed===0&&misses===0;let earnStars=Math.max(1,3-Math.min(2,Math.floor(hintsUsed/2))),earnCoins=22+level*2+foundSecrets.size*10+Math.max(0,8-misses*2);
 stars+=earnStars;coins+=earnCoins;if(perfect){keys++;keysEarned++;}
 $("rewardStars").textContent="+"+earnStars;$("rewardCoins").textContent="+"+earnCoins;$("rewardKeys").textContent="+"+keysEarned;$("rewardKnowledge").textContent="+"+knowledgeEarned;
 $("perfectBanner").hidden=!perfect;$("perfectBanner").textContent=t("perfect");
 const glossary=$("glossary");glossary.innerHTML="";let unique=[];for(const x of lessonFound)if(!unique.some(y=>y.word===x.word))unique.push(x);unique.slice(0,12).forEach(x=>{let d=document.createElement("div");d.className="glossary-item";d.innerHTML=`<b>${escapeHtml(x.display)}</b><span>${escapeHtml(x.def)}</span>`;glossary.appendChild(d)});
 const newly=COLLECT.find(x=>knowledge>=x.req&&knowledge-knowledgeEarned<x.req);$("unlockMessage").textContent=newly?fmt(t("unlock"),{item:lang==="en"?newly.en:newly.es}):"";
 level++;save();sfx("complete");sparkles(true,24);$("completeModal").classList.add("show")
}
$("nextBtn").addEventListener("click",()=>{$("completeModal").classList.remove("show");buildLesson()});
function escapeHtml(s){return s.replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]))}

function togglePause(force){if(!active)return;paused=force!==undefined?force:!paused;document.body.classList.toggle("paused",paused);$("pauseModal").classList.toggle("show",paused);if(paused)fadeMusicTo(.07,500);else if(musicOn)fadeMusicTo(.28,600)}
$("pauseBtn").addEventListener("click",()=>togglePause());
$("resumeBtn").addEventListener("click",()=>togglePause(false));
$("restartBtn").addEventListener("click",()=>{
 $("pauseModal").classList.remove("show");
 paused=false;
 buildLesson();
});
$("exitRunBtn").addEventListener("click",()=>{
 // Preserve preferences, but clear the entire active run.
 level=1;
 stars=0;
 coins=0;
 keys=0;
 knowledge=0;
 streak=0;
 size=8;
 grid=[];
 targets=[];
 secretTargets=[];
 placements=[];
 secretPlacements=[];
 found.clear();
 foundSecrets.clear();
 lessonFound=[];
 selecting=false;
 startCell=null;
 preview=[];
 active=false;
 paused=false;
 hintsUsed=0;
 misses=0;
 keysEarned=0;
 knowledgeEarned=0;
 currentCategory=null;
 isMixed=false;

 // Reset the game surface and return to the title/home screen.
 document.body.classList.remove("paused");
 $("pauseModal").classList.remove("show");
 $("completeModal").classList.remove("show");
 clearPreview();

 // Stop the current music so the next run starts cleanly.
 if(typeof music!=="undefined" && music){
   music.pause();
   try{music.currentTime=0}catch{}
 }

 // Keep the language selector aligned with the saved preference.
 document.querySelectorAll(".language-btn").forEach(btn=>{
   btn.classList.toggle("selected",btn.dataset.lang===lang);
 });

 save();
 applyLanguage();
 updateStats();
 renderCollection();
 $("startModal").classList.add("show");
});
document.addEventListener("visibilitychange",()=>{if(document.hidden&&active&&!paused)togglePause(true)});document.addEventListener("keydown",e=>{if(e.key==="Escape"&&active)togglePause()});

document.querySelectorAll(".language-btn").forEach(btn=>btn.addEventListener("click",()=>{document.querySelectorAll(".language-btn").forEach(b=>b.classList.remove("selected"));btn.classList.add("selected");lang=btn.dataset.lang;applyLanguage()}));
$("startBtn").addEventListener("click",()=>{$("startModal").classList.remove("show");save();initAudio();startMusic();buildLesson()});
$("resetBtn").addEventListener("click",()=>{localStorage.removeItem("cozyWordGardenV3");location.reload()});

function initAudio(){
 if(!audioCtx){try{audioCtx=new (window.AudioContext||window.webkitAudioContext)();noiseBuffer=audioCtx.createBuffer(1,audioCtx.sampleRate*.6,audioCtx.sampleRate);let d=noiseBuffer.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=Math.random()*2-1}catch{}}
 if(audioCtx?.state==="suspended")audioCtx.resume()
}
function tone(freq,dur=.12,vol=.025,type="sine",when=0,pan=0){
 if(!sfxOn||!audioCtx)return;const now=audioCtx.currentTime+when,o=audioCtx.createOscillator(),g=audioCtx.createGain(),p=audioCtx.createStereoPanner?audioCtx.createStereoPanner():null;o.type=type;o.frequency.setValueAtTime(freq,now);g.gain.setValueAtTime(.0001,now);g.gain.exponentialRampToValueAtTime(vol,now+.012);g.gain.exponentialRampToValueAtTime(.0001,now+dur);o.connect(g);if(p){p.pan.value=pan;g.connect(p);p.connect(audioCtx.destination)}else g.connect(audioCtx.destination);o.start(now);o.stop(now+dur+.03)
}

function sfx(type,n=5){
 if(!sfxOn)return;initAudio();
 if(type==="tick"){
   // Distinct tactile two-tone "tile mark" with a tiny pitch rise as the word grows.
   let base=430+Math.min(12,n)*14;
   tone(base,.075,.020,"triangle",0,-.18);
   tone(base*1.5,.052,.010,"sine",.012,.18);
 }
 else if(type==="untick"){
   tone(330,.055,.009,"sine");
 }
 else if(type==="found"){
   // Stronger warm success chord + high sparkle so a correctly built word feels rewarding.
   let root=392+(n%4)*14;
   [0,4,7,12].forEach((semi,i)=>tone(root*Math.pow(2,semi/12),.48,.034-(i*.003),"triangle",i*.035,(i-1.5)*.18));
   tone(root*2.5,.36,.016,"sine",.12,.1);
 }
 else if(type==="key"){
   [659,784,988,1319].forEach((f,i)=>tone(f,.5,.026,"sine",i*.065,(i-1.5)*.18));
   tone(1568,.55,.012,"triangle",.18,.2);
 }
 else if(type==="secret"){
   [523,659,784,1047,1319,1568].forEach((f,i)=>tone(f,.62,.022,"sine",i*.06,(i-2.5)*.14));
 }
 else if(type==="hint"){
   tone(440,.16,.013,"triangle");
   tone(587,.3,.020,"triangle",.07,-.15);
   tone(880,.38,.016,"sine",.14,.15);
 }
 else if(type==="lantern"){
   [440,554,659,880].forEach((f,i)=>tone(f,.5,.022,"triangle",i*.055,(i-1.5)*.16));
 }
 else if(type==="miss"){
   tone(174,.12,.012,"sine");
   tone(146,.13,.008,"triangle",.025);
 }
 else if(type==="soft"){
   tone(294,.07,.008,"sine");
 }
 else if(type==="complete"){
   [392,494,587,659,784,988].forEach((f,i)=>tone(f,.68,.022,"triangle",i*.075,(i-2.5)*.1));
 }
}
function startMusic(){
 trackIndex=0;
 music.src=TRACKS[0].file;
 music.loop=true;
 music.preload="auto";
 music.volume=0;
 music.play().catch(()=>{});
 fade(music,0,musicOn?.28:0,900);
 $("trackName").textContent=TRACKS[0].name;
 save();
}
function maybeSwitchMusic(){}
function fade(el,from,to,ms,done){
 if(!el)return;
 el.volume=clamp(from,0,1);
 let start=performance.now();
 function step(now){
   let p=clamp((now-start)/ms,0,1);
   el.volume=clamp(from+(to-from)*p,0,1);
   if(p<1)requestAnimationFrame(step);else done?.();
 }
 requestAnimationFrame(step);
}
function fadeMusicTo(v,ms){
 if(!musicOn||!music)return;
 fade(music,music.volume,v,ms);
}
$("musicBtn").addEventListener("click",()=>{
 musicOn=!musicOn;
 $("musicBtn").textContent=musicOn?"♫":"×";
 if(musicOn){
   initAudio();
   if(!music.src)startMusic();
   else{
     music.play().catch(()=>{});
     fade(music,music.volume,.28,500);
   }
 }else{
   fade(music,music.volume,0,400,()=>music.pause());
 }
 save();
});
$("sfxBtn").addEventListener("click",()=>{
 sfxOn=!sfxOn;
 $("sfxBtn").textContent=sfxOn?"✦":"·";
 if(sfxOn)sfx("found",4);
 save();
});

function toast(msg){const e=$("toast");e.textContent=msg;e.classList.add("show");clearTimeout(toast.timer);toast.timer=setTimeout(()=>e.classList.remove("show"),1900)}
function sparkles(gold=false,count=10){const layer=$("sparkles");for(let i=0;i<count;i++){let s=document.createElement("span");s.className="spark";s.textContent=gold?(Math.random()>.55?"✦":"🔑"):"✧";s.style.left=(42+Math.random()*16)+"%";s.style.top=(43+Math.random()*15)+"%";s.style.setProperty("--dx",(Math.random()*240-120)+"px");s.style.setProperty("--dy",(Math.random()*-180-20)+"px");layer.appendChild(s);setTimeout(()=>s.remove(),1200)}}

applyLanguage();renderCollection();$("trackName").textContent="Piano & Guitar";
})();
