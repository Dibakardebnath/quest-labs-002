import React, { useState } from 'react';
import './App.css';
// import Try from './Try';




const App = () => {
  const drop = (e) => {
    e.preventDefault();
    const div_id = e.dataTransfer.getData("div_id");
    const block = document.getElementById(div_id);
    let dropIndex = Array.from(e.target.children).findIndex(
      (child) => child.getBoundingClientRect().bottom > e.clientY
    );
    if (dropIndex === -1) {
      e.target.appendChild(block);
    } else {
      e.target.insertBefore(block, e.target.children[dropIndex]);
    }
  };
  
  const dragOver1 = (e) => {
    e.preventDefault();
  };

  const dragStart = (e) => {
    const target = e.target;
    e.dataTransfer.setData("div_id", target.id);
  };

  const dragOver = (e) => {
    e.stopPropagation();
  };

  return (

    // <div>
    //   <Try/>
    // </div>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "50px",
      }}
    >
      <div
        onDrop={drop}
        onDragOver={dragOver1}
        id="board-1"
        style={{
          border: "1px solid #222",
          padding: 20,
        }}
      >
        <div
          id="firstfirst"
          draggable
          onDragStart={dragStart}
          onDragOver={dragOver}
        >
          <div>
            <h1>First Column First Row</h1>
          </div>
        </div>
        <div
          id="firstsecond"
          draggable
          onDragStart={dragStart}
          onDragOver={dragOver}
        >
          <div>
            <h1>First Column Second Row</h1>
          </div>
        </div>
        {Array.from(Array(2)).map((_, index) => {
          return (
            <div
              key={index}
              id={`first${index}`}
              draggable
              onDragStart={dragStart}
              onDragOver={dragOver}
            >
              <h1>First Column Row {index}</h1>
            </div>
          );
        })}
      </div>


      <div
        id="board-2"
        onDrop={drop}
        onDragOver={dragOver1}
        style={{
          border: "1px solid #222",
          padding: 20,
        }}
      >
        <div
          id="secondfirst"
          draggable
          onDragStart={dragStart}
          onDragOver={dragOver}
        >
          <h1>Second Column First Row</h1>
        </div>
        <div
          id="secondsecond"
          draggable
          onDragStart={dragStart}
          onDragOver={dragOver}
        >
          <h1>Second Column Second Row</h1>
        </div>

        {Array.from(Array(2)).map((c, index) => {
          return (
            <div
              key={index}
              id={`second${index}`}
              draggable
              onDragStart={dragStart}
              onDragOver={dragOver}
            >
              <h1> Second Column Row {index} </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;