import * as React from 'react';

import { Header } from './header/index';
import { Footer } from './footer/index';


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
        
        if ( isNaN(+value) ) return;
        
        this.setState({value});
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
                <div style={{display:'flex'}}>
                    <Header value={ value } handleChangeValue={ this.handleChangeValue }/>
                    <button onClick={this.handleChangeValues}>Сохранить значеие</button>
                </div>
                <Footer values={ values } handleDeleteValues={ this.handleDeleteValues }/>
            </div>
        )
    }
}