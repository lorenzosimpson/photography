import React, { useState } from 'react';
import { Form, Row, Col, FormGroup, Input, Jumbotron, Container, Button } from 'reactstrap';

const Contact = (props) => {
    const [contactMessage, setContactMessage] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = e => {
        setContactMessage({
            ...contactMessage,
            [e.target.name]: e.target.value
        })
        console.log(contactMessage)
    }
    const handleSubmit  = e => {
        e.preventDefault()
        console.log(contactMessage)
    }

    const clearForm = e => {
        e.preventDefault()
        setContactMessage({
            name:'',
            email: '',
            message:''
        })
    }
    
  return (
      <div className='contact'>
        <Jumbotron fluid>
            <Container fluid>
             <h1 className="display-3">Contact me.</h1>
             <p className="lead">Let's work together.</p>
            </Container>
        </Jumbotron>

            <Form>
                <Row form>
                <Col md={6}>
                <FormGroup>
                    <Input type="name" name="name" id="name" placeholder="Name" value={contactMessage.name} onChange={handleChange}/>
                </FormGroup>
                </Col>
                <Col md={6}>
                <FormGroup>
                    <Input type="email" name="email" id="exampleEmail" placeholder="Email" value={contactMessage.email} onChange={handleChange}/>
                </FormGroup>
                </Col>
            </Row>
        
            <FormGroup>
                <Input type="textarea" name="message" id="message" placeholder='Message' value={contactMessage.message} onChange={handleChange}/>
            </FormGroup>
            
            <Button onClick={handleSubmit} color="dark" size="lg">Send Message</Button>{' '}
            <Button onClick={clearForm} color="secondary" size="lg">Clear Form</Button>


            </Form>

      </div>
    
  );
}

export default Contact;
