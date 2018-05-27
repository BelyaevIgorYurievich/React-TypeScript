import * as React from 'react';
import * as Material from 'material-ui';

import materialHOC from 'Helper/material-ui-hoc'

interface IAppProps {
    value: string;
    description: string;
    handleChangeValue: (event: {}) => void;
    handleChangeTask: (event: {}) => void; 
    handleChangeDescription: (event: {}) => void;
}

const Header = (props:IAppProps) => {

    return (
        <div>
            <Material.TextField
              autoFocus
              value={ props.value }
              onChange={ props.handleChangeValue }
              floatingLabelText='Название задания'
            />
            <div className='description'>
                <Material.TextField
                    multiLine={true}
                    value={ props.description }
                    rows={2}
                    rowsMax={4}
                    onChange={ props.handleChangeDescription }
                    floatingLabelText='Описание'
                />
                <Material.FlatButton 
                    onClick={props.handleChangeTask}
                >
                    Сохранить
                </Material.FlatButton>
            </div>
        </div>
    )
} 

export default materialHOC(Header);