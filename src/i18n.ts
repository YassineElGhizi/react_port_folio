import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, 
    },
    resources: {
      en: {
        translation: {
          // Header
          home: 'Home',
          about: 'About',
          skills: 'Skills',
          education: 'Education',
          experience: 'Experience',
          projects: 'Projects',
          contact: 'Contact',

          // Home
          welcome: 'Welcome to My Portfolio',
          welcome_subtitle: 'I’m a backend engineer working on REST APIs for web and mobile applications, asynchronous systems with Celery and Redis, ETL pipelines for data visualization, and real-time features via WebSockets.',

          // About
          about_me: 'About Me',
          'about_me_description': `Hi! My name is EL GHIZI Yassine, I’m a backend engineer with a Bachelor’s degree in Computer Engineering and a Master’s in Big Data.

I have over 3.5 years of experience designing and developing robust backend systems for web and mobile applications. My main stack includes Python (Django), PostgreSQL, Celery, Redis, Docker, and AWS services like EC2, RDS, S3, Lambda, and API Gateway.

My work covers a wide range of backend solutions:

- REST APIs for web and mobile apps
- Asynchronous systems with Celery and Redis
- ETL pipelines to feed analytics database
- Real-time features with WebSockets

I also take care of database design, API architecture, technical estimations, and collaborate with clients and project managers to clarify requirements and deliver high-quality results.

I’m passionate about clean, scalable code and enjoy working in motivated teams on projects that make an impact.`,

          // Education
          university: 'University of Example',
          degree: 'Bachelor of Science in Computer Science',

          // Experience
          software_engineer: 'Software Engineer',
          tech_company: 'Tech Company | 2022 - Present',
          swe_task_1: 'Developed and maintained web applications using React and TypeScript.',
          swe_task_2: 'Collaborated with cross-functional teams to deliver high-quality software.',
          swe_task_3: 'Implemented new features and fixed bugs in existing applications.',
          junior_developer: 'Junior Developer',
          another_company: 'Another Company | 2020 - 2022',
          jd_task_1: 'Assisted in the development of web applications.',
          jd_task_2: 'Learned and applied new technologies.',
          jd_task_3: 'Participated in code reviews and team meetings.',

          // Projects
          project1_title: 'Project 1',
          project1_description: 'A brief description of your project. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          project2_title: 'Project 2',
          project2_description: 'A brief description of your project. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          project3_title: 'Project 3',
          project3_description: 'A brief description of your project. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',

          // Contact
          contact_me: 'Contact Me',
          name: 'Name',
          your_name: 'Your Name',
          email: 'Email',
          your_email: 'Your Email',
          message: 'Message',
          your_message: 'Your Message',
          send_message: 'Send Message',
        }
      },
      fr: {
        translation: {
          // Header
          home: 'Accueil',
          about: 'À propos',
          skills: 'Compétences',
          education: 'Éducation',
          experience: 'Expérience',
          projects: 'Projets',
          contact: 'Contact',

          // Home
          welcome: 'Bienvenue sur mon portfolio',
          welcome_subtitle: 'Je suis un ingénieur backend: je développe des APIs REST pour des applications web et mobiles, des systèmes asynchrones avec Celery et Redis, des pipelines ETL pour la visualisation de données et des fonctionnalités en temps réel via les WebSockets.',

          // About
          about_me: 'À propos de moi',
          'about_me_description': `Bonjour! Je m'appelle EL GHIZI Yassine, je suis ingénieur backend, diplômé en génie informatique et titulaire d’un master en Big Data.

Avec plus de 2 ans et demi d’expérience, je conçois et développe des systèmes backend performants pour des applications web et mobiles. J’utilise principalement Python (Django), PostgreSQL, Celery, Redis, Docker et des services cloud comme AWS EC2, RDS, S3, Lambda et API Gateway.

Mes missions couvrent différents types de projets backend :

- APIs REST pour applications web et mobiles
- Systèmes asynchrones avec Celery et Redis
- Pipelines ETL pour alimenter des bases de données analytiques
- Fonctionnalités temps réel avec WebSockets

Je prends également en charge la conception de bases de données, l’architecture des APIs, les estimations techniques et la communication avec les clients et les équipes.

Passionné par le développement de solutions robustes et scalables, je cherche toujours à progresser et à contribuer à des projets d’envergure.`,

          // Education
          university: 'Université d\'Exemple',
          degree: 'Baccalauréat en sciences informatiques',

          // Experience
          software_engineer: 'Ingénieur logiciel',
          tech_company: 'Entreprise de technologie | 2022 - Aujourd\'hui',
          swe_task_1: 'Développement et maintenance d\'applications web en utilisant React et TypeScript.',
          swe_task_2: 'Collaboration avec des équipes interfonctionnelles pour livrer des logiciels de haute qualité.',
          swe_task_3: 'Implémentation de nouvelles fonctionnalités et correction de bugs dans les applications existantes.',
          junior_developer: 'Développeur junior',
          another_company: 'Une autre entreprise | 2020 - 2022',
          jd_task_1: 'Aide au développement d\'applications web.',
          jd_task_2: 'Apprentissage et application de nouvelles technologies.',
          jd_task_3: 'Participation aux revues de code et aux réunions d\'équipe.',

          // Projects
          project1_title: 'Projet 1',
          project1_description: 'Une brève description de votre projet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          project2_title: 'Projet 2',
          project2_description: 'Une brève description de votre projet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          project3_title: 'Projet 3',
          project3_description: 'Une brève description de votre projet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',

          // Contact
          contact_me: 'Contactez-moi',
          name: 'Nom',
          your_name: 'Votre nom',
          email: 'E-mail',
          your_email: 'Votre e-mail',
          message: 'Message',
          your_message: 'Votre message',
          send_message: 'Envoyer le message'
        }
      }
    }
  });

export default i18n;