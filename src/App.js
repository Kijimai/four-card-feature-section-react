import { data } from "./data"
import Card from "./components/Card"
import Footer from "./components/Footer"
function App() {
  return (
    <>
      <main className="container">
        <header className="header">
          <h1 className="title-hook">
            Reliable, efficient delivery <span>Powered by Technology </span>
          </h1>

          <p>
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </p>
        </header>

        <div className="card-container flex">
          {data.map((item, index) => {
            return <Card key={index} {...item} />
          })}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
