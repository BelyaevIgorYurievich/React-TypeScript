import * as React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { MuiThemeProvider, lightBaseTheme } from "material-ui/styles";
import RaisedButton from 'material-ui/RaisedButton';
import * as Material from 'material-ui';

import { Header } from './header/index';
import { Footer } from './footer/index';

const lightMuiTheme = getMuiTheme(lightBaseTheme);

export default class App extends React.Component {

    state = {
        value: '',
        values: []
    };

    createId = () : string => {
        return Math.random().toString(36).substr(2, 9);
    }

    handleChangeValue = (event: any) : void => {
        const { value } = event.target;
        
        this.setState({ value });
    }

    handleChangeValues = () : void => {
        const { values, value } = this.state;
        const _value = {
            value: value,
            id: this.createId()
        }
        
        this.setState({
            value: '',
            values: [...values, _value]
        });
    }
    
    handleDeleteValues = (deleteId) => () : void => {
        const { values } = this.state;

        const _values = values.filter(({id}) => {
            return deleteId !== id;
        })

        this.setState({values: _values})
    }

    render() {

        const { value, values } = this.state;

        return (
            <div>
                
                <Header value={ value } handleChangeValue={ this.handleChangeValue }/>
                <MuiThemeProvider muiTheme={lightMuiTheme}>
                    <Material.FlatButton 
                        onClick={this.handleChangeValues}
                    >
                        Сохранить значеие
                    </Material.FlatButton>
                </MuiThemeProvider>
            
                <Footer values={ values } handleDeleteValues={ this.handleDeleteValues }/>
            </div>
        )
    }
}