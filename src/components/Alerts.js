import React from "react"; 
import "../App.css";
import { alertData } from '../data.js'; 
import { Card, CardDeck, Accordion } from "react-bootstrap";

// generating a card for each data point 
// using its index as a unique identifier 
const renderCard = (card, index) => {
  //if evidence string is empty
  //return message sayin no evidence found 
  if(card.evidence == '') {
    card.evidence = "No Evidence Found"
  }

  return (

    // using bootstrap card to display all the info  
    <Card key={index} className="card" border="dark">
      {/* adding name of alert, severity level, and application */}
      <Card.Body>
        <Card.Title>{card.alert}</Card.Title>
        <Card.Subtitle>Application: {card.application}</Card.Subtitle>
        <Card.Subtitle className="card-body text-danger">Severity Level: {card.severity_level}</Card.Subtitle>
      </Card.Body>

      {/* making the dropdown boxes for the various information */}
      <Accordion className="accordion">
        <Card >
          <Card.Header>
            <Accordion.Toggle as={Card.Header} variant="link" eventKey="0" className="accord-desc">
              Description
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body className="desc-info">{card.description}</Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle as={Card.Header} variant="link" eventKey="1" className="accord-sol">
              Solution
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body className="sol-info">{card.solution}</Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle as={Card.Header} variant="link" eventKey="2" className="accord-evidence">
              Evidence
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body className="evidence">{card.evidence}</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Card>
  );
};


// returning all the cards 
//calling data and applying map function to each data point to create each card
export const Alerts = () => {
  return <div className="grid"><CardDeck>{alertData.map(renderCard)}</CardDeck></div>;
}; 



export default Alerts; 