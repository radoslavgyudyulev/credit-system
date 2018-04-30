import React, { Component } from 'react'
// import Dialog from './Dialog'
import { Grid, Row, Col } from 'react-bootstrap'
import CreditBar from './CreditBar'
import Slider from 'material-ui/Slider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

import './Credit.css'

const style = {
    margin: 12,
  };

 

export default class Credit extends Component {

    state = {
        fistName: '',
        lastname: '',
        amount: 0,
        months: 0,
        secondSlider: 0,
    }

    getName(e) {
     this.setState({[e.target.name]: e.target.value})
    }


   

    handleSecondSlider = (event, value) => {
        this.setState({
            amount: value
        });
   }

   handleFirstSlider = (event, value) => {
        this.setState({months: value})
   }


    render() {
       
        const lihva = (this.state.amount / 100) * 5
        const monthlyPayment = Math.floor(this.state.amount / this.state.months) + lihva
        console.log(lihva)
        
        return (
        <div>
        <MuiThemeProvider>
            <div className="credit-wrapper">
            <h1 className="credit-main">Кредит до 2000 лв</h1>
            <Grid>
            <Row className="show-grid">
            <Col md={6} mdPush={6}>
            <label>Желана сума</label>
            <Slider
            name="months"
            min={0}
            max={2000}
            step={50}
            onChange={this.handleSecondSlider.bind(this)}
            />
            <p>
            {this.state.amount ?  <span>{this.state.amount} лева</span> : ''}
            </p> 
            </Col>
            <Col md={6} mdPull={6}>
            <label>Месеци</label>
            <Slider
            name="months"
            min={0}
            max={12}
            step={1}
            onChange={this.handleFirstSlider.bind(this)}
            />
            <p>
            {this.state.months ?  <span>{this.state.months} месеца</span> : ''}
            </p> 
            </Col>
            </Row>
            </Grid>
            <Grid>
            <Row className="show-grid">
            <Col md={6} mdPush={6}>
            <CreditBar name="firstName" getName={this.getName.bind(this)} label="Име"/>
            </Col>
            <Col md={6} mdPull={6}>
            <CreditBar name="lastName" getName={this.getName.bind(this)} label="Фамилия"/>
            </Col>
            </Row>
            </Grid>
            <div className="credit-results">
               {this.state.firstName ?  <h3>Име: {this.state.firstName}   <Progress style={{width: '30px', height: '30px'}} type="circle" percent={100} status="success" /></h3> : ''}
               {this.state.lastName ?  <h3>Фамилия: {this.state.lastName}    <Progress style={{width: '30px', height: '30px'}} type="circle" percent={100} status="success" /></h3> : ''}
               {this.state.amount ?  <h3>Желана сума: {this.state.amount} лева    <Progress style={{width: '30px', height: '30px'}} type="circle" percent={100} status="success" /></h3> : ''}
               {this.state.months ?  <h3>Месеци: {this.state.months} месеца    <Progress style={{width: '30px', height: '30px'}} type="circle" percent={100} status="success" /></h3> : ''}
               {this.state.months ? <h3>Вноска на месец: {monthlyPayment} лева   <Progress style={{width: '30px', height: '30px'}} type="circle" percent={100} status="success" /></h3> : ''}
               <RaisedButton label="Заяви сега" primary={true} style={style} />
            </div>
            </div>  
            <div>
            </div>
            </MuiThemeProvider>
            </div>
        )
    }
}
