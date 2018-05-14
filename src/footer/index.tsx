import * as React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { MuiThemeProvider, lightBaseTheme } from "material-ui/styles";
import RaisedButton from 'material-ui/RaisedButton';

const lightMuiTheme = getMuiTheme(lightBaseTheme);

type FooterValue = {
    id: string;
    value: string;
  };

interface FooterProps {
    values: FooterValue[];
    handleDeleteValues: (id:string) => any;
}

export const Footer = (props: FooterProps) => {

    if ( !props.values.length ) return null;

    return(
        <div>
            {
                props.values.map(({value, id}) => {
                    return(
                        <div key={id} style={{display:'flex'}}>
                            <div>{value}</div>

                            <MuiThemeProvider muiTheme={lightMuiTheme}>
                                <RaisedButton 
                                    onClick={props.handleDeleteValues(id)}
                                    label="Удалить запись" 
                                />
                            </MuiThemeProvider>
                        </div>
                    ) 
                    
                })
            }
        </div>
    )
} 