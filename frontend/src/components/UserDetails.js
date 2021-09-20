import React from 'react';
import { Card, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './common.css';
import { IMAGE_ONERROR } from '../environment';

//Usage of Bootstrap Style
const UserDetails =  ({ user }) => {
  const userCardBody = (<>
  <Card.Body>
    <Image className="mb-3" src={user ? user.picture : null} onError={IMAGE_ONERROR} roundedCircle fluid alt="User profile"/>
    <Card.Title>
      {user ? user.name : null}
    </Card.Title>
    <Card.Text>
      Age: {user ? user.age : null}
    </Card.Text>
    <Card.Text>
      Hobbies: {user ? user.hobbies : null}
    </Card.Text>
    <Card.Text>
      Department: {user ? user.department : null}
    </Card.Text>
  </Card.Body>
  </>);

  const nullUserCardBody = (<>
  <Card.Body>
    <Card.Text>
      Select or add a random user.
    </Card.Text>
  </Card.Body>
  </>);

  return (
    <Card className="GeneralBox"> 
      {user ? userCardBody : nullUserCardBody }
    </Card>
  );
}

export default UserDetails;