import { data } from "./data"
import Card from "./components/Card"

function App() {
  return (
    <main className="container">
      <header className="header">
        <h1 className="title-hook">
          Reliable, efficient delivery <span>Powered by Technology </span>
        </h1>

        <p>
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </header>

      <div className="card-container grid">
        {data.map((item, index) => {
          return (
            <div key={index} className="card-item">
              <h2>{item.cardTitle}</h2>
              <p>{item.description}</p>
              <img src={item.cardImage} alt={item.cardTitle} />
            </div>
          )
        })}
      </div>
    </main>
  )
}

export default App
