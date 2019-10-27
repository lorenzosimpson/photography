import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Header = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Build your outdoor resume.</h1>
          <p className="lead">Log your trips. For potential clients, employers, or yourself.</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Header;
