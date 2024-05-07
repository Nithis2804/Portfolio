import ChatApp from "../assets/projects/ChatApp.png";
import Disney from "../assets/projects/DisneyClone.png";
import project2 from "../assets/projects/project-2.jpg";
import game from "../assets/projects/APJ.jpeg";
import Weather from "../assets/projects/WeatherApp.png";
import Portfolio from "../assets/projects/Portfolio.png";
import BlindStick from "../assets/projects/BlindStick.webp";

export const HERO_CONTENT = `Hello! I'm a computer science engineer from the vibrant city of Chennai, transforming technical skills into innovative solutions. 
My toolbox? ReactJs, NodeJs, Django, Blender, and a sprinkle of creativity. Whether creating seamless experiences with a chat app or building a Todo App powered by MongoDB, I thrive on challenges and the satisfaction of overcoming them.
💡 Breaking barriers with bytes. From coding apps to crafting games, I thrive on turning ideas into reality, making an impact one project at a time.
My academic foundation, cemented at VIT Vellore, equipped me with a deep understanding of computer science principles, which I've applied across varied projects – from a weather app that keeps you prepared to game development that entertains. I don't just code; I create experiences. As a former Risk Analyst Intern at UBS, I honed my analytical skills, ensuring financial stability through tech solutions. If you're intrigued by the fusion of technology and creativity or have a project in mind that challenges the norm, I'm all ears. Together, let's craft the extraordinary! 🌟`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "April 2023 - October 2023",
    role: "Intern",
    company: "UBS, Mumabi",
    description: `Worked as a part of Risk analyzing and mitigating team where we
    evaluate and manage potential risks that could affect the firm's financial
    stability and profitability
    I was part of a new project where we were designated to analyze new
    records in 12 major financial locations around the world
    I assisted senior programmers in developing web applications in Java in
    MERN stack framework.
    I worked and gained extensive knowledge in MS Excel, MYSQL`,
    technologies: ["Javascript", "React.js", "Java", "MYSQL"],
  },
];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    image: Portfolio,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Disney Clone",
    image: Disney,
    description:
      "A Clone of the Disney OTT platform. It is a ReactJS application built with TailwindCSS. This application showcases my front-end development skills",
    technologies: ["React", "Taiwind CSS", "API"],
    link: "https://disney-clone2-delta.vercel.app/",
  },
  {
    title: "Chat App",
    image: ChatApp,
    description:
      " Created a ChatApp application using node.js with npm modules such as socket.io. The application allows users to join a chatroom with a username and chatroom id and share text messages and location. The application primarily focuses on backend development in node.js framework. The application also checks for profanity in messages and eliminates such messages, the application allows users to share their current location. The application is enabled with autoscrolling feature to enable a nice User Interface.",
    technologies: ["HTML", "CSS", "Node.js", "MongoDB"],
    link: "https://github.com/Nithis2804/Chat-App--NodeJs",
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "The application is built as a back-end application using various features of node.js. The application enables users to create account and manage their own todo tasks. The application authorises users so that users can add/delete/modify/view only their own tasks. The application uses MongoDB database and is deployed using Mongodb community server. Postman API platform is used for building this application",
    technologies: ["Node.js", "Postman API", "REST API", "MongoDB"],
    link: "https://github.com/Nithis2804/task-manager-api",
  },

  {
    title: "Apocalyptic Survivor",
    image: game,
    description:
      "Created a First Person Shooter (FPS) game from Scratch, the game is Built on Unity Engine with multiple Levels. Blender tool was also used to create animated characters, multiple physics elements and AIs were used. Multiple animations were rendered into the game to help the players get an interactive and exciting experience. The game is built on C# language",
    technologies: ["Unity", "Blender", "C#"],
  },
  {
    title: "Weather App",
    image: Weather,
    description:
      " Created a WeatherApp application using node.js with various npm modules. The application returns a weather details of a location given by user input. The application uses MapBox API's for deducing the latitude and longitude of the given location and uses WeatherStack API's for finding the weather of the given latitude and longitude",
    technologies: ["Node.js", "API"],
    link: "https://github.com/Nithis2804/WeatherApp-Web",
  },
  {
    title: "Modern Blind Stick",
    image: BlindStick,
    description:
      "Created a prototype of a modern blind stick which will help the blind people navigate the route better. The blind stick will detect objects in front of the person and will send a vibration to the wrist watch tied to his hand enabling the blind person not to hit any objects like moving vehicles. Features of the prototype: Raspberry pi, Ultrasonic Sensor",
    technologies: ["Raspberry Pi", "IOT", "API"],
    link: "https://drive.google.com/drive/folders/1Be1r679I3ilNR_UORbZLLLIvBj3vxo7I",
  },
];

export const CONTACT = {
  address: "Dindigul, Tamil Nadu",
  phoneNo: "+91 7639981236 ",
  email: "nithis2804@gmail.com",
};
