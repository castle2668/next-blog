import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import AstroBlogImage from '@/assets/images/astro-blog.png'
import MapleStoryMiniGameImage from '@/assets/images/maplestory-mini-game.png'
import MapleStoryShopImage from '@/assets/images/maplestory-shop.png'
import MaskMapImage from '@/assets/images/mask-map.png'

export const metadata: Metadata = {
  title: '履歷',
  description: '我的履歷',
  openGraph: {
    url: 'https://seanhuang.dev/resume',
    title: '履歷',
    description: '我的履歷',
  },
}

const resume = {
  name: 'Sean Huang',
  title: 'Frontend Engineer',
  contact: {
    email: 'castle2668@gmail.com',
    phone: '+886-903-969-838',
    linkedin: 'https://www.linkedin.com/in/sean-huang-tw',
    github: 'https://github.com/castle2668',
  },
  about: `With 4 years of experience in web development, from startups to large corporations.
    I have a solid understanding of web browsers and JavaScript, not just limited to React or Vue.
    As a software engineer focused on the front end, I see web development as a thriving ecosystem and am eager to collaborate with talented individuals to contribute even more.

    GitHub: https://github.com/castle2668
    Resume: https://www.seanhuang.dev/resume

    If you think I fit your needs, please don't hesitate to contact me. :)`,
  experience: [
    {
      company: 'Wistron',
      role: 'Frontend Engineer',
      date: 'Aug 2022 - Aug 2024',
      duration: '2 yrs 1 mo',
      location: 'Tainan, Taiwan',
      skills: ['Webpack 5', 'React.js', 'Next.js', 'TypeScript', 'Ant Design'],
      summary:
        "Participated in the development of a number of internal digital transformation projects to help supervise the factory's manufacturing process and improve factory output. It is also responsible for developing overseas recruitment websites and assisting the company's global recruitment matters.",
      highlights: [
        'Mainly use Jest and React Testing Library to test web applications',
        "Assist the project to import Release Management's SOP and GitLab CI/CD",
        'Complete the OAuth 2.0 and SSO process through MSAL to facilitate faster login and verification of permissions',
        'Analyze the effectiveness of internal websites through Matomo Tracker',
        'Use Next.js (Pages Router) to build a recruitment website and adjust SEO related settings to improve website rankings',
        'Use React Player to customize the video playback interface, making it easier for the factory to use Nvidia Omniverse to simulate the production process and view the API information corresponding to the video in real time.',
      ],
    },
    {
      company: 'Funliday 趣放假股份有限公司',
      role: 'Frontend Engineer',
      date: 'Apr 2022 - Jun 2022',
      duration: '11 mos',
      location: 'Taipei, Taiwan',
      skills: ['Webpack', 'Express.js', 'React.js', 'Leaflet', 'OpenStreetMap'],
      summary:
        'Develop and maintain a tourism planning platform, develop city guide pages, and present more complete tourism information.',
      highlights: [
        'Add Email OTP login and maintain other third-party login methods, such as Google, Twitter, and Facebook login',
        'Configure Express.js and React.js through Webpack, develop SSR pages, and let the Client connect to the API Service through Proxy',
        'Use Leaflet + OpenStreetMap to present tourist attraction information',
      ],
    },
    {
      company: 'Rakuya International Info. Co. Ltd',
      role: 'Frontend Engineer',
      date: 'May 2021 - Mar 2022',
      duration: '9 mos',
      location: 'Taipei, Taiwan',
      skills: ['Vue 2', 'Vue CLI', 'Element UI', 'Pug'],
      summary:
        'Develop a real estate agency management platform to provide real estate agents with services such as managing objects, analyzing market advantages, and viewing results to help with sales.',
      highlights: [
        'Lead the front-end team to change development tools from PHP + Gulp to Vue CLI MPA to build projects to help meet the feasibility of developing highly interactive websites',
        'Import ESLint and Vue.js Style Guide to standardize team code, and import EditorConfig and Prettier to make the code style consistent',
        'Import the Axios API management specification and centrally manage the API by encapsulating Instance, making it easier for team members to connect and start development',
        "Discuss API specifications with back-end engineers, develop local APIs using Mockoon and Ngrok, and assist back-end engineers in improving the team's development process",
        'Practical operational experience of Agile and Scrum',
      ],
    },
    {
      company: 'TAAZE 讀冊生活',
      role: 'Frontend Developer',
      date: 'Jul 2020 - Mar 2021',
      duration: '3 mos',
      location: 'Taipei, Taiwan',
      skills: ['Quasar Framework', 'Vue 2', 'Vuex', 'Axios'],
      summary:
        'Plan and develop a social marketing platform to unite users through discussion and exchange of reading experiences, and provide links to the main website for shopping.',
      highlights: [
        'To implement SSR and PWA functions, the Vue CLI project was developed using Quasar Framework to improve SEO effectiveness and user experience.',
        "Import ESLint and Vue.js Style Guide to unify code standards and improve the team's code quality.",
        'Discuss API specifications with back-end engineers and maintain Swagger files to facilitate API communication between frontend and backend.',
      ],
    },
    {
      company: 'TAAZE 讀冊生活',
      role: 'Frontend Developer Intern',
      date: 'Mar 2020 - Jun 2020',
      duration: '4 mos',
      location: 'Taipei, Taiwan',
      skills: ['Vue 2', 'Vue CLI', 'Bootstrap 4', 'Vuex'],
      summary:
        'Plan and develop a book management platform that allows users to categorize book lists and write reviews about books.',
      highlights: [
        'Use Vue i18n to implement the multi-language function of the website',
        'Customize the website theme style through Bootstrap 4',
      ],
    },
  ],
  education: [
    {
      institution: 'National University of Kaohsiung',
      degree: 'Bachelor',
      field: 'Information Management (B.I.M.)',
      duration: '2016 - 2020',
      description: `Activities and societies: Rotaract Club.
      The main courses are database, data structure, system analysis, and programming languages. The graduation project is an Autonomous Lawn Mower using Pixhawk, ArduRover, and Mission Planner.`,
    },
  ],
  certifications: [
    {
      name: 'Learning Data Structures in JavaScript from Scratch',
      organization: 'Udemy',
      issued: '2024/11',
      id: 'UC-6e00f55c-1f60-4684-8d57-164a0f53b16a',
      url: 'https://www.udemy.com/certificate/UC-6e00f55c-1f60-4684-8d57-164a0f53b16a/',
      skills: ['Data Structures', 'JavaScript'],
    },
    {
      name: 'Learning Algorithms in JavaScript from Scratch',
      organization: 'Udemy',
      issued: '2024/10',
      id: 'UC-45e6511a-1e37-4274-8ec6-1caa0bcbb635',
      url: 'https://www.udemy.com/certificate/UC-45e6511a-1e37-4274-8ec6-1caa0bcbb635/',
      skills: ['Algorithms', 'JavaScript'],
    },
    {
      name: 'React - The Complete Guide 2024 (incl. Next.js, Redux)',
      organization: 'Udemy',
      issued: '2024/07',
      id: 'UC-a5f70c47-ed29-4d92-9f74-2bc5e221f340',
      url: 'https://www.udemy.com/certificate/UC-a5f70c47-ed29-4d92-9f74-2bc5e221f340/',
      skills: ['React.js'],
    },
    {
      name: 'Next.js 14 & React - The Complete Guide',
      organization: 'Udemy',
      issued: '2024/05',
      id: 'UC-f3fc57da-bad6-4421-8d30-a3bd0e0d412c',
      url: 'https://www.udemy.com/certificate/UC-f3fc57da-bad6-4421-8d30-a3bd0e0d412c/',
      skills: ['Next.js'],
    },
    {
      name: 'JavaScript: Understanding the Weird Parts',
      organization: 'Udemy',
      issued: '2021/09',
      id: 'UC-3412901a-930f-436a-a153-5bd7be858326',
      url: 'https://www.udemy.com/certificate/UC-3412901a-930f-436a-a153-5bd7be858326/',
      skills: ['JavaScript'],
    },
  ],
  projects: [
    {
      name: 'MapleStory Match Cards Mini Game',
      description:
        '🃏 A mini-game that uses React to implement. The game has a total of 30 cards, and the player needs to find the same card to eliminate it.',
      skills: [
        'Vite',
        'React',
        'Shadcn UI',
        'TypeScript',
        'Zustand',
        'React Query',
      ],
      date: 'Sep 2024 - Present',
      demo: 'https://maplestory-match-cards-minigame.vercel.app/',
      repo: 'https://github.com/castle2668/maplestory-match-cards-minigame',
      image: MapleStoryMiniGameImage.src,
    },
    {
      name: "Sean's Blog",
      description:
        '📝 Articles, stories, and tutorials for web enthusiasts, experienced developers, a fan of related technologies, or just curious about a technology trend.',
      skills: ['Astro', 'React', 'Tailwind CSS', 'Shadcn UI', 'TypeScript'],
      date: 'Sep 2024 - Present',
      demo: 'https://www.seanhuang.dev/',
      repo: 'https://github.com/castle2668/astro-blog',
      image: AstroBlogImage.src,
    },
    {
      name: 'MapleStory Shop',
      description:
        '🍁 Show my LOVE for MapleStory over the years by building this website featuring iconic items!',
      skills: ['Vue 2', 'Vuex', 'JavaScript', 'Vue.js Style Guide'],
      date: 'Jan 2020 - Mar 2023',
      demo: 'https://castle2668.github.io/maplestory-shop/',
      repo: 'https://github.com/castle2668/maplestory-shop',
      image: MapleStoryShopImage.src,
    },
    {
      name: 'Mask Map',
      description:
        '😷 A website that shows us where to buy face masks in Taiwan, originally developed during the COVID-19 pandemic to support public health needs.',
      skills: ['Vue 2', 'Bootstrap 4', 'OpenStreetMap', 'Leaflet'],
      date: 'Jan 2020 - Feb 2020',
      demo: 'https://castle2668.github.io/mask-map/',
      repo: 'https://github.com/castle2668/mask-map',
      image: MaskMapImage.src,
    },
  ],
}

