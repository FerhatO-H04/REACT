import "./card.css"

export function Card(props){
    return(
        <div className="card">
            <img className="card--img" src={`/${props.img}`} alt="" />
            <div>
                <div className="card--header">
                    <img className="card--icon" src="../public/icon.svg" alt="" />
                    <h3 className="card--country">{props.country}</h3>
                    <a href="#" className="card--location">{props.location}</a>
                </div>
                <h2 className="card--locationName">{props.locationName}</h2>
                <p className="card--date">{props.date}</p>
                <p className="card--text">{props.text}</p>
            </div>
        </div>
    )
}
