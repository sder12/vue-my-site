import { reactive } from "vue";


export const store = reactive({
    // GET IN TOUCH
    socials: [
        {
            name: 'github',
            image: 'github.svg',
            link: 'https://github.com/sder12'
        },
        {
            name: 'linkedin',
            image: 'linkedin.svg',
            link: 'https://www.linkedin.com/in/sara-cetto'
        },
        {
            name: 'behance',
            image: 'behance.svg',
            link: 'https://www.behance.net/sara_cetto'
        },
        {
            name: 'instagram',
            image: 'instagram.svg',
            link: 'https://www.instagram.com/saracetto/'
        },
    ],
    //SKILLS
    skillsDev: [
        'html', 'css', 'javascript', 'php', 'bootstrap',
        'sass', 'vue', 'laravel', 'mysql', 'node.js'

    ],
    skillsGraphic: [
        'ai', 'ps', 'id', 'figma', 'fontlab'
    ],

    // RESUME
    languages: [
        {
            lan: 'IT',
            name: 'italian',
            level: 'native',
            image: 'italian.svg',
        },
        {
            lan: 'EN',
            name: 'english',
            level: 'B2 - C1',
            image: 'english.svg',
        },
        {
            lan: 'ES',
            name: 'spanish',
            level: 'B2',
            image: 'spanish.svg',
        },
        {
            lan: 'PR',
            name: 'portuguese',
            level: 'A2',
            image: 'portuguese.svg',
        }

    ],

    // EDUCATION
    educations: [
        {
            title: 'Boolean careers',
            subtitle: 'Full-Stack Web Development',
            translation: '',
            period: 'Professionalizing course | Aug 2022 - Feb 2023',
            description: 'Six-months intensive course with the aim of learning FrontEnd & BackEnd languages ​​and technologies. Daily execution of practical exercises to consolidate the information learned during the theoretical lessons',
            link: '',
            image: 'boolean.png'
        },
        {
            title: 'University Ulisboa of Lisbon',
            subtitle: 'Contemporary Editorial & Typographical Practices ',
            translation: 'Práticas Tipográficas e Editoriais Contemporâneas',
            period: 'Master Degree | Oct 2019 - Feb 2022',
            description: 'Course focused on editorial production and typographic design dissertation on media in the post-digital era: differences between digital and paper publication',
            link: '',
            image: 'iuav.png'
        },
        {
            title: 'University IUAV of Venice',
            subtitle: 'Industrial Design and Multimedia ',
            translation: 'Disegno industriale e multimedia ',
            period: 'Bachelor Degree | Oct 2014 - Oct 2017',
            description: 'consolidation of cultural, historical and design foundations related to the world of graphics and product design.',
            link: '',
            image: 'ulisboa.png'
        },
    ],

    // EXPERIENCE
    experiences: [
        {
            title: 'Boolean careers',
            subtitle: 'Full-Stack Web Development',
            translation: '',
            period: 'Aug 2022 - Feb 2023',
            description: 'full-time course lasting 700 hours, divided into theoretical lessons and practical exercises of increasing difficulty, published on Github. Replication of web applications e.g. Spotify Web, Netflix, DC comics, etc. Final project developed in team',
            link: '',
            image: 'boolean.png'
        },
        {
            title: "Cetto's Farm",
            subtitle: 'Agricultural worker',
            translation: '',
            period: 'Apr 2012 - Nov 2022',
            description: '',
            link: '',
            image: 'cetto-farm.png'
        },
        {
            title: "Fondazione La Biennale d'Arte, Venice",
            subtitle: 'Visual designer',
            translation: '',
            period: 'May 2017',
            description: '',
            link: '',
            image: 'biennale.png'
        },
        {
            title: "Small Caps, Venice",
            subtitle: 'Graphic designer & screen printer',
            translation: '',
            period: 'Mar 2017 - June 2017',
            description: '',
            link: 'https://smallcaps.bigcartel.com/',
            image: 'small-caps.png'
        },
    ],

});