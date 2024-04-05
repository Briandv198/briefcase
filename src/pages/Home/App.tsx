import { useState } from 'react';
import Projects from '../../components/projects/Projects';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

export interface ProjectProps {
  title: string;
  description: string;
  repoLink?: string;
  demoLink?: string;
  figmaLink?: string;
  technologies: string[];
  imageSrc: string[];
}

const projectData: ProjectProps[] = [
  {
    title: 'CLM',
    description: 'Este fue el design system de una empresa que solicito hacer un CLM y se pensaba desarrollar con React.',
    figmaLink: 'https://www.figma.com/file/a36sLXTkmjFtz4NUXFZRuH/Zero-CLM-Design-System?type=design&mode=design&t=H1S239Zhn1T87uYn-1',
    technologies: ['Figma, React'],
    imageSrc: ['./img/clm.webp', './img/clm2.webp', './img/clm3.webp'],
  },
  {
    title: 'Varcha Transportes',
    description: 'Para este cliente desarrolle una Landing Page para su empresa de transporte, siendo mobile-first el diseño.',
    demoLink: 'https://varcha-transportes.com/',
    figmaLink: 'https://www.figma.com/file/6hKhdfbGATgsaDiEj45Yyf/Landing-Page?type=design&node-id=0%3A1&mode=design&t=geQgA6XIDDD6SbOT-1',
    technologies: ['Astro', 'HTML', 'CSS', 'Node', 'Netlify'],
    imageSrc: ['./img/varcha.webp', './img/varcha2.webp', './img/varcha3.webp'],
  },
  {
    title: 'Rick and Morty',
    description: 'En este proyecto ocupe react para conectarme a la API de Rich and Morty y obtener la información de los personajes.',
    repoLink: 'https://github.com/Briandv198/rick-morty',
    demoLink: 'https://rick-and-morty-briandv198.netlify.app/',
    technologies: ['React', 'JavaScript', 'CSS', 'Webpack', 'Node', 'Netlify'],
    imageSrc: ['./img/RyM.webp', './img/RyM2.webp', './img/RyM3.webp'],
  },
];

interface StackItemProps {
  src: string;
  alt: string;
  isHovered?: number;
  hoveredIndex?: number | null;
  onMouseEnter?: any;
  onMouseLeave?: any;
}

const stackItems: StackItemProps[] = [
  {
    src: './icons/react.webp',
    alt: 'ReactJs',
  },
  {
    src: './icons/next.webp',
    alt: 'NextJs',
  },
  {
    src: './icons/tailwind.webp',
    alt: 'Tailwind CSS',
  },
  {
    src: './icons/bootstrap.webp',
    alt: 'Bootstrap',
  },
  {
    src: './icons/figma.webp',
    alt: 'Figma',
  },
  {
    src: './icons/adobe.webp',
    alt: 'Abobe',
  },
];

const StackItem = ({ src, alt, isHovered, hoveredIndex, onMouseEnter, onMouseLeave }: StackItemProps) => {
  return (
    <div className="stack-item">
      <img
        loading="lazy"
        className={`stack-image ${hoveredIndex != null ? isHovered != hoveredIndex && 'blur-sm scale-90 grayscale' : ''}`}
        src={src}
        alt={alt}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    </div>
  );
};

const TechnologyStack = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <>
      {stackItems.map((item, index) => (
        <StackItem key={index} src={item.src} alt={item.alt} isHovered={index} hoveredIndex={hoveredIndex} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave} />
      ))}
    </>
  );
};

function App() {
  return (
    <>
      {/* Hero */}
      <section className="hero-container max-w-7xl">
        <div className="flex flex-col gap-10 items-center">
          <h1 className="showXElements">Hola a todos!</h1>
          <p className="font-light showXElements">
            Soy un desarrollador Fullstack con especialización en el <b>frontend</b>, enfocado en el diseño (UI/UX) y desarrollo de interfaces web. Principalmente busco desarrollar aplicaciones{' '}
            <b>mantenibles</b>, <b>accesibles</b> y <b>fáciles de manejar</b> por el usuario. Tengo experiencia en tecnologías como <b>React</b>, <b>Next.js</b>, <b>Astro</b>, <b>Tailwind CSS</b>,{' '}
            <b>Bootstrap</b>, <b>Figma</b>, entre otras.
          </p>
          <div className="w-full flex flex-col md:flex-row justify-around items-center gap-4">
            <a className="link-button filled w-full md:w-1/2" href="https://www.linkedin.com/in/briandv198" target="_blank">
              <FaLinkedin />
              Linkedin
            </a>
            <a className="link-button filled w-full md:w-1/2" href="https://github.com/briandv198" target="_blank">
              <FaGithub />
              Github
            </a>
          </div>
        </div>
        <img loading="lazy" className="w-full md:w-1/2 max-w-96 showXElements" src="/base2.png" alt="Avatar" />
      </section>

      {/* Stack de Tecnologías */}
      <section className="w-full flex justify-center bg-light-secondary-container dark:bg-dark-secondary-container border-y border-light-outline dark:border-dark-outline bg-opacity-75 dark:bg-opacity-75 backdrop-blur-sm dark:backdrop-blur-sm text-light-on-secondary-container dark:text-dark-on-secondary-container">
        <div className="w-full max-w-7xl p-8 text-center flex flex-col gap-12 overflow-hidden">
          <h3 className="font-light showXElements showXElements">Stack de tecnologías</h3>
          <div className="stack-container flex-wrap">
            <TechnologyStack />
          </div>
        </div>
      </section>
      {/* Portafolio */}
      <section className="w-full max-w-7xl p-8 flex flex-col gap-12">
        <h2 className="text-center showXElements">Portafolio</h2>
        <div className="flex flex-wrap justify-around gap-8">
          {projectData.map((project, index) => (
            <Projects
              key={index}
              title={project.title}
              description={project.description}
              repoLink={project.repoLink}
              demoLink={project.demoLink}
              figmaLink={project.figmaLink}
              technologies={project.technologies}
              imageSrc={project.imageSrc}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default App;

