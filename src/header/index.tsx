import * as React from 'react';

interface IAppProps {
    value: string;
    handleChangeValue: (event: {})=>void;
}

export const Header = (props:IAppProps) =>{
    return (
        <input 
            value={ props.value }
            onChange={ props.handleChangeValue }
        />
    )
} 