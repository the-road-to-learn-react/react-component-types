import React from 'react';

const withLocalStorage = localStorageKey => Component =>
  class WithLocalStorage extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        [localStorageKey]: localStorage.getItem(localStorageKey),
      };
    }

    setLocalStorage = value => {
      localStorage.setItem(localStorageKey, value);
    };

    render() {
      return (
        <Component
          {...this.state}
          {...this.props}
          setLocalStorage={this.setLocalStorage}
        />
      );
    }
  };

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: this.props['myValueInLocalStorage'] || '' };
  }

  componentDidUpdate() {
    this.props.setLocalStorage(this.state.value);
  }

  onChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>
          Hello React ES6 Class Component with Higher-Order Component!
        </h1>

        <input
          value={this.state.value}
          type="text"
          onChange={this.onChange}
        />

        <p>{this.state.value}</p>
      </div>
    );
  }
}

export default withLocalStorage('myValueInLocalStorage')(App);
