// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'mad0021', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/portfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects
      header: 'Github Projects',
      mode: 'automatic',
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false,
          projects: [],
        },
      },
      manual: {
        projects: ['mad0021/gitporfolio', 'mad0021/Full-Stack-YouTube-Clone'],
      },
    },
  },
  seo: {
    title: 'Portfolio of Mamadou Diallo',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'madev021',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'mamadoudiallo2002@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1ZIaLpq5bUkc21ohTGBk8kgbXLQ7zE7RO/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'HTML',
    'JavaScript',
    'React.js',
    'Node.js',
    'C#',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Python',
    'WordPress',
    'CSS',
    'Typescript',
    'Tailwind',
    'C++',
  ],
  experiences: [
    {
      company: 'Doceo Stoware',
      position: 'Software Engineer',
      from: 'June 2024 ',
      to: 'September 2024',
      companyLink: 'https://doceosoftware.com/es/doceo-software/',
    },
    {
      company: 'MONBAKE',
      position: 'Production Operator',
      from: 'June 2023',
      to: 'September 2023',
      companyLink: 'https://www.monbake.com/',
    },
  ],
  certifications: [
    {
      name: 'Certificado Verificado de edX para el curso Fundamentos de Ciberseguridad: un enfoque práctico',
      body: 'edX',
      year: 'June 2023',
      link: 'https://courses.edx.org/certificates/a49beb3a10ba4a92bfa12e7b22443831',
    },
  ],
  educations: [
    {
      institution: 'Institut Montilivi',
      degree: 'Higher Degree in Application Development',
      from: '2022',
      to: '2025',
    },
    {
      institution: 'Institut Montilivi',
      degree:'Professional Certification - [IFCD0112] Object-oriented Programming and Relational Databases',
      from: '2023',
      to: '2024',
    },
    {
      institution: 'Institut Santiago Sobrequés i Vidal',
      degree: 'Bachelor Degree',
      from: '2018',
      to: '2021',
    },
    {
      institution: 'Institut Santiago Sobrequés i Vidal',
      degree: 'High School',
      from: '2014',
      to: '2018',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  enablePWA: true,
};

export default CONFIG;
