import React from 'react';

export default class Container extends React.Component {
  render() {
    console.log('Container render');
    return (
      <div>
        { this.props.children }
      </div>
    );
  }
}
