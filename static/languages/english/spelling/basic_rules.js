export default [
  {
    name: "Basic rules",
    type: ["B1", "B2"],
    subs: [
      {
        name: "",
        rule:
          `
          [B1] Na een sisklank ([s], [sj], [tsj]) krijgt een woord -es in plaats van -s.,
          `,
        description:
          `
          box – boxes
          watch – watches
          `
      },
      {
        name: "",
        rule:
          `
            Na -o krijgt een aantal woorden -es­ in plaats van -s.
            Dit geldt bijvoorbeeld voor het meervoud van cargo, echo, hero, mosquito, potato en tomato en voor de werkwoorden do en go.
          `,
        description:
          `
            hero – heroes
            do – she does
            go – he goes
          `
      },
      {
        name: "",
        rule:
          `
          Woorden zoals calf, half, life, wife, knife, shelf, wolf, leaf, thief en loaf (of bread) krijgen -ves in het meervoud.
          `,
        description:
          `
          calf, half – calves, halves
          life, wife, knife – lives, wives, knives
          shelf, wolf – shelves, wolves
          leaf, thief, loaf – leaves, thieves, loaves
          `
      },
      {
        name: "",
        rule:
          `
            Na een medeklinker verandert -y in -ie.
            Maar na een klinker (a, e, i, o, u) verandert de -y niet.
          `,
        description:
          `
            twenty – twentieth
            easy – easier – easiest
            lady – ladies
            to try – she tries – she tried
            but: boy – boys; to play – played
          `
      },
      {
        name: "",
        rule:
          `
            De ‘stille -e’, een e aan het eind van een woord die je niet uitspreekt, valt weg voor de uitgangen -ed, -er/-est en -ing.
          `,
        description:
          `
            wise wordt niet wiseer, maar wiser
            simple – simpler – simplest
            to share – shared – sharing
          `
      },
      {
        name: "",
        rule:
          `
            De -ie aan het eind van een werkwoord verandert in -y voor de uitgang -ing.
          `,
        description:
          `
            to lie – lying
          `
      }
    ],
    exercise: [
      {
        question: "What would happen if the two biggest … (army) in the world fought a war against each other?",
        type: "multiple_choice",
        options: [
          {
            question: "armies",
            correct: true,
          },
          {
            question: "armys",
            correct: false,
          },
          {
            question: "armys's",
            correct: false,
          }
        ]
      },
      {
        question: "Ahmed quickly threw the … in the dishwasher before leaving the house.",
        type: "multiple_choice",
        options: [
          {
            question: "dishes",
            correct: true,
          },
          {
            question: "dishs",
            correct: false,
          },
        ]
      },
      {
        question: "Everywhere I go, I see young women pushing … around in prams.",
        type: "multiple_choice",
        options: [
          {
            question: "babies",
            correct: true,
          },
          {
            question: "baby's",
            correct: false,
          },
          {
            question: "babys",
            correct: false,
          }
        ]
      },
      {
        question: "There's a difference between … and not telling certain things, but both actions are insincere.",
        tip: "The word share ends in a silent -e. We drop the silent -e before the endings -ed, -er/-est and -ing, so it becomes sharing.",
        type: "multiple_choice",
        options: [
          {
            question: "lying",
            correct: true,
          },
          {
            question: "lieing",
            correct: false,
          },
          {
            question: "lieying",
            correct: false,
          }
        ]
      },
      {
        question: "I've asked the carpenter to install some extra … (shelf) for storage.",
        type: "multiple_choice",
        options: [
          {
            question: "shelfs",
            correct: false,
          },
          {
            question: "shelf's",
            correct: false,
          },
          {
            question: "shelves",
            correct: true,
          },
        ]
      },
      {
        question: "According to witnesses, the robbery was carried out by three teenage … (boy).",
        type: "multiple_choice",
        options: [
          {
            question: "boies",
            correct: false,
          },
          {
            question: "boyes",
            correct: false,
          },
          {
            question: "boy's",
            correct: false,
          },
          {
            question: "boys",
            correct: true,
          },
        ]
      },
      {
        question: "Quick, call the police! Some … (boy) are spraying graffiti on our walls.",
        type: "multiple_choice",
        options: [
          {
            question: "boies",
            correct: false,
          },
          {
            question: "boyes",
            correct: false,
          },
          {
            question: "boy's",
            correct: false,
          },
          {
            question: "boys",
            correct: true,
          },
        ]
      },
      {
        question: "On the … I'm flying to New York to represent my company at a conference.",
        type: "multiple_choice",
        options: [
          {
            question: "twenteeth",
            correct: false,
          },
          {
            question: "twentieth",
            correct: true,
          },
          {
            question: "twentyth",
            correct: false,
          },
          {
            question: "twentietht",
            correct: false,
          },
        ]
      },
      {
        question: "As a kid, Patricia loved shouting into wells to hear the … of her words.",
        tip: "Het woord echo krijgt na de o in het meervoud -es in plaats van -s, dus je schrijft echoes.",
        type: "multiple_choice",
        options: [
          {
            question: "echoes",
            correct: true,
          },
          {
            question: "echos",
            correct: false,
          },
        ]
      },
      {
        question: "The store makes sure that the … are well-stocked every day.",
        tip: "Je gebruikt shelves, want sommige woorden die op -f eindigen, zoals shelf, krijgen -ves in het meervoud.",
        type: "multiple_choice",
        options: [
          {
            question: "shelfs",
            correct: false,
          },
          {
            question: "shelves",
            correct: true,
          },
        ]
      },
      {
        question: "Can I borrow your electric drill? I want to hang some … next to my desk.",
        tip: "Je gebruikt bookshelves, want sommige woorden die op -f eindigen, zoals bookshelf, krijgen -ves in het meervoud.",
        type: "multiple_choice",
        options: [
          {
            question: "bookshelfes",
            correct: false,
          },
          {
            question: "bookshelfs",
            correct: false,
          },
          {
            question: "bookshelves",
            correct: true,
          },
        ]
      },
      {
        question: "Look at the … on those cars. They're painted so beautifully!",
        tip: "Het zelfstandig naamwoord finish eindigt op een sisklank en krijgt daarom -es in het meervoud in plaats van -s, dus finishes.",
        type: "multiple_choice",
        options: [
          {
            question: "finish's",
            correct: false,
          },
          {
            question: "finishes",
            correct: true,
          },
          {
            question: "finishs",
            correct: false,
          },
        ]
      },
      {
        question: "No … of the well-known organised crime groups were arrested.",
        tip: "Het woord boss eindigt op een sisklank, dus dat krijgt -es in plaats van -s om er meervoud van te maken: bosses.",
        type: "multiple_choice",
        options: [
          {
            question: "boses",
            correct: false,
          },
          {
            question: "boses",
            correct: true,
          },
        ]
      },
      {
        question: "Younger people are always trying to imitate the actions of their … in films and television series.",
        tip: "Het woord hero krijgt na de -o in het meervoud -es in plaats van -s, dus heroes.",
        type: "multiple_choice",
        options: [
          {
            question: "horoes",
            correct: true,
          },
          {
            question: "heros",
            correct: false,
          },
          {
            question: "hero's",
            correct: false,
          },
        ]
      },
      {
        question: "How can the government ignore the ... of the majority of the population?",
        tip: "Het woord wish eindigt op een sisklank en daarom krijgt het woord in het meervoud -es in plaats van -s.",
        type: "multiple_choice",
        options: [
          {
            question: "wishes",
            correct: true,
          },
          {
            question: "wishs",
            correct: false,
          },
        ]
      },
      {
        question: "The professor was frustrated by the number of typos in her students' …",
        tip: "De -y verandert niet in -ie bij het woord essays omdat voor de -y een klinker staat.",
        type: "multiple_choice",
        options: [
          {
            question: "essay's",
            correct: false,
          },
          {
            question: "essaies",
            correct: false,
          },
          {
            question: "essays",
            correct: true,
          },
        ]
      },
      {
        question: "Please make sure you close the windows before it gets dark. Otherwise the … come in.",
        tip: "Het woord mosquito krijgt na de o -es in plaats van -s, dus mosquitoes.",
        type: "multiple_choice",
        options: [
          {
            question: "mosquito's",
            correct: false,
          },
          {
            question: "mosquitoes",
            correct: true,
          },
          {
            question: "mosquitos",
            correct: false,
          },
        ]
      },
      {
        question: "Yesterday evening, two ... broke into a house in the centre of Amsterdam.",
        tip: "Het woord thief schrijf je in het meervoud met -ves, dus thieves.",
        type: "multiple_choice",
        options: [
          {
            question: "thiefs",
            correct: false,
          },
          {
            question: "thieves",
            correct: true,
          },
        ]
      },
      {
        question: "Many … (church) built today combine traditional and modern architectural styles.",
        tip: "Het woord church eindigt op een sisklank en krijgt daarom -es in het meervoud in plaats van -s.",
        type: "multiple_choice",
        options: [
          {
            question: "churches",
            correct: true,
          },
          {
            question: "churchs",
            correct: false,
          },
        ]
      },
      {
        question: "I never used to save money but now I'm a little older and … (wise), I can see the point of it.",
        tip: "Het woord wise eindigt op een 'stille -e', daarom valt de -e weg voor de uitgangen -ed, -er/-est en -ing, dus wiser.",
        type: "multiple_choice",
        options: [
          {
            question: "wiseer",
            correct: false,
          },
          {
            question: "wiser",
            correct: true,
          },
        ]
      },
      {
        question: "If you're fed up with your glasses getting dirty all the time, maybe you should consider contact …",
        tip: "Het woord lens eindigt op een sisklank, dus dat krijgt -es in plaats van -s om er meervoud van te maken: lenses.",
        type: "multiple_choice",
        options: [
          {
            question: "lens's",
            correct: false,
          },
          {
            question: "lenses",
            correct: true,
          },
          {
            question: "lenzes",
            correct: false,
          },
        ]
      },
      {
        question: "If you're fed up with your glasses getting dirty all the time, maybe you should consider contact …",
        tip: "Het woord lens eindigt op een sisklank, dus dat krijgt -es in plaats van -s om er meervoud van te maken: lenses.",
        type: "multiple_choice",
        options: [
          {
            question: "lens's",
            correct: false,
          },
          {
            question: "lenses",
            correct: true,
          },
          {
            question: "lenzes",
            correct: false,
          },
        ]
      },
      {
        question: "My favourite thing about growing up on a farm was seeing the … going into the field for the first time.",
        tip: "Je gebruikt calves, want sommige woorden die op -f eindigen, zoals calf, krijgen -ves in het meervoud.",
        type: "multiple_choice",
        options: [
          {
            question: "calfs",
            correct: false,
          },
          {
            question: "calves",
            correct: true,
          },
        ]
      },
      {
        question: "Yesterday morning, I spoke to some … (lady) at the travel agency.",
        tip: "Het woord lady wordt ladies met -ie-, want na een medeklinker (hier d) verandert -y in -ie.",
        type: "multiple_choice",
        options: [
          {
            question: "ladies",
            correct: true,
          },
          {
            question: "ladys",
            correct: false,
          },
          {
            question: "lady's",
            correct: false,
          },
        ]
      },
      {
        question: "You should get your … sharpened. They are too dull to cut anything with.",
        tip: "Het woord knife schrijf je in het meervoud met -ves, dus knives.",
        type: "multiple_choice",
        options: [
          {
            question: "knife's",
            correct: true,
          },
          {
            question: "knifes",
            correct: false,
          },
          {
            question: "knives",
            correct: false,
          },
        ]
      },
      {
        question: "When I was a child, we always … board games at Christmas.",
        tip: "Het werkwoord play krijgt gewoon de uitgang -ed in de verleden tijd. De -y verandert niet in -ie als er een klinker voor staat (hier a).",
        type: "multiple_choice",
        options: [
          {
            question: "plaid",
            correct: false,
          },
          {
            question: "plaied",
            correct: false,
          },
          {
            question: "played",
            correct: true,
          },
        ]
      },
      {
        question: "When I go to work, I usually take several … (sandwich) with me for lunch.",
        tip: "Het woord sandwich eindigt op een sisklank en krijgt daarom -es in het meervoud in plaats van -s, dus sandwiches.",
        type: "multiple_choice",
        options: [
          {
            question: "sandwiches",
            correct: true,
          },
          {
            question: "sandwichs",
            correct: false,
          }
        ]
      },
      {
        question: "This Italian recipe calls for a lot of … (tomato).",
        tip: "Het woord tomato krijgt na de o -es in plaats van -s, dus tomatoes.",
        type: "multiple_choice",
        options: [
          {
            question: "tomatoes",
            correct: true,
          },
          {
            question: "tomatos",
            correct: false,
          }
        ]
      },
      {
        question: "Ragnar came from a musical family with three guitars and two … at home.",
        tip: "Sommige woorden die eindigen op -o,krijgen ­-es in plaats van -s in het meervoud. Het woord piano is een uitzondering en krijgt gewoon een -s in het meervoud, dus pianos.",
        type: "multiple_choice",
        options: [
          {
            question: "pianoes",
            correct: false,
          },
          {
            question: "pianos",
            correct: true,
          }
        ]
      },
      {
        question: "Susan gives her children lots of … (kiss) before they go to bed every night.",
        tip: "Het woord kiss eindigt op een sisklank en krijgt daarom -es in het meervoud in plaats van -s.",
        type: "multiple_choice",
        options: [
          {
            question: "kiss",
            correct: false,
          },
          {
            question: "kisses",
            correct: true,
          }
        ]
      },
      {
        question: "I asked you to speak the truth! Why are you … (to lie) to me?",
        tip: "Het werkwoord to lie eindigt op -ie. Deze -ie verandert in -y voor de uitgang -ing. Daarom wordt het lying.",
        type: "multiple_choice",
        options: [
          {
            question: "lieing",
            correct: false,
          },
          {
            question: "lying",
            correct: true,
          }
        ]
      },
      {
        question: "I wish my mother would stop … embarrassing childhood pictures of me on social media.",
        tip: "Het woord share eindigt op een stille -e. Die valt weg voor de uitgang -ing, dus het goede antwoord is sharing.",
        type: "multiple_choice",
        options: [
          {
            question: "shareing",
            correct: false,
          },
          {
            question: "shareïng",
            correct: false,
          },
          {
            question: "sharing",
            correct: true,
          }
        ]
      },
      {
        question: "The second goal of the game came in the … (fifty) minute.",
        tip: "Het woord fifty wordt fiftieth met -ie-, want na een medeklinker (hier t) verandert -y in -ie.",
        type: "multiple_choice",
        options: [
          {
            question: "fiftieth",
            correct: true,
          },
          {
            question: "fiftyeth",
            correct: false,
          },
          {
            question: "fifteeth",
            correct: false,
          }
        ]
      },
      {
        question: "Licking your companions is a form of social bonding, practised by many … (wolf) and wild dogs.",
        tip: "Het woord wolf schrijf je in het meervoud met -ves, dus wolves.",
        type: "multiple_choice",
        options: [
          {
            question: "wolfs",
            correct: false,
          },
          {
            question: "wolves",
            correct: true,
          },
        ]
      },
      {
        question: "Do you want to go to the zoo with me sometime soon? One of the … had a baby!",
        tip: "Sommige woorden die eindigen op -f of -fe, krijgen -ves in het meervoud. Het woord giraffe is een uitzondering en krijgt gewoon een -s in het meervoud, dus giraffes.",
        type: "multiple_choice",
        options: [
          {
            question: "giraffes",
            correct: true,
          },
          {
            question: "giraffs",
            correct: false,
          },
          {
            question: "giraves",
            correct: false,
          },
        ]
      },
      {
        question: "My grandmother is in her … but still looks very glamorous.",
        tip: "Het woord eighty wordt eighties met -ie-, want na een medeklinker (hier t) verandert -y in -ie.",
        type: "multiple_choice",
        options: [
          {
            question: "eighties",
            correct: true,
          },
          {
            question: "eightys",
            correct: false,
          },
        ]
      },
      {
        question: "This street is one of the … streets in the city.",
        tip: "Het woord busy wordt busiest met -ie-, want na een medeklinker (hier s) verandert -y in -ie.",
        type: "multiple_choice",
        options: [
          {
            question: "busiest",
            correct: true,
          },
          {
            question: "busyest",
            correct: false,
          },
          {
            question: "busyst",
            correct: false,
          },
        ]
      },
      {
        question: "We couldn't find our … (hairbrush), but we still had our combs.",
        tip: "Het woord hairbrush eindigt op een sisklank en krijgt daarom -es in het meervoud in plaats van -s, dus hairbrushes.",
        type: "multiple_choice",
        options: [
          {
            question: "hairbrushes",
            correct: true,
          },
          {
            question: "hairbrushs",
            correct: false,
          },
        ]
      },
      {
        question: "Every Friday Jack ... to the bakery to buy a cake for his colleagues to enjoy during their coffee break.",
        tip: "We zetten -es in plaats van -s achter het werkwoord go, dus goes.",
        type: "multiple_choice",
        options: [
          {
            question: "goes",
            correct: true,
          },
          {
            question: "gos",
            correct: false,
          },
        ]
      },
      {
        question: "A lot of trees are … because there has been so little rain this year.",
        tip: "Het werkwoord die eindigt op -ie. Deze -ie verandert in -y voor de uitgang -ing, dus dying.",
        type: "multiple_choice",
        options: [
          {
            question: "dieing",
            correct: false,
          },
          {
            question: "dying",
            correct: true,
          },
        ]
      },
      {
        question: "The walls threw back the … (echo) of Peter's footsteps.",
        tip: "Het woord echo krijgt na de o -es in plaats van -s, dus echoes.",
        type: "multiple_choice",
        options: [
          {
            question: "echoes",
            correct: true,
          },
          {
            question: "echos",
            correct: false,
          },
          {
            question: "echo's",
            correct: false,
          },
        ]
      },
      {
        question: "The men sharpened their … (knife) before throwing them at the targets.",
        tip: "Het woord knife schrijf je in het meervoud met -ves, dus knives.",
        type: "multiple_choice",
        options: [
          {
            question: "knives",
            correct: true,
          },
          {
            question: "knifes",
            correct: false,
          },
        ]
      },
      {
        question: "In order for us to improve our service, it is important that customers fill in our ...",
        tip: "Bij het woord survey verandert -y niet -ie omdat er een klinker voor de -y staat, dus je schrijft surveys.",
        type: "multiple_choice",
        options: [
          {
            question: "surveies",
            correct: false,
          },
          {
            question: "surveys",
            correct: true,
          },
          {
            question: "surveyes",
            correct: false,
          },
        ]
      },
      {
        question: "Some people try their hardest to come up with a complicated plan, but I think the … ideas are often the best.",
        tip: "Het woord simple eindigt op een stille -e. Die valt weg voor de uitgang -est, dus het goede antwoord is simplest.",
        type: "multiple_choice",
        options: [
          {
            question: "simpelst",
            correct: false,
          },
          {
            question: "simpleest",
            correct: false,
          },
          {
            question: "simplest",
            correct: true,
          },
        ]
      },
      {
        question: "I know it's … (easy) said than done, but at least it's something to aim for.",
        tip: "Het woord easy wordt in de vergrotende trap easier met -ie-, want na een medeklinker (hier s) verandert -y in -ie.",
        type: "multiple_choice",
        options: [
          {
            question: "easier",
            correct: true,
          },
          {
            question: "easyer",
            correct: false,
          },
        ]
      },


      {
        question: "Her brother has never done his taxs before, so I'm helping him file his tax return.",
        tip: "Het woord tax eindigt op een sisklank en krijgt daarom -es in het meervoud in plaats van -s, dus taxes.",
        type: "write",
        options: [
          {
            question: "Her brother has never done his taxes before, so I'm helping him file his tax return.",
            correct: true,
          },
        ]
      },
      {
        question: "American and British are perhaps the most well-known varietis of English, but there are many others.",
        tip: "Het woord variety wordt varieties in het meervoud met -ie, want na een medeklinker (hier t) verandert -y in -ie.",
        type: "write",
        options: [
          {
            question: "American and British are perhaps the most well-known varieties of English, but there are many others.",
            correct: true,
          },
        ]
      },
      {
        question: "The company is throwing a huge party to celebrate its thirtyth anniversary next month.",
        tip: "Het woord thirty wordt thirtieth met -ie, want na een medeklinker (hier t) verandert -y in -ie.",
        type: "write",
        options: [
          {
            question: "The company is throwing a huge party to celebrate its thirtieth anniversary next month.",
            correct: true,
          },
        ]
      },
      {
        question: "He signed up for a gym when he moved here, but I don't think he ever actually gos there.",
        tip: "Het werkwoord go krijgt na de -o -es in plaats van -s, dus goes.",
        type: "write",
        options: [
          {
            question: "He signed up for a gym when he moved here, but I don't think he ever actually goes there.",
            correct: true,
          },
        ]
      },
      {
        question: "My cat fell out of a window last night, but somehow she's fine. It must have cost her one of her nine lifes.",
        tip: "Het woord life schrijf je in het meervoud met -ves, dus lives.",
        type: "write",
        options: [
          {
            question: "My cat fell out of a window last night, but somehow she's fine. It must have cost her one of her nine lives.",
            correct: true,
          },
        ]
      },
      {
        question: "Their hallway is decorated with dozens of framed photoes of their friends and family.",
        tip: "Het woord photo krijgt gewoon een -s, dus photos.",
        type: "write",
        options: [
          {
            question: "Their hallway is decorated with dozens of framed photos of their friends and family.",
            correct: true,
          },
        ]
      },
      {
        question: "When I heard that my grandmother was dieing, I drove to the hospital as fast as I could so I could say goodbye.",
        tip: "Het werkwoord die eindigt op -ie. Deze -ie verandert in -y voor de uitgang -ing. Daarom wordt het dying.",
        type: "write",
        options: [
          {
            question: "When I heard that my grandmother was dying, I drove to the hospital as fast as I could so I could say goodbye.",
            correct: true,
          },
        ]
      },
      {
        question: "When I was in Spain, I saw two donkies pulling a cart full of vases to the market square. ",
        tip: "De -y verandert niet in -ie bij het woord donkeys omdat voor de -y een klinker staat.",
        type: "write",
        options: [
          {
            question: "When I was in Spain, I saw two donkeys pulling a cart full of vases to the market square.",
            correct: true,
          },
        ]
      },
      {
        question: "You shouldn't leave toddlers alone for too long as they can't look after themselfs yet.",
        tip: "Het woord self schrijf je in het meervoud met -ves, ook al is het een onderdeel van een ander woord, dus themselves.",
        type: "write",
        options: [
          {
            question: "You shouldn't leave toddlers alone for too long as they can't look after themselves yet.",
            correct: true,
          },
        ]
      },
      {
        question: "People say it's easyer to give a presentation if you imagine the audience is naked, but I disagree. It makes me even more uncomfortable!",
        tip: "Het woord easy wordt in de vergrotende trap easier met -ie-, want na een medeklinker (hier s) verandert -y in -ie.",
        type: "write",
        options: [
          {
            question: "People say it's easier to give a presentation if you imagine the audience is naked, but I disagree. It makes me even more uncomfortable!",
            correct: true,
          },
        ]
      },
      {
        question: "My sister always claims that she has two stomaches: one for normal food and one for dessert.",
        tip: "In tegenstelling tot sommige andere woorden eindigend op -ch, spreek je stomach niet uit met een sisklank maar met een k. Daarom gebruik je gewoon -s: stomachs.",
        type: "write",
        options: [
          {
            question: "My sister always claims that she has two stomachs: one for normal food and one for dessert.",
            correct: true,
          },
        ]
      },
      {
        question: "The marketing campaign was a huge success – all the important bloggers are writeing about it on social media!",
        tip: "Het werkwoord write eindigt op een 'stille -e', daarom valt de -e weg voor de uitgangen -ed, -er/-est en -ing, dus writing.",
        type: "write",
        options: [
          {
            question: "The marketing campaign was a huge success – all the important bloggers are writing about it on social media!",
            correct: true,
          },
        ]
      },
      {
        question: "According to Plato, early humans had four arms and four legs before being cut into two halfs by Zeus.",
        tip: "Het woord half schrijf je in het meervoud met -ves, dus halves.",
        type: "write",
        options: [
          {
            question: "According to Plato, early humans had four arms and four legs before being cut into two halves by Zeus.",
            correct: true,
          },
        ]
      },
      {
        question: "Can you go by the supermarket on your way home? All my potatos are rotten, but I need some for our dinner.",
        tip: "Het woord potato krijgt na de -o -es in plaats van -s, dus potatoes.",
        type: "write",
        options: [
          {
            question: "Can you go by the supermarket on your way home? All my potatoes are rotten, but I need some for our dinner.",
            correct: true,
          },
        ]
      },
      {
        question: "When my siblings and I still lived at home, my father always prepared our lunchs for us.",
        tip: "Het woord lunch eindigt op een sisklank en krijgt daarom -es in het meervoud in plaats van -s, dus lunches.",
        type: "write",
        options: [
          {
            question: "When my siblings and I still lived at home, my father always prepared our lunches for us.",
            correct: true,
          },
        ]
      },


      {
        question: "When you lay the table for guests: forks go to the left and … (knife) and spoons to the right.",
        tip: "Het woord knife schrijf je in het meervoud met ves, dus knives.",
        type: "word",
        options: [
          {
            question: "knives",
            correct: true,
          },
        ]
      },
      {
        question: "We offer a shuttle service. Our three … (bus) go to pick up and drop off locations between Halifax and Sydney.",
        tip: "Het woord bus eindigt op een sisklank en krijgt daarom -es in het meervoud in plaats van -s, dus buses.",
        type: "word",
        options: [
          {
            question: "buses",
            correct: true,
          },
        ]
      },
      {
        question: "Christa … (try) to get that job at the Hilton last month.",
        tip: "Het werkwoord try wordt tried met -ie-, want na een medeklinker (hier r) verandert -y in -ie.",
        type: "word",
        options: [
          {
            question: "tried",
            correct: true,
          },
        ]
      },
      {
        question: "My train was delayed because of … (leaf) on the tracks.",
        tip: "Het woord leaf schrijf je in het meervoud met ves, dus leaves.",
        type: "word",
        options: [
          {
            question: "leaves",
            correct: true,
          },
        ]
      },
      {
        question: "The Avengers, Spiderman, Wonder Woman … Who are your favourite … (superhero)?",
        tip: "Het woord hero krijgt na de o -es in plaats van -s, dus superheroes.",
        type: "word",
        options: [
          {
            question: "superheroes",
            correct: true,
          },
        ]
      },
      {
        question: "… (do) your new office building have a lift?",
        tip: "Het werkwoord do krijgt na de o -es in plaats van -s, dus does.",
        type: "word",
        options: [
          {
            question: "does",
            correct: true,
          },
        ]
      },
      {
        question: "The anniversary will be held on the … (twenty) of June.",
        tip: "Het woord twenty wordt twentieth met -ie-, want na een medeklinker (hier t) verandert -y in -ie.",
        type: "word",
        options: [
          {
            question: "twentieth",
            correct: true,
          },
        ]
      },
      {
        question: "Why don't you hire a graphic designer to develop some … (logo) for you?",
        tip: "Het woord logo krijgt gewoon een -s, dus logos.",
        type: "word",
        options: [
          {
            question: "logos",
            correct: true,
          },
        ]
      },
      {
        question: "Parties are for staff only. The invitation will say if … (wife) and husbands are invited.",
        tip: "Het woord wife schrijf je in het meervoud met ves, dus wives.",
        type: "word",
        options: [
          {
            question: "wives",
            correct: true,
          },
        ]
      },
      {
        question: "I would like to know if there are any … (tomato) in this dish because I'm allergic to them.",
        tip: "Het woord tomato krijgt na de o -es in plaats van -s, dus tomatoes.",
        type: "word",
        options: [
          {
            question: "tomatoes",
            correct: true,
          },
        ]
      },
      {
        question: "Working with Excel is the …  (simple) thing, really. Any smart person can learn how to do it.",
        tip: "Het woord simple eindigt op een 'stille -e', daarom valt de -e weg voor de uitgangen -ed, -er/-est en -ing, dus simplest.",
        type: "word",
        options: [
          {
            question: "simplest",
            correct: true,
          },
        ]
      },
      {
        question: "If you really want to achieve something, you have to stop …   (lie) to yourself!",
        tip: "Het werkwoord lie eindigt op -ie. Deze -ie verandert in -y voor de uitgang -ing. Daarom wordt het lying.",
        type: "word",
        options: [
          {
            question: "lying",
            correct: true,
          },
        ]
      },
    ]
  }
]
