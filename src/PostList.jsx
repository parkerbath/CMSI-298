import React from 'react'
import {Card, Button, CardColumns } from 'react-bootstrap'

export default function PostList(props) {
    const { posts, deletePost, displayPostInModal } = props


    return (
    <div style={{paddingTop: 20}}>
<CardColumns>
    {posts && posts.map((post) => (
        <Card key={post.id}> 
            <Card.Body onClick= {() => displayPostInModal(post.id)}>
                <Card.Title>{post.title.toUpperCase()}</Card.Title>
                <Card.Text>{`${post.body.slice(0, 20)} ...}`}</Card.Text>
            </Card.Body>

            <Card.Footer style ={{ textAlign: 'right', padding: 5}}>
                <Button variant ="danger" onClick={() => deletePost(post.id)}>
                    Delete
                </Button>
            </Card.Footer>


        </Card>
      ))}
    </CardColumns>
    </div>
  )
} 
