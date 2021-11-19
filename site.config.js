// Upload files in static/ So any file static/file.pdf -> /file.pdf is accessible at root

export default {
  name: 'Rik Peeters',
  domain: 'rikp777.github.io', // add without https:// , used in meta tags and share urls
  image: '/images/bighead-five.png',
  email: 'rikpeeters11@hotmail.com',
  googleAnalyticsV4: {
    enabled: true,
    id: 'G-9VP01NDSXJ'
  },
  plausibleAnalytics: {
    enabled: true,
    domain: 'https://rikp777.github.io/',
    trackLocalhost: true,
    // leave it empty if plausible is not self hosted
    apiHost: 'https://analytics.lookatx.dev' // default: https://plausible.io
  },
  // enable if you want comments and likes on posts
  firebase: {
    enabled: true
  },
  social: {
    github: 'rikp777',
    linkedin: 'rikpeeters-nl',
    facebook: '',
    twitter: '',
    instagram: 'me.rikp/',
  },
  buyMeACoffee: {
    enabled: true,
    url: 'https://www.buymeacoffee.com/rikpeeters'
  },
  projects: {
    enabled: true,
  },
  blog: {
    enabled: false,
  },
  resume: {
    enabled: true,
    pdfUrl: '/RHF_Peeters_CV-2021-mini.pdf', // add files in static folder
    password: 'test'
  },
  uses: {
    enabled: true,
    meta: [
      {title: 'OS', value: 'Linux Arch / Windows 10'},
      {title: 'Memory', value: '16 GB '},
      {title: 'Keyboard', value: 'Razer DeathStalker'},
      {title: 'Mouse', value: 'Logitech MX Vertical Ergonomic Mouse'},
      {title: 'Monitor', value: 'Acer Predator X34'},
      {title: 'Laptop • Processor • Graphics', value: 'Lenovo Yoga 9 (15-inch, 2021) • 2.4 GHz 8-Core Intel Core i9 • GeForce GTX 1650 Ti'}
    ],
    image: {
      laptop: '/images/laptop.jpeg'
    }
  },
  internships: {
    // add logos in static and at max add 3/4
    enabled: true,
    meta: [
      {
        name: 'CytoSMART',
        src: '/images/jobs/cytosmart-logo.svg',
        url: 'https://www.cytosmart.com/',
        year: 2020,
        period: "Sept 2020 – Feb 2021 – 6 months"
      },
      {
        name: 'Limax',
        src: '/images/jobs/limax-logo.png',
        url: 'https://limax.nl',
        year: 2018,
        period: "Feb 2018 – Jul 2018 – 6 months"
      },
      {
        name: 'Cre8 media',
        src: '/images/jobs/cre8media-logo.png',
        url: 'https://www.cre8media.nl/',
        year: 2016,
        period: "Sept 2016 – Feb 2017 – 6 months"
      },
    ]
  },
  recommendations: {
    enabled: true,
    meta: [
      {
        name: 'Saray Rond',
        designation: 'Full time girlfriend ❤',
        image: 'images/saray.jfif',
        linkedin: 'https://www.linkedin.com/in/saray-r-672049212/',
        content: 'When ✨motivated✨, Rik persists till a task is finished. ' +
          'That is a valuable skill to have since some tasks can be difficult or a lot of work. ' +
          'He is also quite good at communicating with fellow students about how to approach a certain goal, he can sort of lead them to succes. That makes him a real teamplayer which is important in his field. 👨🏼‍💻'

      }
    ]
  },
  loadingIndicator: {
    name: 'pulse'
    // https://tobiasahlin.com/spinkit/
    // circle
    // cube-grid
    // fading-circle
    // folding-cube
    // chasing-dots
    // nuxt
    // pulse
    // rectangle-bounce
    // rotating-plane
    // three-bounce
    // wandering-cubes
  },
  strings: {
    en_US: {
      download: 'download',
      nav: {
        home: 'home',
        blog: 'blog',
        projects: 'projects',
        uses: 'uses',
        resume: 'résumé',
        buyMeACoffee: 'buy me a beer 🍺',
        signIn: 'sign in',
        signOut: 'sign out'
      },
      hero: {
        iBlogTech: 'Full time student blog',
        haveALook: 'have a look',
        friendlyNeighborhood: 'your friendly neighborhood',
        description: '' +
          'Hey there it\'s me Rik Peeters 👋👀. ' +
          'I am a software engineer and cyber security specialist. On this site you can read all about projects and assignments I did during my study.' +
          'In doing so, you can read what my approach is to projects and my knowledge for these topics becomes clear.',
        words: ['developer', 'engineer', 'programmer', 'encoder', 'data analysis', 'cyber security specialist'],
      },
      githubCalendar: {
        header: 'contributions',
        subtext: 'github calendar heatmap'
      },
      blog: {
        header: 'blog',
        subtext: 'i try to write once in a while. let me know your thoughts in comments'
      },
      recentBlog: {
        header: 'recent blogs',
        subtext: 'it takes a lot of time to write man'
      },
      recentProject: {
        header: 'recent projects',
        subtext: 'it takes a lot of time to write man'
      },
      uses: {
        header: 'uses',
        subtext: 'a quick summary of what I use on a daily basis to code'
      },
      projects: {
        header: 'projects',
        subtext: 'this page lists some of my personal and work projects. every project has some story, click on the title to read',
        minor: {
          subtext: 'I am Rik Peeters and I am currently studying Software-engineering. ' +
            'in addition I also am specializing in the route Cyber Security. ' +
            'In the topics below you can read all about my knowledge of topics ' +
            'This website will show all the tasks and activities that I will do during the minor. By every task, will be a theory explanation about the subject and a proof of concept that I did in order to practice that task.'
            }
      },
      recommendations: {
        header: 'recommendations',
        subtext: 'what do my mentors & friends say'
      }
    }
  }
}
