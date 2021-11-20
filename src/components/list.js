
import React from "react";
import { Button, Card } from 'react-bootstrap';
import { FaPlus, FaRupeeSign } from 'react-icons/fa';
import { BiFoodTag } from 'react-icons/bi';


const List = ({ products }) => {

    return (
        <div>
            {products.map(product => (
                <Card className="productCard" key={product.id} style={{ width: '18rem' }}>
                    <Card.Body>
                        <div>
                            <Card.Title><BiFoodTag />{product.name}</Card.Title>
                            <Card.Text>
                                <FaRupeeSign /> {product.price}
                            </Card.Text>
                            <Card.Subtitle className="mb-2 text-muted">{product.price}</Card.Subtitle>
                            {/* <Button variant="flat" size="xxl" onSubmit={console.log(product.price)}> */}

                        </div>
                        <div>
                            <Button variant="flat" size="xxl" onClick={() => { console.log("This is : " + product.name); }}>
                                Add
                                <FaPlus />
                            </Button>{''}
                            <Card.Img variant="top" src={product.cloudinaryImageId} />
                            <Card.Text>
                                Customisable
                            </Card.Text>

                        </div>
                    </Card.Body>
                </Card>
            ))}
        </div >
    )
}

export default List