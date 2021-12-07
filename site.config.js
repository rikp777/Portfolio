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
    lastfm: 'rikp777'
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
        period: "Sept 2020 – Feb 2021 – 6 months",
        description: "Research and implementation of features/modules in order to make CytoSMART’s cell counter comply to FDA 21 CFR part 11 regulations.",
        grade: 8.9
      },
      {
        name: 'Limax',
        src: '/images/jobs/limax-logo.png',
        url: 'https://limax.nl',
        year: 2018,
        period: "Feb 2018 – Jul 2018 – 6 months",
        description: "Digitization of distribution and production processes",
        grade: 8
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
        designation: 'Psychology student & Full time girlfriend ❤',
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












    NL: {
      download: 'download',
      nav: {
        home: 'thuis',
        blog: 'blog',
        projects: 'projecten',
        uses: 'gebruikt',
        resume: 'curriculum vitae',
        buyMeACoffee: 'koop mij een biertje 🍺',
        signIn: 'log in',
        signOut: 'log uit'
      },
      internships: {
        title: "Stages bij"
      },
      resume:{
        password: 'wachtwoord',
        provide: 'Voer het opgegeven wachtwoord in'
      },
      hero: {
        iBlogTech: 'Voltijd student ',
        haveALook: 'neem een kijkje',
        friendlyNeighborhood: 'jouw vriendelijke buurt',
        description: '' +
          'Hey daar, mijn naam is Rik Peeters 👋👀. ' +
          'Ik ben Software Engineer en Cyber Security specialist. Op deze site kun je alles lezen over projecten en opdrachten die ik tijdens mijn studie heb gedaan. ' +
          'Zo kun je bijvoorbeeld lezen hoe ik mijn projecten heb aangepakt en wordt mijn kennis in deze onderwerpen duidelijk.',
        words: ['ontwikkelaar', 'ingenieur', 'programmeur', 'encoder', 'gegevens analist', 'cyber security specialist'],
      },
      githubCalendar: {
        header: 'bijdragen',
        subtext: 'github calender heatmap'
      },
      blog: {
        header: 'blog',
        subtext: 'ik probeer af en toe te schrijven. Laat me weten wat je denkt in de commentaren.'
      },
      recentBlog: {
        header: 'recente blogs',
        subtext: 'het kost veel tijd om te schrijven man'
      },
      recentProject: {
        header: 'recente projecten',
        subtext: 'het neem echt veel tijd in beslag dat ✨ schrijven ✨'
      },
      uses: {
        header: 'gebruikt',
        subtext: 'een korte samenvatting van wat ik dagelijks gebruik om te coderen',
        meta: [
          {
            title: 'OS',
            value: 'Linux Arch / Windows 11'
          },
          {
            title: 'Werk geheugen',
            value: '16 GB '
          },
          {
            title: 'Toetsenbord',
            value: 'Razer DeathStalker'
          },
          {
            title: 'Muis',
            value: 'Logitech MX Verticale Ergonomische Muis'
          },
          {
            title: 'Beeldscherm',
            value: 'Acer Predator X34'
          },
          {
            title: 'Laptop • Processor • Grafisch',
            value: 'Lenovo Yoga 9 (15-inch, 2021) • 2.4 GHz 8-Core Intel Core i9 • GeForce GTX 1650 Ti'
          }
        ],
      },
      projects: {
        header: 'projecten & onderzoeken',
        subtext: 'op deze pagina staan enkele van mijn persoonlijke en werkprojecten. elk project heeft een verhaal, klik op de titel om het te lezen. ' +
          'Opmerking: Deze projecten zijn wel in het engels geschreven.',
        minor: {
          subtext: 'Ik ben Rik Peeters en ik studeer momenteel Software-engineering.  ' +
            'daarnaast ben ik ook gespecialiseerd in de route Cyber Security. ' +
            'In de onderwerpen hieronder kunt u alles lezen over mijn kennis van onderwerpen ' +
            'Op deze website komen alle taken en activiteiten te staan die ik tijdens de minor ga doen. Bij elke taak zal een theorie uitleg staan over het onderwerp en een proof of concept dat ik heb gedaan om die taak te oefenen.'
        },
        technologies: 'Technologieën',
        categories: 'Categorieën',
        all: 'alle'
      },
      recommendations: {
        header: 'aanbevelingen',
        subtext: 'wat zeggen mijn mentoren, vrienden en collega\'s',
        meta: [
          {
            name: 'Saray Rond',
            designation: 'Psychologie student en hele lieve vriendin ❤',
            image: 'images/saray.jfif',
            linkedin: 'https://www.linkedin.com/in/saray-r-672049212/',
            content: 'Als Rik ✨gemotiveerd✨ is, blijft hij aan een taak werken totdat die klaar is. ' +
              'Dat is een waardevolle skill om te hebben, aangezien sommige taken moeilijk of veel werk kunnen zijn. ' +
              'Ook is hij heel sterk op het gebied van communicatie met medestudenten. Bijvoorbeeld over hoe ze een bepaald doel moeten aanpakken, hij kan hen als het ware naar succes leiden. ' +
              'Dat maakt hem een echte teamplayer en dat is belangrijk in zijn vakgebied. 👨🏼💻'
          },
          {
            name: 'Jeanine Peeters',
            designation: 'Mams',
            content: 'Rik is een persoon waar je op kunt bouwen en die zijn werk serieus neemt. Hij stopt hier veel tijd en energie in. Hij maakt het eerst af, al duurt het tot in de late uurtjes. Rik is de kracht in zijn vak.'}
        ]
      }
    },












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
      internships: {
        title: "Internships at"
      },
      resume:{
        password: 'password',
        provide: 'Enter provided password'
      },
      hero: {
        iBlogTech: 'Full time student',
        haveALook: 'have a look',
        friendlyNeighborhood: 'your friendly neighborhood',
        description: '' +
          'Hey there it\'s me Rik Peeters 👋👀. ' +
          'I am a Software Engineer and Cyber Security specialist. On this website you can read all about projects and assignments I did during my studies.' +
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
        subtext: 'it takes a lot of time to write ✍🏽 man'
      },
      uses: {
        header: 'uses',
        subtext: 'a quick summary of what I use on a daily basis to code',
        meta: [
          {
            title: 'OS',
            value: 'Linux Arch / Windows 11'
          },
          {
            title: 'Memory',
            value: '16 GB '
          },
          {
            title: 'Keyboard',
            value: 'Razer DeathStalker'
          },
          {
            title: 'Mouse',
            value: 'Logitech MX Vertical Ergonomic Mouse'
          },
          {
            title: 'Monitor',
            value: 'Acer Predator X34'
          },
          {
            title: 'Laptop • Processor • Graphics',
            value: 'Lenovo Yoga 9 (15-inch, 2021) • 2.4 GHz 8-Core Intel Core i9 • GeForce GTX 1650 Ti'
          }
        ],
      },
      projects: {
        header: 'projects & research',
        subtext: 'this page lists some of my personal and work projects. every project has some story, click on the title to read',
        minor: {
          subtext: 'I am Rik Peeters and I am currently studying Software-engineering. ' +
            'in addition I also am specializing in the route Cyber Security. ' +
            'In the topics below you can read all about my knowledge of topics ' +
            'This website will show all the tasks and activities that I will do during the minor. By every task, will be a theory explanation about the subject and a proof of concept that I did in order to practice that task.'
        },
        technologies: 'Technologies',
        categories: 'Categories',
        all: 'all'
      },
      recommendations: {
        header: 'recommendations',
        subtext: 'what do my mentors, friends & colleagues say',
        meta: [
          {
            name: 'Saray Rond',
            designation: 'Psychology student & Full time girlfriend ❤',
            image: './images/saray.jfif',
            linkedin: 'https://www.linkedin.com/in/saray-r-672049212/',
            content: 'When ✨motivated✨, Rik persists till a task is finished. ' +
              'That is a valuable skill to have since some tasks can be difficult or a lot of work. ' +
              'He is also quite good at communicating with fellow students about how to approach a certain goal, he can sort of lead them to succes. That makes him a real teamplayer which is important in his field. 👨🏼‍💻'
          },
          {
            name: 'Jeanine Peeters',
            designation: 'Full time mother 👪',
            content: 'Rik is a person you can build on and who takes his work seriously. He puts a lot of time and energy into this. He finishes first even if it takes until the wee hours of the morning. Rik is the power in his profession.'
          }
        ]
      }
    }
  }
}
