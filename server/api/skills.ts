export default defineEventHandler((event) => {
    return {
      message: 'skills query',
      skills:[
        {
            name:'JavaScript',
            icon:'logos:javascript',
            category:'languages'
        },
        {
            name:'TypeScript',
            icon:'devicon:typescript',
            category:'languages'
        },
        {
            name:'Php',
            icon:'devicon:php',
            category:'languages'
        },
        {
            name:'HTML',
            icon:'vscode-icons:file-type-html',
            category:'languages'
        },
        {
            name:'CSS',
            icon:'devicon:css3',
            category:'languages'
        },
        // LIBRAIES
        {
            name:'Vue JS',
            icon:'logos:vue',
            category:'libraries'
        },
        {
            name:'Nuxt JS',
            icon:'logos:nuxt-icon',
            category:'libraries'
        },
        {
            name:'Adonis JS',
            icon:'devicon:adonisjs',
            category:'libraries'
        },
        {
            name:'Tailwind',
            icon:'logos:tailwindcss-icon',
            category:'libraries'
        },
        {
            name:'Bootstrap',
            icon:'logos:bootstrap',
            category:'libraries'
        },
        {
            name:'Flutter',
            icon:'logos:flutter',
            category:'libraries'
        },
        {
            name:'Laravel',
            icon:'logos:laravel',
            category:'libraries'
        },
        // Ux/UI
        {
            name:'Figma',
            icon:'logos:figma',
            category:'ui/ux'
        },
        {
            name:'Adobe XD',
            icon:'logos:adobe-xd',
            category:'ui/ux'
        },
        {
            name:'Photoshop',   
            icon:'skill-icons:photoshop',
            category:'ui/ux'
        },
        // Tools 
        {
            name:'GitHub',    
            icon:'uiw:github',
            category:'tools'
        },
        {
            name:'Vercel',    
            icon:'ion:logo-vercel',
            category:'tools'
        },
        {
            name:'Netlify',    
            icon:'logos:netlify-icon',
            category:'tools'
        },
        {
            name:'Supabase',    
            icon:'logos:supabase',
            category:'tools'
        },
        // databases
        {
            name:'Postgres',    
            icon:'logos:postgresql',
            category:'database'
        },
        {
            name:'MySQL',    
            icon:'logos:mysql',
            category:'database'
        },

      ]
    }
  })