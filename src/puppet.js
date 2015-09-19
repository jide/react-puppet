import React, { Component } from 'react';
import shallowEqual from 'react/lib/shallowEqual';

const getDisplayName = Component => typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Component';

export default WrappedComponent => {
  const displayName = `puppet(${getDisplayName(WrappedComponent)})`;

  return class extends Component {
    static displayName = displayName;

    constructor(...args) {
      super(...args);

      this.state = {
        props: {}
      };
    }

    setProps(nextProps = {}) {
      this.setState({ props: { ...this.props, ...nextProps } });
    }

    replaceProps(nextProps = {}) {
      this.setState({ props: nextProps });
    }

    shouldComponentUpdate(nextProps, nextState) {
      return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state.props, nextState.props);
    }

    render() {
      return <WrappedComponent { ...this.props } { ...this.state.props }/>;
    }
  };
};
