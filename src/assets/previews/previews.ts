import jiuJitsuConnectGif from "./jiujitsuConnect.mp4";
import bobaDepotGif from "./bobaDepot.mp4";
import spaceTourismGif from "./spaceTourism.mp4";

export const projects = [
  {
    name: "Jiu Jitsu Connect",
    img: jiuJitsuConnectGif,
    repo: "https://github.com/KurtisIvey/space-tourism-nextjs",
    website: "https://jiujitsu-connect.herokuapp.com/",
    techStack:
      "React, Redux, TypeScript, JavaScript, Tailwind CSS, Node.js, Express, MongoDB, PostgreSQL, AWS S3, Heroku",
    description:
      "Social Media platform that allows practicioners to communicate and connect with each other. Members are able to register, login, upload profile photos, post, like, make friends, and more!",
  },
  {
    name: "Space Tourism!",
    img: spaceTourismGif,
    repo: "https://github.com/KurtisIvey/space-tourism-nextjs",
    website: "https://space-tourism-nextjs-uu85.vercel.app/",
    techStack: "TypeScript, Next.js, React, CSS, Sass",
    description:
      "Space Tourism is an interactive website that allows one to explore the different possible destinations should they decide to embark on an out of this world vacation. User's are able to explore the different destinations, the crew members, and the associated technologies that will be used in their space journey.",
  },
  {
    name: "Boba Depot",
    img: bobaDepotGif,
    repo: "https://github.com/KurtisIvey/boba_project",
    website: "https://boba-project-ki.herokuapp.com/",
    techStack: "Node.js, Express, EJS, MongoDB, CSS, AWS S3",
    description:
      "A server sided boba drink aggregation platform that allows one to store different kinds of boba drinks. Drinks are categorized via temperature. New boba drinks and images of said drinks can be added to the platform via AWS S3 and MongoDB.",
  },
];
