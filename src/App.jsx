import './App.css'
import { useState } from 'react'
import Course from './Course.jsx'
import Job from './Job.jsx'
import Project from './Projects.jsx'
import Cert from './Cert.jsx'
import Clubs from './Clubs.jsx'

let courses = [
  {
    name: "EECS 388: Introduction to Cybersecurity",
    time: "Fall 2026", 
    grade: "In Progress", 
    skills: "Linux, Ethical Hacking",
    preview: ["AppSec & Low-Level Exploitation: Built and tested automated Python exploit scripts targeting C binaries inside Docker/Linux VMs, disassembling binaries via GDB to execute stack-based buffer overflows, shellcode payload execution, and ROP chains against memory protection mechanisms.",
              "Applied Cryptography: Engineered custom cryptanalytic scripts in Python to exploit vulnerable primitives, executing hash length-extension attacks, fastcoll MD5 collision generation, padding oracle message decryption, and Bleichenbacher’s RSA signature forgery.",
              "Web & Network Security Analysis: Performed dynamic security analysis across web applications and network protocols, identifying and patching SQL injection, XSS, and CSRF vulnerabilities while evaluating socket-level traffic to mitigate Man-in-the-Middle (MITM) threats."],
  },
  {
    name: "EECS 485: Web Systems",
    time: "Fall 2026", 
    grade: "In Progress", 
    skills: "Python, Flask, React",
    preview: ["Full-Stack Architecture & Web Security via a ChatGPT Clone: Built Flask and React web applications utilizing client-server decoupling, state management, and cryptographic security (PBKDF2/SHA-256) to secure persistent user sessions against web vulnerabilities.",
              "Distributed Computing & Fault Tolerance: Architected a multi-node MapReduce engine in Python based on Google File System (GFS) specs, applying distributed systems orchestration and thread scheduling to parallelize data processing across networked nodes.",
              "Information Retrieval & Concurrency via a Google Search Engine Clone: Developed a scalable search engine incorporating PageRank, tf-idf scoring, and multithreaded inverted index servers to master data indexing and high-throughput concurrent query processing."],
  },
  {
    name: "MO 302: Positively Leading People and Organizations",
    time: "Fall 2026", 
    grade: "In Progress", 
    skills: "Leadership, Decision Making, Agentic AI",
    preview: ["Cross-Functional Team Leadership & Protocol Design: Directed high-performing teams through experiential projects, designing structured communication protocols, accountability frameworks, and workflow procedures to optimize collaborative output.",
              "Organizational Dynamics & Culture Analysis: Evaluated corporate structures, culture frameworks, and decision-making biases to diagnose organizational bottlenecks and design context-appropriate team architectures.",
              "AI-Augmented Workflow Automation: Integrated artificial intelligence tools and foundational AI agents into individual and group problem-solving pipelines to accelerate decision-making, automate tasks, and augment creative execution."],
  },
  {
    name: "EECS 281: Data Structures and Algorithms",
    time: "Winter 2026", 
    grade: "A-", 
    skills: "C++, Data Structures",
    preview: ["Advanced Graph Traversal & Search: Developed robust pathfinding and puzzle-solving engines in C++ utilizing Breadth-First Search (BFS), Depth-First Search (DFS), and heuristic route-tracing for complex 2D/3D environments.",
      "Priority Queues & Resource Management: Engineered high-performance simulation systems (e.g., tower defense and stock-trading models) by leveraging custom templated containers, binary heaps, and efficient streaming algorithms to minimize time complexity under heavy load.",
      "Algorithmic Optimization & Intractable Problems: Implemented advanced optimization paradigms—including backtracking, branch-and-bound strategies, and dynamic programming—to compute optimal solutions for NP-hard challenges like the Traveling Salesperson Problem."],
  },
  {
    name: "EECS 370: Intro to Computer Organization",
    time: "Winter 2026", 
    grade: "A", 
    skills: "C, Assembly",
    preview: [ "Assembler & Linker Development: Engineered a robust two-pass C program to translate custom assembly language (LC-2K) into machine code, resolving symbolic addresses, handling relocation tables, and merging multiple object files into a unified executable.",
      "Processor Architecture & Pipelined Simulation: Built a cycle-accurate behavioral simulator in C for a pipelined RISC processor, implementing advanced hardware optimization mechanisms including data forwarding and branch prediction to manage structural and data hazards.",
      "Memory Hierarchy & Cache Optimization: Designed a configurable, set-associative cache simulator supporting write-back allocation policies and Least-Recently-Used (LRU) replacement, integrating it with the CPU simulator to analyze hit/miss performance and memory latency trade-offs."],
  },
    {
    name: "DATASCI 101: Introduction to Datascience",
    time: "Fall 2026", 
    grade: "In Progress", 
    skills: "Linux, Python + Libraries(MatPltLib, Pandas, etc), Ethical Hacking",
    preview: ["Applied Data Wrangling & Analysis: Processed and analyzed real-world empirical datasets (including ecological and audio data) using Python to extract actionable insights and trends.",
      "Statistical Modeling & Machine Learning: Trained predictive machine learning models to identify patterns, classify observations, and perform statistical inference on environmental and biological data.",
      "Data Visualization & Programming: Developed clean data pipelines and visual representations (such as transforming audio signals and field metrics) to effectively communicate quantitative findings using programmatic tools."],
  },
  {
    name: "EECS 280: Data Structures and Algorithms",
    time: "Fall 2025", 
    grade: "A", 
    skills: "C++, Data Structures",
    preview: ["Object-Oriented Programming & Game Simulation: Developed an interactive, multi-player card game (Euchre) in C++ utilizing object-oriented principles, including custom classes, inheritance, polymorphism, and virtual functions to implement both human and automated AI players.",
              "Machine Learning & Text Classification: Built a text classification system (using concepts like Naive Bayes/logistic reasoning on forum data) to automatically categorize document subjects, applying structured data processing and string manipulation in C++.",
              "Memory Management & Custom Data Structures: Implemented dynamic memory models, deep copy semantics, and the \"Big Three\" destructor rules to construct pointer-based linear and non-linear data structures (such as Linked Lists and Binary Search Trees)."],
  },
  {
    name: "EECS 203: Discrete Mathematics",
    time: "Fall 2025", 
    grade: "A", 
    skills: "Logic & Proofs, Counting, Graph Theory",
    preview: ["Applied Formal Logic & Proofs: Leveraged propositional and predicate logic, set theory, and rigorous proof methods (induction, contradiction) to analyze algorithmic correctness and data structure invariants.",
              "Algorithmic Complexity & Analysis: Evaluated function growth and asymptotic behaviors (Big-O notation) to optimize code performance and reason about computational scalability.",
              "Discrete Structures & Combinatorics: Utilized graph theory, relations, permutations, and combinations to model complex network states, data relationships, and state-space enumeration problems."],
  }
];

