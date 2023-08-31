

export default defineEventHandler((event) => {
    return {
      message: 'projects query',
      projects:[
        {
            title:'Wiki Dictionary',
            year:'2023',
            description:'Discover language like never before with my latest project. I\'ve built a dictionary web app using Vue 3 and Tailwind CSS, offering seamless exploration of words. Powered by the Rapid API, it provides synonyms, pronunciations, and examples. Switch between dark and light themes, and enjoy full responsiveness across devices. Unlock the world of words with ease.',
            url:'https://wiki-dictionary.netlify.app/',
            imageURL:'/screenhots/dictionary.png',
            chips: [
                {name: 'Vue JS'},
                {name: 'Tailwind CSS'},
                {name: 'Rapid Dictionary API'}
            ]
        },
        {
            title:'XI Architecture',
            year:'2023',
            description:'Introducing XI, a captivating architect website that seamlessly blends design and technology. Crafted with Vue.js, Nuxt.js, and the finesse of Tailwind CSS, XI offers an elegant and responsive layout. Immerse yourself in architectural marvels with the choice of light and dark themes. Experience architecture anew with XI.',
            url:'https://xi-architecture-bureau.netlify.app/',
            imageURL:'/screenhots/xi.png',
            chips: [
                {name: 'Vue JS'},
                {name: 'Tailwind CSS'},
                {name: 'Nuxt JS'}
            ]
        },
        {
            title:'Language Translator',
            year:'2023',
            description:'Introducing my Language Translator—a Nuxt.js and Vue.js web app that brings languages together. With a sleek Tailwind CSS design, it effortlessly translates across 20+ languages. Seamlessly toggle between dark and light themes, and experience responsive translation magic through the power of the Rapid API. Connect globally with ease. Needs to upgrade the API subscription',
            url:'https://rapid-language-translator.netlify.app/',
            imageURL:'/screenhots/language-translator.png',
            chips: [
                {name: 'Vue JS'},
                {name: 'Tailwind CSS'},
                {name: 'Nuxt JS'},
                {name: 'Rapid-Tranlation API'}

            ]
        },
        {
            title:'Photo Social',
            year:'2023',
            description:'  Photo-Social is my brainchild—a vibrant platform that demonstrates my journey into Vue and Nuxt. This innovative creation marries Nuxt.js, AdonisJS, and the elegance of Tailwind CSS, showcasing my potential as a developer. Driven by PostgreSQL, this dynamic hub reflects my passion for Vue, Nuxt, and pushing boundaries. I\'m still working on addin new features like user follow as i dive into nuxt and anonisj further',
            url:'https://github.com/KwakuJoe/photo-social',
            imageURL:'/screenhots/language-translator.png',
            chips: [
                {name: 'Vue JS'},
                {name: 'Tailwind CSS'},
                {name: 'Nuxt JS'},
                {name: 'Adonis JS'}

            ]
        },
        {
            title:'Personal Website',
            year:'2023',
            description:' this is my portfolio. Built with Nuxt.js, Vue.js, and Tailwind CSS, it is a dynamic display of my skills and passion. Whether you\'re on a desktop or mobile, my responsive design ensures a seamless experience. Explore my journey at the intersection of creativity and technology.',
            url:'https://kwakuampah.netlify.app',
            imageURL:'/screenhots/language-translator.png',
            chips: [
                {name: 'Vue JS'},
                {name: 'Tailwind CSS'},
                {name: 'Nuxt JS'},
                {name: 'Adonis JS'}

            ]
        },
      ]
    }
  })




