// Chronos: The Time Machine — Era Data
// Each era contains rich educational content for expandable cards

export const eras = [
  {
    id: 'prehistoric',
    name: 'Prehistoric Earth',
    subtitle: '4.5 Billion Years Ago — 3000 BCE',
    year: '~65 Million BCE',
    image: '/images/prehistoric.png',
    icon: '🦕',
    color: '#4ade80',
    accentColor: '#166534',
    gradientFrom: '#064e3b',
    gradientTo: '#0a0a0f',
    description: 'A world of colossal creatures, erupting volcanoes, and untamed wilderness. Life in its most primal form.',
    atmosphere: 'Thick clouds of volcanic ash, lightning storms, and bioluminescent flora illuminating the ancient forests.',
    cards: [
      {
        id: 'dino-rulers',
        title: 'Rulers of the Earth',
        icon: '🦖',
        preview: 'Dinosaurs dominated for over 160 million years',
        content: 'Dinosaurs ruled Earth for approximately 165 million years, from the Triassic period (about 230 million years ago) to the end of the Cretaceous (66 million years ago). The largest, Argentinosaurus, weighed up to 100 tons — heavier than a Boeing 737. The smallest, Microraptor, was barely the size of a crow.',
        facts: [
          'T-Rex had a bite force of 12,800 pounds — enough to crush bone',
          'Some dinosaurs had feathers, blurring the line between dinosaurs and birds',
          'The word "dinosaur" means "terrible lizard" in Greek',
          'Velociraptors were actually only about the size of a turkey'
        ]
      },
      {
        id: 'pangaea',
        title: 'Pangaea: The Supercontinent',
        icon: '🌍',
        preview: 'All continents were once a single landmass',
        content: 'Around 335 million years ago, all of Earth\'s landmasses merged into one supercontinent called Pangaea, surrounded by a single ocean called Panthalassa. This massive landmass began breaking apart about 200 million years ago, eventually forming the 7 continents we know today. The movement continues — the Atlantic Ocean widens by about 2.5 cm per year.',
        facts: [
          'Africa and South America fit together like puzzle pieces — proof of Pangaea',
          'Identical fossils have been found on continents now separated by oceans',
          'Pangaea wasn\'t the first supercontinent — there were others before it',
          'In 250 million years, continents may merge again into "Pangaea Ultima"'
        ]
      },
      {
        id: 'extinction',
        title: 'The Great Extinction',
        icon: '☄️',
        preview: 'An asteroid ended the age of dinosaurs',
        content: 'Approximately 66 million years ago, a massive asteroid about 12 km wide struck what is now the Yucatán Peninsula in Mexico, creating the Chicxulub crater (180 km wide). The impact released energy equivalent to 10 billion nuclear bombs, triggering tsunamis, wildfires, and a "nuclear winter" that blocked sunlight for years. About 75% of all species went extinct.',
        facts: [
          'The Chicxulub crater is buried under 600 meters of sediment today',
          'The impact winter lasted roughly 10 years',
          'Small mammals survived, eventually evolving into humans',
          'Earth has experienced 5 major mass extinction events in its history'
        ]
      },
      {
        id: 'first-life',
        title: 'The Dawn of Life',
        icon: '🧬',
        preview: 'From single cells to complex organisms',
        content: 'Life on Earth began approximately 3.8 billion years ago as simple single-celled organisms in Earth\'s ancient oceans. For over 3 billion years, life remained microscopic. The Cambrian Explosion, about 541 million years ago, saw an unprecedented burst of complex multicellular life in just 20 million years — a blink in geological time.',
        facts: [
          'The oldest confirmed fossils are 3.5 billion-year-old stromatolites',
          'Oxygen was originally toxic to most early life forms',
          'The first animals were soft-bodied creatures like jellyfish',
          'Photosynthesis by cyanobacteria created Earth\'s oxygen atmosphere'
        ]
      }
    ]
  },
  {
    id: 'egypt',
    name: 'Ancient Egypt',
    subtitle: '3100 BCE — 30 BCE',
    year: '~2500 BCE',
    image: '/images/egypt.png',
    icon: '🏛️',
    color: '#fbbf24',
    accentColor: '#92400e',
    gradientFrom: '#78350f',
    gradientTo: '#0a0a0f',
    description: 'A civilization of pharaohs, pyramids, and powerful gods. Where humanity first reached for immortality.',
    atmosphere: 'Golden sands stretch endlessly under a blazing sun, the Nile glistening like liquid gold, monumental structures casting long shadows.',
    cards: [
      {
        id: 'pyramids',
        title: 'The Great Pyramids',
        icon: '🔺',
        preview: 'Engineering marvels that defied time itself',
        content: 'The Great Pyramid of Giza, built around 2560 BCE for Pharaoh Khufu, stands 146.6 meters tall and was the tallest man-made structure for nearly 4,000 years. It contains approximately 2.3 million limestone blocks, each weighing an average of 2.5 tons. The precision of its construction is astounding — the base is level to within just 2.1 centimeters.',
        facts: [
          'The Great Pyramid was originally covered in white limestone that gleamed in the sun',
          'It took approximately 20 years and 20,000-30,000 workers to build',
          'The internal temperature remains constant at 20°C (68°F)',
          'The pyramid\'s sides are aligned almost perfectly with the cardinal directions'
        ]
      },
      {
        id: 'hieroglyphics',
        title: 'Hieroglyphics: Sacred Writing',
        icon: '𓂀',
        preview: 'A writing system of over 700 symbols',
        content: 'Egyptian hieroglyphics are one of the oldest writing systems, dating back to around 3200 BCE. The word means "sacred carvings" in Greek. The system uses over 700 symbols representing sounds, ideas, and objects. For over 1,400 years, no one could read them — until the Rosetta Stone was discovered in 1799, providing the key to decipherment.',
        facts: [
          'Jean-François Champollion cracked the hieroglyphic code in 1822',
          'Hieroglyphics could be written left-to-right, right-to-left, or top-to-bottom',
          'Only about 3% of ancient Egyptians could read and write',
          'The Rosetta Stone contains the same text in 3 scripts: hieroglyphic, demotic, and Greek'
        ]
      },
      {
        id: 'pharaohs',
        title: 'The Pharaohs',
        icon: '👑',
        preview: 'God-kings who ruled for 3,000 years',
        content: 'Pharaohs were considered living gods, intermediaries between the divine and mortal worlds. Ancient Egypt was ruled by approximately 170 pharaohs across 30 dynasties. The most famous include Khufu (builder of the Great Pyramid), Tutankhamun (the boy king whose tomb was found intact), and Cleopatra VII, the last active ruler of the Ptolemaic Kingdom.',
        facts: [
          'Cleopatra lived closer in time to the Moon landing than to the building of the Great Pyramid',
          'Tutankhamun became pharaoh at just 9 years old',
          'Hatshepsut, one of the most successful pharaohs, was a woman',
          'Pharaohs wore fake beards as a symbol of divine power'
        ]
      },
      {
        id: 'mummification',
        title: 'Mummification & the Afterlife',
        icon: '⚱️',
        preview: 'The quest for eternal life',
        content: 'Ancient Egyptians believed in an afterlife and developed mummification to preserve the body for the soul\'s journey. The process took about 70 days: organs were removed (except the heart), the body was dried with natron salt for 40 days, then wrapped in linen bandages. The Book of the Dead contained spells to guide the deceased through the underworld.',
        facts: [
          'The brain was removed through the nose using a hook',
          'Organs were stored in canopic jars guarded by 4 gods',
          'Over 70 million mummies were made in ancient Egypt',
          'Some mummies still have fingerprints intact after 3,000 years'
        ]
      }
    ]
  },
  {
    id: 'modern',
    name: 'The Modern Era',
    subtitle: '1760 CE — Present',
    year: '~2024 CE',
    image: '/images/modern.png',
    icon: '🏙️',
    color: '#60a5fa',
    accentColor: '#1e40af',
    gradientFrom: '#1e3a5f',
    gradientTo: '#0a0a0f',
    description: 'The age of revolution, innovation, and global connection. Humanity reshaped the world in mere centuries.',
    atmosphere: 'Neon-lit skylines pierce the night, digital streams flow through fiber optics, rocket exhaust trails cut across a starlit sky.',
    cards: [
      {
        id: 'industrial-revolution',
        title: 'The Industrial Revolution',
        icon: '⚙️',
        preview: 'Steam, steel, and the birth of the modern world',
        content: 'Beginning in Britain around 1760, the Industrial Revolution transformed humanity from agrarian societies to industrial powerhouses. James Watt\'s improved steam engine (1776) powered factories, trains, and ships. This period saw the invention of the spinning jenny, power loom, and telegraph — technologies that connected and accelerated the world like never before.',
        facts: [
          'The world population doubled from 1 billion to 2 billion between 1804 and 1927',
          'Child labor was common — children as young as 5 worked in factories',
          'The first commercial railroad opened in 1825 between Stockton and Darlington',
          'Life expectancy actually decreased initially due to poor working conditions'
        ]
      },
      {
        id: 'space-race',
        title: 'The Space Race',
        icon: '🚀',
        preview: 'Humanity reaches beyond Earth for the first time',
        content: 'The Space Race between the US and USSR defined the 1960s. The Soviets launched Sputnik (1957) and sent Yuri Gagarin as the first human in space (1961). America responded with the Apollo program — on July 20, 1969, Neil Armstrong and Buzz Aldrin walked on the Moon while 600 million people watched on television, uniting humanity in wonder.',
        facts: [
          'The Apollo 11 computer had less processing power than a modern calculator',
          'Astronauts grew 2 inches taller in space due to spinal decompression',
          'The Moon landing used only 72 KB of computer memory',
          'There are 6 American flags on the Moon — most are now bleached white by UV radiation'
        ]
      },
      {
        id: 'digital-age',
        title: 'The Digital Revolution',
        icon: '💻',
        preview: 'From room-sized computers to smartphones',
        content: 'The Digital Revolution began in the 1970s with personal computers and accelerated with the World Wide Web (invented by Tim Berners-Lee in 1989). Today, a single smartphone has more computing power than all of NASA during the Apollo era. Over 5 billion people are connected to the internet, and humanity generates 2.5 quintillion bytes of data daily.',
        facts: [
          'The first email was sent in 1971 by Ray Tomlinson',
          'The first website went live on August 6, 1991',
          'More people have mobile phones than toothbrushes globally',
          'In 2024, AI systems can generate text, images, music, and video from simple prompts'
        ]
      },
      {
        id: 'medical-breakthroughs',
        title: 'Medical Breakthroughs',
        icon: '🧪',
        preview: 'Vaccines, antibiotics, and genetic engineering',
        content: 'Modern medicine has doubled human life expectancy from ~35 years in 1800 to over 73 years today. Alexander Fleming discovered penicillin in 1928, saving an estimated 200 million lives. The Human Genome Project (completed 2003) mapped all 3 billion base pairs of human DNA, and CRISPR gene editing now allows us to modify the code of life itself.',
        facts: [
          'Smallpox is the only human disease ever completely eradicated (1980)',
          'The first successful organ transplant was a kidney in 1954',
          'mRNA vaccine technology used for COVID-19 was developed over 30 years',
          'The human body contains approximately 37.2 trillion cells'
        ]
      }
    ]
  },
  {
    id: 'future',
    name: 'Future Civilization',
    subtitle: '2100 CE — Beyond',
    year: '~2250 CE',
    image: '/images/future.png',
    icon: '🚀',
    color: '#c084fc',
    accentColor: '#6b21a8',
    gradientFrom: '#3b0764',
    gradientTo: '#0a0a0f',
    description: 'A world of limitless possibility. Flying cities, quantum minds, and humanity among the stars.',
    atmosphere: 'Crystalline spires reach into orbit, anti-gravity vehicles hum silently, holographic displays paint the air with living data.',
    cards: [
      {
        id: 'flying-cars',
        title: 'Flying Cars & Aerial Cities',
        icon: '🚗',
        preview: 'Personal flight becomes everyday transportation',
        content: 'By the 2100s, electric vertical takeoff and landing (eVTOL) vehicles have evolved into personal flying cars powered by compact fusion reactors. Cities extend vertically with floating platforms connected by energy bridges. Sky lanes replace highways, and AI autopilots eliminate accidents. Entire neighborhoods hover above the ground, supported by anti-gravity technology.',
        facts: [
          'Early eVTOL prototypes were already flying in the 2020s',
          'NASA\'s Advanced Air Mobility program laid the groundwork for sky lanes',
          'Magnetic levitation technology is a stepping stone to anti-gravity',
          'Vertical cities can house 10x more people per square kilometer'
        ]
      },
      {
        id: 'ai-consciousness',
        title: 'Artificial Superintelligence',
        icon: '🤖',
        preview: 'Machines that think, feel, and create',
        content: 'Artificial General Intelligence was achieved in the mid-21st century, followed by superintelligent systems that surpass human cognition in every domain. These AIs serve as collaborative partners — designing new medicines in minutes, solving climate equations, and even composing symphonies. The philosophical debate about AI consciousness defines this era\'s greatest question.',
        facts: [
          'The Turing Test was definitively passed in the 2030s',
          'Quantum computing enabled AI to simulate entire ecosystems',
          'Neural-link interfaces allow direct human-AI thought exchange',
          'AI artists won their first Nobel Prize equivalent for creative works'
        ]
      },
      {
        id: 'space-colonies',
        title: 'Interplanetary Civilization',
        icon: '🪐',
        preview: 'Humanity spreads across the solar system',
        content: 'Mars was colonized in the 2050s, and by the 2200s, thriving cities exist on Mars, Europa, and Titan. Massive space stations called O\'Neill Cylinders house millions in orbit, with artificial gravity and engineered ecosystems. A space elevator connects Earth\'s equator to geosynchronous orbit, making space travel as routine as catching a train.',
        facts: [
          'SpaceX\'s Starship program was the first step toward Mars colonization',
          'Europa\'s subsurface ocean may have hosted the first discovered alien life',
          'Asteroid mining provides virtually unlimited resources',
          'Generation ships are being designed for interstellar travel to Proxima Centauri'
        ]
      },
      {
        id: 'quantum-tech',
        title: 'Quantum Technology',
        icon: '⚛️',
        preview: 'Harnessing the fabric of reality itself',
        content: 'Quantum technology has revolutionized every aspect of civilization. Quantum computers solve in seconds what classical computers couldn\'t solve in the lifetime of the universe. Quantum teleportation enables instant communication across the solar system. Quantum materials — room-temperature superconductors and programmable matter — have made the impossible mundane.',
        facts: [
          'Quantum encryption makes unbreakable communication possible',
          'Programmable matter can change shape, color, and function on command',
          'Quantum sensors can detect single atoms and gravitational waves',
          'Room-temperature superconductors eliminated energy loss in power transmission'
        ]
      }
    ]
  }
];

export const laboratoryData = {
  title: 'CHRONOS',
  subtitle: 'TEMPORAL DISPLACEMENT ENGINE',
  version: 'v7.3.1',
  status: 'STANDBY',
  energyCores: [
    { id: 1, name: 'ALPHA CORE', power: 87, color: '#00f0ff' },
    { id: 2, name: 'BETA CORE', power: 92, color: '#8b5cf6' },
    { id: 3, name: 'GAMMA CORE', power: 78, color: '#ff8c00' }
  ],
  systemReadings: [
    { label: 'Temporal Flux', value: '3.7 THz', status: 'nominal' },
    { label: 'Quantum Coherence', value: '99.2%', status: 'nominal' },
    { label: 'Chrono Particles', value: '1.4M/s', status: 'nominal' },
    { label: 'Warp Stability', value: '94.8%', status: 'caution' }
  ]
};
