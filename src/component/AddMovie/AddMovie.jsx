import React, {useState} from 'react'
import './add-movie.css'
import Modal from 'react-bootstrap/Modal'
import {  Form, Button, FormControl } from "react-bootstrap"
const AddMovie = ({getInput}) => {
    const [show, setShow] = useState(false);
    const [titleInput, setTitleInput] = useState('');
    const [descriptionInput, setDescriptionInput] = useState('');
    const [urlInput, setUrlInput] = useState('');
    const [rateInput, setRateInput] = useState('');
    // const handleTitleInput = (e)=>{
    //     setTitleInput(e.target.value)
        
    // };
    // const handleDescriptionInput = (e)=>{
    //   setDescriptionInput(e.target.value)
    // };
    // const handleUrlInput = (e)=>{
    //   setUrlInput(e.target.value)
    // };
    // const handleRateInput = (e)=>{
    //   setRateInput(e.target.value)
    // };
    const saveMovie = () =>{
      getInput({
        title: titleInput,
        description : descriptionInput,
        posterUrl: urlInput,
        rate: rateInput,
      })
      handleClose()
    };
    // console.log(title)
    // console.log(description)
    // console.log(url)
    // console.log(rate)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
         <div>
 <Button className="add-btn" variant="primary" onClick={handleShow}>
        Add A Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add A Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form  className='input-form'>
                <FormControl className="input-field" type="text" placeholder="Title" className="mr-sm-2" onChange={(e) => setTitleInput(e.target.value)} />
                <FormControl className="input-field" type="text" placeholder="Description" className="mr-sm-2" onChange={(e) => setDescriptionInput(e.target.value)} />
                <FormControl className="input-field" type="text" placeholder="Poster URL" className="mr-sm-2" onChange={(e) => setUrlInput(e.target.value)} />
                <FormControl className="input-field" type="text" placeholder="Rate" className="mr-sm-2" onChange={(e) => setRateInput(e.target.value)} />
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveMovie}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
      
    )
}

export default AddMovie