let exp = [
  {
    name: "Computer Consultant I",
    time: "Jan 2026 - Present",
    place: "University of Michigan - Ann Arbor",
    preview: [
    'Designed and researched custom JavaScript-based Google Apps Script solutions to automate IT department workflows and organize internal data, mitigating manual entry and human error across 15+ master records.',
    'Refactored legacy codebase and optimized algorithm efficiency, improving script execution speed by 50% and enhancing system reliability across departmental data pipelines.',
    'Authored comprehensive developer documentation and sheet usage guides, establishing coding standards to accelerate codebase onboarding for future engineers.',
    'Audited legacy workflows to identify operational bottlenecks, driving technical research into automated solutions and pitching actionable roadmap proposals to senior leadership.',
    'Maintained and audited enterprise hardware/software assets across 80+ locations, minimizing downtime and preventing technology disruptions across 50,000+ end-users.',
    'Facilitated technical interviews and paired with incoming engineers to deliver a frictionless onboarding journey, cultivating a highly collaborative team environment.']
  },
  {
    name: "High Tech Intership",
    time: "Aug 2024 - June 2025",
    place: "Walled Lake Western High School",
    preview: ['Updated software and maintained school devices such as printers, computers, and speakers: helped teachers transition to Windows 11, verified computers met software requirements for state testing, replaced and reconfigured printers at the school (etc).',
              'Provided technical support to staff and students for software and hardware issues like password recovery and document camera connection errors; Developed methods to quickly troubleshoot common issues.']
  }
];

