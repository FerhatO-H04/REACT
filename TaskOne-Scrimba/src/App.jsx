import {Card} from "./components/card"
import {Header} from "./components/header"
import Data from "./PropsArray.jsx"
import './App.css'

export function App(){

  const cards = Data.map(item =>{
    return(
            <Card
              img ={item.img}
              country = {item.country}
              location = {item.location}
              locationName = {item.locationName}
              date = {item.date}
              text = {item.text}
            />
          )
        })

  return(
      <>
        <header>
          <Header/>
        </header>
        <main>
          {cards}
        </main>
      </>
    )
  }



