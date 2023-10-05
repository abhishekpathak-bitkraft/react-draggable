import logo from './logo.svg';
import './App.css';
import Project from './Project';
import { DragDropContext } from 'react-beautiful-dnd';

function App() {
  return (
    <div style={{
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      height:"100vh",
      width:"100vw",
      background:"purple"
    }}>
      <DragDropContext onDragEnd={() => { }}>
        <Project />
      </DragDropContext>
    </div>
  );
}

export default App;
