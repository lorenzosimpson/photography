import React, { useState } from 'react';
import { Form, Row, Col, FormGroup, Input, Jumbotron, Container } from 'reactstrap';

const Contact = (props) => {
    const [contactMessage, setContactMessage] = useState({})
    const handleChange = e => {
        e.preventDefault()
        setContactMessage({
            ...contactMessage,
            [e.target.name]: e.target.value
        })
        console.log(contactMessage)
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
                    <Input type="name" name="name" id="name" placeholder="Name" onChange={handleChange}/>
                </FormGroup>
                </Col>
                <Col md={6}>
                <FormGroup>
                    <Input type="email" name="email" id="exampleEmail" placeholder="Email" onChange={handleChange}/>
                </FormGroup>
                </Col>
            </Row>
        
            <FormGroup>
                <Input type="textarea" name="message" id="message" placeholder='Message'onChange={handleChange}/>
            </FormGroup>

            </Form>

      </div>
    
  );
}

export default Contact;
