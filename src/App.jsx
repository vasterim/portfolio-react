import {Routes, Route} from 'react-router-dom'
import About from './routes/About'
import Projects from './routes/Projects'
import Header from './components/Header'
import './assets/style.css'
function App() {


  return (
    <>   
    <Header/>
    <Routes>
      <Route path="/" element={<About/>}/>
      <Route path="/projects" element={<Projects/>}/>
    </Routes>
    </>
  )
}

export default App
