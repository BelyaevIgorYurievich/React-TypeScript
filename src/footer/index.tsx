import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import materialHOC from 'Helper/material-ui-hoc';

import './style.less';

type FooterValue = {
    id: string;
    value: string;
    description?: string;
};

interface FooterProps {
    tasks: FooterValue[];
    handleDeleteTask: (id:string) => any;
}

const Footer = (props: FooterProps) => {
    
    if ( !props.tasks.length ) return null;

    return(
        <>
            {
                props.tasks.map(({ value, id, description }) => {
                    return(
                        <div key={id} className='task'>
                            <div className='text-block'>
                                <p className='task-name'>Название задачи: { value }</p>
                                { description ?
                                    <p className='task-description'>{ description }</p>
                                    :
                                    <p className='task-description missing'>Описание отсутствует</p>
                                } 
                            </div>
                            <RaisedButton 
                                onClick={props.handleDeleteTask(id)}
                                label="Удалить запись" 
                            />
                        </div>
                    ) 
                    
                })
            }
        </>
    )
} 

export default materialHOC(Footer);