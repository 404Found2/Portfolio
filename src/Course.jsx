export default function Course({obj, item}) {
    if(obj === "empty") {
        return (
         <div className="course longer">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
        )
    }

    if(item == "class") {
        return (
        <div className="course longer">
            <h1>{obj.name}</h1>
            <h3><span>{obj.time}</span> | <span> { "Grade: " + obj.grade} </span> <br/> <span> {"Skills: " + obj.skills}</span></h3>
            <p>{obj.preview.map((it) => <li>{it}</li>)}</p>
        </div>
        )
    } else {
        return (
        <div className="course">
            <h1>{obj.name}</h1>
            <h3><span>{obj.time}</span> | <span> { ""+obj.place} </span> <br/> <span> { "" + obj.leadership}</span></h3>
            <p><ul>
                {obj.preview.map((it) => <li>{it}</li>)}
                </ul></p>
        </div>
    )
}
    }
    