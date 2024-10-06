import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense} from 'react'
import { NavBar } from './components/NavBar';
import { Footers } from './components/Footers';
import { Home } from './screens/Home';
import { About } from './screens/About';
import { Projects } from './screens/Projects';
import { Contact } from './screens/Contact';

const App = () => {
  
  return (
    <Suspense fallback='loading'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
        <Footers />
      </BrowserRouter>
    </Suspense>
  )
}

export default App
