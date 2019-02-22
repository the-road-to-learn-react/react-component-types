import React from 'react';

// createClass() was available via the normal React library in the past
import createClass from 'create-react-class';

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

var App = createClass({
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
