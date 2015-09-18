import React, { Component } from 'react';
import shallowEqual from 'react/lib/shallowEqual';

const getDisplayName = Component => typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Component';

export default WrappedComponent => {
  const displayName = `puppet(${getDisplayName(WrappedComponent)})`;

  return class extends Component {
    static displayName = displayName;

    shouldComponentUpdate(nextProps, nextState) {
      return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
    }

    render() {
      return <WrappedComponent { ...this.props } { ...this.state }/>;
    }
  };
};
