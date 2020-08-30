import React from 'react';
import { Card, Button} from "react-bootstrap";
import "../../styles/tools/clients.scss";

const ClientCard = ({clientName="", company="", address="", email="", contact="", redirect }) => {
  return (
    <div className="p-1 m-1">
        <Card className="w-100">
            <Card.Img variant="top" className="border-bottom" src="" />
            <Card.Body>
                <Card.Title>{clientName}</Card.Title>
                <Card.Text>
                    {company}<br />
                    {address}<br />
                    <a href={`mailto:${email}`}>{email}</a><br />
                    <a href={`tel:${contact}`}>{contact}</a>
                </Card.Text>
                <Button variant="primary" onClick={redirect}>View</Button>

                <Button variant="primary button-spacing" >Edit</Button>
            </Card.Body>
        </Card>
    </div>
  )
}

export default ClientCard;