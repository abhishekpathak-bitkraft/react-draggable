import logo from './logo.svg';
import './App.css';
import Project from './Project';
import { DragDropContext } from 'react-beautiful-dnd';
import { Projects } from './data';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  const [data, setData]= useState([]);
  
  useEffect(()=>{
    setData(Projects)
  },[])

  const onDragEnd = (result) => {

    const { source, destination } = result;

    console.log(result)

    if (!destination) return;

    if (destination.id === source.id) {
      return;
    }

    let add, active= Projects;




    console.log(result)
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
