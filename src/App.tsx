import * as React from 'react';

import { Header } from './header/index';
import { Footer } from './footer/index';
import './style.less';

export default class App extends React.Component {

    state = {
        value: '',
        description:'',
        values: []
    };

    createId = () : string => {
        return Math.random().toString(36).substr(2, 9);
    }

    handleChangeValue = (event: any) : void => {
        const { value } = event.target;
        
        this.setState({ value });
    }
    //переминоать функцию
    handleChangeValues = () : void => {
        const { values, value } = this.state;
        const _value = {
            value: value,
            id: this.createId()
        }
        
        if ( !value ) return;

        this.setState({
            value: '',
            description: '',
            values: [...values, _value]
        });
    }
    
    handleChangeDescription = (event: any) : void => {
        const { value } = event.target;
        
        this.setState({ description: value });
    }

    handleDeleteValues = (deleteId) => () : void => {
        const { values } = this.state;

        const _values = values.filter(({id}) => {
            return deleteId !== id;
        })

        this.setState({values: _values})
    }

    render() {

        const { value, values, description } = this.state;

        return (
            <div className='block-create-tasks'>    
                <Header 
                    value={ value } 
                    description={description} 
                    handleChangeDescription={this.handleChangeDescription}
                    handleChangeValues={this.handleChangeValues} 
                    handleChangeValue={ this.handleChangeValue }
                />
                <Footer values={ values } handleDeleteValues={ this.handleDeleteValues }/>
            </div>
        )
    }
}