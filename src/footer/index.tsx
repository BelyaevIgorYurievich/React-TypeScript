import * as React from 'react';

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
                            <button onClick={props.handleDeleteValues(id)}>Удалить запись</button>
                        </div>
                    ) 
                    
                })
            }
        </div>
    )
} 