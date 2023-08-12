import './App.css';

function App() {
  return (
    <div className='main'>
      <PersonalProjects />
      <FrontEndMentorProjects />
      <CourseProjects />
    </div>
  );
}

const personalData = [
  {
    name: 'Personal Website',
    href: 'https://chrisazuaje.com/',
  },
  {
    name: 'Calculator',
    href: 'https://chris-azuaje.github.io/personal-calculator-project/',
  },
  {
    name: 'Task Tracker',
    href: 'https://chris-azuaje.github.io/task-tracker/',
  },
];

const frontEndMentorData = [
  {
    name: 'Age Calculator App',
    href: 'https://chris-azuaje.github.io/age-calculator-app/',
  },
  {
    name: 'Newsletter Signup Form',
    href: 'https://chris-azuaje.github.io/newsletter-signup-form/',
  },
];

const courseData = [
  {
    name: 'Random Quote Generator',
    href: 'https://chris-azuaje.github.io/random-quote-generator/',
  },
  {
    name: 'Bankist One',
    href: 'https://chris-azuaje.github.io/bankist-one/',
  },
  {
    name: 'Bankist Two',
    href: 'https://chris-azuaje.github.io/bankist-two/',
  },
  {
    name: 'Guess My Number',
    href: 'https://chris-azuaje.github.io/guess-my-number/',
  },
  {
    name: 'Modal Window',
    href: 'https://chris-azuaje.github.io/modal-window/',
  },
  {
    name: 'Pig Game',
    href: 'https://chris-azuaje.github.io/pig-game/',
  },
  {
    name: 'Markdown Previewer',
    href: 'https://chris-azuaje.github.io/markdown-previewer/',
  },
];

function PersonalProjects() {
  const PP = personalData;
  return (
    <div className='project-section'>
      <h1>Personal Projects</h1>
      <ul>
        {PP.map((selectedProject) => (
          <Personal personalObj={selectedProject} key={selectedProject.name} />
        ))}
      </ul>
    </div>
  );
}

function FrontEndMentorProjects() {
  const FEMP = frontEndMentorData;
  return (
    <div className='project-section'>
      <h1>Front End Mentor</h1>
      <ul>
        {FEMP.map((selectedProject) => (
          <FrontEndMentor
            frontEndMentorObj={selectedProject}
            key={selectedProject.name}
          />
        ))}
      </ul>
    </div>
  );
}

function CourseProjects() {
  const CP = courseData;
  return (
    <div className='project-section'>
      <h1>Course Projects</h1>
      <ul>
        {CP.map((selectedProject) => (
          <Course courseObj={selectedProject} key={selectedProject.name} />
        ))}
      </ul>
    </div>
  );
}

function Personal({ personalObj }) {
  return (
    <li>
      <h3>
        <a href={personalObj.href} target='_blank' rel='noreferrer'>
          {personalObj.name}
        </a>
      </h3>
    </li>
  );
}

function FrontEndMentor({ frontEndMentorObj }) {
  return (
    <li>
      <h3>
        <a href={frontEndMentorObj.href} target='_blank' rel='noreferrer'>
          {frontEndMentorObj.name}
        </a>
      </h3>
    </li>
  );
}

function Course({ courseObj }) {
  return (
    <li>
      <h3>
        <a href={courseObj.href} target='_blank' rel='noreferrer'>
          {courseObj.name}
        </a>
      </h3>
    </li>
  );
}

export default App;
