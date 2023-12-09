import logo from "./logo.svg"
import "./App.css"
import MyContextProvider from "./components/context/MyContextProvider"
import Slide1 from "./components/slides/Slide1"

function App() {
  return (
    <div className="App">
      <MyContextProvider>
        <Slide1></Slide1>
      </MyContextProvider>
    </div>
  )
}

export default App
