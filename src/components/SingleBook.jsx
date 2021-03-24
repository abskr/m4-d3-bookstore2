import { Card, Button } from "react-bootstrap";
import EllipsisText from "react-ellipsis-text";

const SingleBook = (props) => {
  return (
    <Card>
      <Card.Img variant="top" src={props.book.img} height="300px" />
      <Card.Body>
        <Card.Title>{props.book.title.slice(0,15)} ...</Card.Title>
        <Card.Text>{props.book.price}</Card.Text>
        <Button variant="success">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
