
import React from "react";
import { Button, Card, Row, Col } from 'react-bootstrap';
import { FaPlus, FaRupeeSign } from 'react-icons/fa';
import { BiFoodTag } from 'react-icons/bi';


const List = ({ products }) => {


    return (
        <div>
            {products.map(product => (

                <Card className="productCard" key={product.id} style={{ position: "relative", width: '29rem' }}>
                    <Card.Body>
                        <Row>
                            <Col>
                                <Card.Text><BiFoodTag />{product.category}</Card.Text>

                                <Card.Title>{product.name}</Card.Title>

                                <Card.Text>
                                    <FaRupeeSign /> {product.price}
                                </Card.Text>
                                <Card.Subtitle className="mb-2 text-muted">{product.description}</Card.Subtitle>

                            </Col>
                            <Col>


                                <Button variant="flat" size="xxl" onClick={() => { console.log("This is : " + product.name); }}>
                                    <Card.Img responsive variant="right" src={product.cloudinaryImageId} />

                                    Add
                                    <FaPlus />
                                </Button>{''}

                                <Card.Text className="text-center mb-2 text-muted">
                                    Customisable
                                </Card.Text>

                            </Col>
                        </Row>

                    </Card.Body>


                </Card>
            ))}
        </div >
    )
}

export default List