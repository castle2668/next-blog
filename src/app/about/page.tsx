import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import IconFacebook from '@/assets/icons/icon-facebook.svg'
import IconGitHub from '@/assets/icons/icon-github.svg'
import IconGmail from '@/assets/icons/icon-gmail.svg'
import IconInstagram from '@/assets/icons/icon-instagram.svg'
import IconLinkedin from '@/assets/icons/icon-linkedin.svg'
import IconTwitter from '@/assets/icons/icon-twitter.svg'
import { PageTitle } from '@/components/PageTitle'
import { Button } from '@/components/ui/button'

const aStyle = 'font-medium text-primary underline underline-offset-4'
const StyledH2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
    {children}
  </h2>
)
const StyledH3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
    {children}
  </h3>
)
const StyledP = ({ children }: { children: React.ReactNode }) => (
  <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>
)
const StyledUl = ({ children }: { children: React.ReactNode }) => (
  <ul className="my-6 ml-6 list-disc space-y-2 [&>li]:marker:text-foreground">
    {children}
  </ul>
)
const StyledCode = ({ children }: { children: React.ReactNode }) => (
  <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
    {children}
  </code>
)

export const metadata: Metadata = {
  title: '關於我',
  description: '關於大貓的第一個家與大貓',
  openGraph: {
    url: 'https://seanhuang.dev/about',
    title: '關於我',
    description: '關於大貓的第一個家與大貓',
  },
}

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="prose dark:prose-invert mx-auto">
        <PageTitle>關於我</PageTitle>
        <StyledH2>👋 哈囉！</StyledH2>
        <StyledP>
          我是一名前端工程師，熱愛探索新技術和分享學習心得。這個部落格是我用來記錄技術筆記、生活點滴，以及各種有趣事物的地方。
        </StyledP>
        <StyledUl>
          <li>Name: 黃永翔 (Sean Huang)</li>
          <li>Role: Frontend Engineer</li>
          <li>Location: Taiwan</li>
          <li>
            Blog:{' '}
            <Link href="https://www.seanhuang.dev" className={aStyle}>
              大貓的第一個家
            </Link>
          </li>
          <li>
            Email:{' '}
            <Link href="mailto:castle2668@gmail.com" className={aStyle}>
              castle2668@gmail.com
            </Link>
          </li>
          <li>
            LinkedIn:{' '}
            <Link
              href="https://www.linkedin.com/in/sean-huang-tw/"
              className={aStyle}
            >
              Sean Huang
            </Link>
          </li>
          <li>
            CV:{' '}
            <Link href="https://www.seanhuang.dev/resume" className={aStyle}>
              seanhuang.dev/resume
            </Link>
          </li>
        </StyledUl>
        <div className="flex gap-2">
          <Link href="mailto:castle2668@gmail.com" target="_blank">
            <Button variant="link" size="icon" className="hover:opacity-90">
              <Image src={IconGmail} alt="Gmail" width={30} height={30} />
            </Button>
          </Link>
          <Link href="https://github.com/castle2668" target="_blank">
            <Button variant="link" size="icon" className="hover:opacity-90">
              <Image src={IconGitHub} alt="GitHub" width={30} height={30} />
            </Button>
          </Link>
          <Link
            href="https://www.linkedin.com/in/sean-huang-tw"
            target="_blank"
          >
            <Button variant="link" size="icon" className="hover:opacity-90">
              <Image src={IconLinkedin} alt="Linkedin" width={30} height={30} />
            </Button>
          </Link>
          <Link href="https://www.facebook.com/seanhuangdev" target="_blank">
            <Button variant="link" size="icon" className="hover:opacity-90">
              <Image src={IconFacebook} alt="Facebook" width={30} height={30} />
            </Button>
          </Link>
          <Link href="https://www.instagram.com/catsle_h" target="_blank">
            <Button variant="link" size="icon" className="hover:opacity-90">
              <Image
                src={IconInstagram}
                alt="Instagram"
                width={30}
                height={30}
              />
            </Button>
          </Link>
          <Link href="https://twitter.com/castle2668" target="_blank">
            <Button variant="link" size="icon" className="hover:opacity-90">
              <Image src={IconTwitter} alt="Twitter" width={30} height={30} />
            </Button>
          </Link>
        </div>
        <StyledH2>🔧 Interest in Programming</StyledH2>
        <StyledH3>Frontend</StyledH3>
        <StyledUl>
          <li>JavaScript (TypeScript)</li>
          <li>UI interaction and browser-related technologies</li>
          <li>
            SEO and web page performance optimization-related technologies
          </li>
          <li>
            Now I mainly use <StyledCode>React</StyledCode>, and I also have
            development experience in Vue 2
          </li>
          <li>
            Favorite tech stack: <StyledCode>Next.js 15</StyledCode> +{' '}
            <StyledCode>Material UI v6</StyledCode> +{' '}
            <StyledCode>Tailwind CSS</StyledCode> +{' '}
            <StyledCode>Redux Toolkit</StyledCode> +{' '}
            <StyledCode>Vitest</StyledCode> +{' '}
            <StyledCode>React Testing Librery</StyledCode> +{' '}
            <StyledCode>Playwright</StyledCode>
          </li>
          <li>
            Favorite development configuration:{' '}
            <StyledCode>EditorConfig</StyledCode> +{' '}
            <StyledCode>Prettier</StyledCode> + <StyledCode>ESLint</StyledCode>{' '}
            + <StyledCode>Husky</StyledCode> +{' '}
            <StyledCode>lint-staged</StyledCode> +{' '}
            <StyledCode>commitlint</StyledCode>
          </li>
          <li>
            Want to get more familiar with open data and data visualization
          </li>
        </StyledUl>
        <StyledH3>Backend / Others</StyledH3>
        <StyledUl>
          <li>Have learned C, PHP, MySQL, Python, and Java in college</li>
          <li>
            Have built an Autonomous Lawn Mower using Pixhawk, ArduRover, and
            Mission Planner
          </li>
        </StyledUl>
      </div>
    </div>
  )
}

export default AboutPage
