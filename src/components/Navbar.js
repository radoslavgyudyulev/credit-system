import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Row, Col } from 'react-bootstrap'
import { Button } from 'react-bootstrap';

const Navbar = () => {
    return (
        <div>
        <ul>
        <Grid>
            <Row className="show-grid">
            <Col md={6} mdPush={6}>
            <Link to="/credit"><Button color="secondary" bsSize="large" block>Кредит до 2000 лв</Button></Link>
            </Col>
            <Col md={6} mdPull={6}>
            <Link to="/bigcredit"><Button color="secondary" bsSize="large" block>Кредит до 50 000 лв</Button></Link>
            </Col>
            </Row>
            </Grid>
        </ul>
        </div>
    )
}

export default Navbar