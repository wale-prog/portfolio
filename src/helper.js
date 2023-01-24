/* eslint-disable max-len */
import edu from './images/mobile/edu.png';
import skillImg from './images/mobile/skill_img.png';
import deezerImg from './images/mobile/deezer.png';
import travelersHub from './images/mobile/space_travelers.png';
import deezerSnapshot from './images/mobile/deezer-snapshot.jpg';
import liveImg from './images/desktop/modal-live.png';
import sourceImg from './images/desktop/modal-git.png';
import deezerDesktop from './images/desktop/deezer.png';
import spaceTraveler from './images/desktop/space_traveler.png';
import robert from './images/mobile/robert.png';
import tomi from './images/mobile/tomi.jpeg';
// import rpg2022 from './images/mobile/rpg_snapshot.jpg';
// import rpgDesktop from './images/mobile/rpg_detail_redo.jpg';

export const eduData = () => (
  [
    {
      id: 1,
      school: 'Microverse',
      course: 'Full Stack Web Development',
      duration: 'Mar 2022 - Dec 2022',
      edu,
    },
    {
      id: 2,
      school: 'University of South Wales',
      course: 'MSc Mobile and Satellite Communications',
      duration: 'Feb 2013 - July 2014',
      edu,
    },
    {
      id: 3,
      school: 'Ladoke Akintola University of Technology',
      course: 'BSc Electrical and Electronics Engineering',
      duration: 'Sept 2005 - July 2010',
      edu,
    },
  ]
);

export const experienceData = () => (
  [
    {
      id: 1,
      company: 'Microverse',
      position: 'Code reviewer/Student mentor',
      duration: 'Sept 2022 - Present',
      description: [
        'Spending 8+ hours a day mastering algorithms, data structures, and full-stack development while simultaneously developing projects with Ruby, Rails, JavaScript, React, and Redux.',
        'Developing skills in remote pair-programming using GitHub, industry-standard Gitflow, and daily standups to communicate and collaborate with international remote developers. ',
      ],
      edu,
    },
    {
      id: 2,
      company: 'Globacom',
      position: 'Network Switching Subsystem Engineer',
      duration: 'Sept 2018 - May 2022',
      description: [
        'Wrote an algorithm to extract data from a piece of network equipment, evaluate and format it so as to be used to perform network optimization',
        'Received the best employee of the month several times for always optimizing processes and finding better ways to accomplish tasks.',
        'Identified knowledge gap within the team and recommend training to close the gap.',
      ],
      edu,
    },
    {
      id: 3,
      company: 'Etisalat, Lagos ',
      duration: 'May 2016 - Jun 2017',
      position: 'Customer Service Executive',
      description: [
        'Engaged both stakeholders and customers in productive conversation to help transform customers’ needs into business requirements.',
        'Picked up strong interpersonal skills and was able to always use them to broker peace, this made me the go-to person to resolve team conflicts.',
        'Attended to customers’ complaints and made sure they leave our office or phone call happy.',
      ],
      edu,
    },
  ]
);

export const skills = () => (
  [
    {
      id: 1,
      title: 'Languages',
      skills: {
        image: skillImg,
        skills: ['JavaScript', 'Ruby', 'Python', 'HTML', 'CSS'],
      },
    },
    {
      id: 2,
      title: 'Frameworks',
      skills: {
        image: skillImg,
        skills: ['Ruby on Rails', 'React', 'Bootstrap', 'Tailwind'],
      },
    },
    {
      id: 3,
      title: 'Testing',
      skills: {
        image: skillImg,
        skills: ['Jest', 'React Testing Library', 'RSpec', 'Mocha', 'Chai'],
      },
    },
  ]
);

export const projects = [
  {
    id: 1,
    title: 'Deezer Music App',
    image: deezerImg,
    imageDesktop: deezerDesktop,
    snapShot: deezerSnapshot,
    description: 'Deezer Mobile Music App is an entertainment app that sort through musical chart to bring all time music hits around the world to your doorstep and the fun part is that it comes with preview to the music if for instance the user cannot decide. It is powered by ',
    technologies: ['React', 'Redux', 'JavaScript', 'Jest', 'HTML', 'CSS'],
    live: 'https://cheerful-crostata-ea300b.netlify.app/',
    source: 'https://github.com/wale-prog/deezer-music-app',
    liveImg,
    sourceImg,
  },
  {
    id: 2,
    title: 'Space Traveler\'s Hub',
    image: travelersHub,
    imageDesktop: spaceTraveler,
    description: 'Space Traveler\'s Hub is a simple website that allows a users to check through the variety of space rockets and missions made available by Space X and choose a combination of missions and rockets that catches their fancy.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Jest'],
    live: '',
    source: 'https://github.com/wale-prog/space-travelers',
    liveImg,
    sourceImg,
  },
  // {
  //   id: 3,
  //   title: 'RPG 2022 Conference',
  //   image: rpgDesktop,
  //   imageDesktop: rpgDesktop,
  //   snapShot: rpg2022,
  //   description: 'RPG 2022 is a conference landing and about pages advocating for Renewable Power Generation with zero net carbon emission. The webpage is responsive and compatible with screen sizes lower than 768px, then higher screen sizes.',
  //   technologies: ['HTML', 'CSS', 'JavaScript', 'Git', 'Stylelint', 'Eslint'],
  //   live: 'https://cheerful-crostata-ea300b.netlify.app',
  //   source: 'https://github.com/wale-prog/deezer-music-app',
  // },
];

export const recommendation = [
  {
    id: 1,
    body: 'Working with Olawale was immediately exciting because he showed strong technical knowledge in React, Redux, Rails, and several other tools. Our remote collaboration session has always been a moment to learn new concepts. He is able to express himself professionally in oral and writing. I strongly recommend him for any jobs that may come on his way.',
    title: 'React.js | Ruby on Rails - Full Stack Developer',
    name: 'Robertson Akpan',
    image: robert,
  },
  {
    id: 2,
    body: 'Working with Olawale was a pleasant and engaging experience as he demonstrated competence in cloud computing and the Network Switching Subsystem part of Telecommunications. He possesses underrated qualities in today\'s working environment, such as punctuality, solution-orienting, and resourcefulness. He will always go above and beyond to consistently present his best and ensure excellence in his deliverables. Such a personality would be a great addition to any team or organization.',
    title: 'MBA, AWS, Azure, GCP, CCNA,ITIL',
    name: 'Oluwatomi Odunlami',
    image: tomi,
  },
];
