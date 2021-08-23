import React from "react";
import { deleteProduct } from "../../JS/actions/products";
import { Card , ListGroup, ListGroupItem} from "react-bootstrap";
import "./Product.css";

const Product = ({ product }) => {
  
  return (
   
    <Card className="procards" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={product.images} />
  <Card.Body>
    <Card.Title>{product.names}</Card.Title>
    <Card.Text>
    {product.descriptions}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>{product.desponiblitys}</ListGroupItem>
    <ListGroupItem><Card.Img variant="top" src={product.logoofficiel}/></ListGroupItem>
    <ListGroupItem>{product.prices}</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link target="_blank" href={product.siteofficiel}>Site Officiel</Card.Link>
    <Card.Link href="">Another Link</Card.Link>
  </Card.Body>
</Card>
  );
};

export default Product;
