import { React, useState } from 'react';
import { Button, Form, Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './common.css'
import { DEFAULT_PICTURE, IMAGE_ONERROR } from '../environment';
import { POST_USER } from '../routes';

const UserForm =  ({userProfile}) => {

    const [newName, setName] = useState("");
    const [newAge, setAge] = useState(-1);
    const [newHobbies, setHobbies] = useState("");
    const [newDepartment, setDepartment] = useState("");
    const [url, setUrl] = useState(userProfile ?? DEFAULT_PICTURE);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            name: newName,
            age: newAge,
            picture: url,
            hobbies: newHobbies,
            department: newDepartment,
        };

        POST_USER(newUser);
    }

    return (
        <Form className="GeneralBox" onSubmit={e => handleSubmit(e)}>
            <Form.Label> 
                Create your own user.
            </Form.Label>
            <Image className="mb-3" src={url} roundedCircle fluid onError={ IMAGE_ONERROR } />
            <Form.Group className="mb-3" controlId="userName">
                <Form.Control type="text" placeholder="Name" onChange={e => setName(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="userAge">
                <Form.Control type="number" placeholder="Age" onChange={e => setAge(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="userHobbies" >
                <Form.Control type="text" placeholder="Hobbies" onChange={e => setHobbies(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="userDepartment" >
                <Form.Control type="text" placeholder="Department" onChange={e => setDepartment(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="userPicture">
                <Form.Control type="text" placeholder="Url of profile picture" onChange={e => setUrl(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            <Form.Label>
                name = {newName}, 
                age = {newAge}, 
                pic = {url},
                hobbies = {newHobbies},
                dept = {newDepartment}
            </Form.Label>
        </Form>
    );
}

export default UserForm;