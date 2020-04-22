import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Col } from 'reactstrap';
import photoCard from "../assets/photos/photoCard.png";

const CardList = ({details}) => {
  return (
    <Col xs="12" s="6" md="4">
      <Card>
        <CardImg top width="100%" src={photoCard} alt="{details.name}" />
        <CardBody id={details.id}>
          <CardTitle>{details.name}</CardTitle>
          <CardSubtitle>AKA: {details.stageName}</CardSubtitle>
          <br/>
          <CardText>Position: {details.position}</CardText>
          <CardText>Power: {details.power}</CardText>
          <CardText>Instagram @:
              <a href={`https://www.instagram.com/${details.insta}`}>
              {details.insta}</a> </CardText>  
              <Button>Edit Info</Button>      
        </CardBody>
      </Card>
    </Col>
  );
};

export default CardList;