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
    handleChangeValue: (event: {})=>void;
}

export const Header = (props:IAppProps) => {

    return (
        <MuiThemeProvider muiTheme={lightMuiTheme}>
            <Material.TextField
              value={ props.value }
              onChange={ props.handleChangeValue }
            />
            <Material.TextField
          multiLine={true}
          rows={2}
          rowsMax={4}
        />
        </MuiThemeProvider>
    )
} 
