import React from 'react';
let ProjectObj = (function() {
  let nextId = 1;
  return function ProjectObj(
    title,
    description,
    thumbnail,
    tech,
    deploy,
    github
  ) {
    this.id = nextId++;
    this.title = title;
    this.description = description;
    this.thumbnail = thumbnail;
    this.tech = tech;
    this.deploy = deploy;
    this.github = github;
  };
})();

let allProjects = [];

const PartyPic = new ProjectObj(
  'Party Pic',
  'Online multiplayer pictionary game using your phone as a controller and desktop as the main screen. Presented at Toronto Devhub in front of over 100 people with multiple rooms of 8 players running at once.',
  'https://i.imgur.com/Avbj7Iw.jpg',
  ['Typescript', 'React', 'Redux', 'Socket.IO'],
  'http://partypic.herokuapp.com/',
  'http://github.com/hsmalhi/pictionary-board/'
);

const Caterly = new ProjectObj(
  'Caterly',
  'Food ordering intermediary that connects customers and restaurants via text (Twilio API). Made with the intention of strengthening knowledge of creating a functional express-app from the ground up.',
  'https://i.imgur.com/Ax95QHM.jpg',
  ['jQuery', 'WebSocket', 'PostreSQL'],
  'http://cater-ly.herokuapp.com/',
  'https://github.com/ray1028/Caterly'
);

const Scheduler = new ProjectObj(
  'Scheduler',
  'Single-page application built using React to schedule interviews connecting to a RESTFul api. Built components with Storybook, and integration / end to end testing via Jest and Cypress.',
  'https://i.gyazo.com/ac3354a1b419d9deac4673af6fbf7490.png',
  ['React', 'PostgreSQL', 'WebSocket'],
  'https://interviewscheduler.netlify.com',
  'https://github.com/rickychhoukdean/scheduler'
);

// const Tweeter = new ProjectObj(
//   "Tweeter",
//   "Responsive single-page application powered by AJAX made imitate twitter. Focused on responsive design to strengthen front-end skills with HTML, CSS and jQuery.",
//   "https://i.imgur.com/8Hez5zi.png",
//   ["Express", "jQuery", "SPA"],
//   "https://ricky-tweeter.herokuapp.com/",
//   "https://github.com/rickychhoukdean/tweeter"
// );

const Jungle = new ProjectObj(
  'Jungle',
  'E-commerce application made with Ruby and the Rails framework. Images are hosted using AWS S3. Tested using Capybara. Made with the intetion of strengthening understanding of MVC principles.',

  'https://i.imgur.com/07ASq7N.jpg',
  ['Ruby', 'Rails', 'Stripe', 'PostgreSQL'],
  'https://rickyjungle.herokuapp.com/',
  'https://github.com/rickychhoukdean/jungle'
);

const Satellit = new ProjectObj(
  'Satellit',
  'React mobile progressive web app using NASA information for the 2019 Waterloo Nasa Hackathon in 12 hours. Made with the intention of teaching kids about satellites in a card-collecting game format.',
  'https://i.imgur.com/HgTzHpu.jpg',
  ['React', 'PostgreSQL', 'Bootstrap'],
  'https://satellit.netlify.com/',
  'https://github.com/rickychhoukdean/satellite-go'
);

const LanguageLearner = new ProjectObj(
  'Language Learner',
  'React-native app using typescript, AWS rekognition, AWS translate and GraphQL to teach users how to learn new languages with their own pictures.',
  'https://i.imgur.com/07ASq7N.jpg',
  ['React Native', 'TypeScript', 'GraphQL', 'MongoDB'],
  'https://github.com/rickychhoukdean/language-learner',
  'https://github.com/rickychhoukdean/language-learner'
);

allProjects.push(PartyPic);
allProjects.push(Caterly);
allProjects.push(Jungle);

const openInNewTab = url => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  if (newWindow) newWindow.opener = null;
};

let mapProjects = allProjects.map(x => {
  return (
    <section className="spotlight" key={x.id}>
      <div className="image">
        <img src={x.thumbnail} alt={`${x.title}picture`} />
      </div>
      <div className="content">
        <h2>{x.title}</h2>
        <p>{x.description}</p>
        <button className="margin-right" onClick={() => openInNewTab(x.github)}>
          Github
        </button>
        <button onClick={() => openInNewTab(x.deploy)}>Live</button>
      </div>
    </section>
  );
});

export default function Projects() {
  return mapProjects;
}
