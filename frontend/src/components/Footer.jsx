import React from 'react';
//bootstrap imports
import {Container, Row, Col} from "react-bootstrap"

const Footer = () => {
    return (
        
            <footer>
                <Container>
                    <Row>
                        <Col className="py-3 text-center">
                            Copyright &copy; SomethingShop
                        </Col>
                    </Row>
                </Container>
            </footer>
        
    )
}

export default Footer
