import "./header.css"

export function Header(){
    return(
        <div className="header">
            <div className="header--title">
                <img  className="title--logo" src="/headerLogo.svg" alt="" />
                <p className="title--text">my travel journal.</p>
            </div>
        </div>
    )
}