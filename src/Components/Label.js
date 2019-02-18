import React from 'react';
import {Row, Col, Jumbotron} from 'reactstrap';

export default()=>{
    return(
        <div>
            <Row>
                <Col xs='12'>
                    <Jumbotron className='text-center'>
                        <h1 className='display-5'>INMUEBLES RECIENTES</h1>
                        <p className='lead'>Nosotros logramos que comprar sea un proceso ágil y profesional. </p>
                    </Jumbotron>
                </Col>
            </Row>
        </div>
    )
}