import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'

function App() {

  return (
    <div>
      <NavBar />
      <ItemListContainer heroText="Welcome to Snow Home" heroText2="A collection unlike anything else" />
    </div>
  )
}

export default App
