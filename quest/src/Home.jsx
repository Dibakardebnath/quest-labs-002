
import React, { useState } from 'react'
import './Home.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AddIcon from '@mui/icons-material/Add';
import SubjectIcon from '@mui/icons-material/Subject';
import { Modal, Button, Typography, Box, TextField } from '@mui/material';

const Home = () => {

    //.........................TODO.......................
    const [open, setOpen] = useState(false);
    const [inputValue, setInputValue] = useState({
        inputValue1:"",
        inputValue2:""
    });
    console.log(inputValue)
   
    const [firstState,setFirstState] = useState([
        {projectName:"Project A",like:"2"},
        {projectName:"Project B",like:"2"},
        {projectName:"Project C",like:"2"},
        {projectName:"Project D",like:"2"},
        
    ])
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleInputChange = (e) => {
        const {name, value} = e.target

           setInputValue((prevVal)=>({
              ...prevVal,
              [name]:value,
           }))
    };
    const handleAddButtonClick = () => {
        const newItem = {
          projectName: inputValue.inputValue1,
          like: inputValue.inputValue2,
        };
        setFirstState((prevItems) => [...prevItems, newItem]);
        handleClose();
      };
    const [inputval, setinputval] = useState({
        inputval1:"",
        inputval2:""
    });
    console.log(inputval)
   
    const [frstState,setfrstState] = useState([
        {projectName:"Project E",like:"2"},
        {projectName:"Project F",like:"2"},
        {projectName:"Project G",like:"2"},
        {projectName:"Project H",like:"2"},
        
    ])
  
    const handlechng = (e) => {
        const {name, value} = e.target

           setinputval((prevVal)=>({
              ...prevVal,
              [name]:value,
           }))
    };
    const handleAdButtonClick = () => {
        const newItem = {
          projectName: inputval.inputval1,
          like: inputval.inputval2,
        };
        setfrstState((prevItems) => [...prevItems, newItem]);
        handleClose();
      };
      const generateRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      };
    //.........................Progress End......................
     //........................Review Start.........................
    
     const [inputvalues, setinputvalues] = useState({
         inputvalues1:"",
         inputvalues2:""
     });
     console.log(inputvalues)
    
     const [firstst,setfirstst] = useState([
         {projectName:"Project I",like:"2"},
         {projectName:"Project J",like:"2"},
         {projectName:"Project K",like:"2"},
        
     ])
   
  
   
     const handlchnge = (e) => {
         const {name, value} = e.target
 
            setinputvalues((prevVal)=>({
               ...prevVal,
               [name]:value,
            }))
     };
     const handlePlusButtonClick = () => {
         const newItem = {
           projectName: inputvalues.inputvalues1,
           like: inputvalues.inputvalues2,
         };
         setfirstst((prevItems) => [...prevItems, newItem]);
         handleClose();
       };
     //..........................Review End..................

     //.........................Done start....................
     const [inpValues, setinpValues] = useState({
        inpValues1:"",
        inpValues2:""
    });
    console.log(inpValues)
   
    const [frstStates,setfrstStates] = useState([
        {projectName:"Project L",like:"2"},
        {projectName:"Project M",like:"2"},
      
       
    ])
  
  
    const handlInptChanges = (e) => {
        const {name, value} = e.target

           setinpValues((prevVal)=>({
              ...prevVal,
              [name]:value,
           }))
    };
    const handleAddingButtonClick = () => {
        const newItem = {
          projectName: inpValues.inpValues1,
          like: inpValues.inpValues2,
        };
        setfrstStates((prevItems) => [...prevItems, newItem]);
        handleClose();
      };
     //.........................Done End................................
   
  return (
    <div className='main-container'>

        <div className='child-container'>
        <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            borderRadius:'10px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            width: 400,
            maxWidth: '90%',
          }}
        >
          <Typography variant="h6" gutterBottom>
            Modal Content
          </Typography>
          <TextField
            label="Project Name"
            name='inputValue1'
            value={inputValue.inputValue1}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Likes"
            name='inputValue2'
            value={inputValue.inputValue2}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
     
          <Button variant="contained" color="primary" sx={{  color: 'white', backgroundColor: 'green', margin:'auto 160px' }} onClick={handleAddButtonClick}>Add</Button>

          
        </Box>
      </Modal>
     <div>
        <div className='first-child-container'>
            <h3>To Do</h3>
            <MoreHorizIcon/>
        </div>

       {firstState.map((ele,ind)=>{
            return  (
                <div className='second-child-container'>
                <hr className='hr-tag' style={{ backgroundColor: generateRandomColor() }}/>
                <p>{ele.projectName}</p>
                 <div className='icon-container'>
              <SubjectIcon/>
              <ChatBubbleOutlineIcon/>
                 </div>
                </div>
            )
       })}


        <div className='third-child-container' onClick={handleOpen}>
        <AddIcon/>
        <p>Add a card</p>
        </div>
 
        <div>

        </div>
        <div></div>
     </div>
        </div>
  
     <div className='child-container'>
          <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            borderRadius:'10px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            width: 400,
            maxWidth: '90%',
          }}
        >
          <Typography variant="h6" gutterBottom>
            Modal Content
          </Typography>
          <TextField
            label="Project Name"
            name='inputval1'
            value={inputval.inputval1}
            onChange={handlechng}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Likes"
            name='inputval2'
            value={inputval.inputval2}
            onChange={handlechng}
            fullWidth
            margin="normal"
          />
     
          <Button variant="contained" color="primary" sx={{  color: 'white', backgroundColor: 'green', margin:'auto 160px' }} onClick={handleAdButtonClick}>Add</Button>

          
        </Box>
      </Modal>
     <div>
        <div className='first-child-container'>
            <h3>In Progress</h3>
            <MoreHorizIcon/>
        </div>

       {frstState.map((ele,ind)=>{
            return  (
                <div className='second-child-container'>
                <hr className='hr-tag' style={{ backgroundColor: generateRandomColor() }}/>
                <p>{ele.projectName}</p>
                 <div className='icon-container'>
              <SubjectIcon/>
              <ChatBubbleOutlineIcon/>
                 </div>
                </div>
            )
       })}


        <div className='third-child-container' onClick={handleOpen}>
        <AddIcon/>
        <p>Add a card</p>
        </div>
 
        <div>

        </div>
        <div></div>
     </div>
    
     </div>
     <div className='child-container'>
     <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            borderRadius:'10px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            width: 400,
            maxWidth: '90%',
          }}
        >
          <Typography variant="h6" gutterBottom>
            Modal Content
          </Typography>
          <TextField
            label="Project Name"
            name='inputvalues1'
            value={inputvalues.inputvalues1}
            onChange={handlchnge}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Likes"
            name='inputvalues2'
            value={inputvalues.inputvalues2}
            onChange={handlchnge}
            fullWidth
            margin="normal"
          />
     
          <Button variant="contained" color="primary" sx={{  color: 'white', backgroundColor: 'green', margin:'auto 160px' }} onClick={handlePlusButtonClick}>Add</Button>

          
        </Box>
      </Modal>
     <div>
        <div className='first-child-container'>
            <h3>Review</h3>
            <MoreHorizIcon/>
        </div>

       {firstst.map((ele,ind)=>{
            return  (
                <div className='second-child-container'>
                <hr className='hr-tag' style={{ backgroundColor: generateRandomColor() }}/>
                <p>{ele.projectName}</p>
                 <div className='icon-container'>
              <SubjectIcon/>
              <ChatBubbleOutlineIcon/>
                 </div>
                </div>
            )
       })}


        <div className='third-child-container' onClick={handleOpen}>
        <AddIcon/>
        <p>Add a card</p>
        </div>
 
        <div>

        </div>
      
     </div>
     </div>
     <div className='child-container'>
     <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            borderRadius:'10px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            width: 400,
            maxWidth: '90%',
          }}
        >
          <Typography variant="h6" gutterBottom>
            Modal Content
          </Typography>
          <TextField
            label="Project Name"
            name='inpValues1'
            value={inpValues.inpValues1}
            onChange={handlInptChanges}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Likes"
            name='inpValues2'
            value={inpValues.inpValues2}
            onChange={handlInptChanges}
            fullWidth
            margin="normal"
          />
     
          <Button variant="contained" color="primary" sx={{  color: 'white', backgroundColor: 'green', margin:'auto 160px' }} onClick={handleAddingButtonClick}>Add</Button>

          
        </Box>
      </Modal>
     <div>
        <div className='first-child-container'>
            <h3>Done</h3>
            <MoreHorizIcon/>
        </div>

       {frstStates.map((ele,ind)=>{
            return  (
                <div className='second-child-container'>
                <hr className='hr-tag' style={{ backgroundColor: generateRandomColor() }}/>
                <p>{ele.projectName}</p>
                 <div className='icon-container'>
              <SubjectIcon/>
              <ChatBubbleOutlineIcon/>
                 </div>
                </div>
            )
       })}


        <div className='third-child-container' onClick={handleOpen}>
        <AddIcon/>
        <p>Add a card</p>
        </div>
 
        <div>

        </div>
      
     </div>
     </div>
    </div>
  )
}

export default Home
