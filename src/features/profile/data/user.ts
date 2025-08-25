import { User } from '@/types'

export const USER: User = {
  firstName: 'Mazyar',
  lastName: 'Kawa',
  displayName: 'Mazyar',
  username: 'mazyar',
  gender: 'male',
  pronouns: 'he/him',
  bio: 'Building digital experiences. Passionate about clean code and problem-solving.',
  flipSentences: [
    'Full Stack Developer',
    'Passionate Learner',
    'Open Source Enthusiast',
  ],
  address: 'Thanh My Tay Ward, Ho Chi Minh City, Viet Nam',
  phoneNumber: 'NzczMDY0NjQwNA', // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: 'bXJtYXp5YXIzOEBnbWFpbC5jb20=', // base64 encoded
  website: 'https://mazyar.dev',
  jobTitle: 'Full Stack Developer',
  jobs: [
    {
      title: 'Frontend Developer',
      company: 'Ruyat Technologies',
      website: 'https://ruyat.tech',
    },
  ],
  about: `
Hi, I'm Mazyar Kawa — a Full Stack Developer from Sulaymaniyah, Iraq.  
I build scalable, user-friendly web and mobile apps with Next.js, React, Flutter, Java, and Python.  

Passionate about clean code, great UX, and exploring new tools — from full-stack projects to mobile apps.  
Always eager to learn, collaborate, and turn fresh ideas into impactful projects.
`,
  avatar: 'https://mazyar.dev/mazyar.webp',
  ogImage: 'https://mazyar.dev/opengraph-image.jpg',
  keywords: [
    'Mazyar',
    'Mazyar Kawa',
    'Frontend Developer',
    'Full Stack Developer',
    'Mobile Developer',
    'Web Development',
    'Interactive Web Applications',
    'Database Systems',
    'Cybersecurity',
    'Digital Experiences',
    'Best Programmer in kurdistan',
    'Portfolio',
    'Next js developer',
  ],
  dateCreated: '2025-8-25', // YYYY-MM-DD
}
