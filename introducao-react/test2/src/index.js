import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button';
import './styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clock: 3000,
      copo: 'suco',
    };
  }
  componentDidMount() {
    window.setTimeout(() => {
      this.setState({
        copo: 'água',
      });
    }, 3000);
  }
  alterarCopo = () => {
    this.setState({
      copo: 'refri',
    });
  };
  render() {
    const { clock, copo } = this.state;
    return (
      <div>
        <h1>{clock}</h1>
        <Button action={() => this.alterarCopo()} name={copo}></Button>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
