import * as React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { MuiThemeProvider, lightBaseTheme } from 'material-ui/styles';
import RaisedButton from 'material-ui/RaisedButton';

const materialHOC = <P extends object>(Component: React.ComponentType<P>) => {
    const lightMuiTheme = getMuiTheme(lightBaseTheme);

    return class extends React.PureComponent<P> {
        render() {
            return (
                <MuiThemeProvider muiTheme={lightMuiTheme}>
                    <Component { ...this.props } />
                </MuiThemeProvider>
            )
        }
    }
}

export default materialHOC;