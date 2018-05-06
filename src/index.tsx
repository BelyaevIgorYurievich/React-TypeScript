import * as React from 'react';
import { render } from 'react-dom';

interface IAppProps {
    title: string;
}

const App = (props: IAppProps) => <h1>{props.title}</h1>;

render(
    <App title="Hello, React!" />,
    document.getElementById('root')
);