const ResumePage = () => {
  return (
    <div className="inset-0 z-50">
      <div className="prose dark:prose-invert mx-auto">
        <div className="bg-gray-100 font-sans text-gray-800 antialiased">
          <div className="mx-auto max-w-4xl bg-white p-8 shadow-md">
            <div className="mb-8 flex flex-col items-center text-center">
              <h1 className="mb-2 text-3xl font-bold">{resume.name}</h1>
              <h2 className="mb-4 text-xl text-gray-600">{resume.title}</h2>
              <div className="text-sm text-gray-500">
                <p>
                  Email:{' '}
                  <Link
                    href={`mailto:${resume.contact.email}`}
                    className="text-blue-500"
                  >
                    {resume.contact.email}
                  </Link>
                </p>
                <p>Phone: {resume.contact.phone}</p>
                <p>
                  <Link
                    href={resume.contact.linkedin}
                    className="text-blue-500"
                  >
                    LinkedIn
                  </Link>{' '}
                  |{' '}
                  <Link href={resume.contact.github} className="text-blue-500">
                    GitHub
                  </Link>
                </p>
              </div>
            </div>

            <section className="mb-8">
              <h3 className="mb-2 text-xl font-semibold">About</h3>
              <p className="whitespace-pre-line text-sm text-gray-700">
                {resume.about}
              </p>
            </section>

            <section className="mb-8">
              <h3 className="mb-2 text-xl font-semibold">Experience</h3>
              {resume.experience.map(exp => (
                <div className="mb-6" key={exp.company + exp.role}>
                  <h4 className="font-semibold">
                    {exp.role} @ {exp.company}
                  </h4>
                  <p className="mb-1 text-sm text-gray-600">{exp.date}</p>
                  <div className="mb-1 flex flex-wrap gap-1">
                    {exp.skills.map(skill => (
                      <span
                        className="rounded bg-gray-200 px-1.5 py-0.5 text-sm text-gray-600"
                        key={skill}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <p className="mb-2 whitespace-pre-line text-sm text-gray-700">
                    <span>Summary:</span>
                    {exp.summary}
                  </p>
                  <ul className="list-inside list-disc text-sm text-gray-700">
                    <span>Hightlights:</span>
                    {exp.highlights.map(highlight => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            <section className="mb-8">
              <h3 className="mb-2 text-xl font-semibold">Education</h3>
              {resume.education.map(edu => (
                <div className="mb-6" key={edu.institution}>
                  <h4 className="font-semibold">{edu.institution}</h4>
                  <p className="text-sm text-gray-600">
                    {edu.degree} in {edu.field}
                  </p>
                  <p className="text-sm text-gray-600">{edu.duration}</p>
                  <p className="whitespace-pre-line text-sm text-gray-700">
                    {edu.description}
                  </p>
                </div>
              ))}
            </section>

            <section className="mb-8">
              <h3 className="mb-2 text-xl font-semibold">Certifications</h3>
              {resume.certifications.map(cert => (
                <div className="mb-2" key={cert.name}>
                  <p className="text-sm font-semibold">{cert.name}</p>
                  <p className="text-sm text-gray-600">
                    {cert.organization} ({cert.issued})
                  </p>
                  <Link
                    href={cert.url}
                    className="text-sm text-blue-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Certificate
                  </Link>
                </div>
              ))}
            </section>

            <section className="mb-8">
              <h3 className="mb-2 text-xl font-semibold">Projects</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {resume.projects.map(project => (
                  <div
                    className="rounded bg-gray-50 p-4 shadow-md"
                    key={project.name}
                  >
                    <h4 className="mb-1 font-semibold">{project.name}</h4>
                    <p className="mb-1 text-sm text-gray-600">
                      {project.description}
                    </p>
                    <div className="mb-1 flex flex-wrap gap-1">
                      {project.skills.map(skill => (
                        <span
                          className="rounded bg-gray-200 px-1 py-0.5 text-sm text-gray-600"
                          key={skill}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="mb-1 flex items-center gap-2">
                      <Link
                        href={project.demo}
                        className="text-sm text-blue-500"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Demo
                      </Link>
                      <Link
                        href={project.repo}
                        className="text-sm text-blue-500"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </Link>
                    </div>
                    <div className="relative hidden h-48 w-full rounded sm:block">
                      <Image
                        src={project.image}
                        alt={project.name}
                        className="object-cover object-top"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-2 text-sm text-gray-600">
                More projects can be found on my{' '}
                <Link
                  href={resume.contact.github}
                  className="text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Link>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResumePage
