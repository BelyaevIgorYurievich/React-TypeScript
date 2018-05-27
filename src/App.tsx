import * as React from 'react';

import * as helper from 'Helper/index';

import Header from './header/index';
import Footer from './footer/index';
import './style.less';

export default class App extends React.Component {

    state = {
        value: '',
        description:'',
        tasks: []
    };

    handleChangeValue = (event: any) : void => {
        const { value } = event.target;
        
        this.setState({ value });
    }

    handleChangeTask = () : void => {
        const { 
            tasks, 
            value, 
            description 
        } = this.state;
        
        const _value = {
            value,
            description,
            id: helper.createId()
        }
        
        if ( !value ) return;

        this.setState({
            value: '',
            description: '',
            tasks: [...tasks, _value]
        });
    }
    
    handleChangeDescription = (event: any) : void => {
        const { value } = event.target;
        
        this.setState({ description: value });
    }

    handleDeleteTask = (deleteId) => () : void => {
        const { tasks } = this.state;

        const _tasks = tasks.filter(({ id }) => {
            return deleteId !== id;
        })

        this.setState({ tasks: _tasks })
    }

    render() {

        const { value, tasks, description } = this.state;

        return (
            <div className='block-create-tasks'>    
                <Header 
                    value={ value } 
                    description={description} 
                    handleChangeDescription={this.handleChangeDescription}
                    handleChangeTask={this.handleChangeTask} 
                    handleChangeValue={ this.handleChangeValue }
                />
                <Footer tasks={ tasks } handleDeleteTask={ this.handleDeleteTask }/>
            </div>
        )
    }
}