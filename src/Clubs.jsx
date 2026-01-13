import Course from './Course.jsx'

let clubs = [
  {
    name: "GEECS: Girls in Electrical Eng. & Computer Science",
    time: "Fall 2025 - Present", 
    place: "UMich: Ann Arbor",
    leadership: "Event Logistic & Operations Committee(ELOC) Member (F25 + W26)",
    preview: "Developed timeline for Fall club elections and Winter committee applications; Organized social events for members  to encourage networking; Helped analyze event data to provide a statistical assessment of the successes of GEECS events.",
  },
  {
    name: "MHACKS (Hackathon)",
    time: "Fall 2025 - Present", 
    place: "UMich: Ann Arbor",
    leadership: "Hackathon Participant",
    preview: "Collaborated with peers to build a full-stack application that helps people manage Type II Diabetes; Developed technical and communication skills needed to pitch and develop working prototypes; Researched new tools and frameworks to utilize technology to help solve problems.",
  },
  {
    name: "High School Hackathon Participation",
    time: "Fall 2021 - Spring 2025", 
    place: "Walled Lake Western High School",
    leadership: "",
    preview: `Developed technical and communication skills needed to pitch and develop working prototypes in highpressure environments. Learned to research new tools and frameworks to help enhance my applications. Hackathons Attended: Kettering University ‘Crack the Code Challenge’ (Placed 4 out of 50 participants), WLCSD District Hackathon (2nd place in 2024 & 2025), Girls Recode, Girls Who Code Halloween Hackathon(1st Place Winner).`,
  }
];

export default function Clubs() {
    return(
    <>
        <h1 className="heading" id="clubs">Clubs</h1>
        <div className="flex">{clubs.map((item) => <Course obj={item} item="club"/>)}</div>
    </>)
}