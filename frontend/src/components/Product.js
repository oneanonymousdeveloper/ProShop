import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
        <Link to={`/${product._id}`}>
    
        <Card.Img src={product.image} />
        <Card.Body>
          <Card.Title>
            <strong>{product.name}</strong>
          </Card.Title>
          <Card.Text as="div">
            <div className="my-3">
              <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'}/>
            </div>
          </Card.Text>
          <Card.Text as='h3'>
            ${[product.price]}
          </Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default Product;
