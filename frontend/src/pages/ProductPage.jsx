//React specific imports
import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import {Row, Col, Image, ListGroup, Button, Card} from "react-bootstrap";
import Ratings from "../components/Ratings";

//axios is used make http requests to external resources
import axios from "axios"

const ProductPage = ({match}) => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        async function fetchProducts(){
            const {data} = await axios.get(`/api/products/${match.params.id}`);
            setProduct(data);
        }     
        fetchProducts()
    }, [])
    return (
        <div>
            <Link to="/" className="btn btn-light my-3">Go Back</Link>
            <Row>
                <Col md={6}>
                    <Image src = {product.image} alt={product.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Ratings value= {product.rating} text={`${product.numReviews} reviews`} color={"#f8e825"}/>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: {product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price: </Col>
                                    <Col><strong>${product.price}</strong></Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Status: </Col>
                                    <Col>{product.countInStock > 0 ? "In Stock" : "Out of Stock"}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button className="btn btn-block" type="button" disabled = {product.countInStock == 0 ? true : false}>Add To Cart</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default ProductPage
