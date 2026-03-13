import { DndContext } from '@dnd-kit/core';
import './App.css'
import { Dashboard } from './components/dashboard/dashboard'

function App() {
  return (
    <>
      <DndContext onDragEnd={() => { }}>
        <div>
          <Dashboard />
        </div>
      </DndContext>
    </>
  )
}

export default App
