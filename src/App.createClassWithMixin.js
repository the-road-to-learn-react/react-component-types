import React from 'react';

// in the past, createClass() was available via the default React library
import createClass from 'create-react-class';
React.createClass = createClass;

function getLocalStorageMixin(localStorageKey) {
  return {
    getInitialState: function() {
      return { value: localStorage.getItem(localStorageKey) || '' };
    },

    setLocalStorage: function(value) {
      localStorage.setItem(localStorageKey, value);
    },
  };
}

var App = React.createClass({
  mixins: [getLocalStorageMixin('myValueInLocalStorage')],

  componentDidUpdate: function() {
    this.setLocalStorage(this.state.value);
  },

  onChange: function(event) {
    this.setState({ value: event.target.value });
  },

  render: function() {
    return (
      <div>
        <h1>Hello React "createClass" Component with Mixin!</h1>

        <input
          value={this.state.value}
          type="text"
          onChange={this.onChange}
        />

        <p>{this.state.value}</p>
      </div>
    );
  },
});

export default App;
