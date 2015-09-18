## Puppet

### Install
`npm install --save react-puppet`

### Demo
`npm run dev` then visit http://127.0.0.1:3000

### Description
React puppet lets you update a React Element nested in a render function without
re-rendering the owner component.

### Why ?
When you have a component with a big render function, it may be bothering that
you have to re-render the whole component just to change a prop on an element
sitting right in the middle of its render function.

Normally, you shouldn't do that. That's not the React way. Do not use this if
you don't understand its purpose !

### Usage
```js
import React from 'react';

import puppet from '../src/puppet';

import Container from './Container';
import puppetBadge from './Badge';

const Badge = puppet(puppetBadge);
const Div = puppet('div');

class App extends React.Component {
  handleClick() {
    // Badge will update its prop test and will be re-rendered.
    this.refs.Badge.setState({ test: true });
    // div will update its prop style and will be re-rendered.
    this.refs.div.setState({ style: { color: 'red' } });
  }

  render() {
    return (
      <div>
        <button onClick={ ::this.handleClick }>Click me</button>
        <Badge title='test' ref='Badge'/>
        <Div ref='div'>
          Hello
        </Div>
      </div>
    );
  }
}
```
