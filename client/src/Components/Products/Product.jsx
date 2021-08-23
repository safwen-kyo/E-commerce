import React from "react";
import { deleteProduct } from "../../JS/actions/products";
import { Card , ListGroup, ListGroupItem} from "react-bootstrap";
//import { Card, Icon, Image } from "semantic-ui-react";
import "./Product.css";
const Product = ({ product }) => {
  return (
    /*<div>
      <Card
        className="procards"
        a
        target="_blank"
        rel="noopener noreferrer"
        href={product.linkproducts}
      >
        <Image src="{product.images}" wrapped ui={false} />
        <Card.Content>
          <Card.Header>{product.names} </Card.Header>
          <Card.Meta>{product.siteofficiel} </Card.Meta>
          <Card.Description>{product.desponiblitys}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="plus cart" />
            {product.prices}
          </a>
        </Card.Content>
      </Card>
    </div>*/
    <Card style={{ width: '18rem' }}>
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
