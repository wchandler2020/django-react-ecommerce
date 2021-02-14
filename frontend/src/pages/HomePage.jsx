import React from 'react';
//bootstrap imports
import { Row, Col } from "react-bootstrap"
//user imports
import Products from "../components/Products"

//dummy data to map through
import products from "../products"

const HomePage = () => {
    return (
        <div>
            <h1>Lastest Product</h1>
            <Row>
                {products.map(product => (
                    //on small screens take up all 12 cols, on med take up 6, on large take up 4 cols, on extra large take up 3 cols 
                    <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                        <Products product={product}/>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default HomePage
