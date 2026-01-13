export default function Job({obj}) {
    return (
        <div className="course longer">
            <h1>{obj.name}</h1>
            <h3>{obj.time} | {obj.place}</h3>
            <p>{obj.preview}</p>
        </div>
    )
}