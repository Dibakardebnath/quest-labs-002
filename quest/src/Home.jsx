import React, { useState } from "react";
import "./Home.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AddIcon from "@mui/icons-material/Add";
import SubjectIcon from "@mui/icons-material/Subject";
import { Modal, Button, Typography, Box, TextField } from "@mui/material";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const [inputValue, setInputValue] = useState({
    inputValue1: "",
    inputValue2: "",
  });
  const [columns, setColumns] = useState({
    todo: [
      { projectName: "Project A", like: "", id: "todo1" },
      { projectName: "Project B", like: "2", id: "todo2" },
      { projectName: "Project C", like: "1", id: "todo3" },
      { projectName: "Project D", like: "", id: "todo4" },
    ],
    inProgress: [
      { projectName: "Project E", like: "9", id: "inProgress1" },
      { projectName: "Project F", like: "", id: "inProgress2" },
      { projectName: "Project G", like: "", id: "inProgress3" },
    ],
    review: [
      { projectName: "Project W", like: "14", id: "review1" },
      { projectName: "Project T", like: "10", id: "review2" },
      { projectName: "Project U", like: "6", id: "todo4" },
      { projectName: "Project Q", like: "", id: "todo4" },
    ],
    done: [
      { projectName: "Project L", like: "9", id: "done1" },
      { projectName: "Project N", like: "4", id: "done2" },
      { projectName: "Project X", like: "24", id: "done2" },
    ],
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };
  const handleOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };
  const handleOpen3 = () => {
    setOpen3(true);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setInputValue((prevVal) => ({
      ...prevVal,
      [name]: value,
    }));
  };

  const handleAddButtonClick = (columnId) => {
    const newItem = {
      projectName: inputValue.inputValue1,
      like: inputValue.inputValue2,
      id: `${columnId}-${Math.random().toString(36).substr(2, 9)}`, // Generate a unique ID
    };
    setColumns((prevColumns) => ({
      ...prevColumns,
      [columnId]: [...prevColumns[columnId], newItem],
    }));
    handleClose();
    handleClose1();
    handleClose2();
    handleClose3();
  };

  const handleDragStart = (e, projectId) => {
    e.dataTransfer.setData("text/plain", projectId);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const handleDrop = (e, targetColumn) => {
    console.log("Target Column:", targetColumn);
    e.preventDefault();
    const projectId = e.dataTransfer.getData("text/plain");
    console.log("Project ID:", projectId);
    const draggedItem = columns[targetColumn].find(
      (item) => item.id === projectId
    );
    // const draggedIte = columns[inProgress].find((item) => item.id === projectId);

    console.log("Dragged Item:", draggedItem);
    if (draggedItem) {
      const updatedColumn = columns[targetColumn].filter(
        (item) => item.id !== projectId
      );
      setColumns((prevColumns) => ({
        ...prevColumns,
        [targetColumn]: updatedColumn,
        [e.target.id]: [...prevColumns[e.target.id], draggedItem],
      }));
    }
  };

  // generate random colors................
  const generateRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className="main-container">
      {/* To Do Column */}
      <div
        className="child-container"
        onDrop={(e) => handleDrop(e, "todo")}
        onDragOver={handleDragOver}
        id="todo-column"
      >
        <div className="first-child-container">
          <h3>To Do</h3>
          <MoreHorizIcon />
        </div>
        {columns.todo.map((item) => (
          <div
            key={item.id}
            className="second-child-container"
            draggable
            onDragStart={(e) => handleDragStart(e, item.id)}
            onDragOver={handleDragOver}
          >
            <hr
              className="hr-tag"
              style={{ backgroundColor: generateRandomColor() }}
            />
            <p>{item.projectName}</p>
            <div className="icon-container">
              <SubjectIcon />
              {item.like.length === 0 ? (
                ""
              ) : (
                <div className="message-container">
                  <ChatBubbleOutlineIcon />
                  <p>{item.like}</p>
                </div>
              )}
            </div>
          </div>
        ))}
        <div className="third-child-container" onClick={handleOpen}>
          <AddIcon />
          <p>Add a card</p>
        </div>
      </div>
      {/* Modal for To Do */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            borderRadius: "10px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            width: 400,
            maxWidth: "90%",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Modal Content
          </Typography>
          <TextField
            label="Project Name"
            name="inputValue1"
            value={inputValue.inputValue1}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Likes"
            name="inputValue2"
            value={inputValue.inputValue2}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            sx={{
              color: "white",
              backgroundColor: "green",
              margin: "auto 160px",
            }}
            onClick={() => handleAddButtonClick("todo")}
          >
            Add
          </Button>
        </Box>
      </Modal>

      {/* In Progress Column */}
      <div
        className="child-container"
        onDrop={(e) => handleDrop(e, "inProgress")}
        onDragOver={handleDragOver}
        id="inProgress-column"
      >
        {/* Content for In Progress column */}
        <div className="first-child-container">
          <h3>In Progress</h3>
          <MoreHorizIcon />
        </div>
        {columns.inProgress.map((item) => (
          <div
            key={item.id}
            className="second-child-container"
            draggable
            onDragStart={(e) => handleDragStart(e, item.id)}
            onDragOver={handleDragOver}
          >
            <hr
              className="hr-tag"
              style={{ backgroundColor: generateRandomColor() }}
            />
            <p>{item.projectName}</p>
            <div className="icon-container">
              <SubjectIcon />
              {item.like.length === 0 ? (
                ""
              ) : (
                <div className="message-container">
                  <ChatBubbleOutlineIcon />
                  <p>{item.like}</p>
                </div>
              )}
            </div>
          </div>
        ))}
        <div className="third-child-container" onClick={handleOpen1}>
          <AddIcon />
          <p>Add a card</p>
        </div>
      </div>

      {/* Modal for In Progress */}
      <Modal open={open1} onClose={handleClose1}>
        <Box
          sx={{
            position: "absolute",
            borderRadius: "10px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            width: 400,
            maxWidth: "90%",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Modal Content
          </Typography>
          <TextField
            label="Project Name"
            name="inputValue1"
            value={inputValue.inputValue1}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Likes"
            name="inputValue2"
            value={inputValue.inputValue2}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            sx={{
              color: "white",
              backgroundColor: "green",
              margin: "auto 160px",
            }}
            onClick={() => handleAddButtonClick("inProgress")} // Fixed function name
          >
            Add
          </Button>
        </Box>
      </Modal>

      {/* In review Column */}
      <div
        className="child-container"
        onDrop={(e) => handleDrop(e, "review")}
        onDragOver={handleDragOver}
        id="review-column"
      >
        {/* Content for Review column */}
        <div className="first-child-container">
          <h3>Review</h3>
          <MoreHorizIcon />
        </div>
        {columns.review.map((item) => (
          <div
            key={item.id}
            className="second-child-container"
            draggable
            onDragStart={(e) => handleDragStart(e, item.id)}
            onDragOver={handleDragOver}
          >
            <hr
              className="hr-tag"
              style={{ backgroundColor: generateRandomColor() }}
            />
            <p>{item.projectName}</p>
            <div className="icon-container">
              <SubjectIcon />
              {item.like.length === 0 ? (
                ""
              ) : (
                <div className="message-container">
                  <ChatBubbleOutlineIcon />
                  <p>{item.like}</p>
                </div>
              )}
            </div>
          </div>
        ))}
        <div className="third-child-container" onClick={handleOpen2}>
          <AddIcon />
          <p>Add a card</p>
        </div>
      </div>

      {/* modal for review */}
      <Modal open={open2} onClose={handleClose2}>
        <Box
          sx={{
            position: "absolute",
            borderRadius: "10px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            width: 400,
            maxWidth: "90%",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Modal Content
          </Typography>
          <TextField
            label="Project Name"
            name="inputValue1"
            value={inputValue.inputValue1}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Likes"
            name="inputValue2"
            value={inputValue.inputValue2}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            sx={{
              color: "white",
              backgroundColor: "green",
              margin: "auto 160px",
            }}
            onClick={() => handleAddButtonClick("review")}
          >
            Add
          </Button>
        </Box>
      </Modal>

      {/* Done Column */}
      <div
        className="child-container"
        onDrop={(e) => handleDrop(e, "done")}
        onDragOver={handleDragOver}
        id="done-column"
      >
        {/* Content for Done column */}
        <div className="first-child-container">
          <h3>Done</h3>
          <MoreHorizIcon />
        </div>
        {columns.done.map((item) => (
          <div
            key={item.id}
            className="second-child-container"
            draggable
            onDragStart={(e) => handleDragStart(e, item.id)}
            onDragOver={handleDragOver}
          >
            <hr
              className="hr-tag"
              style={{ backgroundColor: generateRandomColor() }}
            />
            <p>{item.projectName}</p>
            <div className="icon-container">
              <SubjectIcon />
              {item.like.length === 0 ? (
                ""
              ) : (
                <div className="message-container">
                  <ChatBubbleOutlineIcon />
                  <p>{item.like}</p>
                </div>
              )}
            </div>
          </div>
        ))}
        <div className="third-child-container" onClick={handleOpen3}>
          <AddIcon />
          <p>Add a card</p>
        </div>
      </div>

      {/* modal for Done */}

      <Modal open={open3} onClose={handleClose3}>
        <Box
          sx={{
            position: "absolute",
            borderRadius: "10px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            width: 400,
            maxWidth: "90%",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Modal Content
          </Typography>
          <TextField
            label="Project Name"
            name="inputValue1"
            value={inputValue.inputValue1}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Likes"
            name="inputValue2"
            value={inputValue.inputValue2}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            sx={{
              color: "white",
              backgroundColor: "green",
              margin: "auto 160px",
            }}
            onClick={() => handleAddButtonClick("done")}
          >
            Add
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Home;
