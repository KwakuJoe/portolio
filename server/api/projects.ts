

export default defineEventHandler((event) => {
    return {
      message: 'projects query',
      projects:[
        {
            title:'Brij Merchant Payment Portal',
            year:'2024',
            description:'Brij Merchant Payment Portal fro receiving payment across Multiple African countries. Payment method include both Card and Mobile Money (MoMo).',
            url:'https://pay.brij.money/paymentlinks/bd327VAnDm?business_name=Techy+Innovation',
            imageURL:'/screenhots/payment-portal.png',
            chips: [
                {name: 'Nuct JS'},
                {name: 'Tailwind CSS'},
                {name: 'Rapid Dictionary API'},
                {name: 'Maz UI'}
            ]
        },
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
            title:'Laraevel-Vue/Nuxt 3 Authentication',
            year:'2024',
            description:'This project aims to provide an improved full-stack experience using Nuxt/Vue 3 for the frontend and Laravel 10 for the backend. It offers robust user authentication and management features, including login, registration, password change, email activation, and profile updates. The system utilizes email services to facilitate secure communication between the application and its users.',
            url:'https://invoicy-frontend.vercel.app/',
            imageURL:'/screenhots/nuxt-laravel-auth.png',
            chips: [
                {name: 'Vue JS'},
                {name: 'Tailwind CSS'},
                {name: 'Nuxt JS'},
                {name: 'Laravel API'},
                {name: 'Nuxt UI & Nuxt Icon'},
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
            title:'Veriphone',
            year:'2023',
            description:'Verify phone numbers worldwide with confidence using our powerful tool. Ensure accuracy and reliability in seconds. Built with Nuxt, Vue, Tailwind and Veriphone - Rapid API',
            url:'https://veriphone.vercel.app/',
            imageURL:'/screenhots/veriphone.png',
            chips: [
                {name: 'Vue JS'},
                {name: 'Tailwind CSS'},
                {name: 'Nuxt JS'},
                {name: 'Veriphone API - A Rapid API'}

            ]
        },
        {
            title:'Photo Social',
            year:'2023',
            description:'Photo-Social is my brainchild—a vibrant platform that demonstrates my journey into Vue and Nuxt. This innovative creation marries Nuxt.js, AdonisJS, and the elegance of Tailwind CSS, showcasing my potential as a developer. Driven by PostgreSQL, this dynamic hub reflects my passion for Vue, Nuxt, and pushing boundaries. I\'m still working on addin new features like user follow as i dive into nuxt and anonisj further',
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
            description:'This is my portfolio. Built with Nuxt.js, Vue.js, and Tailwind CSS, it is a dynamic display of my skills and passion. Whether you\'re on a desktop or mobile, my responsive design ensures a seamless experience. Explore my journey at the intersection of creativity and technology.',
            url:'https://kwakuampah.vercel.app/',
            imageURL:'/screenhots/language-translator.png',
            chips: [
                {name: 'Vue JS'},
                {name: 'Tailwind CSS'},
                {name: 'Nuxt JS'},
                {name: 'Adonis JS'}

            ]
        },
        {
            title:'Age Calculator',
            year:'2023',
            description:'Designed to elevate my Vue Skills. This ois a basic age calulator that takes date of birth input from users and then calculates their age. It was built with Vue 3 and Bootstrap',
            url:'https://birthdate-age-converter.netlify.app/',
            imageURL:'/screenhots/age-calculator-site.png',
            chips: [
                {name: 'Vue JS'},
                {name: 'Bootstrap'}

            ]
        },
        {
            title:'Larvel E-commerce API Concept',
            year:'2023',
            description:'Designed to elevate my Laravel expertise, this E-commerce Site Concept API showcases a robust and comprehensive solution for managing products and orders, emphasizing secure authentication, role-based access, and seamless email notifications.',
            url:'https://github.com/KwakuJoe/laravel-E-commerce-API-Concept',
            imageURL:'N/A',
            chips: [
                {name: 'Laravel'},
                {name: 'PHP'},
                // {name: 'Bootstrap 5'},
            ]
        },
        
        {
            title:'Store Inventory Management Dashboard',
            year:'2022',
            description:'Developed as my final year project during university, this Inventory Management System (IMS) Dashboard is a robust solution designed for efficient stock management. Built using AdonisJS, TailwindCSS, and Bootstrap, the dashboard seamlessly integrates with a Flutter mobile app (https://github.com/KwakuJoe/Inventory_scan_app), providing a comprehensive toolset for managing inventory.',
            url:'https://github.com/KwakuJoe/Inventory_scan_dashbaord',
            imageURL:'N/A',
            chips: [
                {name: 'AdonisJS'},
                {name: 'Tailwind CSS'},
                {name: 'Bootstrap 5'},
            ]
        },
        {
            title:'Store Inventory Scan App',
            year:'2022',
            description:'Complementing the Inventory Management System Dashboard (https://github.com/KwakuJoe/Inventory_scan_dashbaord), this mobile app, built with Flutter, serves as a versatile tool for on-the-go stock management. Focused on simplicity and efficiency, the app provides essential features such as scanning, product search, and real-time stock summaries, offering a seamless and convenient experience.',
            url:'https://github.com/KwakuJoe/Inventory_scan_app',
            imageURL:'N/A',
            chips: [
                {name: 'Flutter'},
            ]
        },
        {
            title:'Invoice Management Backend API',
            year:'2022',
            description:'Developed a Invoice management API using PhP/Laravel, This solution empowers users with centralized client and product management, simplifies invoice creation with customizable templates, and automates email delivery with dynamic links and attachments. The API\'s user-friendly design and robust tracking capabilities provide businesses with valuable insights into their invoicing workflows.',
            url:'https://github.com/KwakuJoe/invoicy-backend',
            imageURL:'N/A',
            chips: [
                {name: 'Laravel'},
                {name: 'PHP'},
            ]
        },
      ]
    }
  })




