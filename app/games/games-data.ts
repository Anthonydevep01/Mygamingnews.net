export interface HubGame {
  name: string
  href: string
  description: string
  genre: string
  playMode: string
  difficulty: string
  session: string
  tags: string[]
  accentFrom: string
  accentTo: string
  accentGlow: string
  featured?: boolean
}

export interface GameMood {
  title: string
  description: string
  cue: string
}

export interface GamesFaq {
  question: string
  answer: string
}

export const hubGames: HubGame[] = [
  {
    name: 'Neon Void',
    href: '/games/neon-void',
    description:
      'An infinite roguelike typing shooter built for MyGamingNews.net, featuring upgrades, bosses, WPM tracking, and sector progression.',
    genre: 'Typing Roguelike',
    playMode: 'Solo',
    difficulty: 'Adaptive',
    session: 'Infinite',
    tags: ['Keyboard', 'Roguelike', 'Shooter'],
    accentFrom: '#00e5ff',
    accentTo: '#7b44ff',
    accentGlow: 'rgba(0, 229, 255, 0.3)',
    featured: true,
  },
  {
    name: 'ZType',
    href: 'https://zty.pe/',
    description: 'A keyboard-first space shooter where typing speed becomes your weapon and every missed word raises the pressure.',
    genre: 'Typing Shooter',
    playMode: 'Solo',
    difficulty: 'Adaptive',
    session: '5-12 min',
    tags: ['Keyboard', 'Speed', 'Arcade'],
    accentFrom: '#6d28ff',
    accentTo: '#ff3ea5',
    accentGlow: 'rgba(141, 77, 255, 0.34)',
    featured: true,
  },
  {
    name: 'Quick, Draw!',
    href: 'https://quickdraw.withgoogle.com/',
    description: 'A playful AI drawing challenge built around fast prompts, loose sketches, and quick-fire recognition rounds.',
    genre: 'Creative Reflex',
    playMode: 'Solo',
    difficulty: 'Easy',
    session: '2-5 min',
    tags: ['Creative', 'AI', 'Family Friendly'],
    accentFrom: '#2d8cff',
    accentTo: '#5fe0ff',
    accentGlow: 'rgba(70, 160, 255, 0.34)',
  },
  {
    name: 'Little Alchemy 2',
    href: 'https://littlealchemy2.com/',
    description: 'A discovery sandbox where small combinations keep unfolding into bigger systems, recipes, and surprising chains.',
    genre: 'Puzzle Sandbox',
    playMode: 'Solo',
    difficulty: 'Medium',
    session: '10-20 min',
    tags: ['Puzzle', 'Discovery', 'Chill'],
    accentFrom: '#ff8b2c',
    accentTo: '#ffd84d',
    accentGlow: 'rgba(255, 141, 62, 0.32)',
  },
  {
    name: 'Sandspiel',
    href: 'https://sandspiel.club/',
    description: 'A tactile browser toy that feels half simulation and half tiny game, with chemistry-like reactions everywhere.',
    genre: 'Simulation Toy',
    playMode: 'Solo',
    difficulty: 'Easy',
    session: '3-15 min',
    tags: ['Sandbox', 'Simulation', 'Experimental'],
    accentFrom: '#12b981',
    accentTo: '#78f0c7',
    accentGlow: 'rgba(38, 209, 156, 0.28)',
  },
  {
    name: 'Slither.io',
    href: 'https://slither.io/',
    description: 'Still one of the cleanest examples of instant web multiplayer: readable, ruthless, and playable in seconds.',
    genre: 'Arena Arcade',
    playMode: 'Online Multiplayer',
    difficulty: 'High',
    session: '5-18 min',
    tags: ['Multiplayer', 'Reflex', 'Competitive'],
    accentFrom: '#6a5cff',
    accentTo: '#53f1d2',
    accentGlow: 'rgba(95, 171, 255, 0.28)',
  },
  {
    name: 'Agar.io',
    href: 'https://agar.io/',
    description: 'A minimalist growth-and-survival loop that remains effective because it communicates everything at a glance.',
    genre: 'Survival Arcade',
    playMode: 'Online Multiplayer',
    difficulty: 'Medium',
    session: '5-15 min',
    tags: ['Multiplayer', 'Strategy', 'Classic Web'],
    accentFrom: '#f43f5e',
    accentTo: '#fb923c',
    accentGlow: 'rgba(255, 77, 92, 0.3)',
  },
]

export const gameMoods: GameMood[] = [
  {
    title: 'Fast Fingers',
    description: 'High-response browser games that reward timing, accuracy, and short repeat sessions.',
    cue: 'Typing, dodging, precision clicks',
  },
  {
    title: 'Creative Breaks',
    description: 'Light, playful experiences that feel more like interactive toys than conventional score-chasing games.',
    cue: 'Drawing, simulation, experimentation',
  },
  {
    title: 'Competitive Tabs',
    description: 'Simple systems that become surprisingly tense when another player or a leaderboard is involved.',
    cue: 'Arena loops, survival, instant rematches',
  },
  {
    title: 'Low-Friction Chill',
    description: 'No setup, no long tutorial, and no commitment beyond a few minutes if that is all you have.',
    cue: 'One click, one round, one more go',
  },
]

export const gamesFaqs: GamesFaq[] = [
  {
    question: 'What is the MyGamingNews.net Games hub?',
    answer: 'The Games hub is a curated section focused on fast browser-play experiences, experimental web games, and lightweight interactive picks that feel different from the site’s normal editorial categories.',
  },
  {
    question: 'Are the games in this section free to play?',
    answer: 'The hub prioritizes browser-first games with little or no setup. Some linked experiences may have their own monetization or account rules, but the section is designed around fast-access web play.',
  },
  {
    question: 'Does the Games hub host the games directly?',
    answer: 'This first version is a curated discovery hub. It highlights external browser games and makes them easy to browse, compare, and launch while the section expands.',
  },
  {
    question: 'Will more playable browser games be added later?',
    answer: 'Yes. The hub is designed to grow into a larger discovery surface with more curated picks, stronger categorization, and potential first-party playable experiences over time.',
  },
]
