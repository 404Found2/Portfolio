import Course from './Course.jsx'

let clubs = [
  {
    name: "GEECS: Girls in Electrical Eng. & Computer Science",
    time: "Fall 2025 - Present", 
    place: "UMich: Ann Arbor",
    leadership: "Event Logistic & Operations Committee(ELOC) Member (F25 + W26)",
    preview: ['Structured operational timelines for Fall club elections and Winter committee applications, ensuring smooth leadership transitions and consistent member recruitment.',
              'Organized targeted social networking events for organization members, increasing peer-to-peer engagement and fostering an inclusive community culture.',
              'Analyzed engagement and attendance metrics to deliver data-backed statistical assessments of GEECS events, optimizing future club decisions based on historical success.']
  },
  {
    name: "Hackathon Experiences",
    time: "Fall 2025 - Present", 
    place: "UMich: Ann Arbor",
    leadership: "Hackathon Participant",
    preview: ['MHacks 2025  Collegiate Participant, where I helped prototype a web app to help people better manage Type 2 diabetes; Engineered a full-stack web application using an HTML/CSS/JavaScript frontend and a Flask (Python) backend to manage user data and provide relevant recommendations.',
              'Developed and pitched working software prototypes under high-pressure time constraints. Combined technical development with structured project pitches to deliver functional, high-impact solutions.',
              '(WLCSD District Hackathon - 2nd Place): Created a full-stack interview preparation web application using a Node.js backend with Ollama integration, enabling real-time practice and progress tracking.']
  }
];

export default function Clubs() {
    return(
    <>
        <h1 className="heading" id="clubs">Clubs</h1>
        <div className="flex">{clubs.map((item) => <Course obj={item} item="club"/>)}</div>
    </>)
}