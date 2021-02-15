// setState is used to changes to the component state and 
// tells React that this component and its children need 
// to be re-rendered with the updated state  const [value, setValue] = setState(initialValue) 

// useEffect simulates the Reacts class-based components Lifecycle methods componentDidMount, componentDidUpdate and componentWillUnmount
// useEffect tells React that a component needs to do something after render
// useEffect(() => {
//  Update the document title using the browser API
//     document.example = `You clicked ${count} times`;
//   });


import React, {useState, useEffect} from 'react';
//bootstrap imports
import { Row, Col } from "react-bootstrap";
//axios is used make http requests to external resources
import axios from "axios"
//user imports
import Products from "../components/Products";
//dummy data to map through
import products from "../products"

const HomePage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts(){
            const {data} = await axios.get('/api/products');
            setProducts(data);
        }     
        fetchProducts()
    }, [])
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
