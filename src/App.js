import React, { useState, useEffect } from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import PostForm from './PostForm'
import PostList from './PostList'


function App() {
    const [posts, setPosts] = useState([])
    useEffect(()=> {
      fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => setPosts(json))
    }, [])


  return (
    <Container>
      <Row className="justify-content-md-center" style= {{ marginTop: 60}}>
        <Col xs lg="12">
          <h1 style={{ textAlign: 'center' }}>Blog App</h1>
        </Col>
      </Row>
      <Row className="justify-content-md-center" style= {{ marginTop: 60}}>
        <Col xs lg="12">
          <PostForm />
        </Col>
      </Row>
      <Row className="justify-content-md-center" style= {{ marginTop: 60}}>
        <Col xs lg="12"> 
        <PostList posts ={posts}/>
        </Col>
      </Row>
    </Container>
  )
}

export default App
