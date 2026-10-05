import './App.css'
import Footer from './components/Footer'
import ListItems from './components/ListItems'
import Navbar from './components/Navbar'
import Search from './components/Search'

function App() {

  return (
    <>
    <div className="flex flex-col h-screen justify-between">
      <div>
        <Navbar />
        <Search />
        <ListItems />
      </div>
      <Footer />
    </div>

    </>
  )
}

export default App
