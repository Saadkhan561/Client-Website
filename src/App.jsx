import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/' element={<Layout />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
