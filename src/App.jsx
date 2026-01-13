import './App.css'
import Course from './Course.jsx'
import Job from './Job.jsx'
import Project from './Projects.jsx'
import Cert from './Cert.jsx'
import Clubs from './Clubs.jsx'

let courses = [
  {
    name: "EECS 281: Data Structures and Algorithms",
    time: "Winter 2026", 
    grade: "--", 
    skills: "C++, Data Structures",
    preview: "EECS 281 teaches essential data structures (like trees, graphs, hash tables) and algorithms (like search, sort, dynamic programming), analyzing their efficiency (Big O) to build foundational problem-solving skills in computer science, applied through challenging projects.",
  },
  {
    name: "EECS 370: Intro to Computer Organization",
    time: "Winter 2026", 
    grade: "--", 
    skills: "C, Assembly",
    preview: "EECS 370 teaches how computers execute programs by bridging high-level code to low-level hardware, focusing on processor architecture, assembly language, and basic digital logic through design and simulation. Students build simple computers and simulators to understand the fundamental relationship between hardware and software. ",
  },
  {
    name: "EECS 280: Data Structures and Algorithms",
    time: "Fall 2025", 
    grade: "A", 
    skills: "C++, Data Structures",
    preview: "EECS 280 covers computer science fundamentals in C++. This class analyzes and implements foundational data structures such as Binary search trees, maps, and linked lists. In this class, projects I completed include a statistical analysis tool, an image processing program, a Euchre card game, a machine learning algorithm, and a text editor.",
  },
  {
    name: "EECS 203: Discrete Mathematics",
    time: "Fall 2025", 
    grade: "A", 
    skills: "Logic & Proofs, Counting, Graph Theory",
    preview: "Introduction to the mathematical foundations of computer science. In discrete mathematics, I learned about operations on 1s and 0s (logic), modular arithmetic and number theory, set theory, functions and relations on sets, graphs, counting, discrete probability theory, and how these form the foundational language through which we formulate and solve real-world problems in computer science.",
  }
];

let exp = [
  {
    name: "Computer Consultant I",
    time: "Jan 2026 - Present",
    place: "University of Michigan - Ann Arbor",
    preview: `Maintained school devices, performing routine checks and updating workflows. Collaborated to ensure proper handling of dorm and classroom equipment.`,
  },
  {
    name: "High Tech Intership",
    time: "Aug 2024 - June 2025",
    place: "Walled Lake Western High School",
    preview: `Updated software and maintained school devices such as printers, computers, and speakers: helped teachers transition to Windows 11, verified computers met software requirements for state testing, replaced and reconfigured printers at the school (etc).Provided technical support to staff and students for software and hardware issues like password recovery and document camera connection errors; Developed methods to quickly troubleshoot common issues.`,
  }
];

 
function reset() {
  document.getElementById("aa").classList.remove("selected");
  document.getElementById("ae").classList.remove("selected");
  document.getElementById("ap").classList.remove("selected");
  document.getElementById("ac").classList.remove("selected");
  document.getElementById("ace").classList.remove("selected");
  document.getElementById("acl").classList.remove("selected");
}
function addClass(key) {
  reset();
  key.target.classList.add("selected");
  console.log(key.target);
} 

function App() {
  return (
    <div id="application">
    <div className="nav">
      <h1 className="heading">Vidya Vuyyuru</h1>
      <a href="#about" id="aa" onClick={addClass}>About</a>
      <a href="#exp"  onClick={addClass} id="ae">Experience</a>
      <a href="#proj"  onClick={addClass} id="ap">Projects</a>
      <a href="#clubs"  onClick={addClass} id="acl">Clubs</a>
      <a href="#course"  onClick={addClass} id="ac">Courses</a>
      <a href="#cert"   onClick={addClass} id="ace">Certificates</a>
      <a href="./src/assets/vidya_vuyyuru_resume.pdf" target="_blank" id="resume">View Resume</a>
      <div>
        <span className="el">React</span>
        <span className="el">HTML</span>
        <span className="el">CSS</span> <br/>
        <span className="el">Javascript</span>
        <span className="el">C++</span>
        </div>
    </div>
    <div id="main">
      <h1 className="heading" id="about">About Me</h1>
      <div className="course longer">
            <h1>Hi! I'm Vidya!</h1>
            <p>I’m a Computer Science major at the University of Michigan with a strong interest in web development. I enjoy building clean, user-focused applications and working across the full stack, from designing intuitive front ends to implementing reliable back-end systems. I’m always eager to learn new technologies and apply them to real-world problems. <br/><br /> Outside of coursework, I actively participate in hackathons, where I enjoy using technology to solve real-world problems. I’ve also spent significant time learning to code independently through online resources, tutorials, and personal projects, which has helped me continuously expand my skill set and stay up to date with modern web technologies.</p>
        </div>
    <h1 className="heading" id="exp">Experience</h1>
    <div className="flex">{exp.map((item) => <Job obj={item}/>)}</div>
    <h1 className="heading" id="proj">Projects <a target="_blank" id="git" href="https://github.com/404Found2"> ➡</a></h1>
    <Project></Project>
    <Clubs />
    <h1 className="heading" id="course">Courses</h1>
    <div className="flex">{courses.map((item) => <Course obj={item} item="class"/>)}</div>
    <h1 className="heading" id="cert">Certificates</h1>
    <Cert/>
    </div>
    </div>
  )
}

export default App
