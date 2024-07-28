import Navbar from "./components/navbar"
import Footer from "./components/footer"
import Card from "./components/card"
function App() {


  return (
    <>
     <Navbar/>
     <div className="cards">
      <Card title="card 1" desc="card 1 desc"/>
      <Card title="card 2 " desc="card 2 hoorey desc"/>
      <Card title="card 3" desc="card 3 desc"/>
      <Card title="card 4 " desc="card 4 hoorey desc"/>
     </div>
     <Footer/>
    </>
  )
}

export default App
