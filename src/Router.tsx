import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { Simulation } from './pages/Simulation'
import { Historic } from './pages/Historic'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Simulation" element={<Simulation />} />
        <Route path="/Historic" element={<Historic />} />
      </Route>
    </Routes>
  )
}