function App() {

  const [courseState, setCourses] = useState(0);
   
function reset() {
  document.getElementById("aa").classList.remove("selected");
  document.getElementById("ae").classList.remove("selected");
  document.getElementById("ap").classList.remove("selected");
  document.getElementById("ac").classList.remove("selected");
  document.getElementById("ace").classList.remove("selected");
  document.getElementById("acl").classList.remove("selected");

  document.querySelectorAll(".caro-nav").forEach( (element, index) => {
    element.classList.remove("selected");
  });
}

function onRefresh() {
  reset();
  setCourses((key.target.innerText - 1));
  setCourses((0));
}

function addClass(key) {
  reset();
  key.target.classList.add("selected");
  console.log(key.target);
} 

function changeSlides(key) {
    reset();
    key.target.classList.add("selected");
    console.log(key.target);
    setCourses((key.target.innerText - 1));
  } 

  return (
    <div id="application" onReload={onRefresh}>
    <div className="nav">
      <h1 className="heading">Vidya Vuyyuru</h1>
      <a href="#about" id="aa" onClick={addClass}>About</a>
      <a href="#exp"  onClick={addClass} id="ae">Experience</a>
      <a href="#proj"  onClick={addClass} id="ap">Projects</a>
      <a href="#clubs"  onClick={addClass} id="acl">Clubs</a>
      <a href="#course"  onClick={addClass} id="ac">Courses</a>
      <a href="#cert"   onClick={addClass} id="ace">Certificates</a>
      <a href="https://github.com/404Found2" target="_blank">View Github <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
      <a href="/Portfolio/vidya_vuyyuru_resume.pdf" target="_blank">View Resume <i class="fa-solid fa-link"></i></a>
      <div>
        <span className="el">React</span>
        <span className="el">HTML</span>
        <span className="el">CSS</span> <br/>
        <span className="el">Javascript</span>
        <span className="el">Python</span>
        <span className="el">C++</span>
        </div>

    </div>
    <div id="main">
      <h1 className="heading" id="about">About Me</h1>
      <div className="course longer">
            <h1>Hi! I'm Vidya!</h1>
            <p><b>About Me: </b>I am a Computer Science major at the University of Michigan with a deep passion for full-stack web development 
              and user-centric software design. Driven by curiosity and a desire to build impactful digital solutions, I focus on creating 
              clean, reliable, and scalable applications. My technical toolkit spans the entire development lifecycle, from architecting 
              intuitive frontend interfaces to engineering robust, secure backend systems.<br></br>
              I am eager to leverage my strong problem-solving foundation, adaptability, and modern web stack knowledge to help thw world around me.
              I am looking for an opportunity to collaborate with experienced engineering teams, contribute to production-level codebase, and 
              build software that delivers meaningful value to users.</p>
              <p><b>Technical Growth & Innovation: </b>Beyond the classroom, I am a highly motivated self-starter who continuously pushes my 
              technical boundaries. I have dedicated significant time to self-directed learning, mastering modern web technologies, libraries, 
              and frameworks through independent projects and online tutorials. To test my skills under pressure, I actively compete in hackathons, 
              where I collaborate with cross-functional teams to rapid-prototype software that solves real-world challenges.</p>
        </div>
    <h1 className="heading" id="exp">Experience</h1>
    <div className="flex">{exp.map((item) => <Job obj={item}/>)}</div>
    <a target="_blank" id="git" href="https://github.com/404Found2"><h1 className="heading" id="proj">Projects  <i class="fa-solid fa-link"></i></h1></a>
    <Project></Project>
    <Clubs />
    <h1 className="heading" id="course">Courses</h1>
    <div className="flex">
      <Course  id="course1" obj={courses[(courseState * 2)]} item="class"/>
      <Course  id="course2" obj={courses[(courseState * 2) + 1] || "empty"} item="class"/>
    </div>
    <div className="CaroBar heading flex"> 
      <div  onClick={ changeSlides} className={courseState === 0 ? "caro-nav selected" : "caro-nav"}> 1 </div> 
      <div  onClick={ changeSlides} className={courseState === 1 ? "caro-nav selected" : "caro-nav"}> 2 </div> 
      <div  onClick={ changeSlides} className={courseState === 2 ? "caro-nav selected" : "caro-nav"}> 3 </div> 
      <div  onClick={ changeSlides} className={courseState === 3 ? "caro-nav selected" : "caro-nav"}> 4 </div> 
    </div>
    <h1 className="heading" id="cert">Certificates</h1>
    <Cert/>
    </div>
    </div>
  )
}

export default App
