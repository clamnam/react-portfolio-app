import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import GiphyViewer from './componenets/GiphyViewer';
import './assets/app.css'
const App = () => {
  return (
    <Container className='mt-5'>
      <Row>
        <Col>
          <GiphyViewer/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
