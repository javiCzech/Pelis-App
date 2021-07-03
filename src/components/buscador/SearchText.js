import React from 'react'
import { useState } from 'react'
import { Form } from 'react-bootstrap'

export const SearchText = ({setCategories}) => {
    const [inputvalue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        //console.log(e.target.value)
        setInputValue(e.target.value)
        
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (inputvalue.trim().length > 2){
            setCategories(cats => [inputvalue]);
            setInputValue('');
        }
    }
    return (
        <div className="container">
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Movie/Tv Show</Form.Label>
            <Form.Control type="text" placeholder="Cruella"
            value={inputvalue}
            onChange={handleInputChange}
             />
            <Form.Text className="text-muted">
            Search your favorite Movie/Tv Show
            </Form.Text>
         </Form.Group>
         </Form>
        </div>
    )
}
