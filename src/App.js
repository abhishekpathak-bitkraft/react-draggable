import logo from './logo.svg';
import './App.css';
import Project from './Project';
import { DragDropContext } from 'react-beautiful-dnd';
import { Projects } from './data';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(Projects)
  }, [])

  const onDragEnd = (result) => {

    const { source, destination } = result;


    if (!destination) return;

    if (destination.index === source.index) {
      return;
    }

    let add, active = data;
    
    if (source.droppableId === "allDops") {
      add = data[source.index];
      active.splice(source.index, 1);
    }

    if (destination.droppableId === "allDops") {
      active.splice(destination.index, 0, add);
    }
    setData(active)

  }


  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      width: "100vw",
      background: "purple"
    }}


    >
      <DragDropContext onDragEnd={onDragEnd}>
        <Project data={data} />
      </DragDropContext>
    </div>
  );
}

export default App;
