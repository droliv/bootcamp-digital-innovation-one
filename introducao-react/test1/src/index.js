import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import Button from './components/Button';

function hello() {
  alert('Hello Daniele!');
}
function elementJSX() {
  return (
    <div className="teste">
      Daniele Oliveira - teste react{' '}
      <Button action={() => hello()} name="Click me" />
    </div>
  );
}
const App = () => {
  return (
    <div className="App">
      Hello World
      {elementJSX()}
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
