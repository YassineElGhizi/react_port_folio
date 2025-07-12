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
          education_list: [
            {
              degree: 'Master in Big Data',
              university: 'Faculty of Science and Technology',
              period: '2020 – 2022',
              location: 'Tangier, Morocco',
            },
            {
              degree: 'Bachelor\'s in Computer Science',
              university: 'Faculty of Science and Technology',
              period: '2019 – 2020',
              location: 'Tangier, Morocco',
            },
          ],
          
          // Experience
          experience_list: [
            {
              title: 'BACKEND ENGINEER',
              company: 'Smarteez - Digital Factory',
              period: 'February 2023 – Present',
              location: 'Casablanca, Morocco',
              description: [
                'Designed and developed robust REST APIs.',
                'Implemented task queues for asynchronous task management.',
                'Modeled and optimized relational databases.',
                'Wrote unit and integration tests to ensure software quality.',
                'Estimated technical tasks.',
                'Designed and developed optimized ETL pipelines for data processing and transformation (Python, SQL).',
                'Created interactive dashboards and data analyses with Apache Superset to support decision-making.'
              ],
              tags: [
                'Python', 'Django', 'Django Rest Framework', 'Celery', 'SQL', 'PostgreSQL', 'Redis', 'Docker', 'Amazon Web Services', 'EC2', 'RDS', 'S3', 'Lambda', 'API Gateway', 'SNS', 'ETL', 'Data Pipelining', 'SQL', 'Apache Superset', 'Database Tuning', 'Query Optimization'
              ],
              achievements_title: 'Achievements:',
              achievements: [
                  'Significantly reduced internal costs by replacing most paid tools with open-source solutions while maintaining service continuity and performance.',
                  'Promoted 3 times in 2 years and 3 months, progressing from Backend Developer to Team Lead (team of 5 people).'
              ],
              clients_title: 'Clients:',
              clients: 'Danone, Endesa, L\'Oréal Morocco, Sanlam Morocco, Radio Aswat, Zoubairi Distribution, Mahindra Morocco, Ma Franchise, Publicis - WBC, Lazrak Immobilier.'
            },
            {
              title: 'BACKEND ENGINEER INTERN',
              company: 'Tingis Web',
              period: 'February 2022 – August 2022',
              location: 'Tangier, Morocco',
              description: [
                'Designed and developed optimized ETL pipelines for data processing and transformation (Python, SQL).',
                'Designed and developed robust REST APIs.'
              ],
              tags: [
                'ETL', 'Web Scraping', 'Python', 'Apache Airflow', 'Data Migration', 'S3', 'FastAPI', 'Laravel', 'MySQL'
              ]
            },
            {
              title: 'BACKEND DEVELOPER INTERN',
              company: 'Chakir Groupe',
              period: 'August 2021 – October 2021',
              location: 'Tangier, Morocco',
              description: [
                'Developed web scraping scripts for automated data extraction.',
                'Designed and developed robust REST APIs.',
                'Full-stack development.'
              ],
              tags: [
                'ETL', 'Web Scraping', 'Python', 'Flask', 'MySQL', 'Laravel'
              ]
            },
            {
              title: 'FULL-STACK DEVELOPER INTERN',
              company: 'Faculty of Science and Technology',
              period: 'April 2020 – June 2020',
              location: 'Tangier, Morocco',
              description: [
                'Full-stack development with React, MySQL, and Laravel.'
              ],
              tags: [
                'React', 'MySQL', 'Laravel'
              ]
            }
          ],

          // Projects
          project_list: [
            {
              title: 'AWS-Docker-Django',
              link: 'https://github.com/YassineElGhizi/AWS-Docker-Django',
              image: 'https://private-user-images.githubusercontent.com/86019502/358865090-06b90c27-2d5e-474c-984a-e7d75d3cb173.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTIzNDg0MzMsIm5iZiI6MTc1MjM0ODEzMywicGF0aCI6Ii84NjAxOTUwMi8zNTg4NjUwOTAtMDZiOTBjMjctMmQ1ZS00NzRjLTk4NGEtZTdkNzVkM2NiMTczLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA3MTIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNzEyVDE5MjIxM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTk1M2IxMzA2OTQ5NTgyY2RhNzQ0ZDhkZTEzMmQ2NDcxNGZiZDEwMTVhZGViZjJkNTE5NTNlYjZkZjQ5ZDU5MzMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.JqhvOe3Er_RvP9XmlV_1xJbVj51WGGhK2MCWSHXgRZ4'
            },
            {
              title: 'Fake_News_Detection',
              link: 'https://github.com/YassineElGhizi/Fake_News_Detection',
              image: 'https://user-images.githubusercontent.com/86019502/144763708-6c1d922f-9178-4674-98e5-929fa89176c6.png'
            },
            {
              title: 'Content_image_search - Gabor_filters',
              link: 'https://github.com/YassineElGhizi/content_based_image_search_gabor_filters',
              image: 'https://user-images.githubusercontent.com/86019502/147650951-26f9e0a6-56e5-440a-bb55-0a37977bb6e5.jpg'
            },
            {
              title: 'Architecture_Client-_Serveur_en_C',
              link: 'https://github.com/YassineElGhizi/Architecture_Client-_Serveur_en_C',
              image: 'https://user-images.githubusercontent.com/86019502/125940790-3f8940a9-8094-485f-b913-d2d115d41b82.png'
            },
            {
              title: 'python_on_steroids_with_Numba',
              link: 'https://github.com/YassineElGhizi/python_on_steroids_with_Numba',
              image: 'https://user-images.githubusercontent.com/86019502/144307900-ce1b8b67-c601-4aae-a12c-1661657fa2e9.PNG'
            },
          ],

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
          education_list: [
            {
              degree: 'Master en Big Data',
              university: 'Faculté des Sciences et Techniques',
              period: '2020 – 2022',
              location: 'Tanger, Maroc',
            },
            {
              degree: 'Licence en Informatique',
              university: 'Faculté des Sciences et Techniques',
              period: '2019 – 2020',
              location: 'Tanger, Maroc',
            },
          ],

          // Experience
          experience_list: [
            {
                title: 'INGÉNIEUR BACKEND',
                company: 'Smarteez - Digital factory',
                period: 'Février 2023 – Présent',
                location: 'Casablanca, Maroc',
                description: [
                    'Conception et développement d’APIs REST robustes.',
                    'Mise en place de files d’attente (task queues) pour la gestion des tâches asynchrones.',
                    'Modélisation et optimisation des bases de données relationnelles.',
                    'Écriture de tests unitaires et d’intégration pour garantir la qualité logicielle.',
                    'Estimation des tâches techniques.',
                    'Conception et développement de pipelines ETL optimisés pour le traitement et la transformation de données (Python, SQL).',
                    'Création de tableaux de bord interactifs et d’analyses avec Apache Superset pour faciliter la prise de décision.'
                ],
                tags: [
                    'Python', 'Django', 'Django Rest Framework', 'Celery', 'SQL', 'PostgreSQL', 'Redis', 'Docker', 'Amazon Web Services', 'EC2', 'RDS', 'S3', 'lambda', 'API Gateway', 'SNS', 'ETL', 'Data Pipelining', 'SQL', 'Apache SuperSet', 'Database Tunning', 'Query Optimization'
                ],
                clients_title: 'Clients :',
                clients: 'Danone, Endesa, Oréal Maroc, Sanlam Maroc, Radio Aswat, Zoubairi Distribution, Mahindra Maroc, Ma franchise, Publicis - WBC, Lazrak immobilier.',
                achievements_title: 'Réalisations:',
                achievements: [
                    'Réduction significative des coûts internes en remplaçant la majorité des outils payants par des solutions open-source, tout en assurant la continuité et la performance des services.',
                    'Promu 3 fois en 2 ans et 3 mois, évoluant de Développeur Back-end à Team Lead (équipe de 5 personnes).'
                ]
            },
            {
                title: 'STAGE INGÉNIEUR BACKEND',
                company: 'Tingis Web',
                period: 'Février 2022 – Août 2022',
                location: 'Tanger, Maroc',
                description: [
                    'Conception et développement de pipelines ETL optimisés pour le traitement et la transformation de données (Python, SQL).',
                    'Conception et développement d’APIs REST robustes.'
                ],
                tags: [
                    'ETL', 'Scraping Web', 'Python', 'Apache Airflow', 'Data Migration', 'S3', 'FastAPI', 'Laravel', 'MySQL'
                ]
            },
            {
                title: 'STAGE DÉVELOPPEUR BACKEND',
                company: 'Chakir Groupe',
                period: 'Août 2021 – Octobre 2021',
                location: 'Tanger, Maroc',
                description: [
                    'Développement de scripts de scraping web pour l’extraction automatisée de données.',
                    'Conception et développement d’APIs REST robustes.',
                    'développement full-stack.'
                ],
                tags: [
                    'ETL', 'Scraping Web', 'Python', 'Flask', 'MySQL', 'Laravel'
                ]
            },
            {
                title: 'STAGE DÉVELOPPEUR FULL-STACK',
                company: 'Faculté des sciences et techniques',
                period: 'Avril 2020 – juin 2020',
                location: 'Tanger, Maroc',
                description: [
                    'Développement full-stack avec React, MySQL et Laravel.'
                ],
                tags: [
                    'React', 'MySQL', 'Laravel'
                ]
            }
          ],

          // Projects
          project_list: [
            {
              title: 'AWS-Docker-Django',
              link: 'https://github.com/YassineElGhizi/AWS-Docker-Django',
              image: 'https://private-user-images.githubusercontent.com/86019502/358865090-06b90c27-2d5e-474c-984a-e7d75d3cb173.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTIzNDg0MzMsIm5iZiI6MTc1MjM0ODEzMywicGF0aCI6Ii84NjAxOTUwMi8zNTg4NjUwOTAtMDZiOTBjMjctMmQ1ZS00NzRjLTk4NGEtZTdkNzVkM2NiMTczLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA3MTIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNzEyVDE5MjIxM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTk1M2IxMzA2OTQ5NTgyY2RhNzQ0ZDhkZTEzMmQ2NDcxNGZiZDEwMTVhZGViZjJkNTE5NTNlYjZkZjQ5ZDU5MzMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.JqhvOe3Er_RvP9XmlV_1xJbVj51WGGhK2MCWSHXgRZ4'
            },
            {
              title: 'Fake_News_Detection',
              link: 'https://github.com/YassineElGhizi/Fake_News_Detection',
              image: 'https://user-images.githubusercontent.com/86019502/144763708-6c1d922f-9178-4674-98e5-929fa89176c6.png'
            },
            {
              title: 'content_based_image_search_gabor_filters',
              link: 'https://github.com/YassineElGhizi/content_based_image_search_gabor_filters',
              image: 'https://user-images.githubusercontent.com/86019502/147650951-26f9e0a6-56e5-440a-bb55-0a37977bb6e5.jpg'
            },
            {
              title: 'Architecture_Client-_Serveur_en_C',
              link: 'https://github.com/YassineElGhizi/Architecture_Client-_Serveur_en_C',
              image: 'https://user-images.githubusercontent.com/86019502/125940790-3f8940a9-8094-485f-b913-d2d115d41b82.png'
            },
            {
              title: 'python_on_steroids_with_Numba',
              link: 'https://github.com/YassineElGhizi/python_on_steroids_with_Numba',
              image: 'https://user-images.githubusercontent.com/86019502/144307900-ce1b8b67-c601-4aae-a12c-1661657fa2e9.PNG'
            },
          ],

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