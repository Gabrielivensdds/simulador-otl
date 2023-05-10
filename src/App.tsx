import { BrowserRouter } from 'react-router-dom'
import { globalStyles } from './styles/global'
import { Router } from './Router'

globalStyles()

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

export default App
