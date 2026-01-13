export default function Course({obj, item}) {
    return (
        <div className="course">
            <h1>{obj.name}</h1>
            <h3><span>{obj.time}</span> | <span> {item == "class" ? "Grade: " + obj.grade :  ""+obj.place} </span> <br/> <span> {item == "class" ? "Skills " + obj.skills : "" + obj.leadership}</span></h3>
            <p>{obj.preview}</p>
        </div>
    )
}