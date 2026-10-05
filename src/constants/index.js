import { meta, shopify, starbucks, tesla, youcode ,youcodegroup, hero, qsimpactgroup, qsimpactcertificate } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    csharp,
    unity,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },

    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: csharp,
        name: "C#",
        type: "Game Development",
    },
    {
        imageUrl: unity,
        name: "Unity",
        type: "Game Development",
    }

];

export const experiences = [
    {
        title: "System Developer Intern",
        company_name: "YouCode Technologies Corporation",
        icon: youcode,
        iconBg: "#316fb5",
        date: "Jan 2026 - March 2026",
        points: [
            "Developed and enhanced an event management and online booking system using Laravel, Vue.js, and SQL.",
            "Built and maintained frontend and backend features, including event registration, booking management, and administrative tools.",
            "Integrated QR code functionality to support event registration and booking verification.",
            "Developed and integrated REST API endpoints with request validation and business logic.",
            "Implemented booking features such as group reservations, registration periods, and booking cancellation rules.",
            "Improved database operations and data persistence to ensure reliable storage and retrieval of booking information.",
            "Developed admin dashboard features, including booking management and PDF report exports.",
            "Implemented security improvements, including hashed administrator identifiers.",
            "Assisted with AWS EC2 deployment and server configuration.",
            "Collaborated on debugging, testing, and improving system functionality throughout development."

        ],
    },

];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const achievements = [
  {
    title: 'QSImpACT Skills Challenge 2025',
    description: 'Placed Top 7 in a global game development competition and helped build the game Lady Makiling Defense with my team.',
    image: qsimpactgroup,
    websiteLink: 'https://qsimpact.org/skillschallenge',
    gameLink: 'https://your-game-link.com',
    pages: [
        {
        image: qsimpactcertificate,
        heading: 'Certificate of Achievement',
        text: 'I was honored to receive recognition as a Top 7 finalist in the QSImpACT Skills Challenge 2025, a global competition that brought together talented developers, designers, and problem-solvers from around the world. This milestone reflects my dedication to building meaningful, high-quality experiences and my ability to perform under pressure in a competitive environment.',
        },
        {
        heading: 'The Game We Built',
        text: 'Together with my team, I helped develop Lady Makiling Defense, a strategy defense game that combined creative design, technical execution, and player-focused thinking. The project challenged us to turn ideas into a polished, playable experience while balancing originality, gameplay flow, and time constraints.',
        },
        {
        heading: 'Skills I Strengthened',
        text: 'This experience strengthened my abilities in game development, teamwork, rapid iteration, and problem-solving. It also deepened my confidence in collaborating across creative and technical tasks to deliver a strong product from concept to execution.',
        },
    ],
  },
  {
    title: 'Full Stack Development',
    description: 'Built and improved end-to-end web applications with modern frontend, backend, and database-driven features.',
    image: youcodegroup,
    pages: [
      {
        heading: 'Development Focus',
        text: 'I enjoy creating complete digital experiences where design, functionality, and data work together seamlessly. My work in full-stack development focuses on delivering practical solutions that are responsive, efficient, and built to solve real user needs.',
      },
      {
        heading: 'Problem Solving',
        text: 'From building interfaces to handling data flow and logic, I enjoy solving the full range of issues that appear in application development. This includes architecture, user experience, and backend reliability.',
      },
      {
        heading: 'Why It Matters',
        text: 'Full-stack work lets me understand both the product and the system behind it. That perspective helps me build more cohesive solutions and communicate better across technical and design tasks.',
      },
    ],
  },
  {
    title: 'AI & Emerging Technologies',
    description: 'Explored machine learning and intelligent systems through projects focused on solving real-world problems with technology.',
    image: meta,
    pages: [
      {
        heading: 'Curiosity and Learning',
        text: 'Exploring AI has shown me how powerful technology can be when paired with thoughtful problem solving. I am excited by the potential of intelligent systems to improve workflows, support decision-making, and create smarter experiences.',
      },
      {
        heading: 'Application Areas',
        text: 'I am interested in how AI can support automation, prediction, recommendation, and optimization in real-world applications. This includes both practical product use and creative experimentation.',
      },
      {
        heading: 'Future Direction',
        text: 'I want to keep growing in this area by building meaningful projects that combine technical depth with real user value. My goal is to keep learning while turning ideas into useful tools and experiences.',
      },
    ],
  },
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];