import { Routes, Route } from 'react-router-dom'

import Home from './page/Home'
import AddMoive from './page/AddMoive'
import EditMovie from './page/EditMoive'
import MoiveDetail from './page/MoiveDetail'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/add' element={<AddMoive />} />
      <Route path='/edit/:id' element={<EditMovie />} />
      <Route path='/movie/:id' element={<MoiveDetail />} />
    </Routes>
  )
}

export default App
