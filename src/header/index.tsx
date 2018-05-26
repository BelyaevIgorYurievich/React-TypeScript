import * as React from 'react';
import * as Material from 'material-ui';
import { MuiThemeProvider, lightBaseTheme } from 'material-ui/styles';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

//
// TODO Выести в отдельный модуть! 
// Неохоимо переиспользовать!
//
const lightMuiTheme = getMuiTheme(lightBaseTheme);

interface IAppProps {
    value: string;
    description: string;
    handleChangeValue: (event: {}) => void;
    handleChangeValues: (event: {}) => void; 
    handleChangeDescription: (event: {}) => void;
}

export const Header = (props:IAppProps) => {

    return (
        <MuiThemeProvider muiTheme={lightMuiTheme}>
            <Material.TextField
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
                    onClick={props.handleChangeValues}
                >
                    Сохранить
                </Material.FlatButton>
            </div>
        </MuiThemeProvider>
    )
} 
