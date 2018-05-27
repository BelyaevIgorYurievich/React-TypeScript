import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import materialHOC from 'Helper/material-ui-hoc'

type FooterValue = {
    id: string;
    value: string;
  };

interface FooterProps {
    tasks: FooterValue[];
    handleDeleteTask: (id:string) => any;
}

const Footer = (props: FooterProps) => {
    
    if ( !props.tasks.length ) return null;

    return(
        <div>
            {
                props.tasks.map(({ value, id }) => {
                    return(
                        <div key={id} style={{display:'flex'}}>
                            <div>{value}</div>
                            <RaisedButton 
                                onClick={props.handleDeleteTask(id)}
                                label="Удалить запись" 
                            />
                        </div>
                    ) 
                    
                })
            }
        </div>
    )
} 

export default materialHOC(Footer);