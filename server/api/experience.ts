export default defineEventHandler((event) => {
    return {
      message: 'experiences query',
      experiences:[
        {
            dateRange:'SEP 2020 - JAN 2020',
            location:'Accra - Ghana',
            organization:'Chroma Digital Solutions',
            role:'UX/UI Designer',
            description:'In this role, Ive showcased my design expertise through adept prototyping and UI designing. This combination of skills allows me to provide effective design solutions that harmonize creativity and practicality.',
            chips: [
                {name: 'Figma'},
                {name: 'Adobe XD'},
                {name: 'Photoshop'}
            ]
        },
        {
            dateRange:'JUN - SEP 2019',
            location:'Accra - Ghana',
            organization:'Union Systems Global',
            role:'IT Intern',
            description:'In this role, I managed document organization, troubleshooted computer networks, performed  application data entry, and created logos, letterheads, and UI/UX designs using tools like Photoshop and Figma.', chips: [
                {name: 'Photoshop'},
                {name: 'Figma'},
                {name: 'Troubleshooting'},
            ]
        },
        {
            dateRange:'NOV 22 - PRESENT',
            location:'Accra - Ghana',
            organization:'Margins ID Group',
            role:'IT Support',
            description:'In this position, I managed troubleshooting, data backups, and system restoration. I conducted daily maintenance for meeting room devices and ensured hardware availability. Additionally, I helped oversaw the IT systems administration, executed data backups, and set up user accounts while addressing password-related issues.', 
            chips: [
                {name: 'IT Support'},
                {name: 'Troubleshooting'},
                {name: 'IT System Maintainance'},
                {name: 'Backups'},
            ]
        }
      ]
    }
  })