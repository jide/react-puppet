/*global document:false*/
import React from 'react';

import puppet from '../src/puppet';

import Container from './Container';
import puppetBadge from './Badge';

const Badge = puppet(puppetBadge);
const Div = puppet('div');

class App extends React.Component {
  handleClick() {
    this.refs.Badge.setState({ test: true });
    this.refs.div.setState({ style: { color: 'red' } });
  }

  render() {
    return (
      <Container>
        <button onClick={ ::this.handleClick }>Click me</button>
        <Badge title='test' ref='Badge'/>
        <Div ref='div'>
          Hello
        </Div>
      </Container>
    );
  }
}

const content = document.getElementById('content');

ReactDOM.render(<App/>, content);
