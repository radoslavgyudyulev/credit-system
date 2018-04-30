import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class CreditBar extends Component {
    render(props) {
        return (
            <div>
            <MuiThemeProvider>
            <label>{this.props.label}</label>
            <TextField
            name={this.props.name}
            onChange={this.props.getName}
            hintText={this.props.label}
            floatingLabelText={this.props.label}
            fullWidth={true}
            /><br />
            </MuiThemeProvider>    
            </div>
        )
    }
}
